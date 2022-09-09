export default [
  {
    title: 'Les framework JavaScript',
    description: "Slide issue d'une matinal sur les Framework JavaScript.",
    url: 'https://docs.google.com/presentation/d/1l7pXU3k2dDEo1MOleZF22hsWQlYbUuBiSjhzLNJaxpE/edit#slide=id.g1e43053bed_0_176',
  },
  {
    title: 'Headless CMS',
    description: "Retour d'expérience sur l'utilisation des headless CMS",
    url: 'https://slides.com/florentberthelot/headless-cms',
  },
  {
    title: 'GraphQL, côté serveur ça donne quoi ?',
    description:
      "GraphQL est au top du Hype car c'est fun a utiliser côté client. Oui mais voilà... côté serveur quels sont les implication ?",
    url: '/slides/graphql-server-side.html',
  },
  {
    title: 'Tribu Web Zenika - Soirée Progressive Web App',
    description:
      'La Tribu Web de Zenika vous propose une soirée autour des progressive web app.',
    url: '/slides/tribu-web-pwa.html',
  },
  {
    title: 'Tribu Web Zenika - Soirée Web Worker',
    description:
      'La Tribu Web de Zenika vous propose une soirée autour des web worker.',
    url: '/slides/tribu-web-web-worker.html',
  },
  {
    title: 'Tribu Web Zenika - TP React',
    description: 'Ma première présentation pour la Tribu Web de Zenika.',
    url: '/slides/tribu-web-react.html',
  },
].map((s) => ({ ...s, type: 'other' }))
