---
title: 'Refactoring React: débarassons-nous du code legacy avec les tests de snapshot'
description: Vous voulez refactoriser une grande base de code React mais vous n'êtes pas sûr de ne rien casser ? Je vais vous guider à travers cela !
slug: 'react-test-refactoring-snapshot'
content: reactRefactoring
image: '/illustrations/cowboy.jpg'
locale: fr
createdDate: 2020-06-04
modifiedDate: 2020-06-04
---

<img alt="Le cowboy du refactoring" src="/illustrations/cowboy.jpg" class="main-image" />

Il était une fois, un pauvre cowboy développeur solitaire. Il avait un long code à refactoriser. Chaque fois qu'il arrivait dans une nouvelle ville, il tirait plus vite que son ombre sur le code legacy.

Il est un contractant, donc il rejoint des équipes dans ce but, pour refactoriser et améliorer la qualité du logiciel.

Alors que le développeur cowboy lit le code legacy, il a tendance à tout refactoriser. Il écrit du nouveau code propre et teste correctement son code. Mais, à la fin, son refactoring tombe toujours sur un cas particulier dont il n'était pas conscient et voilà… Malgré les tests qu'il avait créés, il a introduit des bugs ! :fearful:.

Qu'est-ce qui ne va pas avec ce processus ?

Il y a deux grandes failles dans sa façon de refactoriser :

- notre cowboy refactorise un système entier sans connaître le comportement exact
- notre cowboy teste son code en fonction du code refactorisé et non en fonction des deux codes, legacy et nouveau.

Alors que la première erreur est difficile à corriger, nous allons améliorer le processus du développeur cowboy en changeant la façon dont il refactorise le code.

## Tester le code legacy

La première étape pour refactoriser avec succès un morceau de code est d'ajouter des tests au code legacy. Mais les tests devraient toujours se référer à un comportement tout en gardant à l'esprit l'empathie avec l'utilisateur. C'est impossible à faire quand on ne connaît pas le comportement !

Nous devons trouver une autre façon de réaliser cela. Le premier outil que nous utiliserons est le test de snapshot en utilisant Jest.

Qu'est-ce qu'un test de snapshot ? C'est simple :

- Prenez une photo d'un composant
- Modifiez le code
- Prenez une autre photo après que le code a été modifié
- Comparez les deux photos (avant et après le refactoring). Elles devraient être exactement les mêmes.

Cela signifie que la sortie du composant devrait être la même avant et après le refactoring. Essayons cela avec un peu de code.

Imaginez une application que notre développeur cowboy utilise pour compter les vaches et conserver des données sur elles. Voici l'application :

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

Le code est assez simple. Il y a un titre et un compteur de vaches. Le compteur de vaches est un composant qui contient toute la logique.

Voici le code du compteur de vaches :
