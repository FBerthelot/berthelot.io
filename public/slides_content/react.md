# Formation React



**Florent Berthelot**

- Consultant - ESN
- Consultant Formateur - ESN
- Freelance (WeFacto, Human Coder)

Web Software Craftsman

[https://berthelot.io](https://berthelot.io)



## Programme

```
- Jour 1
    - Rappels JavaScript
    - Découverte de React
- Jour 2
    - COMPOSANTS
- Jour 3
    - Routing
    - Les effets de bords, ...
```


## Travaux pratiques

Je ne donne les corrections qu'à la fin de la formation.
Les solutions sont toujours multiples.

Posez-moi des questions.


##  Bataille de Pokémon !

[http://pokemon.lux.frachet.berthelot.io/](http://pokemon.lux.frachet.berthelot.io/)

<iframe  src="http://pokemon.lux.frachet.berthelot.io/" frameborder="0"></iframe>


## Informations pratique

- Matin : 9h - 12h30
- Après-midi : 14h - 17h30

Demandez des pauses.

Nous nous notons mutuellement !

N'oubliez pas d'émarger sur le site de Human Coder.



### Rappels

Quel est la nouveauté qui vous a plus le plu dans la dernière version de JavaScript ?


## TC39

[Lien vers la formation JavaScript](./javascript#/2)


## Les ESmodules

[Lien vers les modules JavaScript](https://slides.com/florentberthelot/les-modules-javascript/)



### TP 1

Créez une page Web, pour l'instant Vide.
Cette page charge un fichier JS et aussi ceci :

```html
<!-- Votre page HTML -->

<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

<!-- Votre page HTML -->
```



### Pourquoi faire un Framework JS ?


### Qui est derrière ?

Meta

...

mais depuis Octobre 2025, React Foundation


### Popularité

![React Popularity](/slides_content/react/stats.png)


### Pourquoi c'est populaire ?

- Stable
- Stable
- JSX
- Assez performant
- Simple !
- Progressive Framework ou Lib


### Le positionnement de React

React
<br/><br/>
Vue.js
<br/><br/>
Angular



### "Hello World"

```html
<div id="my-react-application"></div>
```

```javascript
const domContainer = document.querySelector('#my-react-application');

const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement('h1', {}, 'Hello world'));
```



## TP2

Démarrer React pour afficher votre nom sur la page Web



## JSX

```html
<div id="my-react-application"></div>
```

```javascript
const domContainer = document.querySelector('#my-react-application');

const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement('h1', {}, 'Hello world'));
```


## Plus

```javascript
const domContainer = document.querySelector('#my-react-application');

const root = ReactDOM.createRoot(domContainer);
root.render(
  React.createElement('main', {},
  [
    React.createElement('header', {},
       React.createElement('h1', {}, 'Hello world')
    ),
    React.createElement('section', {}, 'lorem ipsum')
  ])
, domContainer);
```


## Encore plus ?

```javascript
const domContainer = document.querySelector('#my-react-application');

const root = ReactDOM.createRoot(domContainer);
root.render(
  React.createElement('main', {},
  [
    React.createElement('header', {},
       React.createElement('h1', {}, 'Hello world')
    ),
    /** ... **/
    React.createElement('section', {},
       React.createElement('article', {}, [
        React.createElement('p', {}, 'lorem ipsum'),
        React.createElement('p', {}, 'lorem ipsum')
       ]),
       React.createElement('article', {}, [
        React.createElement('p', {}, 'lorem ipsum'),
        React.createElement('p', {}, 'lorem ipsum')
       ])
    )
    /** ... **/
  ])
, domContainer);
```


## JSX à la rescousse

```javascript
const domContainer = document.querySelector('#my-react-application');

const root = ReactDOM.createRoot(domContainer);
root.render(
  <main>
    <header>
      <h1>Hello world</h1>
    </header>
    {/** ... **/}
    <section>
      <article>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
      </article>
      <article>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
      </article>
    </section>
    {/** ... **/}
  </main>
, domContainer);
```



## Outillage Node.js

[https://slides.com/florentberthelot/outillage-node-js](https://slides.com/florentberthelot/outillage-node-js)



## TP3

Ajoutez et configurez ces outils :

```markdown
- NVM
- NPM
- GIT
- JEST
- Babel / SWC
- Vite / Webpack
- ESLINT
- PRETTIER
- Installer React
- ... ?
```


## Flemme ?

<iframe src="https://create-react-app.dev" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>


## De nouvelles alternatives officielles

<iframe src="https://react.dev/learn/build-a-react-app-from-scratch" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>



## TP3

Initialisez le projet avec Create React App

Observez le code et les outils qui ont été généré.

Changez le contenu de la Page pour afficher votre nom.


## TP3 - V2

Initialisez le projet avec Vite

```bash
npm create vite@latest pokemonArena -- --template react
```



## Template


### Qu'est ce qu'un composant ?

```html
<LikeButton></LikeButton>
```

ou

```html
<LikeButton />
```


### Qu'est ce qu'un composant ?

```html
<!-- Composant Parent -->
<LikeButton></LikeButton>
```

<br/>

```mermaid
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px
  A[Component]
```


### Qu'est ce qu'un composant ?

```html
<!-- Composant Parent -->
<LikeButton></LikeButton>
```

```jsx
// like.component.jsx
const LikeButton = () => {
  return <button>O j'aime</button>;
}
```

<br/>

```mermaid
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px
  style B fill:#42b983,stroke:#333,stroke-width:2px
  A[Component] --> B[View]
```


## Améliorons notre code !

```jsx
// like.component.jsx
const LikeButton = () => {
  const nbOfLike = 0;

  return <button>{nbOfLike} j'aime</button>;
}
```

<br/>

```mermaid
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px
  style B fill:#42b983,stroke:#333,stroke-width:2px
  A[Component] --> B[View]
```


## Améliorons notre code !

```jsx
// like.component.jsx
const LikeButton = () => {
  const nbOfLike = 0;

  return <button>{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}</button>;
}
```

<br/>

```mermaid
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px
  style B fill:#42b983,stroke:#333,stroke-width:2px
  A[Component] --> B[View]
```


## Et la sémantique ?

```jsx
// like.component.jsx
const LikeButton = () => {
  const nbOfLike = 0;

  return (
    <button type="button">
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```

<br/>

```mermaid
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px
  style B fill:#42b983,stroke:#333,stroke-width:2px
  A[Component] --> B[View]
```


## Et le style ?

```jsx
// like.component.jsx
const LikeButton = () => {
  const nbOfLike = 0;

  return (
    <button type="button" className="btn-primary">
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```

<br/>

```mermaid
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px
  style B fill:#42b983,stroke:#333,stroke-width:2px
  A[Component] --> B[View]
```


## Mieux ?

```jsx
// like.component.jsx
const LikeButton = () => {
  const nbOfLike = 0;
  const liked = true;

  return (
    <button type="button" className="btn-primary" style={{color: liked ? 'red' : 'grey'}}>
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```

<br/>

```mermaid
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px
  style B fill:#42b983,stroke:#333,stroke-width:2px
  A[Component] --> B[View]
```


## Encore mieux ?

```jsx
// like.component.jsx
const LikeButton = () => {
  const nbOfLike = 0;
  const liked = true;

  return (
    <button type="button" className={`btn-primary ${liked ? 'btn-liked' : ''}`}>
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```

<br/>

```mermaid
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px
  style B fill:#42b983,stroke:#333,stroke-width:2px
  A[Component] --> B[View]
```



## TP4

Créez la structure HTML de votre arène de Pokémon.
Une arène se compose de deux Pokémons qui s'affrontent.
<br/><br/>
Pour l'instant, l'écran est figé.
Il n'y a qu'un seul composant Arène.



## Tester

[https://slides.com/florentberthelot/javascript-craftmanship/](https://slides.com/florentberthelot/javascript-craftmanship/)


## Testing library

<iframe src="https://testing-library.com/docs/react-testing-library/intro/" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>


## Live coding

[Lien perso](https://stackblitz.com/edit/vitejs-vite-ss8jjkow?file=src%2FLikeButton%2FLikeButton.jsx)


## Le resultat du live coding

```jsx
import { render, screen } from "@testing-library/react"
import { LikeButton } from "./likeButton"

describe('LikeButton', () => {
    it("should display 0 like", () => {
        render(<LikeButton />)

        expect(screen.getByText('0 like')).toBeVisible()
    })
})
```



## TP5

Réparez vos tests.


## TP5 - V2

Ajoutez Vitest a votre projet et écrivez un test pour s'assurer que les 2 pokémons ont bien toutes leurs vies.



## Les Props


### Comment passer des données ?

```html
<!-- Composant Parent -->
<LikeButton></LikeButton>
```

```jsx
// like.component.jsx
const LikeButton = () => {
  const nbOfLike = 0;
  const liked = true;

  return (
    <button type="button" className={`btn-primary ${liked ? 'btn-liked' : ''}`}>
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```

<br/>

```mermaid
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px
  style B fill:#42b983,stroke:#333,stroke-width:2px
  A[Component] --> B[View]
```


### Comment passer des données ?

```html
<!-- Composant Parent -->
<LikeButton liked={true} nbOfLike={1} />
```

```jsx
// like.component.jsx
const LikeButton = (props) => {
  const nbOfLike = props.nbOfLike;
  const liked = props.liked;

  return (
    <button type="button" className={`btn-primary ${liked ? 'btn-liked' : ''}`}>
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```

<br/>

```mermaid
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px
  style B fill:#42b983,stroke:#333,stroke-width:2px
  style Props fill:#f39c12,stroke:#333,stroke-width:2px
  Props --> A
  A[Component] --> B[View]
```


### Mieux ?

```html
<!-- Composant Parent -->
<LikeButton liked nbOfLike={1} />
```

```jsx
// like.component.jsx
const LikeButton = (props) => {
  const nbOfLike = props.nbOfLike;
  const liked = props.liked;

  return (
    <button type="button" className={`btn-primary ${liked ? 'btn-liked' : ''}`}>
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```

<br/>

```mermaid
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px
  style B fill:#42b983,stroke:#333,stroke-width:2px
  style Props fill:#f39c12,stroke:#333,stroke-width:2px
  Props --> A
  A[Component] --> B[View]
```


## Destructuring ?!

```html
<!-- Composant Parent -->
<LikeButton liked nbOfLike={1} />
```

```jsx
// like.component.jsx
const LikeButton = ({
  nbOfLike,
  liked
}) => {
  return (
    <button type="button" className={`btn-primary ${liked ? 'btn-liked' : ''}`}>
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```

<br/>

```mermaid
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px
  style B fill:#42b983,stroke:#333,stroke-width:2px
  style Props fill:#f39c12,stroke:#333,stroke-width:2px
  Props --> A
  A[Component] --> B[View]
```



## TP6

Séparez en plusieurs composants l'arène.
Passez des données entre les composants.



## State

Et effets de bords


## State

```html
<!-- Composant Parent -->
<LikeButton />
```

```jsx
// like.component.jsx
const LikeButton = () => {
  const nbOfLike = 0;

  return (
    <button type="button">
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```

<br/>

```mermaid
graph LR
  style A fill:#4fa3ff,stroke:#333,stroke-width:2px
  style B fill:#42b983,stroke:#333,stroke-width:2px
  style Props fill:#f39c12,stroke:#333,stroke-width:2px
  Props --> A
  A[Component] --> B[View]
```


![React archi](/slides_content/react/react-archi.png)


## State

```jsx
// like.component.jsx
const LikeButton = () => {
  const NbLikeState = React.useState(0);

  return (
    <button type="button">
    	{NbLikeState[0]} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```

<br/>

```mermaid
graph LR
  style Component fill:#4fa3ff,stroke:#333,stroke-width:2px
  style View fill:#42b983,stroke:#333,stroke-width:2px
  style Props fill:#f39c12,stroke:#333,stroke-width:2px
style state fill:#a685e2,stroke:#333,stroke-width:2px
  subgraph Component
    state
  end
  Props --> Component
  Component --> View
```


## Destructuring ?!

```jsx
// like.component.jsx
const LikeButton = () => {
  const [nbOfLike, setNbOfLike] = React.useState(0);

  return (
    <button type="button">
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```

<br/>

```mermaid
graph LR
  style Component fill:#4fa3ff,stroke:#333,stroke-width:2px
  style View fill:#42b983,stroke:#333,stroke-width:2px
  style Props fill:#f39c12,stroke:#333,stroke-width:2px
style state fill:#a685e2,stroke:#333,stroke-width:2px
  subgraph Component
    state
  end
  Props --> Component
  Component --> View
```


## Instant bonne pratique

> Tout ce qui est dans un React.useState doit être totalement indépendant des autres useState.


## Effets de bord

Qu'est ce qu'un effet de bords ?

```jsx
const Timer = () => {
  const [ellapsedTime, setEllapsedTime] = React.useState(0);


  return <span>Il s'est passé {ellapsedTime} secondes.</span>;
}
```

<br/>

```mermaid
graph LR
  style Component fill:#4fa3ff,stroke:#333,stroke-width:2px
  style View fill:#42b983,stroke:#333,stroke-width:2px
  style Props fill:#f39c12,stroke:#333,stroke-width:2px
style state fill:#a685e2,stroke:#333,stroke-width:2px
  subgraph Component
    state
  end
  Props --> Component
  Component --> View
```


## UseEffect

```jsx
const Timer = () => {
  const [ellapsedTime, setEllapsedTime] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setEllapsedTime((ellapsedTime) => ellapsedTime + 1);
    }, 1000)
  }, [])


  return <span>Il s'est passé {ellapsedTime} secondes.</span>;
}
```

<br/>

```mermaid
graph LR
  style Component fill:#4fa3ff,stroke:#333,stroke-width:2px
  style View fill:#42b983,stroke:#333,stroke-width:2px
  style Props fill:#f39c12,stroke:#333,stroke-width:2px
style state fill:#a685e2,stroke:#333,stroke-width:2px
  subgraph Component
    state
  end
  Props --> Component
  Component --> View
```


## Quel est le problème dans l'exemple précédent ?


## Fuite de mémoire !

```jsx
const Timer = () => {
  const [ellapsedTime, setEllapsedTime] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setEllapsedTime((ellapsedTime) => ellapsedTime + 1);
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [])


  return <span>Il s'est passé {ellapsedTime} secondes.</span>;
}
```

<br/>

```mermaid
graph LR
  style Component fill:#4fa3ff,stroke:#333,stroke-width:2px
  style View fill:#42b983,stroke:#333,stroke-width:2px
  style Props fill:#f39c12,stroke:#333,stroke-width:2px
style state fill:#a685e2,stroke:#333,stroke-width:2px
  subgraph Component
    state
  end
  Props --> Component
  Component --> View
```



## TP7

Les Pokémons s'attaquent maintenant à raison d'une attaque (ou tour) par seconde.

(Pour l'instant seul les points de vies changent)



## Les évènements


### Comment écouter le click ?

```jsx
// like.component.jsx
const LikeButton = () => {
  const [nbOfLike, setNbOfLike] = React.useState(0);

  return (
    <button type="button">
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```

<br/>

```mermaid
graph LR
  style Component fill:#4fa3ff,stroke:#333,stroke-width:2px
  style View fill:#42b983,stroke:#333,stroke-width:2px
  style Props fill:#f39c12,stroke:#333,stroke-width:2px
style state fill:#a685e2,stroke:#333,stroke-width:2px
  subgraph Component
    state
  end
  Props --> Component
  Component --> View
```


## onClick ! (camelCase)

```jsx
// like.component.jsx
const LikeButton = () => {
  const [nbOfLike, setNbOfLike] = React.useState(0);

  return (
    <button type="button" onClick={() => setNbOfLike(nbOfLike++)}>
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```

<br/>

```mermaid
graph LR
  style Component fill:#4fa3ff,stroke:#333,stroke-width:2px
  style View fill:#42b983,stroke:#333,stroke-width:2px
  style Props fill:#f39c12,stroke:#333,stroke-width:2px
style state fill:#a685e2,stroke:#333,stroke-width:2px
  subgraph Component
    state
  end
  Props --> Component
  Component ---> View
  View --Event--> Component
```


## Ses propres évènements ?

```jsx
const Tweet = () => {
  const [nbOfLikes, setNbOfLikes] = useState(0);
  return <LikeButton nbOfLikes={nbOfLikes} onLike={() => setNbOfLikes(nbOfLikes++)} />
}
```

```jsx
// like.component.jsx
const LikeButton = ({onLike, nbOfLike}) => {

  return (
    <button type="button" onClick={() => onLike()}>
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```

<br/>

```mermaid
graph LR
  style Component fill:#4fa3ff,stroke:#333,stroke-width:2px
  style View fill:#42b983,stroke:#333,stroke-width:2px
  style Props fill:#f39c12,stroke:#333,stroke-width:2px
style state fill:#a685e2,stroke:#333,stroke-width:2px
  subgraph Component
    state
  end
  Props --> Component
  Component ---> View
  View --Event--> Component
```


## Comment tester des évènements ?

L'empathie !


## Comment tester des évènements ?

```jsx
import { fireEvent, render, screen } from '@testing-library/react';

it('should display 1 like when cliking on the button', () => {
  render(<LikeButton />);

  screen.fireEvent(screen.getByRole('button'))

  expect(screen.getByText('1 like')).toBeVisible()
})
```


## Alternative plus complète

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

it('should display 1 like when cliking on the button', async () => {
  render(<LikeButton />);

  await userEvent.click(screen.getByRole('button'));

  screen.getByText('1 like');
})
```



## TP8

Ajoutez un boutton Play/Pause.

Par défaut, le combat est en pause.



## Props #2

Validation et valeurs par défault


### Valeurs par défaut

```jsx
const LikeButton = ({
  onLike = () => {},
  nbOfLike = 0
}) => {
  return (
    <button type="button" onClick={() => onLike()}>
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```


### Valeurs par défaut

```jsx
const LikeButton = ({onLike, nbOfLike}) => {
  return (
    <button type="button" onClick={() => onLike()}>
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}

LikeButton.defaultProps = {
	onLike: () => {},
	nbOfLike: 0
}
```


### Validation des Props

```jsx
import PropTypes from 'prop-types';

const LikeButton = ({onLike, nbOfLike}) => {
  return (
    <button type="button" onClick={() => onLike()}>
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}

LikeButton.defaultProps = {
	nbOfLike: 0
}

LikeButton.proptypes = {
  onLike: PropTypes.func.isRequired,
  nbOfLike: PropTypes.number
}
```



## Trucs et astuces

Boucles, affichage conditionnel, ...


## Les fragments

```jsx
const Tweets = () => {
    const datas = [/* ... */]
    return (
      <React.Fragment>
        <Tweet data={datas[0]}/>
        <Tweet data={datas[1]}/>
      </React.Fragment>
    )
}
```


## Les fragments

```jsx
const Tweets = () => {
    const datas = [/* ... */]
    return (
      <>
        <Tweet data={datas[0]}/>
        <Tweet data={datas[1]}/>
      </>
    )
}
```


## Boucles

```jsx
const Tweets = () => {
  const items = [
    {id: 1, price: 10_00},
    {id: 2, price: 150_00}
  ]
  return (
    <ul>
      {items.map((item) => {
        return <li>{item.price}</li>;
      })}
    </ul>
  )
}
```


## Boucles

```jsx
const Tweets = () => {
  const items = [
    {id: 1, price: 10_00},
    {id: 2, price: 150_00}
  ]
  return (
    <ul>
      {items.map((item) => {
        return <li key={item.id}>{item.price}</li>;
      })}
    </ul>
  )
}
```
Important !
Fait l'objet d'une règle ESLint


## Boucles, autre exemple

```jsx
const Tweets = () => {
  const tweets = [
    {id: 1, message: 'coucou' /* ...*/ },
    {id: 2, message: 'un thread !' /* ...*/ }
  ]
  return (
    <section>
      {tweets.map(tweet => {
        return <Tweet key={tweet.id} tweet={tweet}/>;
      })}
    </section>
  )
}
```


## Affichage conditionnel

```jsx
const Tweets = ({
  isUserTweet
}) => {
  return (
    <article>
      {/* ... */}
      {
        isUserTweet ?
           <EditButton /> :
           null
      }
    </article>
  )
}
```


## Affichage conditionnel

```jsx
const Tweets = ({
  isUserTweet
}) => {
  return (
    <article>
      {/* ... */}
      {isUserTweet && <EditButton />}
    </article>
  )
}
```

[Attention, possible pièges](https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx)


### Transclusion, children, ...

```jsx
const Parent = () => {
  return (
    <Modal>
    	<h2>lorem ipsum</h2>
    	<button>close</button>
    </Modal>
}

const Modal = ({children}} => {
  return (
    <div className="modal">
	  {children}
    </div>
  )
}
```


### Destructuring

```jsx
const TweetPage = () => {
	const tweets = [{
		id: 1,
		message: "destructuring ?",
		isLiked: false,
		nbOfLike: 0,
		image: "http://placeholder.com/random.jpg"
	}]

	return (
	<section>
		{tweets.map(tweet => {
		return <Tweet
			key={tweet.id}
			message={tweet.message}
			isLiked={tweet.isLiked}
			nbOfLike={tweet.nbOfLike}
			image={tweet.image}
			/>
		})}
	</section>
	)
}
```


## Destructuring

```jsx
const TweetPage = () => {
	const tweets = [{
		id: 1,
		message: "destructuring ?",
		isLiked: false,
		nbOfLike: 0,
		image: "http://placeholder.com/random.jpg"
	}]

	return (
		<section>
			{tweets.map(tweet => {
				return <Tweet key={tweet.id} {...tweet} />
			})}
		</section>
	)
}
```



## TP9

Améliorez votre code.
<br/>
Afficher les logs de la bataille sur la page.
<br/>
Maintenant le Pokemon vaincu se voit graphiquement.



## Le Legacy

Les classes components


### Classe Component

```jsx
class LikeComponent extends React.Component {
  render() {
    return (
       <button type="button">
        0 j'aime
       </button>
    );
  }
}
```


### Props dans une classe Component

```jsx
class LikeComponent extends React.Component {
  render() {
    const {nbOfLike} = this.props
    return (
       <button type="button">
        {nbOfLike} j'aime
       </button>
    );
  }
}
```


### State dans une classe Component

```jsx
class LikeComponent extends React.Component {
  state = {
    nbOfLike: 0
  }

  constructor() {
    super();
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    this.setState({
      nbOfLike: this.state.nbOfLike + 1
    })
  }

  render() {
    return (
       <button type="button" onClick={this.handleLike}>
        {this.state.nbOfLike} j'aime
       </button>
    );
  }
}
```


### Gestion d'erreur

```jsx
const Tweet = () => {
  return (
    <ErrorBoundary>
      <LikeButton />
    </ErrorBoundary>
  )
}

const LikeButton = () => {
  throw new Error('Not Implemented');
}
```


### Gestion d'erreur

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    sendErrorToSentry(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Page d'erreur.</h1>;
    }

    return this.props.children;
  }
}
```



## TP10

Créer un composant ErrorBoundary qui affiche un message d'erreur à l'utilisateur et qui dans le même temps afficher l'erreur dans la console du navigateur.
<br/>
<br/>
Pour tester, modifiez un composant pour qu'il renvoi une erreur.
<br/>
Qu'observez-vous ?



## Cycle de vie d'un composant

- Mount
- Updates
    - (Errors)
- Unmount


### Classe Component

```jsx
class LikeComponent extends React.Component {
  state = {
    nbOfLike: 0
  }

  constructor() {
    super();
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    this.setState({
      nbOfLike: this.state.nbOfLike + 1
    })
  }

  render() {
    return (
       <button type="button" onClick={this.handleLike}>
        {this.state.nbOfLike} j'aime
       </button>
    );
  }
}
```


### Cycle de vie - Mount

```jsx
class LikeComponent extends React.Component {
  state = {
    nbOfLike: 0
  }

  constructor() {
    super();
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    this.setState({
      nbOfLike: this.state.nbOfLike + 1
    })
  }

  componentDidMount() {
    sendDataToAnalytics();
  }

  render() {
    return (
       <button type="button" onClick={this.handleLike}>
       	{this.state.nbOfLike} j'aime
       </button>
    );
  }
}
```


### Mount

- constructor
- getDerivedStateFromProps
- render
- componentDidMount


### Updates

- getDerivedStateFromProps
- shouldComponentUpdate
- getSnapshotBeforeUpdate
- render
- componentDidUpdate


### Unmount

- ComponentWillUnmount



## Les hooks

Enfin l'explication !


### Règle #1

> Toujours appeler les hooks depuis un composant React.


### Règle #2

> Toujours appeler les hooks au plus haut niveau de la fonction de rendu.
<br/>
(Pas dans une boucle, pas dans un if, etc.)


### Pourquoi les hooks ?

1. Découper le code
2. &nbsp;
2. &nbsp;


### Pourquoi les hooks ?

1. Découper le code
2. Donner du sens au code <br> (on ne parle plus technique mais métier)
2. &nbsp;


### Pourquoi les hooks ?

1. Découper le code
2. Donner du sens au code <br> (on ne parle plus technique mais métier)
2. Partager de la logique entre les composants


### UseState

```jsx
const LikeButton = () => {
  const [nbOfLike, setNbOfLike] = React.useState(0);

  return (
    <button type="button">
    	{nbOfLike} j'aime{nbOfLike > 1 ? 's' : ''}
    </button>;
  );
}
```


### UseMemo

```jsx
const Einstein = () => {
  const result = React.useMemo(() => whatIsTheLifeGoal(), []);

  return result;
}
```


### UseMemo

```jsx
const Einstein = ({
  humanName
}) => {
  const result = React.useMemo(
    () => whatIsTheLifeGoal(humanName),
    [humanName]
  );

  return result;
}
```


### UseMemo

```jsx
const Einstein = ({
  humanName
}) => {
  const result = React.useMemo(() => whatIsTheLifeGoal(humanName));

  return result;
}
```


### useEffect

```jsx
const Tweet = ({id}) => {
  useEffect(() => {
   	console.log('A new render occured');
  })

  return result;
}
```


### useEffect

```jsx
const Tweet = ({id}) => {
  useEffect(() => {
   	console.log('Id changed', id);
  }, [id])

  return result;
}
```


### useEffect

```jsx
const Tweet = ({id}) => {
  useEffect(() => {
   	console.log('Initial id', id);
  }, [])

  return result;
}
```


### UseCallback

```jsx
const TweetEdit = ({id}) => {
  const handleSubmit = useCallback(() => {
    fetch(`addTweet?userId=${id}`)
  }, [id])

  return <TweetForm onSubmit={handleSubmit} />;
}
```


### Un hook custom ?

```jsx
const TweetEdit = ({id}) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onInput = (e) => {
    setInputValue(e.target.value);
  }

  return <input type="text" onInput={onInput} value={inputValue} />;
}
```


### Un hook custom !

```jsx
const useInput = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onInput = (e) => {
    setInputValue(e.target.value);
  }

  return [inputValue, onInput];
}

const TweetEdit = ({id}) => {
  const [value, onInput] = useInput()

  return <input type="text" onInput={onInput} value={value} />;
}
```


### Les autres hooks

<iframe src="https://react.dev/reference/react/hooks" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>



## TP11

Déplacez la logique de bataille dans un hook custom.



## Les appels HTTP


## Les appels HTTP

Il n'y a pas de manière officiel pour récupérer des données


###  Fetch API

```jsx
const Tweet = () => {
  const [fetchState, setFetchState] = useState({
    error: null,
    data: null,
  	isLoading: true
  });
  
  useEffect(() => {
    fetch('/people.json')
    	.then(res => res.json())
    	.then(data => {
      		setFetchState({
              data,
              isLoading: false
            })      
		});
    	})
        .catch(err => {
        	setFetchState({
            	error: err,
              	isLoading: false
            })      
		});
  }, [])
  
  
  if(fetchState.isLoading) {
    return 'loading...':
  }

  if(fetchState.error) {
    return <>Refresh page</>
  }

  return <>{fetchState.data}</>
}
```


### Fetch API Généralisation

```jsx
const useQuery = (url) => {
  const [fetchState, setFetchState] = useState({
    error: null,
    data: null,
    isLoading: true
  });
  
  useEffect(() => {
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('bouu')
        }
        return res
      })
    	.then(res => res.json())
    	.then(data => {
          setFetchState({
            data,
            isLoading: false
          })
    	})
        .catch(err => {
          setFetchState({
            error: err,
            isLoading: false
          })
    	});
  }, [])
  
  return fetchState;
}

const Tweet = () => {
  const {
    data,
    isLoading,
    error
  } = useQuery('people.json')
  
  
  if(isLoading) {
    return 'loading...':
  }
 
  if(error) {
    return <>Refresh page</>
  }
 
  return <>{data}</>
}
```


### Tanstack Query

```jsx
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
 
const queryClient = new QueryClient()
const App = () =>  {
   return (
     <QueryClientProvider client={queryClient}>
       <Tweet />
     </QueryClientProvider>
   )
 }
 
const Tweet = () => {
   const { isLoading, error, data } = useQuery({
	queryKey: ['peoples'],
	queryFn: () => fetch('/peoples.json').then(res => res.json())
   });
 
   if (isLoading) {
     return 'Loading...';
   }
 
   if (error) {
     return 'Please refresh the page.';
   }
 
   return <>{data}</>
 }
```


### Tanstack Query

<iframe src="https://tanstack.com/query/latest/" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>


### Tanstack Query

```bash
npm i @tanstack/react-query
```

```jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
const App = () =>  {
   return (
     <QueryClientProvider client={queryClient}>
       <YourAppComponents />
     </QueryClientProvider>
   )
 }
```


### Tanstack Query

```jsx
import { useQuery } from '@tanstack/react-query'

const Tweet = () => {
   const { isLoading, error, data } = useQuery({
      queryKey: ['peoples'],
      queryFn: () => fetch('/peoples.json').then(res => res.json())
   });

   if (isLoading) {
     return 'Loading...';
   }

   if (error) {
     return 'Please refresh the page.';
   }

   return <>{data}</>
 }
```



## TP12

Faites appel à une API Pokémon pour récupérer les stats des Pokémons

[https://pokeapi.co/](https://pokeapi.co/)



## Le Router


### Plusieurs routeurs existent

- React Router
- Tanstack Router
- Next.js (intégré)
- Remix (intégré, le react-router)
- Etc.


### SPA

SPA = naviation côté client

Plus d'info dans les bonus


### React Router

```bash
npm install react-router-dom
```


### React Router

```jsx
// Index.js
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tweet",
    element: <MyTweetPage />,
  },
]);

createRoot(document.getElementById("#my-app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```


### React Router - Liens

```jsx
import { Link, useParams } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tweet",
    element: <MyTweetPage />,
  }
]);

/* ... */

function HomePage() {
  return (
    <div className="Home">
      <h1>Tweeeeeet heure</h1>
      <nav>
        <Link to="/tweet">Mes Tweets</Link>
      </nav>
    </div>
  );
}
```


### React Router - Paramètres

```jsx
import { Link, useParams } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tweet/:id",
    element: <TweetDetails />,
  },
]);

function HomePage() {
  return (
    <div className="Home">
      <h1>Tweeeeeet heure</h1>
      <nav>
		<Link to="/tweet/lastTweet">Mon dernier tweet</Link>
      </nav>
    </div>
  );
}

function TweetDetails() {
  const {id} = useParams()

  return <article>id du tweet: {id}</article>
}
```


### React Router - Paramètres

```jsx
import { Link, useParams } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tweet/:id",
    element: <TweetDetails />,
  },
]);

function HomePage() {
  return (
    <div className="Home">
      <h1>Tweeeeeet heure</h1>
      <nav>
		<Link to="/tweet/lastTweet">Mon dernier tweet</Link>
		<Link to="/tweet/lastTweet?display=edit">Editer mon dernier tweet</Link>
      </nav>
    </div>
  );
}

function TweetDetails() {
  const {id} = useParams()
  let [searchParams, setSearchParams] = useSearchParams();

  if(searchParams.display === 'edit') {
    return /* ... */;
  }

  return <article>id du tweet: {id}</article>
}
```


### React Router - Redirection

```jsx
import { Routes, Route, Link } from "react-router-dom";

const EditTweet = () => {
  const user = useUser();
  if(!user) {
    return <Navigate to="/" />
  }
  /** ... **/ 
}

/** OU **/
  
const EditTweet = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch('user')
      .catch(() => {
        navigate('/')
      })
  }, [])
  /** ... **/ 
}
```


### React Router et Remix

Depuis la version 6 :

 - Nesting

 - Gestion de loader
 - Busy Indicator
 - Error Handling
 - ...



## TP 13

Ajoutez un écran qui permet de sélectionner deux Pokemons

Les deux Pokemons sélectionné sont envoyé en paramètre d'url à l'écran de combat



## Les formulaires


## Les formulaires

```jsx
const useInput = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);
  
  const onChange = (e) => {
    setInputValue(e.target.value);
  }
  
  return [inputValue, onChange];
}

const TweetEdit = ({id}) => {
  const [value, onChange] = useInput()
  
  return <input type="text" onChange={onChange} value={value} />;
}
```


### Les formulaires

```jsx
const TweetEdit = ({id}) => {
  const [valueInput, onChangeInput] = useInput('')
  const [valueSelect, onChangeSelect] = useInput('false')
  const [valueTextArea, onChangeTextArea] = useInput('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // ...
  }
  
  return (
    <form onSubmit={handleSubmit}>
    	<label>
    		Titre :
    		<input type="text" name="title" onChange={onChangeInput} value={valueInput} />
        </label>
		<label>
    		Message :
            <textarea name="message" value={valueTextArea} onChange={onChangeTextArea} />
        </label>
		<label>
    		NSFW :
            <select value={valueSelect} onChange={onChangeSelect}>
              <option value="true">Oui</option>
              <option value="false">Non</option>
          	</select>
        </label>
    	<button type="submit">Envoyer</submit>
    </form>
  );
}
```


### React Hook Form

```jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";

export function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    // ...
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <input {...register("firstName")} placeholder="Titre" />
      <select {...register("NSFW")}>
        <option value="true">Oui</option>
        <option value="false">Non</option>
      </select>
      <textarea {...register("message")} placeholder="Un T-8 !" />
      <button type="submit" >Envoyer</button>
    </form>
  );
}
```


### Gestion des erreurs

```jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";

export function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    // ...
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <input {...register("firstName", {required: true})} placeholder="Titre" />
        
      {/* ... */}
      <button type="submit" >Envoyer</button>
    </form>
  );
}
```


### Gestion des erreurs

```jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";

export function App() {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = handleSubmit((data) => {
    // ...
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <input {...register("firstName", {required: true})} placeholder="Titre" />
      <span>{formState.errors?.firstName.message}</span>
        
      {/* ... */}
      <button type="submit" >Envoyer</button>
    </form>
  );
}
```


### Gestion des erreurs

```jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";

export function App() {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = handleSubmit((data) => {
    // ...
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <input
		{...register("firstName", {
			required: {
				value: true,
				message: 'Ce champ est requis.'
			}
		})}
		placeholder="Titre"
		/>
      <span>{formState.errors?.firstName.message}</span>
        
      {/* ... */}
      <button type="submit" >Envoyer</button>
    </form>
  );
}
```


### React Hook Form

<iframe src="https://react-hook-form.com/" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>



## TP14

Transformez (ou ajouter) la page de selection de Pokémon en formulaire


## TP14 - alternative sans router

Ajoutez un formulaire qui permet de définir le niveau des Pokémons avant le combat.
À la validation du formulaire, le combat commence.

Calcul de points de vie en fonction du niveau : `pointsDeVie = niveau * baseStats`;



## Bonus 1 : CSS


## Vous avez remarqué ?

```jsx
import 'app.css';

export const App = () => {
	/*
 		...
	*/
}
```
Tout se passe au moment du build (Webpack, Vite, ...)


## Tout est global ?

```jsx
import classes from 'app.module.css';

export const App = () => {	
  	return <h1 className={classes.title}>hello world</h1>
}
```

[CRA doc](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

[Vite et ça marche](https://vite.dev/guide/features#css-modules)


## Alternative : styled-components

```jsx
import styled from 'styled-component';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
```


## Alternative : styled-components

<iframe src="https://styled-components.com/docs" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>



## Bonus 2 : Devtools

[Démo React Devtools](https://react-devtools-tutorial.vercel.app/)



## Bonus 3 : Context API

```jsx
// app.tsx
const App = () => {
	return (
      		<MyApp giveIt={'toMe'} />
	)
}

// MyApp.tsx
const MyApp = (props) => {
   return (
		<OtherCmp {...props} />
	)
}

// OtherCmp.tsx
const OtherCmp = () => {
   return (
		<div>{giveIt} gnon</div>
	)
}
```


## Bonus 3 : Context API

```jsx
// Fichier A
const CookieContext = React.createContext(null);
export const CookieProvider = CookieContext.Provider;
export const useCookie = () => React.useContext(CookieContext);

// // app.tsx
const App = () => {
	return (
		<CookieProvider value={{giveIt: "toMe"}}>
			<MyApp />
		</CookieProvider>
	)
}

// MyApp.tsx
const MyApp = (props) => {
   return (
		<OtherCmp />
	)
}

// OtherCmp.tsx
const OtherCmp = () => {
  const {giveIt} = useCookie()
   return (
		<div>{giveIt} gnon</div>
	)
}
```



### Bonus 4 : UseReducer

```jsx
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Total : {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```



## Bonus 5 : Les autres hooks


## UseRef

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` fait référence au champ textuel monté dans le DOM
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Donner le focus au champ</button>
    </>
  );
}
```


## UseRef

```jsx
function TextInputWithFocusButton() {
  const intervalRef = useRef(0);

  const handleStartClick = () => {
    const intervalId = setInterval(() => {}, 1000);
    intervalRef.current = intervalId;
  }

  return <button onClick={handleStartClick}>Start</button>;
}
```


## UseImperativeHandle

```jsx
function MyInput({ ref }) {
  return <input ref={ref} />;
};
```


## UseImperativeHandle

```jsx
function MyInput({ ref }) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      },
    };
  }, []);

  return <input ref={inputRef} />;
};
```


## UseLayoutEffect

```jsx
const Tweet = () => {
  useLayoutEffect(() => {
   	// Interact with another framework, ...
  }, [])
  
  return result;
}
```
Se lance avant le repaint.


## UseTransition

```jsx
function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ...
}
```


## Le receuil des hooks

<iframe src="https://usehooks.com/" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>



## Bonus 6 : Les différents modes de rendu


### Multi Page Application (MPA)

```mermaid
sequenceDiagram
    actor U as User
    participant S as Server

    rect rgb(191, 223, 255)
    note over U,S: Page 1
      U->>S: HTTP GET /page1
      S->>S: Injection des donnée dans l'HTML
      S->>U: HTML + CSS + JS
    end

    rect rgba(255, 191, 235, 1)
    note over U,S: navigation
      U->>S: HTTP GET /page2
      S->>S: Injection des donnée dans l'HTML
      S->>U: HTML + CSS + JS
    end
```


### Single Page Application (SPA)

```mermaid
sequenceDiagram
    actor U as User
    participant S as Server

    rect rgb(191, 223, 255)
    note over U,S: Téléchargement de l'app
      U->>S: HTTP GET /page1
      S->>U: HTML + CSS + JS
      U->>S: HTTP GET /data-for-page1
      S->>U: JSON data
    end

    rect rgba(255, 191, 235, 1)
    note over U,S: navigation
      U->>S: HTTP GET /data-for-page2
      S->>U: JSON
    end
```


### Server Side Rendering (SSR)


### Static Site Generation (SSG)


### Incremental Static Regeneration (ISR)



## Bonus 8 : React.memo

```jsx
const MyInput = ({onChange}) => {
  /** ... **/
};
```


## Bonus 8 : React.memo

```jsx
const MyForm = () => {
  const [valueA, setValueA] = useState('');
  const handleChangeA = (e) => {
    setValueA(e.target.value);
  }

  return <MyInput onChange={handleChangeA} />
}
```


## Bonus 8 : React.memo

```jsx
const MyForm = () => {
  const [valueA, setValueA] = useState('');
  const handleChangeA = useCallback((e) => {
    setValueA(e.target.value);
  }, [])

  return <MyInput onChange={handleChangeA} />
}
```


## Bonus 8 : React.memo

```jsx
const MyInput = React.memo(({onChange}) => {
  /** ... **/
});
```



## Bonus 9 : displayName

```jsx
const MyInput = React.memo(({onChange}) => {
  /** ... **/
});
MyInput.displayName = 'MyInput';
```



## Bonus 10 : React.lazy

```jsx
import React, { Suspense } from 'react';
const OtherComponent = React.lazy(() => import('./OtherComponent'));
function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```


## Bonus 10 : Suspense

```jsx
import {use} from 'react';
import { fetchData } from './data.js';

export default function Paycheck({ artistId }) {
  const Paycheck = use(fetchData(`/${artistId}/bill`));
  return (
    <section>
      <p>{Paycheck}</p>
    </section>
  );
}
```


## Bonus 10 : Suspense

```jsx
import React, { Suspense } from 'react';
import Biography from './Biography'; 

export default function Paycheck({ artistId }) {
  return (
    <div>
      <Suspense fallback={<h1>Loading paycheck...</h1>}>
        <Biography artistId={artistId} />
      </Suspense>
    </div>
  );
}
``` 



## Comment se maintenir à jour ?

<iframe src="https://react.dev/blog" width="100%" height="400px" style="background: white;" frameborder="0"></iframe>


## Merci

[https://berthelot.io](https://berthelot.io)



## Corrections

- L'exemple : [http://pokemon.lux.frachet.berthelot.io/](http://pokemon.lux.frachet.berthelot.io/)
- Le code de l'application de démo (le code date un peu) : [https://github.com/Swiip/pokemon-arena](https://github.com/Swiip/pokemon-arena)
- La correction des TPs : [https://github.com/FBerthelot/training-react-pokemon](https://github.com/FBerthelot/training-react-pokemon)