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
```powershell
$env:PORT=8080; npm start
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
process.on('SIGINT', (code) => {
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

[https://slides.com/florentberthelot/outillage-node-js#/2/1](https://slides.com/florentberthelot/outillage-node-js#/2/1)


## ESLint

ESLint est un outil d'analyse statique pour JavaScript.


### Installation d'ESLint

```bash
npm init @eslint/config@latest
```


### Exemple de configuration

```javascript
// eslint.config.js
import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
    { files: ["**/*.js"], plugins: { js }, extends: ["js/recommended"] },
	{
		rules: {
			semi: "error",
			"prefer-const": "error",
		},
	},
]);
```


### Utilisation d'ESLint

```bash
eslint <nom_du_fichier_ou_dossier>
eslint <nom_du_fichier_ou_dossier> --fix
```


## ESLINT et npm script

```json
{
    "scripts": {
        "test:static": "eslint .",
        "test:static:fix": "eslint . --fix"
    }
}
```


## AJV

AJV est un validateur de schéma JSON rapide et performant.


### Installation d'AJV

```bash
npm install ajv
```


### Exemple de validation avec AJV

```javascript
import Ajv from 'ajv';
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
  type: "object",
  properties: {
    foo: {type: "integer"},
    bar: {type: "string"}
  },
  required: ["foo"],
  additionalProperties: false
}

const validate = ajv.compile(schema)

const data = {
  foo: 1,
  bar: "abc"
}

const valid = validate(data)
if (!valid) {
    console.log(validate.errors)
}
```


## AJV pour TypeScript

Le standard de validation côté TypeScript c'est Zod.
<iframe src="https://zod.dev/" width="100%" style="height:60vh;"></iframe>



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
GET  /capturedPokemons
POST /pokemon/:id/capture
```

La liste initiale des pokémons est dans le fichier `src/data/pokedex.json` et doit être lue au démarrage du serveur uniquement.



## Comment tester sans postman ?


## Open API

OpenAPI est une spécification standardisée pour décrire les API REST.

Et ça utilise la syntaxe JSON Schema !


### Pourquoi OpenAPI ?

- **Documentation automatique**
- **Validation**
- **Génération de code**
- **Communication inter-équipes**


### OpenAPI ou Swagger

En 2015, la spécification Swagger a été renommée OpenAPI lorsqu'elle a été transférée à la Linux Foundation.


### Exemple de spécification OpenAPI

```yaml
openapi: 3.0.4
info:
    version: 1.0.0
    title: Node.js Formation
paths:
    /pokemon:
        get:
            summary: Get all existing pokemons
            responses:
                '200':
                    description: Successful operation
```


#### Swagger-UI et Express

```bash
npm install swagger-ui-express
```


#### Exemple d'utilisation

```javascript
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' with { type: 'json' };

const app = express();

// Middleware Swagger-UI
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
    console.log('Swagger-UI is available at http://localhost:8080/doc');
});
```



## TP 11

Ajoutez Swagger-UI à votre projet.


## Yaml

