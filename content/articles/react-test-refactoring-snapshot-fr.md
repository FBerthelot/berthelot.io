---
title: 'Refactoring React: débarassons-nous du code legacy avec les tests de snapshot'
description: Vous voulez refactoriser une grande base de code React mais vous n'êtes pas sûr de ne rien casser ? Je vais vous guider à travers cela !
slug: 'react-test-refactoring-snapshot'
image: '/illustrations/cowboy.jpg'
locale: fr
createdDate: 2020/06/04
modifiedDate: 2023/11/19
---

<img alt="Le cowboy du refactoring" src="/illustrations/cowboy.jpg" class="main-image" />

Il était une fois, un pauvre cowboy développeur solitaire. Il avait un long code à refactoriser. Chaque fois qu'il arrivait dans une nouvelle ville, il tirait plus vite que son ombre sur le code legacy.

C'est un frelance, donc il rejoint des équipes en place, pour refactoriser et améliorer la qualité des codes.

Alors que le cowboy développeur lit le code legacy, il a tendance à tout refactoriser.
Il écrit du nouveau code propre et teste correctement son code.
Mais, à la fin, son refactoring tombe toujours sur un cas fonctionel particulier dont il n'avait pas conaissance et voilà…
Malgré les tests qu'il avait créés, il a introduit des bugs ! :fearful:.

Qu'est-ce qui ne va pas avec ce processus ?

Il y a deux grandes failles dans sa façon de refactoriser :

- notre cowboy refactorise un système entier sans connaître le comportement exact
- notre cowboy teste son code en fonction du code refactorisé et non en fonction des deux versions du code : le legacy et le nouveau.

Alors que la première erreur est difficile à corriger, nous allons améliorer le processus du développeur cowboy en changeant la façon dont il refactorise le code.

## Tester le code legacy

La première étape pour refactoriser avec succès un morceau de code est d'ajouter des tests au code legacy.
Même si les tests devraient toujours se référer à un comportement tout en gardant à l'esprit l'empathie avec l'utilisateur,
dans notre cas c'est impossible à faire vu que l'on ne connaît pas le fonctionel !

Nous devons trouver une autre façon de procéder.
Le premier outil que nous utiliserons : les tests de snapshot Jest.

Qu'est-ce qu'un test de snapshot ? C'est simple :

- Prenez un snapshot d'un composant
- Modifiez le code
- Prenez un autre snapshot après que le code ai été modifié
- Comparez les deux snapshot (avant et après le refactoring). Ils devraient être exactement les mêmes.

Cela signifie que la sortie du composant devrait être la même avant et après le refactoring.
Essayons cela avec un peu de code.

Imaginez une application que notre cowboy développeur utilise pour compter les vaches et conserver des données sur elles.
Voici l'application :

Le code :

```jsx
import React from 'react'
import 'bulma'
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <h1>MY COWS</h1>

      <section className="cows">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://lh3.googleusercontent.com/eLxDr87icLAQlzF2LFIig62i46hm7f8sH77zIaZX6t64kFsjHlok6QMyCiReOzBcfpkPTZSv3g=w640-h400-e365" />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Margueritte</p>
                <p className="subtitle is-6">Field A</p>
              </div>
            </div>

            <div className="content">
              She love organize poker game in the basment of the farm.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://image.posterlounge.fr/img/products/650000/649832/649832_poster_l.jpg" />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Thérèse</p>
                <p className="subtitle is-6">Field A</p>
              </div>
            </div>

            <div className="content">
              During the confinement, her hair grown up significantly.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://oldmooresalmanac.com/wp-content/uploads/2017/11/cow-2896329_960_720-Copy-476x459.jpg" />
            </figure>
          </div>

          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Evelyne</p>
                <p className="subtitle is-6">Field B</p>
              </div>
            </div>

            <div className="content">She smile to me, it's weird.</div>
          </div>
        </div>
      </section>
    </div>
  )
}
```

L'application:

<iframe
     src="https://codesandbox.io/embed/github/FBerthelot/my-cows-react-refactoring-kata/tree/master/?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="my-cows-react-refactoring-kata"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Le code est assez simple. Il y a un titre et un compteur de vaches.
Le compteur de vaches est un composant qui contient toute la logique.

Quand on voit ce code, la première chose que l'on veut faire est de créer un composant Cow pour chaque vache.
Pour respecter notre workflow de refactoring, nous allons d'abord ajouter des tests de snapshot au composant App.

### Rendering du component pour un snapshot

Dans l'écosysteme React, il y a deux grandes librairies pour tester les composants : Enzyme et @testing-library.
J'ai aussi créé [ma propre librairie, component-test-utils](https://component-test-utils.berthelot.io/) plus tôt cette année et je vais écrire les tests avec chaque librairie pour que vous puissiez avoir l'exemple avec celle que vous utilisez.

Peut importe la librairie de test que vous utilisez, assurez-vous de rendre tout l'arbre React et pas seulement un seul composant, donc il _ne pas utiliser de mock pendant le refactoring_.

