![Tester, c'est douter](/slides_content/javascript_craftsmanship/cover.jpg)



**Florent Berthelot**

- Consultant - ESN
- Consultant Formateur - ESN
- Freelance (WeFacto, Human Coder)
 
Web Software Craftsman

[https://berthelot.io](https://berthelot.io)



## Programme

- Jour 1
  - Rappel sur l’écosystème JS
  - Mise en pratique de plusieurs méthodologies de Tests.
- Jour 2
  - Le reste des méthodologies de test
  - Les différents types de tests
  - Mise en pratique avec un  framework front-end


## Travaux pratiques

⚠️ Pas de corrections

✅ Posez des questions

✅ Demandez moi une revue de code


## Travaux pratiques

Le sujet : API Pokémon


## Informations pratique

- Matin : 9h - 12h30
- Après-midi : 14h - 17h30

Demandez des pauses.

Nous nous notons mutuellement !

N'oubliez pas d'émarger sur le site de Human Coder.



## Rappels


### JavaScript

[Lien vers la formation JavaScript](./javascript)


### Outillages JavaScript

[https://slides.com/florentberthelot/outillage-node-js](https://slides.com/florentberthelot/outillage-node-js)



## Méthodologie de Développement 1

Pas de test !



## TP 1 - Échauffement

Codez une méthode qui retourne la rapidité d'un Pokemon

Chaque Pokémon a une vitesse initial.

```
La rapidité = vitesse initial + (niveau du Pokemon / génération du Pokémon)
```

Votre programme affiche la rapidité de Pikachu, Salamèche et Bulbizare.

⚠️ Pas le droit de lancer le programme ⚠️



## Méthodologie de Développement 2

**Test After**


### Test After

<pre class="mermaid">
flowchart TD
  A[Implémenter la fonctionnalité]
  B[Implémenter le test]
  C[Le test passe]
  D[Refactor]
  A --> B
  B --> C
  C --> D
  D -.-> A
</pre>



## Frameworks de tests JS


### Le grand-parent : Jasmine

<pre class="mermaid">
architecture-beta
  service firefoxHeadless(internet)[FirefoxHeadless]
  service chromeHeadless(internet)[ChromeHeadless]
  service console[Console]
  service karma(server)[Karma]
  service jasmine(server)[Jasmine]
  junction junctionUP

  jasmine:L -- R:karma
  karma:T -- B:junctionUP
  junctionUP:R -- L:firefoxHeadless
  junctionUP:L -- R:chromeHeadless
  karma:L -- R:console
</pre>


### Le parent : Jest

<pre class="mermaid">
architecture-beta
  service console[Console]
  service jest(server)[JS DOM]
  service JSDom(server)[Jest]

  JSDom:L -- R:jest
  jest:L -- R:console
</pre>


## Le jeune actif : Vitest

La même chose que Jest mais plus rapide et plus léger&nbsp;!


### Vitest

```bash
npm install -D vitest
```

```json
// Package.json
{
  "scripts": {
    "test": "vitest"
  }
}
```


## Structure de test

```js
import {add, sub} from 'math';

describe('Math', () => {
  describe('add', () => {
    it('should return 0 when add 0 to 0', () => {
      expect(add(0, 0)).toBe(0);
    });
    
    it('should return 1 when add 0 to 1', () => {
      expect(add(1, 0)).toBe(1);
    })
    
    it('should return 3.14 when add 0.14 to 3', () => {
      expect(add(3, 0.14)).toBe(3.14);
    })
  });
  
  describe('sub', () => {
    it('should return 0 when sub 0 to 0', () => {
      expect(sub(0, 0)).toBe(0);
    });
    
    it('should return 1 when sub 0 to 1', () => {
      expect(sub(1, 0)).toBe(1);
    })
    
    it('should return 3.14 when sub 0.86 to 4', () => {
      expect(sub(4, 0.86)).toBe(3.14);
    })
  });
});
```


## Live coding

[StackBlitz](https://vitest.new/)


## Vitest Vs Jest

[L'histoire des modules](https://slides.com/florentberthelot/les-modules-javascript/)


## Jest VS Vitest

- Vitest = ESModules
- Jest = CommonJS

Voilà pourquoi Vitest est plus rapide que Jest



## TP 2

- Ajoutez Jest ou Vitest à votre projet
- Testez
- Refactor



## Méthodologie de Développement 3

Test First


### Test First

<pre class="mermaid">
flowchart TD
  A[Implémenter le test]
  B[Implémenter la fonctionnalité]
  C[Refactor]
  A --> B
  B --> C
  C -.-> A
</pre>



## Méthodologie de Développement 4

Spec Driven Development


### Spec Driven Development

<pre class="mermaid">
flowchart TD
  A[Implémenter la description du test - it.todo]
  B[Implémenter la fonctionnalité]
  C[Implémenter le test]
  D[Le test passe]
  E[Refactor]
  F[Le test passe encore]
  A --> B
  B --> C
  C --> D
  D --> E
  E --> F
  F -.-> A
</pre>


### Spec Driven Development

```gherkin
Scénario 1: Bataille de Pikachu et Salamèche

Quand je choisi une bataille entre Pikachu et Salamèche
Alors Pikachu gagne
```


### Spec Driven Development

```gherkin
Scénario 1: Bataille de Pikachu et Salamèche

Quand je choisi une bataille entre Pikachu et Salamèche
Alors Pikachu gagne
```
```js
describe('Battle', () => {
  it.todo('should design pikachu as a winner when pikachu fight against salameche');
});
```


### Spec Driven Development

```js
describe('Battle', () => {
  it.todo('should make pikachu a winner when pikachu fight against salameche');
  
  it.todo('should make pikachu level up when pikachu fight against salameche');
});
```


### Spec Driven Development

```js
describe('Battle', () => {
  describe('when pikachu fight against salamech', () => {
    beforeEach(() => {
		// Initialize pikachu and salameche battle here
    });

    it.todo('should make pikachu a winner');

    it.todo('should make pikachu level up');
  });
});
```



## TP 3

Implémentez ces scénarios en Spec Driven Developement

```gherkin
Scénario 1:
   Quand Pikachu et Salamèche s'affrontent
   Alors Pikachu est le premier à attaquer 

Scénario 2:
   Quand Pikachu et Salamèche s'affrontent
   Alors Pikachu gagne

Scénario 3:
   Quand Pikachu et Bulbizarre s'affrontent
   Alors Bulbizarre gagne

Scénario 4:
   Quand Pikachu et Bulbizarre s'affrontent
   Alors Pikachu est le premier à attaquer
```


## TP3

Si vous êtes TRÈS motivé, voici la liste des règles Pokemon :

[https://www.dragonflycave.com/mechanics/battle](https://www.dragonflycave.com/mechanics/battle)



## Méthodologie de Développement 5

Test Driven Development


### TDD

<pre class="mermaid">
flowchart TD
  A[Implémenter le test]
  B[Le test échoue]
  C[Implémenter la fonctionnalité]
  D[Le test passe]
  E[Refactor]
  F[Le test passe encore]
  A --> B
  B --> C
  C --> D
  D --> E
  E --> F
  F -.-> A
</pre>



## TP 4

Maintenant les Pokemons ont un type (Feu, Éclair, Plante, ...) qui impacte leurs attaques et leurs points de vie.

```gherkin
Scénario 1 :
  Quand un pokemon de type Éclair affronte un type Feu
  Alors le pokemon Éclair double ses points d'attaques
  
Scénario 2 :
  Quand un pokemon de type Éclair affronte un type Plante
  Alors le pokemon Plante double ses points de vie
```


## TP 4

**Bonus :** Qui commence quand 2 Pokémons ont la même rapidité ?



## Mock, Stub, Spy ?

Qu'est ce que c'est ?


## Un exemple 

```js
import {getUser} from './user-service';
import {info} from './logger'

export const findFriend = async (userId) => {
	try {
    const user = await getUser(userId)
    return user.friends;
  } catch(err) {
    console.error(err);
    return undefined;
  }
}
```


### Dummy

```js
const loggerDummy = () => {
  throw new Error('Dummy')
}
```


### Stub

```js
const getUserStub = () => {
  return Promise
    .resolve({friends: []})
}

const getUserStub = vi.fn(() => {
  return Promise
    .resolve({friends: []})
})
```


### Mock

```js
const getUserMock = vi.fn((userID) => {
  if(userId === 'flo') {
    return Promise
    	.resolve({friends: ['martinique']})
  }
  
  
  return Promise
	.reject(new Error('Remi sans amis, sans famille'))
})
```


### Spy

```js
vi.spyOn(console, 'error');

expect(console.error).toHaveBeenCalled();
```


### Vi.fn

```js
vi
  .spyOn(console, 'error')
  .mockImplementation(() => {});

const getUserStub = jest.fn(() => {
  return Promise
    .resolve({friends: []})
})

expect(getUserStub).toHaveBeenCalled();
```
ou `jest.fn()`


### L'exemple

```js
import {getUser} from './user-service';
import {info} from './logger'

export const findFriend = async (userId) => {
    try {
    	const user = await getUser(userId)
        return user.friends;
    } catch(err) {
    	console.error(err);
        return undefined;
    }
}
```


### Les tests

```js
import * as UserService from './user-service';

describe('findFriend', () => {
  let getUser;
  
  beforeEach(() => {
    getUser = vi.spyOn(UserService, 'getUser');
    vi.spyOn(console, 'error').mockImplementation(() => {});
  })
  afterEach(() => {
    getUser.mockRestore()
    vi.spyOn(console, 'error').mockRestore();
  })

  it('should find florent friend', async () => {
      getUser.mockImplementation(() => {
        return Promise.resolve({friends: ['martinique']})
      })
    
      const result = await findFriend('flo')
      expect(result).toEqual(['martinique'])
  })

  describe('when trying to find remi friend', () => {
    beforeEach(() => {
      getUser.mockImplementation(() => {
        return Promise.reject(new Error('oops'))
      })
    });
    
    it('should log error when find remi friend', async () => {
      const result = await findFriend('remi')
      expect(console.error).toHaveBeenCalledWith('oops');
    })

    it('should return undefined', async () => {
      const result = await findFriend('remi')
      expect(result).toBe(undefined);
    })
  })
})
```



## TP 5

Les rapidité des Pokémons sont issues d'un appel de la Poké API.

Pour cet exercice, il faut Mocker (ou Stuber) l'appel réseau.



## Les différents types de test


### Tests unitaires

> Confiné en mémoire (RAM)


### Tests d'intégration

> Test déconfiné

Possibilité d'accéder aux fichiers, au réseau, ...


### Tests end-to-end

> Interdit de bouchonner

Comme pour le vin, il est interdit d'utiliser des mocks, des spys, ...
ISO prod


### Test d'acceptance

> Valide mon travail

Si ce test passe alors ma fonctionnalité est développée
Gerkin, Cucumber, ...


### Gherkin

```gherkin
Fonctionalité:
  En tant que joueur
  Je veux que mon pokemon puisse gagner une bataille
  Afin de devenir le meilleur dresseur du monde en avoir ma dose de dopamine

Scénario 1:
  Quand je choisi une bataille entre Pikachu et Salamèche
  Alors Pikachu gagne

Scénario 2:
  Quand je choisi une bataille entre Pikachu et Bulbizarre
  Alors Bulbizarre gagne
```



## Méthodologie de Développement 6

Behavior Driven Development


### BDD

<pre class="mermaid">
flowchart LR
  Z[Implementer test d'acceptance] --> W
  subgraph W[ ]
    A[Implémenter le test]
    B[Le test échoue]
    C[Implémenter la fonctionnalité]
    D[Le test passe]
    E[Refactor]
    F[Le test passe encore]
    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F -.-> A
  end
</pre>


### ATDD vs BDD

ATDD = Test d'acceptance + TDD
<br>
<br>
BDD = ATDD avec un vision orienté utilisateur final (Gherkin, Cucumber, ...)


### Les tests d'acceptance

Ces tests peuvent être implémenter manuellement, unitairement, intégration ou e2e.
<br>
<br>
Considérer ces tests comme uniquement e2e, bien que courant est une erreur.



## La pyramide de test

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="30rem" width="30rem">
  <polygon points="70.5 51, 29.5 51, 20 70, 80 70" fill="#27ae60"/>
  <text x="50" y="60" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Unit</text>
</svg>


## La pyramide de test

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="30rem" width="30rem">
  <polygon points="39.5 31, 60.5 31, 70 50, 30 50" fill="#f39c12"/>
  <text x="50" y="40" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Integration</text>

  <polygon points="70.5 51, 29.5 51, 20 70, 80 70" fill="#27ae60"/>
  <text x="50" y="60" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Unit</text>
</svg>


## La pyramide de test

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="30rem" width="30rem">
  <polygon points="50 10, 40 30, 60 30" fill="#e74c3c"/>
  <text x="50" y="20" text-anchor="middle" font-size="4" font-weight="bold" fill="white">E2E</text>

  <polygon points="39.5 31, 60.5 31, 70 50, 30 50" fill="#f39c12"/>
  <text x="50" y="40" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Integration</text>

  <polygon points="70.5 51, 29.5 51, 20 70, 80 70" fill="#27ae60"/>
  <text x="50" y="60" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Unit</text>
</svg>


## La pyramide de test

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="30rem" width="30rem">
  <path
    id='arrow-line'
    stroke-width='4'
    fill='none'
    stroke='white'  
    d='M0,10,0 90,100'
  />
  <text x="0" y="97" text-anchor="start" font-size="6" >🐇</text>
  <text x="0" y="7" text-anchor="start" font-size="6" >🐢</text>

  <polygon points="50 10, 40 30, 60 30" fill="#e74c3c"/>
  <text x="50" y="20" text-anchor="middle" font-size="4" font-weight="bold" fill="white">E2E</text>

  <polygon points="39.5 31, 60.5 31, 70 50, 30 50" fill="#f39c12"/>
  <text x="50" y="40" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Integration</text>

  <polygon points="70.5 51, 29.5 51, 20 70, 80 70" fill="#27ae60"/>
  <text x="50" y="60" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Unit</text>
</svg>


## La pyramide de test

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="30rem" width="30rem">
  <path
    id='arrow-line'
    stroke-width='4'
    fill='none'
    stroke='white'  
    d='M0,10,0 90,100'
  />
  <text x="0" y="97" text-anchor="start" font-size="6" >🐇</text>
  <text x="0" y="7" text-anchor="start" font-size="6" >🐢</text>
  <path
    id='arrow-line'
    stroke-width='4'
    fill='none'
    stroke='white'  
    d='M100,10,100 90,100'
  />
  <text x="100" y="97" text-anchor="end" font-size="6" >🎁</text>
  <text x="100" y="7" text-anchor="end" font-size="6">💸</text>

  <polygon points="50 10, 40 30, 60 30" fill="#e74c3c"/>
  <text x="50" y="20" text-anchor="middle" font-size="4" font-weight="bold" fill="white">E2E</text>

  <polygon points="39.5 31, 60.5 31, 70 50, 30 50" fill="#f39c12"/>
  <text x="50" y="40" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Integration</text>

  <polygon points="70.5 51, 29.5 51, 20 70, 80 70" fill="#27ae60"/>
  <text x="50" y="60" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Unit</text>
</svg>


## Anti-pattern

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="30rem" width="30rem">
  <path
    id='arrow-line'
    stroke-width='4'
    fill='none'
    stroke='white'  
    d='M0,10,0 90,100'
  />
  <text x="0" y="97" text-anchor="start" font-size="6" >🐇</text>
  <text x="0" y="7" text-anchor="start" font-size="6" >🐢</text>
  <path
    id='arrow-line'
    stroke-width='4'
    fill='none'
    stroke='white'  
    d='M100,10,100 90,100'
  />
  <text x="100" y="97" text-anchor="end" font-size="6" >🎁</text>
  <text x="100" y="7" text-anchor="end" font-size="6">💸</text>

  <polygon points="10 10, 90 10, 90 30, 10 30" fill="#e74c3c"/>
  <text x="50" y="20" text-anchor="middle" font-size="4" font-weight="bold" fill="white">E2E</text>

  <polygon points="90 31, 10 31, 10 50, 90 50" fill="#f39c12"/>
  <text x="50" y="40" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Integration</text>

  <polygon points="90 51, 10 51, 10 70, 90 70" fill="#27ae60"/>
  <text x="50" y="60" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Unit</text>
</svg>


## Anti-pattern

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="30rem" width="30rem">
  <path
    id='arrow-line'
    stroke-width='4'
    fill='none'
    stroke='white'  
    d='M0,10,0 90,100'
  />
  <text x="0" y="97" text-anchor="start" font-size="6" >🐇</text>
  <text x="0" y="7" text-anchor="start" font-size="6" >🐢</text>
  <path
    id='arrow-line'
    stroke-width='4'
    fill='none'
    stroke='white'  
    d='M100,10,100 90,100'
  />
  <text x="100" y="97" text-anchor="end" font-size="6" >🎁</text>
  <text x="100" y="7" text-anchor="end" font-size="6">💸</text>

  <polygon points="10 10, 90 10, 80 30, 20 30" fill="#e74c3c"/>
  <text x="50" y="20" text-anchor="middle" font-size="4" font-weight="bold" fill="white">E2E</text>

  <polygon points="79.5 31, 20.5 31, 30 50, 70 50" fill="#f39c12"/>
  <text x="50" y="40" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Integration</text>

  <polygon points="69.5 51, 30.5 51, 50 80" fill="#27ae60"/>
  <text x="50" y="60" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Unit</text>
</svg>


## D'autres modèle

![Outside Diamond](/slides_content/javascript_craftsmanship/outside_diamond.png)


## D'autres modèle

![Testing Trophy](/slides_content/javascript_craftsmanship/testing_trophy.png)



## TP 6

Les batailles de Pokémons s'affichent sur une page Web
<br>
<br>
Mais avant, définissons ensemble quel est la stratégie de test pour ce projet.



## Tester un composants

Un composant, c'est quoi ?


### La vue

<pre class="mermaid">
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px,color:#000;
  style B fill:#42b983,stroke:#333,stroke-width:2px,color:#000;
  A[Component] --> B[View]
</pre>


### La vue

```js
it('should render hello world', () => {
  const component = render(Component)

  expect(component.html()).toBe('<h1>Hello World</h1>')
})
```


### Les props

<pre class="mermaid">
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px,color:#000;
  style B fill:#42b983,stroke:#333,stroke-width:2px,color:#000;
  style Props fill:#f39c12,stroke:#333,stroke-width:2px,color:#000;
  Props --> A
  A[Component] --> B[View]
</pre>


### Les props

```js
it('should render "hello world"', () => {
  const component = render(Component)
  // render(<Component />)
  expect(component.html().getElementByRole('heading')).toBe('Hello World')
})

it('should render "hello florent"', () => {
  const component = render(Component, { props: { name: 'florent' } })
  // render(<Component name="florent" />)
  expect(component.html().getElementByRole('heading')).toBe('Hello florent')
})
```


### Les interactions

<pre class="mermaid">
graph LR
  style Component fill:#4fa3ff,stroke:#333,stroke-width:2px,color:#000;
  style View fill:#42b983,stroke:#333,stroke-width:2px,color:#000;
  style Props fill:#f39c12,stroke:#333,stroke-width:2px,color:#000;
  style Event fill:#e74c3c,stroke:#333,stroke-width:2px,color:#000;
  Props --> Component
  Component --> View
  View --> Component
  Component --> Event
</pre>


## Les interactions

```jsx
it('should emit onShare when click on share button', () => {
  const spy = vi.fn()
  const component = render(Component, { events: { onShare: spy } })
  // render(<Component onShare={spy} />)

  component.getElementByRole('button').dispatchEvent('click')

  expect(spy).toHaveBeenCalled()
})
```


### Stateful

<pre class="mermaid">
graph LR
  style Component fill:#4fa3ff,stroke:#333,stroke-width:2px,color:#000;
  style View fill:#42b983,stroke:#333,stroke-width:2px,color:#000;
  style Props fill:#f39c12,stroke:#333,stroke-width:2px,color:#000;
  Props --> Component
  Component --> View
  View --> Component
</pre>


### Stateful

```js
describe('share button', () => {
  it('should not highlight the shared button when content never shared', () => {
    const component = render(Component)
    // render(<Component />)

    expect(component.html().querySelector('button').props.class).not.toContain(
      'shared',
    )
  })

  it('should highlight the shared button when share the content', () => {
    const component = render(Component)
    // render(<Component />)

    component.querySelector('button').dispatchEvent('click')

    expect(component.html().querySelector('button').props.class).toContain(
      'shared',
    )
  })
})
```


### Restez vagues

```js
it('should display the captain\'s age', () => {
  render(<MyComponent />)

  expect(screen.getRole('heading'))
    .toHaveTextContent('21 ans et toutes ses dents !')
})
```

```js
it('should display the captain\'s age', () => {
  render(<MyComponent />)

  expect(screen.getByText('21 ans et toutes ses dents !'))
    .toBeVisible()
})
```


### Chargement...

Se mettre à la place d'un utilisateur qui voit TOUT en slow motion
```js
it('should display the captain\'s age', async () => {
  render(<MyComponent />)

  await waitForElementToBeRemoved(() => screen.queryByText('loading...'));

  expect(screen.getByText('21 ans et toutes ses dents !')).toBeVisible();
})
```



## Tester des composants, en pratique


Plusieurs outils existent :
- Testing Library
- Vue Test Utils
- Angular Testing utilities
- ...


### Testing library

<iframe src="https://testing-library.com/docs/react-testing-library/intro/" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>


### Live coding

- [React](https://stackblitz.com/edit/vitejs-vite-ss8jjkow?file=src%2FLikeButton%2FLikeButton.jsx)
- Vue (pas de stackblitz pour le moment)
- Angular (pas de stackblitz pour le moment)


### Mock d'appels API

2 stratégies possibles :
  - Mock de fetch ou axios ou autre à la main
  - MSW (Mock Service Worker)



## Exercice 6

Testez au moins un composant qui fait une requête HTTP vers la pokéAPI



## Stratégie de test d'applications

![Chicago VS Londre](/slides_content/javascript_craftsmanship/chicago_london.png)


## Londre

Outside-in

<div style="display: flex; gap: 2rem; align-items: center; justify-content: center;">
  <pre class="mermaid">
stateDiagram-v2
    A --> B
    A --> C
    A --> D
    B --> E
    B --> F
    D --> G
    D --> H
    D --> I
  </pre>
  <div style="font-size: 4rem;">⬆️</div>
</div>


## Chicago

Inside-out

<div style="display: flex; gap: 2rem; align-items: center; justify-content: center;">
  <pre class="mermaid">
stateDiagram-v2
    A --> B
    A --> C
    A --> D
    B --> E
    B --> F
    D --> G
    D --> H
    D --> I
  </pre>
  <div style="font-size: 4rem;">⬇️</div>
</div>



## TP Bonus (7)

Testez le reste de votre application en choisi la méthode que vous voulez utiliser 



## Les autres tests

Est-ce qu'il y'a des tests moins cher que les tests unitaires ?


## Prettier

<iframe src="https://prettier.io/playground" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>


## ESLint

<iframe src="https://eslint.org/" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>


## Stylelint

<iframe src="https://stylelint.io/" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>


## LS Lint

<iframe src="https://ls-lint.org/" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>


## Detecteur de code mort

<iframe src="https://knip.dev/" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>


## Typescript

![Image rigolote d'un dev qui étiquette tout comme TypeScript](/slides_content/javascript_craftsmanship//typescript_monk.png)


## La pyramide de test complète

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="30rem" width="30rem">
  <path
    id='arrow-line'
    stroke-width='4'
    fill='none'
    stroke='white'  
    d='M0,10,0 90,100'
  />
  <text x="0" y="97" text-anchor="start" font-size="6" >🐇</text>
  <text x="0" y="7" text-anchor="start" font-size="6" >🐢</text>
  <path
    id='arrow-line'
    stroke-width='4'
    fill='none'
    stroke='white'  
    d='M100,10,100 90,100'
  />
  <text x="100" y="97" text-anchor="end" font-size="6" >🎁</text>
  <text x="100" y="7" text-anchor="end" font-size="6">💸</text>

  <polygon points="50 10, 40 30, 60 30" fill="#e74c3c"/>
  <text x="50" y="20" text-anchor="middle" font-size="4" font-weight="bold" fill="white">E2E</text>

  <polygon points="39.5 31, 60.5 31, 70 50, 30 50" fill="#f39c12"/>
  <text x="50" y="40" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Integration</text>

  <polygon points="70.5 51, 29.5 51, 20 70, 80 70" fill="#27ae60"/>
  <text x="50" y="60" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Unit</text>

  <polygon points="19.5 71, 80.5 71, 90 90, 10 90" fill="#2d4ca1"/>
  <text x="50" y="80" text-anchor="middle" font-size="4" font-weight="bold" fill="white">Statique</text>
</svg>



## Tests E2E

Plusieurs Acteurs :

- Selenium
- WebDriver.io
- Cypress
- PlayWright
- Nightwatch


### Cypress

<iframe src="https://www.cypress.io" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>


### Playwright

<iframe src="https://playwright.dev/" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>


## Mutation Testing

<iframe src="https://stryker-mutator.io/docs/mutation-testing-elements/supported-mutators/#arithmetic-operator" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>


## Test de charge

<iframe src="https://www.artillery.io/docs/get-started/first-test" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>



## Des astuces pour travailer en équipe


### Code review

Quel est l'intérêt de faire une revue de code ?


### Pair programming

Réduit la productivité d'équipe de 20%
<br>
<br>
Augmente la qualité de 80%


### Mob programming

Toute l'équipe sur un seul ordinateur.


### Pomodoro

Toutes les X minutes, celui qui a le clavier change.


### Strong-Style

Celui qui écrit c'est celui qui ne pense pas.

<pre class="mermaid">
flowchart TD
    Dev1 --> Dev2
    Dev3 --> Dev2
    Dev2 === Ordi
</pre>


### Attaque-défense

L'un code des tests pour piéger celui qui code.



### Conclusion

Attention aux dogmes !
<br>
<br>
<br>
<br>
PS: ceci est un dogme 🙃


### Conclusion

florent@berthelot.io

berthelot.io

@FBerthelot sur GitHub



## Bonus


### Automate all the things

> 3 commandes max et je peux dev

> Toutes ce qui est lancé sur la CI/CD peut être lancé sur mon poste


### Pensez pyramide

```json
{
  "script": {
    "test:static": "prettier && eslint && knip",
    "test:unit": "vitest",
    "test:int": "vitest --config vitest.int.config.js",
    "test:e2e": "playwrite",
    "test": "npm run test:static && npm run test:unit && npm run test:int && npm run test:e2e",
    "build": "vite .",
    "deliver": "docker push",
    "deploy": "clevercloud start image ..."
  }
}
```


### Continuous Integration

Permet de vérifier que tout nouveau code ou ancien code


```yaml
name: Continous Integration on PR

on: ['pull_request']
jobs:
  build-and-test:
    concurrency: ci-${{ github.ref }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Install Node.js 🌍
        uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: Install and Build 🔧
        run: |
          npm ci
          npm run build

      - name: Tests ✅
        run: |
          npm run test

```
github action ⬆


### Continuous Delivery

Uniquement si la CI passe, on met à disposition notre build quelque part.


### Continuous Deployment

Si la CI passe Et que le Continous Delivery, on déploi quelque part.