```yaml
openapi: 3.0.4
info:
  version: 1.0.0
  title: Node.js Formation
servers:
  - url: http://localhost:8080
tags:
  - name: pokemon
    description: Everything about Pokemon species
  - name: capturedPokemon
    description: the pokemon you own
paths:
  /pokemon:
    get:
      tags:
        - pokemon
      summary: Get all existing pokemons
      responses:
        '200':
          description: Successful operation
  /pokemon/{id}/capture:
    post:
      tags:
        - capturedPokemon
        - pokemon
      summary: Catpure a pokemon
      parameters:
        - name: id
          in: path
          required: true
          description: ID of the pokemon to be released
          schema:
            type: string
      responses:
        '200':
          description: Successful operation
  /capturedPokemon:
    get:
      tags:
        - capturedPokemon
      summary: Get all captured pokemon
      responses:
        '200':
          description: Successful operation
  /capturedPokemon/{id}/evolve:
    post:
      tags:
        - capturedPokemon
      summary: make the pokemon evolve
      parameters:
        - name: id
          in: path
          required: true
          description: ID of the pokemon to be released
          schema:
            type: string
      responses:
        '200':
          description: Successful operation
  /capturedPokemon/{id}:
    patch:
      tags:
        - capturedPokemon
      summary: release a pokemon in the wild
      parameters:
        - name: id
          in: path
          required: true
          description: ID of the pokemon to be released
          schema:
            type: string
      responses:
        '200':
          description: Successful operation
    delete:
      tags:
        - capturedPokemon
      summary: release a pokemon in the wild
      parameters:
        - name: id
          in: path
          required: true
          description: ID of the pokemon to be released
          schema:
            type: string
      responses:
        '200':
          description: Successful operation
    get:
      tags:
        - capturedPokemon
      summary: Get one captured pokemon
      parameters:
        - name: id
          in: path
          required: true
          description: ID of the pokemon to be released
          schema:
            type: string
      responses:
        '200':
          description: Successful operation
```


## JSON
```json
{
  "openapi": "3.0.4",
  "info": {
    "version": "1.0.0",
    "title": "Node.js Formation"
  },
  "servers": [
    {
      "url": "http://localhost:8080"
    }
  ],
  "tags": [
    {
      "name": "pokemon",
      "description": "Everything about Pokemon species"
    },
    {
      "name": "capturedPokemon",
      "description": "the pokemon you own"
    }
  ],
  "paths": {
    "/pokemon": {
      "get": {
        "tags": [
          "pokemon"
        ],
        "summary": "Get all existing pokemons",
        "responses": {
          "200": {
            "description": "Successful operation"
          }
        }
      }
    },
    "/pokemon/{id}/capture": {
      "post": {
        "tags": [
          "capturedPokemon",
          "pokemon"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "ID of the pokemon to be released",
            "schema": {
              "type": "string"
            }
          }
        ],
        "summary": "Catpure a pokemon",
        "responses": {
          "200": {
            "description": "Successful operation"
          }
        }
      }
    },
    "/capturedPokemon": {
      "get": {
        "tags": [
          "capturedPokemon"
        ],
        "summary": "Get all captured pokemon",
        "responses": {
          "200": {
            "description": "Successful operation"
          }
        }
      }
    },
    "/capturedPokemon/{id}/evolve": {
      "post": {
        "tags": [
          "capturedPokemon"
        ],
        "summary": "make the pokemon evolve",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "ID of the pokemon to be released",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          }
        }
      }
    },
    "/capturedPokemon/{id}": {
      "patch": {
        "tags": [
          "capturedPokemon"
        ],
        "summary": "release a pokemon in the wild",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "ID of the pokemon to be released",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          }
        }
      },
      "delete": {
        "tags": [
          "capturedPokemon"
        ],
        "summary": "release a pokemon in the wild",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "ID of the pokemon to be released",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          }
        }
      },
      "get": {
        "tags": [
          "capturedPokemon"
        ],
        "summary": "Get one captured pokemon",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "ID of the pokemon to be released",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation"
          }
        }
      }
    }
  }
}
```



## Express Middleware

```javascript
app.use((req, res, next) => {
  console.log('Middleware exécuté');
  next();
});
```


## Express Middleware

<pre class="mermaid">
graph LR
    Client-->|Request| Middleware1
    Middleware1-->Middleware2
    Middleware2-->RouteHandler
    RouteHandler-->Middleware3
    Middleware3-->|Response| Client
</pre>


## Middleware build-in

```javascript
app.use(express.json()); // Parse JSON bodies
app.use(express.static('public')); // Serve static files
```


## Middleware pour un path

```javascript
app.use('/user/:id', (req, res, next) => {
  console.log('Verb HTTP', req.method)
  next()
})
```


