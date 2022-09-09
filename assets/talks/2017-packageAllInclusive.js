module.exports = {
  name: 'Package ? Tout compris !',
  metaInfo: 'Snowcamp - Février 2017',
  slides:
    'https://docs.google.com/presentation/d/1JuNunEmZk8zQf2lJccUP1YfJYRPWzHxgkhD9GQaQIFw/edit?usp=sharing',
  description: `
  Le 11 Octobre 2016, Facebook – qui n'utilisait déjà plus NPM – a open-sourcé avec google son propre gestionnaire de paquets :  'yarn'. Comment accueillir la nouvelle ? Doit-on se réjouir – pour sa rapidité notamment – ou s'inquiéter de la disparition potentielle de 'NPM' ?
<br/><br/>
  Afin d’avoir un raisonnement logique pour répondre à cette question, je vous invite à prendre du recul sur les gestionnaire de paquets. Quel est leur rôle ? Comment doivent-ils s’utiliser ? Comment être certain d’avoir les même version de nos dépendances en production et en développement ? Comment gérer les dépendances : en arbre, à plat ou même les deux à la fois ? Comment sont stockés ces paquets, peuvent-ils être supprimés ?
<br/><br/>
  Continuons notre exploration et nous nous apercevons très vite que les gestionnaires de paquets sont principalement influencés par la manière dont les dépendances sont importées dans notre code. Le TC-39 est en train de réfléchir sur les spécifications du ES Module Loader ; mettons-nous à leur place et voyons quelles sont les différentes options.
`,
}
