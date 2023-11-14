export const Calendars = {
  florent: 'florent',
  agnès: 'agnès',
  fleuriste: 'fleuriste',
  traiteur: 'traiteur',
  dj: 'dj',
  photograph: 'photograph',
  groupeMusic: 'groupeMusic',
  temoins: 'temoins',
  temouines: 'temouines',
  agnèsFamily: 'agnèsFamilly',
  florentFamily: 'florentFamilly',
  taxi: 'taxi',
  foodTruck: 'foodTruck',
  castle: 'castle',
}

const Invites = [
  Calendars.agnès,
  Calendars.florent,
  Calendars.agnèsFamily,
  Calendars.florentFamily,
  Calendars.temoins,
  Calendars.temouines,
  Calendars.photograph,
]

const MainPresta = [Calendars.dj, Calendars.traiteur, Calendars.fleuriste]

export const Addresses = {
  chateau: {
    name: 'Château de la Crête',
    address: '476 Rue de la Crète, 50400 Granville',
  },
  eglise: {
    name: 'Notre Dame du Cap Lihou',
    address: 'Pl. du Parvis Notre Dame, 50400 Granville',
  },
  coiffeurAgnès: {
    name: "Aux Couleurs d'Elise",
    address: '25 Av. des Vendéens, 50400 Granville',
  },
  mamanAgnès: {
    name: "Chez Mary, la mère d'Agnès",
    nameEn: "At Mary's, Agnès's mother",
    address: "1 rue des rondes de l'ouest, 50350 Donville-les-bains",
  },
  mamanFlorent: {
    name: 'Chez Marie-Ange, la mère de Flo',
    nameEn: "At Marie-Ange's, Florent's mother",
    address: '5 route de genêts, 50300 Vains',
  },
  mairieDonville: {
    name: 'Mairie de Donville-les-Bains',
    address: '97 Rte de Coutances, 50350 Donville-les-Bains',
  },
}