## Middleware pour une route

```javascript
app.get('/user/:id', (req, res, next) => {
  res.send('USER')
})
```

```javascript
app.get('/user/:id', (req, res, next) => {
  console.log('ID:', req.params.id)
  next()
}, (req, res, next) => {
  res.send('User Info')
})
```


### Middleware via routeur

```javascript
router.use((req, res, next) => {
  next()
})
```


### Middleware d'erreur

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('C\'est cassé !')
})
```



## TP 12

Créez un middleware qui créer un id unique pour la requête.
(correlation id)

Créez un middleware qui log chaque requête entrante et l'id de la requête.

Ajoutez ces routes :
```
POST /capturedPokemon/{id}/evolve
PATCH /capturedPokemon/{id}
DELETE /capturedPokemon/{id}
```



## Debugger

Node.js offre un outil de débogage intégré qui peut être utilisé avec Chrome DevTools pour analyser et corriger les erreurs dans votre code.


### Lancer le Debugger

Pour démarrer le débogueur, utilisez l'option `inspect` lors de l'exécution de votre script Node.js :

```bash
node --inspect src/index.js
```


### Accéder à Chrome DevTools

1. Ouvrez Chrome.
2. Dans la barre d'adresse, entrez `chrome://inspect`.
3. Cliquez sur "Open dedicated DevTools for Node"


### Points d'arrêt

2 manières de créer des points d'arrêt :
- En ajoutant `debugger;` dans votre code.
- En cliquant sur le numéro de ligne dans les DevTools.



### TP 13

le serveur doit se mettre en pause à chaque requête quand il reçoit le paramètre ?debug dans l'url.



## Les templates

Express.js prend en charge plusieurs moteurs de templates pour générer des pages HTML.


### EJS

```bash
npm install ejs
```


### EJS et Express

```javascript
import express from 'express';
const app = express();

// Définir le moteur de template
app.set('view engine', 'ejs');

// Définir le dossier contenant les templates
app.set('views', './views');

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
```


## EJS en action

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
</head>
<body>
    <h1>Liste des articles</h1>
    <ul>
        <% articles.forEach(article => { %>
            <li>
                <h2><%= article.title %></h2>
                <p><%= article.content %></p>
            </li>
        <% }); %>
    </ul>
</body>
</html>
```


#### Gestion de l'URL

```javascript
app.get('/blog', (req, res) => {
    const articles = [
        { title: 'Article 1', content: 'Contenu de l\'article 1' },
        { title: 'Article 2', content: 'Contenu de l\'article 2' },
    ];

    res.render('blog', { articles });
});
```



## TP 14

A l'aide du moteur de template de votre choix, créez une page HTML qui affiche la liste des pokémons capturé.



## Base de données


### Bases de données relationnelles
- **Structure** : Basées sur des tables avec lignes et colonnes.
- **Langage** : Utilisent SQL (Structured Query Language).
- **Schéma** : Schéma rigide, les données doivent respecter une structure définie.


### Bases de données NoSQL
- **Structure** : Flexibles, peuvent être basées sur des documents, des colonnes, des graphes ou des clés-valeurs.
- **Langage** : Pas de langage standard, souvent des API spécifiques.
- **Schéma** : Schéma flexible, les données peuvent varier en structure.


### Comparaison
| Critère            | Relationnel         | NoSQL              |
|--------------------|---------------------|--------------------|
| **Schéma**         | Rigide              | Flexible           |
| **Scalabilité**    | Verticale           | Horizontale        |
| **Transactions**   | ACID                | BASE               |
| **Performance**    | Optimisé pour relations | Optimisé pour scalabilité |



## PostgreSQL


### Driver

```bash
npm install pg
```


### Connexion à PostgreSQL

```javascript
import { Client } from 'pg'
const client = new Client()
await client.connect()
 