```jsx
import App from './App'
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'component-test-utils-react'
import { render } from '@testing-library/react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// React test render
describe('App - react-test-render - Refactoring Tests', () => {
  it('should look the same', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

// Enzyme
describe('App - enzyme - Refactoring Tests', () => {
  it('should look the same', () => {
    const component = mount(<App />)
    expect(component.html()).toMatchSnapshot()
  })
})

// component-test-utils-react
describe('App - component-test-utils-react - Refactoring Tests', () => {
  it('should look the same', () => {
    const component = shallow(<App />, { blackList: true })
    expect(component.html({ snapshot: true })).toMatchSnapshot()
  })
})

// @testing-library
describe('App - @testing-library/react - Refactoring Tests', () => {
  it('should look the same', () => {
    const { container } = render(<App />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
```

Quand on execute les tests, Jest va créer un dossier `__snapshots__` avec une copie de l'arbre React.
Si vous faites des changements, Jest va vérifier si le nouveau code génère le même arbre React.

### Création d'un composant Vache

Maintenant que nous avons des tests de snapshot, nous pouvons refactoriser le code en suivant un workflow normal de développement, par exemple TDD.

```jsx
import React from 'react'
import { Cow } from './Cow'
import { shallow } from 'component-test-utils-react'

describe('Cow', () => {
  const cow = {
    name: 'Margueritte',
    location: 'Field A',
    description: "She's smiling at me, it's weird.",
    image: 'http://toto.toto.com',
  }
  it('should display cow name', () => {
    const component = shallow(<Cow cow={cow} />)
    expect(component.html()).toContain(cow.name)
  })

  it('should display where the cow is', () => {
    const component = shallow(<Cow cow={cow} />)
    expect(component.html()).toContain(cow.location)
  })

  it("should display the cow's description", () => {
    const component = shallow(<Cow cow={cow} />)
    expect(component.html()).toContain(cow.description)
  })

  it("should display the cow's image", () => {
    const component = shallow(<Cow cow={cow} />)
    expect(component.html()).toContain(cow.image)
  })
})
```

Comme vous pouvez le voir, nous testons que chaque donnée envoyée au composant est affichée, peu importe l'arbre HTML.
Le composant Cow est très simple, rien de spécial ici.

```jsx
import React from 'react'

export const Cow = ({ cow }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={cow.image} />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{cow.name}</p>
            <p className="subtitle is-6">{cow.location}</p>
          </div>
        </div>

        <div className="content">{cow.description}</div>
      </div>
    </div>
  )
}
```

### Utilisation du composant vache

Maintenant que notre composant est prêt, il est temps pour notre cowboy de détruire le vieux code et d'utiliser sa nouvelle Card Cow.

```jsx
import React from 'react'
import 'bulma'
import './styles.css'
import { Cow } from './Cow'

export default function App() {
  const cows = [
    {
      name: 'Margueritte',
      image:
        'https://lh3.googleusercontent.com/eLxDr87icLAQlzF2LFIig62i46hm7f8sH77zIaZX6t64kFsjHlok6QMyCiReOzBcfpkPTZSv3g=w640-h400-e365',
      location: 'Field A',
      description:
        'She loves organizing poker games in the basement of the farm.',
    },
    {
      name: 'Thérèse',
      image:
        'https://image.posterlounge.fr/img/products/650000/649832/649832_poster_l.jpg',
      location: 'Field A',
      description: 'During the confinement, her hair grew significantly.',
    },
    {
      name: 'Evelyne',
      image:
        'https://oldmooresalmanac.com/wp-content/uploads/2017/11/cow-2896329_960_720-Copy-476x459.jpg',
      location: 'Field B',
      description: "She's smiling at me, it's weird.",
    },
  ]

  return (
    <div className="App">
      <h1>MY COWS</h1>

      <section className="cows">
        {cows.map((cow) => {
          return <Cow cow={cow} key={cow.name} />
        })}
      </section>
    </div>
  )
}
```

Quand on a fini de refactoriser, on peut lancer les tests de snapshot et voir si on a cassé quelque chose.
Nous sommes donc confiants car nous sommes sûrs de générer la même sortie HTML grâce à nos tests de snapshot.

### Supression du test de snapshot

Les tests de snapshot ont aidé le cowboy à refactoriser le code et à créer un composant Cow, mais maintenant que le refactoring est terminé, le premier test est inutile.
Ce test de snapshot n'a plus de valeur pour une future maintenance.

Le DOM est très mouvant, la structure HTML va probablement changer.
Ce genre de tests va apporter beaucoup de faux négatifs, beaucoup de bruit lors du changement de HTML/CSS.
C'est même maintenant devenu un test avec plus d'inconvégnants que d'atouts.

Éxécutons la commande préférée de notre cowboy : `rm ./src/App.snapshot.spec.js` !

## Et maintenant ?

Nous avons vu comment utiliser les tests de snapshot pour refactoriser du code legacy très simple.
Pour aller plus loin, vous pouvez combiner les tests de snapshot et le property-based-testing pour retrouver la logic derrière un code poussiéreux.

---

Le code est disponible sur [Github](https://github.com/FBerthelot/my-cows-react-refactoring-kata) et vous pouvez naviguer entre chaque étapes avec un système de branches.
