import { invitations } from './finalInvitations.data'

/**
 * @param {string} idOfTheInvitation
 * @returns {{
 * id: string
 * name: string
 * people: string[]
 * ages: Record<string, string>[]
 * plus1Invited: boolean
 * plus1Name?: string
 * questionOnChildren: boolean
 * children: string[]
 * placeholderComment: string
 * placeholderAllergies: string
 * isAnswered: boolean
 * nbOfPeople: number
 * nbOfChildren: number
 * nbOfPeopleWithoutPlus1: number
 * nbOfPeopleWithoutChildren: number
 * invitedTo: {
 *  cityHall: boolean
 *  church: boolean
 *  wineReception: boolean
 *  party: boolean
 *  after: boolean
 *  }
 * } | undefined}
 */
export const getTheInvitation = (inviteId) => {
  const invitation = invitations.find(
    (invitation) => invitation.id === inviteId,
  )

  if (!invitation) {
    return undefined
  }

  const nbOfPeople = invitation.people.length
  const nbOfChildren = invitation.children.length
  const nbOfPeopleWithoutChildren = nbOfPeople - nbOfChildren
  const nbOfPeopleWithoutPlus1 = nbOfPeople - (invitation.plus1Invited ? 1 : 0)

  return {
    ...invitation,
    nbOfPeople,
    nbOfChildren,
    nbOfPeopleWithoutChildren,
    nbOfPeopleWithoutPlus1,
  }
}

/**
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
export const saveInvitationAnswer = (
  idOfTheInvitation,
  peoples,
  formValues,
  invitation,
) => {
  const MealMapper = {
    fish: 'du poisson',
    meat: 'de la viande rouge',
    child: 'le menu enfant.',
  }

  const text = `

🎉 Quelqu’un a répondu au formulaire d’invitation ! 🎉

💌 L’invitation **${idOfTheInvitation}** a eu comme réponse :

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

${formValues.mealComment ? `🍗 : "${formValues.mealComment}"` : ''}

💬 : "${formValues.comment}"

<!here> il faut mettre à jour l’excel avant l’autodestruction de ce message !`

  console.info(text)

  window.alert('Trop tard pour répondre !')
}