try {
   const res = await client.query('SELECT $1::text as message', ['Hello world!'])
   console.log(res.rows[0].message) // Hello world!
} catch (err) {
   console.error(err);
} finally {
   await client.end()
}
```


### Les pool de connexion

```javascript
import { Pool } from 'pg'
const pool = new Pool()

try {
   const res = await pool.query('SELECT $1::text as message', ['Hello world!'])
   console.log(res.rows[0].message) // Hello world!
} catch (err) {
   console.error(err);
} finally {
   await pool.end()
}
```


## Mais comment il connait mon mot de passe ?

```bash
PGUSER=dbuser \
PGPASSWORD=secretpassword \
PGHOST=database.server.com \
PGPORT=3211 \
PGDATABASE=mydb \
node src/index.js
```


## Pour aller plus loin

- **Knex.js** : Un query builder pour simplifier les requêtes SQL.
- Un ORM comme TypeORM ou Prisma. (Attention à la magie !)



## SQLite

SQLite est une base de données relationnelle légère, intégrée et sans serveur.


### SQLite Natif

(Node.js 22.5+)
```javascript
import { DatabaseSync } from 'node:sqlite';
const database = new DatabaseSync(':memory:');

database.exec(`
  CREATE TABLE data(
    key INTEGER PRIMARY KEY,
    value TEXT
  ) STRICT
`);
const insert = database.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
insert.run(1, 'hello');
insert.run(2, 'world');
const query = database.prepare('SELECT * FROM data ORDER BY key');

console.log(query.all());
// Prints: [ { key: 1, value: 'hello' }, { key: 2, value: 'world' } ]
```


#### Pour les vieux node.js

```bash
npm install sqlite
```

##### Exemple d'utilisation

```javascript
import sqlite from 'sqlite';

const db = await sqlite.open({
    filename: './database.sqlite',
    driver: sqlite3.Database
});

await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
    )
`);

await db.run('INSERT INTO users (name, email) VALUES (?, ?)', ['Bob', 'bob@example.com']);

const users = await db.all('SELECT * FROM users');
console.log(users);
```



## MongoDB


### Driver

```bash
npm install mongodb
```


### Connexion à MongoDB

```javascript
import { MongoClient } from 'mongodb';
const client = new MongoClient('mongodb://localhost:27017');

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    await client.close();
  }
}
run()
```


### Pool de connexion

C'est géré automatiquement par le driver via l'URI.



### TP 15

Sauvegardez les pokémons capturés dans une base de données PostgreSQL ou mongoDB si vous préférez.



## Les tests

