# Formation Node.js



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
    - JavaScript côté serveur
    - Programmation asynchrone
- Jour 2
    - Utilisation des API
    - Serveur HTTP
    - Base de données
- Jour 3
    - Test
    - Event-Loop
    - Traitements lourds
```


## Travaux pratiques

Je ne donne les corrections qu'à la fin de la formation.
Les solutions sont toujours multiples.

Posez-moi des questions.


## Travaux pratiques

Le sujet : API Pokémon


## Informations pratique

- Matin : 9h - 12h30
- Après-midi : 14h - 17h30

Demandez des pauses.

Nous nous notons mutuellement !

N'oubliez pas d'émarger sur le site de Human Coder.



## Installation

Ça pourrai être simple, mais on préfère utiliser un outil pour l'installation !


### NVM

[https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)


### NVM

```bash
nvm install 12 
nvm use 12 
node -v
# v12.22.6
``` 

```bash
$ nvm install node
# "node" est un alias pour la dernière version de node
```


### NVM

```
# .nvmrc
 
v16.8.0
```

```bash
nvm use
# Found '/path/to/project/.nvmrc' with version <5.9>
# Now using node v5.9.1 (npm v3.7.3)
```


### Les alternatives ?

- Volta
- N (utilise npm i -g n 🙃)
- ...



## TP 1

- Installez NVM et node
- Dans le terminal et écrivez successivement

```bash
node
 
console.log("hello world")
 
.help
 
