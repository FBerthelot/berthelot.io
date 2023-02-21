import { allPeoplesMock, invitationsMock } from './sample.data'

const TEST_INVITE_ID = 'futursmaries'

export const getTheInvitation = async (SHEETDB_URL, inviteId) => {
  const invitations =
    inviteId === TEST_INVITE_ID
      ? invitationsMock
      : await fetch(SHEETDB_URL + '?sheet=Invitations').then((res) =>
          res.json()
        )

  const allPeoples =
    inviteId === TEST_INVITE_ID
      ? allPeoplesMock
      : await fetch(SHEETDB_URL + '?sheet=Liste des invités').then((res) =>
          res.json()
        )

  const rawInvitation = invitations.filter(
    (invitation) => invitation["Id de l'invitation"] === inviteId
  )?.[0]

  if (!rawInvitation) {
    return undefined
  }

  const people = [
    rawInvitation['Personne 1'],
    rawInvitation['Personne 2'],
    rawInvitation['Personne 3'],
    rawInvitation['Personne 4'],
    rawInvitation['Personne 5'],
  ].filter(Boolean)

  const plus1Invited = rawInvitation['Question sur +1'] === 'Oui'
  const plus1Name = rawInvitation['Nom du +1']
  const questionOnChildren = rawInvitation['Question sur Enfant'] === 'Oui'
  const children = people.filter((name) => {
    const matchingPeople = allPeoples.find((p) => p.Nom === name)
    return ['0 - 3 ans', '4 - 12 ans', '13 - 17 ans'].includes(
      matchingPeople?.["Tranche d'age"]
    )
  })

  return {
    id: rawInvitation["Id de l'invitation"],
    name: rawInvitation["Nom de l'invitation (Web)"],
    people,
    nbOfPeople: plus1Name ? people.length - 1 : people.length,
    plus1Invited,
    plus1Name,
    questionOnChildren,
    children,
    placeholderComment: rawInvitation['Placeholder commentaire'],
    placeholderAllergies: rawInvitation['Placeholder allergies'],
    isAnswered: rawInvitation['A répondu'] === 'Oui',
    invitedTo: {
      cityHall: rawInvitation['Invités pour mairie'] === 'Oui',
      church: rawInvitation['Invités pour église'] === 'Oui',
      wineReception: rawInvitation["Invités pour vin d'honneur"] === 'Oui',
      party: rawInvitation['Invités pour soirée'] === 'Oui',
      after: rawInvitation['Invités pour retour'] === 'Oui',
    },
  }
}

/**
 * @param {string} SLACK_URL
 * @param {string} idOfTheInvitation
 * @param {string[]} peoples
 * @param {string[]} attending
 * @param {{
 * attending: ['cant'] | ('cityHall' | 'church' | '')[],
 * plus1: null | 'yes' | 'no',
 * plus1Name: null | string,
 * children: null | 'true' | 'false',
 * mealComment: null | string,
 * cgu: false,
 * comment: string
 * }} formValues
 */
export const saveInvitationAnswer = async (
  SLACK_URL,
  idOfTheInvitation,
  peoples,
  formValues,
  invitation
) => {
  const MealMapper = {
    fish: 'du poisson',
    meat: 'de la viande rouge',
    child: 'le menu enfant.',
  }

  await fetch(SLACK_URL, {
    method: 'POST',
    body: JSON.stringify({
      text: `:tada: Quelqu’un a répondu au formulaire d’invitation ! :tada:

:love_letter: L’invitation **${idOfTheInvitation}** a eu comme réponse :

${
  formValues.attending.includes('cant')
    ? 'Ils ne peuvent pas venir.'
    : `Ils viennent à : ${formValues.attending.join(', ')}.`
}
${
  invitation.questionOnChildren && formValues.children === 'false'
    ? 'Les enfants ne viennent pas.'
    : ''
}
${invitation.plus1Invited && formValues.plus1 === 'no' ? 'Pas de plus 1.' : ''}

${
  formValues.attending.includes('cant')
    ? ''
    : peoples
        .map((guy) => {
          return `
  - ${guy} : mangera ${MealMapper[formValues[`meal-${guy}`]]}.
`
        })
        .join('\n')
}

${formValues.mealComment ? `:poultry_leg: : "${formValues.mealComment}"` : ''}

:speech_balloon: : "${formValues.comment}"

<!here> il faut mettre à jour l’excel avant l’autodestruction de ce message !`,
    }),
  })
}