[https://slides.com/florentberthelot/javascript-craftmanship/](https://slides.com/florentberthelot/javascript-craftmanship/)


## Supertest

Supertest est une bibliothèque permettant de tester des applications HTTP en Node.js. Elle est souvent utilisée pour tester des API REST.


### Installation de Supertest

```bash
npm install supertest --save-dev
```


### Exemple de test avec Supertest

```javascript
import request from 'supertest';
import app from './app'; // Importez votre application Express

describe('Test des routes de l\'API', () => {
    it('GET /pokemon - devrait retourner une liste de pokémons', async () => {
        const response = await request(app).get('/pokemon');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('POST /pokemon - devrait ajouter un nouveau pokémon', async () => {
        const newPokemon = { name: 'Bulbasaur', type: 'Grass' };
        const response = await request(app)
            .post('/pokemon')
            .send(newPokemon);
        expect(response.status).toBe(201);
        expect(response.body.name).toBe('Bulbasaur');
    });
});
```


### Intégration avec Jest

Supertest s'intègre parfaitement avec Jest pour écrire des tests unitaires et d'intégration.

```bash
npm install jest --save-dev
```

Ajoutez un script dans votre `package.json` :

```json
{
    "scripts": {
        "test": "jest"
    }
}
```


### Exemple de test avec Jest et Supertest

```javascript
import request from 'supertest';
import app from './app';

describe('Blog', () => {
    it('GET /capturedPokemon - devrait retourner une liste de pokémons capturés', async () => {
        const response = await request(app).get('/capturedPokemon');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('POST /pokemon/:id/capture - devrait capturer un pokémon', async () => {
        const response = await request(app).post('/pokemon/1/capture');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Pokémon capturé avec succès');
    });
});
```



## TP 16

Créez des tests pour votre API avec Supertest et Vitest.



## Event Loop

L'Event Loop est un mécanisme central dans Node.js qui permet de gérer les opérations asynchrones.
Elle est essentielle pour le fonctionnement du système mono-thread de Node.js, qui repose sur un seul thread pour exécuter le code JavaScript.


### Node.js et le système mono-thread

Node.js utilise un modèle mono-threadé pour exécuter du JavaScript,
mais il est capable de gérer des opérations asynchrones grâce à l'Event Loop.
Les tâches longues ou bloquantes, comme les opérations I/O ou les requêtes réseau,
sont déléguées à des threads en arrière-plan via la bibliothèque libuv, permettant au thread principal de rester disponible pour d'autres tâches.


### Fonctionnement de l'Event Loop

1. **Call Stack** : Une pile où les fonctions sont exécutées.
2. **Callback Queue** : Une file d'attente pour les callbacks prêts à être exécutés.
3. **Event Loop** : Un processus qui surveille le Call Stack et la Callback Queue. Si le Call Stack est vide, il déplace les callbacks de la queue vers la pile.


### Phases de l'Event Loop

1. **Timers** : Exécution des callbacks de `setTimeout` et `setInterval`.
2. **I/O Callbacks** : Exécution des callbacks des opérations I/O.
3. **Idle, Prepare** : Utilisé en interne par Node.js.
4. **Poll** : Récupération des nouvelles I/O et exécution des callbacks correspondants.
5. **Check** : Exécution des callbacks de `setImmediate`.
6. **Close Callbacks** : Exécution des callbacks de fermeture, comme `socket.on('close')`.


### Exemple d'Event Loop

```javascript
console.log('Start');

setTimeout(() => {
    console.log('Timeout');
}, 0);

setImmediate(() => {
    console.log('Immediate');
});

console.log('End');
```


**Résultat attendu :**
```
Start
End
Immediate
Timeout
```


### Pourquoi l'Event Loop est importante ?

- Permet à Node.js de gérer des milliers de connexions simultanées sur un seul thread.
- Évite le blocage du thread principal grâce à la délégation des tâches lourdes.
- Optimise les performances pour les applications I/O intensives.



## Traitements lourds



## Clean Architecture

La Clean Architecture, proposée par Robert C. Martin (Uncle Bob),
est une approche pour structurer le code d'une application afin de le rendre maintenable, testable et évolutif.


### Principes fondamentaux
1. **Indépendance des frameworks** : L'architecture ne doit pas dépendre d'un framework spécifique.
2. **Testabilité** : Le code doit être facilement testable, indépendamment des détails d'implémentation.
3. **Indépendance de l'interface utilisateur** : Les règles métier ne doivent pas dépendre de l'interface utilisateur.
4. **Indépendance de la base de données** : Les règles métier ne doivent pas dépendre de la technologie de stockage.
5. **Indépendance des agents externes** : Les règles métier doivent être isolées des services externes.


### Structure en couches
- **Entities** : Contiennent les règles métier fondamentales.
- **Use Cases** : Contiennent la logique métier spécifique à l'application.
- **Interface Adapters** : Adaptent les données entre les cas d'utilisation et les frameworks ou outils externes.
- **Frameworks & Drivers** : Contiennent les détails d'implémentation (frameworks, bases de données, etc.).


### Diagramme
<pre class="mermaid">
graph TD
    Entities --> UseCases
    UseCases --> InterfaceAdapters
    InterfaceAdapters --> FrameworksDrivers
</pre>


## Architecture Hexagonale

L'architecture hexagonale, ou architecture Ports et Adapters, a été introduite par Alistair Cockburn.
Elle vise à découpler le cœur métier des détails techniques.


### Concepts clés
1. **Domain** : Le cœur de l'application, contenant les règles métier.
2. **Ports** : Interfaces définissant les points d'entrée et de sortie du domaine.
3. **Adapters** : Implémentations des ports pour interagir avec des systèmes externes (bases de données, API, etc.).


### Avantages
- Isolation du domaine métier.
- Facilité de test grâce à la substitution des adaptateurs.
- Flexibilité pour changer les technologies externes.


### Diagramme
<pre class="mermaid">
graph TD
    Domain -->|Input Port| AdapterIn
    AdapterIn -->|Output Port| Domain
    Domain -->|Output Port| AdapterOut
    AdapterOut -->|External System| External
</pre>


## Event Sourcing

L'Event Sourcing est un modèle de conception où l'état d'une application est dérivé d'une séquence d'événements immuables.


### Fonctionnement
1. **Événements** : Chaque changement d'état est enregistré sous forme d'événement.
2. **Stockage** : Les événements sont stockés dans un journal d'événements.
3. **Reconstitution** : L'état actuel est reconstruit en rejouant les événements.


### Avantages
- Historique complet des changements.
- Facilité d'audit et de débogage.
- Possibilité de rejouer les événements pour corriger des erreurs ou migrer des données.


### Exemple
- **Commande passée** : `OrderPlaced`
- **Paiement effectué** : `PaymentProcessed`
- **Commande expédiée** : `OrderShipped`


### Utilisation avec CQRS
L'Event Sourcing est souvent combiné avec CQRS (Command Query Responsibility Segregation) pour séparer les opérations de lecture et d'écriture.



## Fin



## Bonus : GraphQL

GraphQL est un langage de requête pour les API, ainsi qu'un environnement d'exécution pour répondre à ces requêtes.
Il a été développé par Facebook en 2012 et open-sourcé en 2015.


### Pourquoi GraphQL ?

- **Flexibilité** : Les clients peuvent demander exactement les données dont ils ont besoin.
- **Réduction des surcharges** : Évite les requêtes multiples ou les réponses trop volumineuses.
- **Typage fort** : Les schémas GraphQL sont fortement typés, ce qui améliore la validation et la documentation.
- **Écosystème riche** : Compatible avec de nombreux langages et frameworks.


### Comparaison avec REST

| Fonctionnalité         | REST                          | GraphQL                     |
|------------------------|-------------------------------|-----------------------------|
| **Structure des données** | Fixe (endpoints définis)      | Flexible (requêtes dynamiques) |
| **Récupération des données** | Multiples requêtes nécessaires | Une seule requête suffit     |
| **Documentation**      | Manuelle ou Swagger           | Automatique via introspection |
| **Versionnement**      | Requiert de nouveaux endpoints | Géré via le schéma          |


### Concepts clés

1. **Schéma** : Définit les types de données et les opérations disponibles.
2. **Query** : Permet de lire des données.
3. **Mutation** : Permet de modifier des données.
4. **Subscription** : Permet de recevoir des mises à jour en temps réel.
5. **Resolvers** : Fonctions qui répondent aux requêtes et mutations.


### Exemple de Schéma

```graphql
type Query {
    pokemon(id: ID!): Pokemon
    pokemons: [Pokemon]
}

type Mutation {
    capturePokemon(id: ID!): Pokemon
}

type Pokemon {
    id: ID!
    name: String!
    type: String!
}
```


### Exemple de Requête

```graphql
query {
    pokemons {
        id
        name
        type
    }
}
```

**Réponse :**
```json
{
    "data": {
        "pokemons": [
            { "id": "1", "name": "Pikachu", "type": "Electric" },
            { "id": "2", "name": "Charmander", "type": "Fire" }
        ]
    }
}
```


### Exemple de Mutation

```graphql
mutation {
    capturePokemon(id: "1") {
        id
        name
        type
    }
}
```

**Réponse :**
```json
{
    "data": {
        "capturePokemon": {
            "id": "1",
            "name": "Pikachu",
            "type": "Electric"
        }
    }
}
```


### Intégration avec Node.js

```bash
npm install graphql express-graphql
```


#### Exemple de Serveur GraphQL

```javascript
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
    hello: () => 'Hello, world!',
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log('GraphQL server running at http://localhost:4000/graphql');
});
```


### Outils pour GraphQL

- **GraphiQL** : Interface web pour tester les requêtes.
- **Apollo Client** : Client GraphQL pour JavaScript.
- **Relay** : Client GraphQL développé par Facebook.
- **GraphQL Playground** : Alternative moderne à GraphiQL.


### TP : Implémentez GraphQL

1. Créez un serveur GraphQL avec `express-graphql`.
2. Ajoutez un schéma pour gérer les pokémons (lecture, capture, suppression).
3. Testez vos requêtes avec GraphiQL ou Apollo Client.



## Bonus : Socket.io

Socket.io est une bibliothèque JavaScript qui permet de créer des applications en temps réel en utilisant WebSocket.
Elle offre une API simple pour gérer les connexions bidirectionnelles entre le client et le serveur.


### Pourquoi utiliser Socket.io ?

- **Temps réel** : Permet des communications instantanées entre le client et le serveur.
- **Fallback automatique** : Passe à d'autres protocoles (comme HTTP long-polling) si WebSocket n'est pas disponible.
- **Facilité d'utilisation** : API simple et abstraite pour gérer les événements.
- **Écosystème riche** : Compatible avec de nombreux frameworks et environnements.


### Installation de Socket.io

```bash
npm install socket.io
```


#### Client

```bash
npm install socket.io-client
```


### Exemple de serveur Socket.io

```javascript
import { Server } from 'socket.io';
import http from 'http';

const server = http.createServer();
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('Un utilisateur est connecté');

    socket.on('message', (data) => {
        console.log('Message reçu :', data);
        socket.emit('response', 'Message reçu avec succès');
    });

    socket.on('disconnect', () => {
        console.log('Un utilisateur s\'est déconnecté');
    });
});

server.listen(3000, () => {
    console.log('Serveur Socket.io en écoute sur le port 3000');
});
```


### Exemple de client Socket.io

```javascript
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('Connecté au serveur');
    socket.emit('message', 'Bonjour serveur !');
});

socket.on('response', (data) => {
    console.log('Réponse du serveur :', data);
});

socket.on('disconnect', () => {
    console.log('Déconnecté du serveur');
});
```


### Événements personnalisés

Socket.io permet de définir des événements personnalisés pour structurer les communications.


#### Serveur

```javascript
socket.on('chatMessage', (msg) => {
    console.log('Message de chat :', msg);
    io.emit('chatMessage', msg); // Diffusion à tous les clients
});
```


#### Client

```javascript
socket.emit('chatMessage', 'Salut tout le monde !');
socket.on('chatMessage', (msg) => {
    console.log('Nouveau message :', msg);
});
```


### Rooms et namespaces

Les rooms permettent de regrouper des sockets pour envoyer des messages à un sous-ensemble de clients.

```javascript
socket.join('room1');
io.to('room1').emit('message', 'Message pour room1');
```


#### Namespaces

Les namespaces permettent de créer des espaces de noms pour organiser les connexions.

```javascript
const chat = io.of('/chat');
chat.on('connection', (socket) => {
    console.log('Utilisateur connecté au namespace /chat');
});
```


### TP : Chat en temps réel

1. Créez un serveur Socket.io.
2. Implémentez un système de chat en temps réel.
3. Ajoutez des rooms pour permettre des discussions privées.
4. Testez avec plusieurs clients connectés.