export const CalendarEvents = [
  {
    who: [
      Calendars.agnès,
      Calendars.temouines,
      Calendars.dj,
      Calendars.fleuriste,
      Calendars.photograph,
    ],
    startDate: new Date('2023/08/19 10:00'),
    endDate: new Date('2023/08/19 11:30'),
    title: 'Coiffeur',
    titleEn: 'Haircut',
    location: Addresses.coiffeurAgnès,
    detail: `
      <br/><br/>
      Eva : 9h30 - 10h<br/>
      Agnès : 10h - 11h30<br/>
      Maya : 10h30 - 11h<br/>
      Mathou et Pau : 11h - 11h30<br/>
    `,
  },
  {
    who: [
      Calendars.florent,
      Calendars.temoins,
      Calendars.florentFamily,
      Calendars.dj,
      Calendars.fleuriste,
      Calendars.photograph,
      Calendars.castle,
    ],
    startDate: new Date('2023/08/19 11:00'),
    endDate: new Date('2023/08/19 12:15'),
    title: 'Collation et préparation Florent',
    location: Addresses.chateau,
    detail: `
    <br/>
    <br/>
      Présents : <br/>
      - Florent<br/>
      - Marie-Ange<br/>
      - Lucile<br/>
      - Nina<br/>
      - Rosa<br/>
      - Gwen<br/>
      - Jordane<br/>
      - John<br/>
      - Boris<br/>
      - Val<br/>
      - Romain<br/>
    `,
  },

  {
    who: [
      Calendars.agnès,
      Calendars.temouines,
      Calendars.agnèsFamily,
      Calendars.dj,
      Calendars.photograph,
    ],
    startDate: new Date('2023/08/19 11:30'),
    endDate: new Date('2023/08/19 12:30'),
    title: 'Collation et préparation Agnès',
    titleEn: 'Snack and Preparation Agnès',
    location: Addresses.mamanAgnès,
    detail: `
    <br/>
    <br/>
    Présents : Agnès, Mary, Pascal, Richard, Nathalie, François, Andrée, Pauline, Mathilde, Maya, Eva
    `,
  },

  {
    who: [Calendars.dj, Calendars.castle],
    startDate: new Date('2023/08/19 12:30'),
    endDate: new Date('2023/08/19 13:00'),
    title: 'Arrivée DJ',
    location: Addresses.chateau,
  },

  {
    who: [...Invites, ...MainPresta, Calendars.castle],
    startDate: new Date('2023/08/19 13:00'),
    endDate: new Date('2023/08/19 13:30'),
    title: 'Cérémonie Civile',
    titleEn: 'Civilian Ceremony',
    location: Addresses.mairieDonville,
    detail: `
      <br/><br/>
      Témoins qui signent:<br/>
      - Mathilde<br/>
      - Pauline<br/>
      - Boris<br/>
      - Jonathan
    `,
  },

  {
    who: [Calendars.traiteur, Calendars.castle],
    startDate: new Date('2023/08/19 13:00'),
    endDate: new Date('2023/08/19 13:30'),
    title: 'Arrivée Traiteur',
    location: Addresses.chateau,
  },

  {
    who: [...Invites, ...MainPresta, Calendars.castle],
    startDate: new Date('2023/08/19 14:00'),
    endDate: new Date('2023/08/19 15:00'),
    title: 'Cérémonie Religieuse',
    titleEn: 'Religious Ceremony',
    location: Addresses.eglise,
    detail: `
      <br/><br/>
      Placements des gens et livrets de messe : Finlay et Stewart<br/>
      DJ église : Romain<br/>
      Récupération des bouts de banc et placement au Château : Eva<br/>
      Récupération de la gerbe du pupitre et placement au Château : Nathalie<br/>
      Distribution des paniers de pétales et bubules : Marie-Ange et Mary<br/>
      Fermeture des portes derrière nous et balayage des pétales : René 🧹, Christine 🧹, Finlay 🚪 et Stewart🚪<br/>
    `,
  },

  {
    who: [Invites, Calendars.castle],
    startDate: new Date('2023/08/19 15:00'),
    endDate: new Date('2023/08/19 15:15'),
    title: "Photos autour de l'église",
    titleEn: 'Photos around the church',
    location: Addresses.eglise,
  },

  {
    who: [...Invites, ...MainPresta, Calendars.castle],
    startDate: new Date('2023/08/19 15:30'),
    endDate: new Date('2023/08/19 16:00'),
    title: 'Cortège vers le Château',
    titleEn: 'Procession to the Castle',
    location: Addresses.eglise,
    detail: `
    <br/><br/>
      - Conducteur voiture des mariés : Richard<br/>
      - Voiture balai : Lucile
    `,
  },

  {
    who: [...Invites, ...MainPresta, Calendars.groupeMusic, Calendars.castle],
    startDate: new Date('2023/08/19 16:00'),
    endDate: new Date('2023/08/19 17:30'),
    title: "Vin d'honneur",
    titleEn: 'Reception',
    location: Addresses.chateau,
  },
  {
    who: [...Invites, ...MainPresta, Calendars.groupeMusic, Calendars.castle],
    startDate: new Date('2023/08/19 17:30'),
    endDate: new Date('2023/08/19 20:00'),
    title: 'Cocktail',
    location: Addresses.chateau,
  },

  {
    who: [Invites, Calendars.castle],
    startDate: new Date('2023/08/19 17:00'),
    endDate: new Date('2023/08/19 17:15'),
    title: 'Photo du groupe au Château',
    titleEn: 'Group photo at the Castle',
    location: Addresses.chateau,
  },

  {
    who: [Calendars.traiteur, Calendars.fleuriste, Calendars.castle],
    startDate: new Date('2023/08/19 15:00'),
    endDate: new Date('2023/08/19 16:00'),
    title: 'Tables dressées. Ok pour fleuriste.',
    location: Addresses.chateau,
  },

  {
    who: [Calendars.groupeMusic, Calendars.dj, Calendars.castle],
    startDate: new Date('2023/08/19 16:30'),
    endDate: new Date('2023/08/19 17:00'),
    title: "Arrivée et mise en place Swingin' Easy",
    location: Addresses.chateau,
  },

  {
    who: [Calendars.groupeMusic, Calendars.dj, Calendars.castle],
    startDate: new Date('2023/08/19 17:00'),
    endDate: new Date('2023/08/19 18:15'),
    title: 'Concert part 1',
    location: Addresses.chateau,
  },

  {
    who: [...Invites, Calendars.dj, Calendars.castle],
    startDate: new Date('2023/08/19 18:15'),
    endDate: new Date('2023/08/19 18:30'),
    title: 'Lancer du bouquet de la mariée.',
    titleEn: 'Bouquet toss by the Bride',
    location: Addresses.chateau,
  },

  {
    who: [Calendars.groupeMusic, Calendars.dj, Calendars.castle],
    startDate: new Date('2023/08/19 18:30'),
    endDate: new Date('2023/08/19 19:30'),
    title: 'Concert part 2',
    location: Addresses.chateau,
  },

  {
    who: [Calendars.agnès, Calendars.florent],
    startDate: new Date('2023/08/19 20:00'),
    endDate: new Date('2023/08/19 20:15'),
    title: 'Discours',
    location: Addresses.chateau,
  },

  {
    who: [...Invites, Calendars.traiteur, Calendars.dj, Calendars.castle],
    startDate: new Date('2023/08/19 20:00'),
    endDate: new Date('2023/08/19 23:00'),
    title: 'Dîner',
    titleEn: 'Diner',
    location: Addresses.chateau,
    detail:
      'Plus d\'infos sur <a href="https://berthelot.io/mariage/menu" target="__blank" >la page dédiée</a>.',
  },

  {
    who: [...Invites, Calendars.traiteur, Calendars.dj],
    startDate: new Date('2023/08/19 23:00'),
    endDate: new Date('2023/08/19 23:15'),
    title: 'Ouverture du Bal',
    titleEn: 'Openning dance',
    location: Addresses.chateau,
  },

  {
    who: [...Invites, Calendars.traiteur, Calendars.dj, Calendars.castle],
    startDate: new Date('2023/08/19 23:00'),
    endDate: new Date('2023/08/20 4:00'),
    title: 'Soirée dansante',
    titleEn: 'Dancing party',
    location: Addresses.chateau,
  },
  // Dimanche 20 août 2023

  {
    who: [...Invites, Calendars.traiteur],
    startDate: new Date('2023/08/20 4:00'),
    endDate: new Date('2023/08/20 4:45'),
    title: 'Casse-croûte, Cigares et Whisky.',
    titleEn: 'Snack, Cigares and Whisky.',
    location: Addresses.chateau,
    detail: 'Fourni et servi par les mariés.',
  },

  {
    who: [...Invites, Calendars.taxi],
    startDate: new Date('2023/08/20 1:00'),
    endDate: new Date('2023/08/20 5:00'),
    title: 'Service de Taxi',
    titleEn: 'Taxi service.',
    location: Addresses.chateau,
  },

  {
    who: [Calendars.florentFamily],
    startDate: new Date('2023/08/20 10:45'),
    endDate: new Date('2023/08/20 11:00'),
    title: 'Récupération des vienoisseries et baguettes',
    location: Addresses.chateau,
    detail: 'Merci Maman',
  },

  {
    who: [...Invites, Calendars.foodTruck, Calendars.castle],
    startDate: new Date('2023/08/20 11:00'),
    endDate: new Date('2023/08/20 18:00'),
    title: 'Retour des mariés',
    titleEn: 'Post-Wedding Brunch',
    location: Addresses.chateau,
  },

  {
    who: [...Invites, Calendars.taxi, Calendars.castle],
    startDate: new Date('2023/08/20 11:00'),
    endDate: new Date('2023/08/20 12:00'),
    title: 'Taxi, récupération des conducteurs',
    titleEn: 'The Taxi brings back the drivers only.',
    location: Addresses.chateau,
  },

  {
    who: [Calendars.foodTruck, Calendars.castle],
    startDate: new Date('2023/08/20 11:30'),
    endDate: new Date('2023/08/20 12:30'),
    title: 'Arrivée et mise en place FoodTruck',
    location: Addresses.chateau,
  },

  {
    who: [...Invites, Calendars.foodTruck, Calendars.castle],
    startDate: new Date('2023/08/20 12:30'),
    endDate: new Date('2023/08/20 14:00'),
    title: 'Repas',
    titleEn: 'Lunch',
    location: Addresses.chateau,
  },

  {
    who: [Calendars.agnès, Calendars.florent],
    startDate: new Date('2023/08/20 17:00'),
    endDate: new Date('2023/08/20 18:00'),
    title: 'Rangement et état des lieux de sortie',
    location: Addresses.chateau,
  },

  {
    who: [Calendars.agnès, Calendars.florent],
    startDate: new Date('2023/08/20 18:00'),
    endDate: new Date('2023/08/20 19:30'),
    title: 'Récupération du chien',
    location: Addresses.chateau,
  },

  {
    who: [
      Calendars.agnès,
      Calendars.florent,
      Calendars.agnèsFamily,
      Calendars.florentFamily,
      Calendars.photograph,
    ],
    startDate: new Date('2023/08/20 18:30'),
    endDate: new Date('2023/08/20 23:45'),
    title: 'Repas famillial',
    titleEn: 'Family diner',
    location: Addresses.mamanFlorent,
  },
]
