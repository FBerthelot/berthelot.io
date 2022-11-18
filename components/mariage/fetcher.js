export const getTheInvitation = async (SHEETDB_URL, inviteId) => {
  const invitations = await fetch(SHEETDB_URL).then((res) => res.json())

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

  const plus1Name = rawInvitation['Nom du +1']

  return {
    id: rawInvitation["Id de l'invitation"],
    name: rawInvitation["Nom de l'invitation (Web)"],
    people,
    nbOfPeople: plus1Name ? people.length - 1 : people.length,
    plus1Name,
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
 *
 * @param {string[]} peoples
 * @param {string[]} attending
 * @param {Record<string, 'meat' | 'fish' | 'children'>} meal
 * @param {string} plus1
 * @param {string} comment
 */
export const saveInvitationAnswer = async (
  SLACK_URL,
  peoples,
  attending,
  meals,
  comment
) => {
  await fetch(SLACK_URL, {
    method: 'POST',
    body: JSON.stringify({
      text: `:tada: Quelqu’un a répondu au formulaire d’invitation ! :tada:

:love_letter: L’invitation **futursmaries** a eu comme réponse :

${peoples.join(', ')} viennent a : ${
        !attending.length ? 'rien du tout :/' : attending.join(', ')
      }.

${Object.entries(meals)
  .map(([people, meal]) => {
    return `- ${people} prendra ${
      { meat: 'de la viande', fish: 'du poisson', children: 'le menu enfant' }[
        meal
      ]
    }`
  })
  .join('\n')}

:speech_balloon:  : "${comment}"

<!here> il faut mettre à jour l’excel avant l’autodestruction de ce message !`,
    }),
  })
}