.exit
```



## Structure d'un projet


## Package.json

```json
{
    "name": "Nom du projet",
    "version": "1.0.0",
    "description": "Description du projet",
    "author": "Florent Berthelot",
    "license": "(ISC OR GPL-3.0)",
    "funding": {
        "type": "individual",
        "url": "http://npmjs.com/donate"
    },
    "os": ["!win32"],
    "repository": {
        "type": "git",
        "url": "git+https://github.com/npm/cli.git"
    }
    "engines": {
      "node": ">=15"
    }
}
```


## NPM

```bash
npm init # Crée un package.json
```


## Node Package Manager

C'est quoi NPM ?


## NPM script

```json
{
    "scripts": {
        "start": "node src/index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    }
}
```

```bash
npm run start
npm run test
```


## NPM script

```json
{
    "scripts": {
        "start": "node src/index.js",
        "toto": "echo toto"
    }
}
```

```bash
npm start
npm run toto
```


## NPM prescript

```json
{
    "scripts": {
        "predev": "./script/launchDatabase.sh",
        "dev": "node src/index.js",
        "postdev": "rm -rf .cache",
    }
}
```


## NPM paramètres

```json
{
    "scripts": {
        "start": "node src/index.js",
    }
}
```

```bash
npm run start -- --port 8080 # L'argument est passé à node src/index.js
npm run start --port 8080 # L'argument est passé à npm
```



## Alternatives à NPM

- Yarn
- PNPM
- Bun


## TP 2

- Créez un dossier (nom de votre choix)
- Avec un terminal allez dans ce dossier
- Exécutez la commande `npm init`
- Ajoutez un fichier .nvmrc
- Créez un fichier src/index.js qui affiche un Hello World
- Créez un script `npm start` qui lance le fichier src/index.js



## Node.js


<pre class="mermaid">
    timeline
        title L'histoire de Node.js
        2008 : Chrome (V8), JavaScript enfin performant !
        2009 : Naissance de Node.JS
             : ES5 / HTML5 / CSS3
        2015 : ES6
             : IO.js
        2016 : Node.js et IO.js refusionnent
        2018 : Deno par Ryan Dahl
</pre>


## L'idée de Node.js

<img alt="Rayan Dahl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Ryan_Dahl.jpg/500px-Ryan_Dahl.jpg" style="float: left;width: 10rem;" />

Je dois faire un site web rapide mais c'est compliqué à écrire car beaucoup de traitements asynchrones.
Je vais faire un serveur HTTP en JavaScript, le langage est fait pour ça. (+V8)


## Pour l'histoire en détail

[Un documentaire sur l'histoire de Node.js](https://www.youtube.com/watch?v=LB8KwiiUGy0)


## La conception de Node.js

<pre class="mermaid">
    graph LR
        JavaScript-->Node.js
        subgraph Node.js
            V8<-->API["API (V8 Plugins C++)"]
        end
</pre>


## Rythme de sortie

<iframe src="https://nodejs.org/fr/about/previous-releases" width="100%" style="height:60vh;"></iframe>


## Les API de Node.js

<iframe src="https://nodejs.org/docs/latest/api/" width="100%" style="height:60vh;"></iframe>


## Utiliser une API Node.js

```javascript
const crypto = require('node:crypto');

console.log(crypto.randomUUID()); 
```



## TP 3

Récupérez via l'API de node.js le temps depuis lequel votre machine est lancé puis affichez cette valeur dans la console.



## Les modules

[https://slides.com/florentberthelot/les-modules-javascript/#/](https://slides.com/florentberthelot/les-modules-javascript/)



## TP 4

Passer de CommonJS à ES Module



## File System API

```javascript
import { readFile } from 'node:fs';
try {
  const URL = new URL('file:///home/florent/Dev/formation-nodejs/package.json');
  const contents = readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
```


## Parlons Meta

```javascript
console.log(import.meta.url); // file:///home/florent/Dev/formation-nodejs/src/index.js
```


## Parlons Meta

```javascript
console.log(import.meta.url); // ESM
```

```javascript
console.log(__filename); // CommonJS
console.log(__dirname); // CommonJS
```


## Et URL ?

```javascript
const fileUrl = new URL('./package.json', import.meta.url); // ESM
```

```javascript
const path = require('path');
const filePath = path.resolve(__dirname, './package.json'); // CommonJS
```


## File System API
```javascript
import { readFileSync } from 'node:fs';
try {
  const fileUrl = new URL('./package.json', import.meta.url);
  const contents = readFileSync(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
```


## File System API
Vous verrez peut-être ce genre de code parfois (CommonJS)
```javascript
const fs = require('fs');
const path = require('path');
try {
  const filePath = path.resolve(__dirname, './package.json');
  const contents = fs.readFileSync(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
```



## TP 5

Créer un fichier `src/data/pokedex.json` contenant des pokemon et des stats au format JSON
Lisez ce fichier dans votre code et affichez le contenu dans la console



## Rappels JavaScript

[Lien vers la formation JavaScript](./javascript)


## Les API bloquantes

```javascript
import { readFileSync } from 'node:fs';
try {
  const fileUrl = new URL('./package.json', import.meta.url);
  const contents = readFileSync(fileUrl, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
```


## Les API non-bloquantes

```javascript
import { readFile } from 'node:fs/promises';
try {
  const fileUrl = new URL('./package.json', import.meta.url);
  const contents = await readFile(fileUrl, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
```


## Les API non-bloquantes

Ancienne API Non-Bloquante
```javascript
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './package.json');
fs.readFile(filePath, { encoding: 'utf8' }, (err, content) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(content);
    }
});
```
Les callbacks 🤩



## TP 6

Lisez le fichier de manière non-bloquante. Aussi, le programme fait une pause de 5 secondes avant d'afficher le contenu du fichier.



## API Process

Les variables d'environnement !

Qu'est ce que c'est ?


## 12 Factors

[https://12factor.net/](https://12factor.net/)


## API Process

Une API pour intéragir avec notre propre processus Node.js

```Javascript
console.log(process.env.PORT);
```

```bash
PORT=8080 npm start
```


## API Process

```javascript
process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});
```


## API Process

Le passage obligatoire !

```javascript
process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.error(err, origin);
});
```



## TP 7

Gérez les erreurs de promesses non gérées.
Affichez un log quand vous faites un Ctrl + C.
Mettez le chemin du fichier .json en variable d'environnement



## API HTTP

```javascript
import http from 'node:http';

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end("Formation Node.js");
});

server.listen(8000);
```


## HTTP Request

```javascript
import http from 'node:http';

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  console.log(req.method); // GET
  console.log(req.url); // ?
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end("Formation Node.js");
});

server.listen(8000);
```


## TP 8

Créez un serveur HTTP qui écoute sur le port defini en variable d'environnement.
Créez cette route : 
```
GET /pokemon
```
Le serveur doit répondre avec 404 pour toutes les autres routes.



### Qu'est-ce que REST ?

REST (Representational State Transfer) ?


### Le Modèle de Maturité de Richardson

Le modèle de maturité de Richardson est une manière de mesurer la conformité d'une API aux principes REST. Il comporte 4 niveaux :


#### Niveau 0 : Les appels HTTP simples

L'API utilise HTTP, mais sans tirer parti des concepts REST.


#### Niveau 1 : Les ressources

Les ressources sont identifiées par des URI.

```http
GET /api/pokemon/25
```
Réponse :
```json
{ "id": 25, "name": "Pikachu", "type": "Electric" }
```


#### Niveau 2 : Les verbes HTTP

L'API utilise les méthodes HTTP (GET, POST, PUT, DELETE, etc.) pour indiquer l'intention.

```http
POST /api/pokemon
Body: { "name": "Charmander", "type": "Fire" }
```
```json
{ "id": 4, "name": "Charmander", "type": "Fire" }
```


#### Niveau 2 : Les verbes HTTP

```http
PATCH /api/pokemon/4
Body: { "type": "Flying" }
```
```json
{ "id": 4, "name": "Charmander", "type": "Flying" }
```


#### Niveau intérmédiaire : Les actions

```http
POST /api/pokemon/25/evolve
```
```json
{ "id": 26, "name": "Raichu", "type": "Electric" }
```


#### Niveau 3 : Hypermedia (HATEOAS)
Les réponses incluent des liens pour naviguer dans l'API.

```http
GET /api/pokemon/25
```
```json
{
    "id": 25,
    "name": "Pikachu",
    "type": "Electric",
    "actions": [
        { "rel": "self", "href": "/api/pokemon/25" },
        { "rel": "evolve", "href": "/api/pokemon/25/evolve" }
    ]
}
```


### Pour aller plus loin

[https://www.youtube.com/watch?v=7qqzqse1hgc](https://www.youtube.com/watch?v=7qqzqse1hgc)



## Les dépendances




# TP 9

Ajoutez ESLint à votre projet et créez les NPM scripts neccessaires.
Ajoutez AJV pour valider le format JSON de votre fichier pokedex.json



## Les frameworks Node.js

Il existe de nombreux frameworks pour Node.js :
- **Express.js**
- **Koa.js** 
- **Fastify**
- **NestJS**
- **Hapi.js**


## Express.js

Le plus populaire des frameworks Node.js.
Il est complet car contient un moteur de rendu et un routeur.
Se base sur le modèle des middlewares.


## Express router
```javascript
import express from 'express';
const app = express();

app.get('/pokemon', (req, res) => {
    res.status(200).json({ message: 'Liste des pokémons' });
});

app.listen(8080, () => {
    console.log(`Server is running on http://localhost:8080`);
});
```


## Express router
```javascript
const router = express.Router();

router.get('/pokemon', (req, res) => {
    res.status(200).json({ message: 'Liste des pokémons' });
});

app.use('/api', router);
```


## Express router

```javascript
app.get('/users/:userId/books/:bookId', (req, res) => {
  console.log(req.params) // { userId: '34', bookId: '8989' }
})
```



# TP 10

Migrez votre serveur HTTP vers Express.js
Créez ces routes : 
```
GET /pokemon
GET /pokemon/:id
```

La liste initiale des pokémons est dans le fichier `src/data/pokedex.json` et doit être lue au démarrage du serveur uniquement.



## Express Middleware

```javascript
app.use((req, res, next) => {
  console.log('Middleware exécuté');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2 exécuté');
  next();
});
```


## Express Middleware

```javascript
app.use((req, res, next) => {
  console.log('Middleware exécuté');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2 exécuté');
  next();
});
```


## Middleware build-in

```javascript
app.use(express.json()); // Parse JSON bodies
app.use(express.static('public')); // Serve static files
```


## Les niveaux de middleware

Les middlewares sont exécutés dans l'ordre où ils sont déclarés.

Il y a 3 niveaux de middleware :
- app
- router
- route



## TP 11

Créez un middleware qui créer un id unique pour la requête.

Créez un middleware qui log chaque requête entrante et l'id de la requête.

Ajoutez ces routes :
```
POST /pokemon
PATCH /pokemon/:id
DELETE /pokemon/:id
```



## Gestion des erreurs
## Base de données
## Les tests
## Event Loop
## Traitements lourds
## Architecture Backend
## Fin
## Bonus : Socket.io