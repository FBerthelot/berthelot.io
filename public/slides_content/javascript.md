<!-- .slide: data-background="#ff9900" -->
# Le Javascript



<!-- .slide: data-background="#0af" -->
## Programme

- Historique
- Les nouveautés année par année
- Les liens utiles pour débuter



<!-- .slide: data-background="#273E47" -->
## Historique

<pre class="mermaid">
    timeline
        title L'histoire du JS
        1989 : Naissance du Web
        1991 : Naissance du HTML
        1995 : Début de la guerre NetScape / IE
             : JavaScript créé par Brendan Eich (Netscape)
        1996 : Naissance du CSS
        1997 : Direction la Suisse et EcmaInternational
        2008 : Chrome, JavaScript enfin performant !
        2009 : Naissance de Node.JS
             : ES5 / HTML5 / CSS3
        2015 : ES6
        2016 : ES7 / ES2016
</pre>


<!-- .slide: data-background="#273E47" -->
## La suisse

EcmaInternation = Organisme suisse de standardisation de circuits imprimé

Depuis 2015, chaque année (vers juin), une nouvelle version.


<!-- .slide: data-background="#273E47" -->
## Groupe de travail TC39

- [Proposal](https://github.com/tc39/proposals)
- [Finished Proposal](https://github.com/tc39/proposals/blob/master/finished-proposals.md)



<!-- .slide: data-background="#D8C99B" -->
## Les racines du JS, ES5

- Instruction & commentaires
- Variable & Assignation
- Types
- Fonctions
- Assertions
- Scopes
- closures
- This
- Prototypes


<!-- .slide: data-background="#D8C99B" -->
## Instruction & Commentaires
```javascript
// Un commentaire
/* Un commentaire */
var maVariable; // le ; indique la fin d'une instruction
/* Ceci
est
un
commentaire
*/
```


<!-- .slide: data-background="#D8C99B" -->
## Variable
Déclaration & Assignation
```javascript
  // on déclare une variable et on lui assigne une valeur
  var uneChaineDeCaractere = 'Hello zenika';
```


<!-- .slide: data-background="#D8C99B" -->
## Types
JavaScript est un langage faiblement typé

```javascript
// types prémitifs
1; // number
'toto'; // string
true; // booleen
undefined;
null;

// types par références
[1, true, 'une string', {}]; // array
{cle: 1}; // object

```


<!-- .slide: data-background="#D8C99B" -->
## Types

le typage est dynamique!

```javascript
var unNombre = 1;
var maVariable = 'toto'; /* doubleQuote ça marche aussi */
maVariable = true;
maVariable = null;
maVariable = unNombre;

```


<!-- .slide: data-background="#D8C99B" -->
## Typage explicite
Un exemple avec Typescript
#pasDuJS
```javascript
  var unNombre: number = 1;
  var unBooleen: boolean = true;

  var unTableau: string[] = ['une string', 'paul', 'jacques'];

```


<!-- .slide: data-background="#D8C99B" -->
## Type primitif

```javascript
var a = 10;

var b = a;

b = 20;

console.log(a);//10
console.log(b);//20
```


<!-- .slide: data-background="#D8C99B" -->
## Type par référence

```javascript
var x = {name: 'John'};

var y = x;

y.name = 'David';

console.log(x.name);//'David'
console.log(y.name);//'David'
```


<!-- .slide: data-background="#D8C99B" -->
## Les fonctions

```javascript
// first class citizen
// fonction nommée
function multiplication (param1, param2) {
  return param1 * param2;
}

multiplication(2, 2); // retourne 4

// Une fonction est un objet
console.log(multiplication.name); // 'multiplication'

// Fonction anonyme
var multiplication = function () { /*...*/ }
```


<!-- .slide: data-background="#D8C99B" -->
## Opérateurs
```javascript
  5 + 22 ; // 27
  4 - 7 ; // -3
  2 * 2 ; // 4
  41 % 7 ; // 6
  !true ; //false
```


<!-- .slide: data-background="#D8C99B" -->
## Algèbre de Boole

```javascript
  // a ET b est VRAI si et seulement si
  // a est VRAI ET b est VRAI

  var maVariable = true && false; // false
  var maVariable = true && true; // true

  // a OU b est VRAI si et seulement si
  // a est VRAI OU b est VRAI

  var maVariable = false || true; // true
  var maVariable = false || false; // false
```

[Exercice pour débuter l'algèbre de bool](https://gist.github.com/FBerthelot/673b229717d28dc1fca554b23736439b)


<!-- .slide: data-background="#D8C99B" -->
## Lois de Morgan
```javascript
  // non (A ou B) = (non A) et (non B)
  !(A || B) = !A && !B

  // non (A et B) = (non A) ou (non B)
  !(A && B) = !A || !B
```


<!-- .slide: data-background="#D8C99B" -->
## Assertions

```javascript
'1' == 1; // true
true == '1'; // true
true == 1; // true
```

** Coercition du type ! **


<!-- .slide: data-background="#D8C99B" -->
## Assertions

Toujours utiliser un triple égale<br>
pour ne par convertir le type

```javascript
  1 === 1; // true
  true !== false; // true

  1 > 2; // false
  1 >= 2;// false
  1 < 2; // true
  1 <= 2;// true
```


<!-- .slide: data-background="#D8C99B" -->
## Block conditionel

```Javascript
var variable1 = true;
var variable2 = false;

// Qu'est ce qui sera affiché dans la console ?
if (variable1 || variable2) {
    console.log('L\'une des conditions est vraie');
}
else if (variable1 && variable2) {
    console.log('Les deux conditions sont vraies');
}
else {
    console.log('La condition est fausse');
} // L'une des conditions est vraie sera affiché dans la console
```


<!-- .slide: data-background="#D8C99B" -->
## Switch
```javascript
var expr = 'Kakis';
switch (expr) {
  case 'Oranges':
      console.log('Les oranges sont à  1€30 le kilo.');
      break;
  case 'Pommes':
  case 'Kakis':
      console.log('Les pommes et les kakis sont à 2€90 le kilo.');
      // Les pommes et les kakis sont à 2€90 le kilo.
      break;
  default:
      console.log('Désolé, il n\'y a plus de ' + expr + '.'); //Désolé, il n'y a plus de Kakis.
}
```


<!-- .slide: data-background="#D8C99B" -->
## Boucles

Du classique : `while`

```javascript
var it = 0;

while (it < 10) {
  it++;
}

console.log(it); // 10

do {
  it++;
} while(it < 10)

console.log(it); // 11
```


<!-- .slide: data-background="#D8C99B" -->
## Boucles

Au classique : `for`

```javascript
for (var i = 0; i < 10; i++;) {
    console.log(i); // 0, puis 1, 2, 3, 4, 5, 6, 7, 8, 9
}

for (var i in [1, 'a', 3, '5']) {
    console.log(i); // 0, puis 1, puis 2, puis 3
}
```


<!-- .slide: data-background="#D8C99B" -->
## Function Hoisting
Les déclarations de fonctions sont toujours exécutées avant le reste

```javascript
// Definition hissée!
  definitionHisse();

// TypeError: ce n'est pas une fonction
  definitionPasHisse();

  function definitionHisse() {
      console.log("Definition hissée!");
  }

  var definitionPasHisse = function () {
      console.log("Definition pas hisse!");
  };
```


<!-- .slide: data-background="#D8C99B" -->
## Scope
Scope = portée d'un symbole

Scope d'une variable = fonction

```javascript
function scope () {
  var answer1 = foo();

  function foo () { return 42; }

  var answer2 = foo();

  if (true) {
    var banana = 'banana';
  }
  console.log(banana); //banana
}
```


<!-- .slide: data-background="#D8C99B" -->
## Closure

Une fonction capture le scope parent ! Une fonction déclarée dans un block a accès à son block parent

```javascript
var bar = 'hello';

function foo () {
  console.log(bar);
}

foo(); // 'hello'

bar = 'world';

foo();   // 'world'
```


<!-- .slide: data-background="#D8C99B" -->
## Programmation orientée objet

Les classes sont des fonctions (constructeurs) en JS.

```javascript
function Humain (size) {
  this.size = size;
  this.manger = function () {
  return "Miam";
  }
}

var chloe = new Humain("1m68"); //Création nouvelle instance

console.log(chloe.manger()); // Miam
console.log(chloe.size); // 1m68
```


<!-- .slide: data-background="#D8C99B" -->
## This

le mot clé this fait référence à un scope, mais lequel ?

  ```javascript
  function () {
      function foo() { console.log(this); }

      foo();            // this = scope appelant
      new foo();        // this = instance de la classe
      var object = { bar: foo };
      object.bar();     // this = object
      foo.call(object); // this = object
  }
  ```


<!-- .slide: data-background="#D8C99B" -->
## Prototype

Le JS n'est pas un langage Objet, pourtant...

```javascript
function Humain () {
  this.manger = function () {
  return "Miam";
  }
}

var chloe = new Humain();
var marc = new Humain();
marc.manger = function () {
    return "Ravioli";
}

console.log(marc.manger()); // Ravioli
console.log(chloe.manger()); // Miam
```

note: Le prototype d'un objet est utilisé pour fournir de façon dynamique des propriétés aux objets qui héritent du prototype
http://blog.xebia.fr/2013/06/10/javascript-retour-aux-bases-constructeur-prototype-et-heritage/


<!-- .slide: data-background="#D8C99B" -->
## Prototype

Le JS est un langage prototypal

```javascript
function Humain () {}

Humain.prototype.manger = function () {
    return "Miam";
}

var chloe = new Humain();
var marc = new Humain();
marc.__proto__.manger = function () {
    return "Ravioli";
}

console.log(marc.manger()); // Ravioli
console.log(chloe.manger()); // Ravioli
```


<!-- .slide: data-background="#D8C99B" -->
## Héritage

En JS on se sert de la chaîne prototypal pour hériter

```javascript
function Humain () {}
Humain.prototype.manger = function () {
    return "Miam";
}

function Etudiant(){}

Etudiant.prototype = Humain.prototype;
Etudiant.prototype.stage = true;

var chloe = new Etudiant();
console.log(chloe.manger()); // Miam
console.log(chloe.stage); // true
```


<!-- .slide: data-background="#D8C99B" -->
## Astuces

```javascript
var unObjet;

var defaultValue = unObjet || {};

// protection contre l'accès d'une propriété text d'un object undefined
var text = defaultValue.data && defaultValue.data.text;
```


<!-- .slide: data-background="#D8C99B" -->
## Astuces - Callback

```javascript
function sayHelloLaterMayBe(callback) {
  setTimeout(function() {
    if(Math.random() < 0.5) {
      return cb && cb(null, 'hello');
    }
    return cb(new Error('Tu t\'es pris un vent !!'));
  }, 500);
}
sayHelloLaterMayBe(function (err, resultat) {
  if(err) {
    throw err;
  }
  console.log(resultat);
});
```



<!-- .slide: data-background="#00a6ff" -->
## ES6 / ES2015

The game changer


<!-- .slide: data-background="#00a6ff" -->
## Un tas de nouveautés !

2009 -> 2015 = 6 ans de nouveauté d'un coup !
Chaques année, une nouvelle version.


<!-- .slide: data-background="#00a6ff" -->
## Rétrocompatibilité !

![](/illustrations/Javascript.png)


<!-- .slide: data-background="#00a6ff" -->
## `let` et `const`

Des variables et constantes bien scopé !

```javascript
for (let i in [1, 0, 4]) {
    const test = 'une constante';
    test = 'une autre valeur'; // KO
}

if(true) {
  const banana = 'banana';
}

console.log(i, banana); // undefined et undefined
```


<!-- .slide: data-background="#00a6ff" -->
## Arrow function

```javascript
function () {
    this.test = [1, 2, 4, 5];
    this.multiple = 2;

    let firstWay = this.test.map((value) => {
        return value * this.multiple;
    });

    const secondWay = this.test.map(x => x * this.multiple);
}
```


<!-- .slide: data-background="#00a6ff" -->
## Arrow function

```javascript
function () {
    this.test = [1, 2, 4, 5];
    this.multiple = 2;

    let firstWay = this.test.map((value) => {
        return value * this.multiple;
    });

    const secondWay = this.test.map(x => x * this.multiple);
}
```

Des fonctions que ne créent pas de `this` !


<!-- .slide: data-background="#00a6ff" -->
## Classes

```javascript
class chien extends animal {
    constructor () {
      super();
    }

    uneMethode () {
        return 42;
    }

    uneMethodeDuParent() { super.bien(); }
    static uneMethodeStatic() { return 43; }
}
```


<!-- .slide: data-background="#00a6ff" -->
## Classes - getter, setter

```javascript
class Charmed {
  get sisters() { return this._sisters; }
  set sisters(array) {
    if(array.length > 3) {
      throw new Error('there is only 3 sisters');
    }
    this._sisters = array;
  }
}

const charmed = new Charmed();
charmed.sisters = ['proue', 'fitbit', 'poivre'];
console.log(charmed.sisters);
charmed.sisters = ['', '', '', '']; // KO
```


<!-- .slide: data-background="#00a6ff" -->
## Promises

```javascript
anAsyncCall()
    .then((data) => {
        return data.userId;
    })
    .then((userId) => anotherAsyncCall(userId) )
    .then((dataOfSecondCall) => {
        console.log(
          'yolo je chaine les promesses',
          dataOfSecondCall
        );
    })
    .catch((err) => {
        console.error(err);
    });
```


<!-- .slide: data-background="#00a6ff" -->
## Promises

```javascript
function anAsyncCall() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (Math.random() > 0.5){
                reject(new Error('L\'aléatoire ne vous aime pas !'));
            }
            resolve(42);
        }, 500);
    });
}
```


<!-- .slide: data-background="#00a6ff" -->
## Promises.race

```javascript
  Promise.race([
    fetch('http://slowAPI.com/toto'),
    fetch('http://fastAPI.com/toto')
  ])
    .then((result) => console.log('probably fastAPI', result))
    .catch((err) => console.error('first error', err));

  Promise.all([
    fetch('http://slowAPI.com/toto'),
    fetch('http://fastAPI.com/toto')
  ])
    .then((results) => {
      console.log('slowAPI', result[0]);
      console.log('fastAPI', result[1]);
    });
```


<!-- .slide: data-background="#00a6ff" -->
## Templates Literals

```javascript
console.log(`Combien font 2 + 2  ? ${2 + 2}`);
// Combien font 2 + 2 ? 4

let rang = 'premier';
console.log(`"J'aime bien la personne au ${rang} rang"
  ... car elle est assise
  et qu'elle me laisse passer des lignes`);
// "J'aime bien la personne au premier rang"
//    ... car elle est assise
//    et qu'elle me laisse passer des lignes
```


<!-- .slide: data-background="#00a6ff" -->
## Tag Functions

```javascript
function component(strings, child) {
  return {
    component: strings[0].replace(' > '), // div
    child
  }
}

component`div > ${child} nobodyCare`;
```


<!-- .slide: data-background="#00a6ff" -->
## Destructuring

```javascript
let unTableau = [1, 'paul', 4, 5];
let [val1, val2, val3] = unTableau;
console.log(val1, val2, val3); // 1, paul, 4

const unObjet = { toto: 42 };
const {toto} = unObjet;
console.log(toto); // 42
```


<!-- .slide: data-background="#00a6ff" -->
## Opérateur ... (Rest et spread)

```javascript
let unTableau = [1, 'paul', 4, 5];
let [val1, ...autres] = unTableau;
console.log(val1, autres);   // 1 ['paul', 4, 5]

const unObject = {
  toto: {
    blague: null
  },
  florent: true,
  yolo: 4
};
const {toto: {blague}, ...otherProps} = unObjet;
console.log(otherProps); // {florent: true, yolo: 4}
console.log(blague); // null
```


<!-- .slide: data-background="#00a6ff" -->
## Opérateur ... (Rest et spread)

```javascript
let unTableau = [1, 'paul', 4, 5];
function uneFonction(arg1, ...autreArgs) {
    return autreArgs;
}

uneFonction(1, 2, 3, 4, 5, 6); // [2, 3, 4, 5, 6]

function unAutreFonction(x, y, z) {
    console.log(x, y , z);
}
unAutreFonction(...unTableau); // [1, 'paul', 4]
```


<!-- .slide: data-background="#00a6ff" -->
## Symbols

```javascript
let symbol = Symbol(); // génére un ID unique

Symbol("toto") === Symbol("toto"); // false !
```
Les `symbol` sont itérable


<!-- .slide: data-background="#00a6ff" -->
## Generator

```javascript
function *countTo3() {
      yield 1;
      yield 2;
      yield 3;
      return 42;
}

let iterator = countTo3();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 42, done: true }
```


<!-- .slide: data-background="#00a6ff" -->
## Itérables

Les itérables implémente la fonction `[Symbol.iterator]`

```javascript
let uneChaîne = 'yop';
typeof uneChaîne[Symbol.iterator]  // 'function'
const iterator = uneChaîne[Symbol.iterator]();

iterator.next()  // { value: "y", done: false }
iterator.next()  // { value: "o", done: false }
iterator.next()  // { value: "p", done: false }
iterator.next()  // { value: undefined, done: true }
```


<!-- .slide: data-background="#00a6ff" -->
## Boucles for...of

```javascript
for (let x of [1, 'x', 3, 45]) {
    console.log(x); // 1, puis 'x', puis 3, puis 45
}
```


<!-- .slide: data-background="#00a6ff" -->
## Defaults values

```javascript
function uneFonction(param1 = 34, param2 = 'unString') {
    console.log(param1, 'et' , param2);
}

uneFonction(); // 34 et unString
uneFonction('ben', 'jerry'); // ben et jerry
uneFonction(null, 35); // null et 35
uneFonction(undefined, 35); // 34 et 35
```


<!-- .slide: data-background="#00a6ff" -->
## Map | Set

```javascript
let uneMap = new Map();
uneMap.set('clé', 'valeur');
uneMap.set(1, 4); // La clé peut être n'importe quoi !

console.log(unMap.get('clé')); // valeur
console.log(unMap.get(1)); // 4

let unSet = new Set();
unSet.set(6);
unSet.set(0);
unSet.set('jeu set et map');
for (let val of unSet.values()) {
  console.log(val); // 6 puis 0 puis jeu set et map
}
```
Ils sont itérables !


<!-- .slide: data-background="#00a6ff" -->
## WeakMap | WeakSet

Identique aux Map | Set mais :
  - ne sont pas itérable
  - n'influence pas le grabage collector (les valeurs peuvent disparaitre si les clés disparaissent)

```javascript
let unWeakMap = new WeakMap();
let unWeakSet = new WeakSet();
```


<!-- .slide: data-background="#00a6ff" -->
## Proxy function

Intercepte les opérations sur les objets

```javascript
let handler = {
    get: function(cible, nom){
        return nom === 'd' ? 'pas de gros mots !' : cible[nom];
    },
    set: function (cible, nom, valeur) {
        cible[nom] = valeur || 42;
    }
};

let p = new Proxy({}, handler);
p.c = 36;
p.r = undefined;

console.log(p.c, p.d, p.r); // 36, 'pas de gros mots !', 42
```


<!-- .slide: data-background="#00a6ff" -->

## Array.prototype ++

```javascript
  [ 1, 3, 4, 2 ].find(x => x > 3) // 4
  [ 1, 3, 4, 2 ].findIndex(x => x > 3) // 2

  new Array(3).fill(null) // [null, null, null]
```


<!-- .slide: data-background="#00a6ff" -->
## Modules

Module A
```javascript
export const age = 21;
export let lastname = 'Florent';
export default 'Berthelot';
```

Module B
```javascript
import lastname, {lastname as firstname, age} from 'moduleA';

console.log(firstname, lastname, age);
// Florent Berthelot 18
```

Fonctionne avec tous les symboles (class, function, ...);
[L'histoire](http://berthelot.io/slides/es-modules.html)



<!-- .slide: data-background="#EF8275" -->
# ES2016

Calm down


<!-- .slide: data-background="#EF8275" -->
## Array.prototype.includes

```javascript
  [1, 2, 4, 'flo'].includes('flo'); // true
  [1, 2, 4, 'flo'].includes('bg'); // false
```


<!-- .slide: data-background="#EF8275" -->
## Opérateur de puissance

```javascript
let resultat = 2 ** 3;

console.log(resultat); // 8

resultat **= 2;

console.log(resultat); // 64
```



<!-- .slide: data-background="#59d0ffcc" -->
## ES2017

Finalisation de l'asynchrone


<!-- .slide: data-background="#59d0ffcc" -->
## Async / await

```javascript
async function maFunction() {
    const userInfo = await getUserInfo();
    const userID = userInfo.id;

    const friendList = await getFriend(userID);

    console.log(
      'friend list of ', userInfo.name, ':', friendList
    );
};
```


<!-- .slide: data-background="#59d0ffcc" -->
## Object.values / Object.entries

```javascript
const verite = {
  painAuChocolat: true,
  chocolatine: false
};

Object.values(verite);
// [true, false];

Object.entries(verite);
// [['painAuChocolat', true], ['chocolatine', false]]
```


<!-- .slide: data-background="#59d0ffcc" -->
## String padStart padEnd

The end of the padLeft war

```javascript
const creditCard = '5581';
creditCardEnd.padStart(12, '*');
// ************5581

creditCardEnd.padEnd(12, '*');
// 5581************
```


<!-- .slide: data-background="#59d0ffcc" -->
## Trailing commas

```javascript
const test = {
    clef: 2,
    clee: 3, // la virgule n'est plus toléré mais dans les specs...
};
```
Pour du code review avec moins de bruit !

Perso j'aime pas, trop verbeux...



<!-- .slide: data-background="#98C9A3" -->
## ES2018

Ajout de ce que tout le monde utilisait déjà.


<!-- .slide: data-background="#98C9A3" -->
## Object Rest/Spread Properties

```javascript
const state = {
  toto: 42,
  tata: 70
};

const newState = {
  tata: 60,
  ...state,
  toto: 49
};
```

Que vaut *newState* ?


<!-- .slide: data-background="#98C9A3" -->
## Object Rest/Spread Properties

```javascript
const state = {
  toto: 42,
  tata: 70
};

const newState = {
  tata: 60,
  ...state,
  toto: 49
};
```

```javascript
{
  toto: 49,
  tata: 70
}
```


<!-- .slide: data-background="#98C9A3" -->
## Asynchronous Iteration

```javascript
for await (const line of readLines(filePath)) {
  console.log(line);
}
```


<!-- .slide: data-background="#98C9A3" -->
## Promise.finally

```javascript
fetch()
  .then(() => console.log('success'))
  .catch(() => console.error('error'))
  .finally(() => console.debug('Fetch ended'));
```


<!-- .slide: data-background="#98C9A3" -->
## Regex - s

`s` flag
```javascript
/foo.bar/.test('foo\nbar'); // false
/foo.bar/s.test('foo\nbar'); // true
```


<!-- .slide: data-background="#98C9A3" -->
## Regex - Capturing group

```javascript
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
let result = re.exec('2015-01-02');
// result.groups.year === '2015';
// result.groups.month === '01';
// result.groups.day === '02';
```


<!-- .slide: data-background="#98C9A3" -->
## Regex - Lookbehind regex

```javascript
// Positive lookhead
const regex = /Flo(?=\(virile\))/g;
regex.exec('Flo(virile)'); // true
regex.exec('Flo'); // false

// Negative lookhead
const regex2 = /Flo(?!=\(virile\))/g;
regex2.exec('Flo(virile)'); // false
regex2.exec('Flo'); // true

// Lookbehind
const regex3 = /(?<=\(virile\))Flo/g;
regex3.exec('(virile)Flo'); // true
regex3.exec('Flo'); // false
```


<!-- .slide: data-background="#98C9A3" -->
## Regex - Unicode escape

```javascript
const regexGreekSymbol = /\p{Script=Greek}/u;
regexGreekSymbol.test('π');
```



<!-- .slide: data-background="#8D6A9F" -->
# ES2019

Smoosh that !


<!-- .slide: data-background="#8D6A9F" -->
## Optional Catch arg

```javascript
try {
  // try to use a web feature which may not be implemented
} catch (unused) {
  // fall back to a less desirable web feature with broader support
}

try {
  // ...
} catch {
  // ...
}
```


<!-- .slide: data-background="#8D6A9F" -->
## Symbol.description

```javascript
Symbol('desc').description; // 'desc'
```


<!-- .slide: data-background="#8D6A9F" -->
## Object.fromEntries

`git reverse ES2017/Object.entries`

```javascript
obj = Object.fromEntries([['a', 0], ['b', 1]]);
// {a: 0, b: 1}
```


<!-- .slide: data-background="#8D6A9F" -->
## trim{start/end}

```javascript
const bg = '    Florent    ';

bg.trimStart(); // 'Florent    '
bg.trimEnd();   // '    Florent'
```


<!-- .slide: data-background="#8D6A9F" -->
## flat / flatmap

```
[1, 2, [3, 4]].flat();
// [1, 2, 3, 4]

[1, 2, 5, 5].flat();
// [1, 2, 5, 5]

[1, 2, 3, 4].flatMap(x => [x * 2]);
// [2, 4, 6, 8]
```



<!-- .slide: data-background="#EDEEC9" -->
# ES2020

Dynamic Imports ans many more !


<!-- .slide: data-background="#EDEEC9" -->
## dynamic import()

```JavaScript
import('http://cdn/d3.js')
  .then(d3 => {
    d3.makeABeautifulChart();
  });
```


<!-- .slide: data-background="#EDEEC9" -->
## Optional Chaining

```javascript
const cat = {
  status: {
    isAlive: 'maybe'
  }
};

console.log(cat.status?.isAlive); // 'maybe'

delete cat.status;

console.log(cat.status?.isAlive); // undefined
```


<!-- .slide: data-background="#EDEEC9" -->
## Nullish Coalescing Operator

```javascript
const cat = {
  isCute: false,
  location: null,
  goal: undefined,
  killedMouses: 0,
};

const catIsCute = cat.isCute ?? true; // false
const catIsCute2 = cat.isCute || true; // true

const catkilledMouses = cat.killedMouses ?? 100; // 0
const catkilledMouses2 = cat.killedMouses || 100; // 100

const catLocation = cat.location ?? 'hidden'; // 'hidden'
const catLocation2 = cat.location || 'hidden'; // 'hidden'

const catGoal = cat.goal ?? 'destroy the world'; // 'destroy the world'
const catGoal2 = cat.goal || 'destroy the world'; // 'destroy the world'
```


<!-- .slide: data-background="#EDEEC9" -->
## GlobalThis

**globalThis** is the new Web **window**

**globalThis** is the new NodeJS **global**


<!-- .slide: data-background="#EDEEC9" -->
## String.prototype.matchAll()

```JavaScript
const regex = /toto/g;
const text = "toto et toto sont dans un bateau";

console.log(text.match(regex));
// ["toto", "toto"]

const matches = text.matchAll(regex);
console.log(matches.next()); // {done: false, value: ["toto"]} with full info of this match
console.log(matches.next()); // {done: false, value: ["toto"]}
console.log(matches.next()); // {done: true, value: undefined}
```


<!-- .slide: data-background="#EDEEC9" -->
## BigInt

For the very rich people

```JavaScript
const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
// ↪ 9007199254740991

const maxPlusOne = previousMaxSafe + 1n;
// ↪ 9007199254740992n

const theFuture = previousMaxSafe + 2n;
// ↪ 9007199254740993n
```


<!-- .slide: data-background="#EDEEC9" -->
## Promise.allSettled

```javascript
Promise.all([
  Promise.reject(42),
  Promise.resolve(70)
])
  .then(() => console.log('never called'));

Promise.allSettled([
  Promise.reject(42),
  Promise.resolve(70)
])
  .then((resultAndError) => console.log('called'));
```



<!-- .slide: data-background="#152d4d" -->
# ES2021

Deeper than ES2020.


<!-- .slide: data-background="#152d4d" -->
## Numeric Separators

```javascript
100000000
1_000_000_000           // Ah, so a billion
101_475_938.38          // And this is hundreds of millions

let fee = 123_00;       // $123 (12300 cents, apparently)
let fee = 12_300;       // $12,300 (woah, that fee!)
let amount = 12345_00;  // 12,345 (1234500 cents, apparently)
let amount = 123_4500;  // 123.45 (4-fixed financial)
let amount = 1_234_500; // 1,234,500
```


<!-- .slide: data-background="#152d4d" -->
## Promise.any

Comme Promise.race mais avec une gestion d'erreur différente.
```javascript
  Promise.race([
    fetch('http://slowAPI.com/toto'),
    fetch('http://fastAPI.com/toto')
  ])
    .then((result) => console.log('probably fastAPI', result))
    .catch((err) => console.error('first error', err));

  Promise.any([
    fetch('http://slowAPI.com/toto'),
    fetch('http://fastAPI.com/toto')
  ])
  .then((result) => console.log('probably fastAPI', result))
  .catch((err) => console.error('all errors', err.map(e => e.message).join('\n')));
```


<!-- .slide: data-background="#152d4d" -->
## String .replaceAll()

```JavaScript
const text = "toto et toto sont dans un bateau";

text.replace('toto', 'tata');
// "tata et toto sont dans un bateau"

text.replace(/toto/g, 'tata');
// "tata et tata sont dans un bateau"

text.replaceAll('toto', 'tata');
// "tata et tata sont dans un bateau"
```


<!-- .slide: data-background="#152d4d" -->
## Logical Assignment

```JavaScript
let a = 1;
let b = 2;

a ||= b;
// a === 1

a &&= b;
// a === 2

a ??= 'beta';
// a === 2;
```


<!-- .slide: data-background="#152d4d" -->
## WeakRef

Utile pour du cache !

```JavaScript
const maRef = new WeakRef({toto: 42});

console.log(maRef.deref());
// {toto: 42}

console.log(maRef.deref());
// {toto: 42} ou undefined si le garbage collector est passé
```


<!-- .slide: data-background="#152d4d" -->
## Finalizers

Le compagnon de WeakRef pour intéragir avec le garbage collector.

```JavaScript
  const maRef = new WeakRef({toto: 42});
  const registry = new FinalizationRegistry((value) => {
      console.log(value);
  });

  registry.register(maRef, 'hello');

  maRef.deref();

  // Affichera 'hello' quand maRef sera garbage collecté
```



<!-- .slide: data-background="#eb4034" -->
# ES2022

Utile, mais est-ce classieux ?


<!-- .slide: data-background="#eb4034" -->
## Top level await

```javascript
const students = ['Florent', 'Agnès'];
const florentNotes = await import(`/i18n/${students[0]}`);
```


<!-- .slide: data-background="#eb4034" -->
## array.prototype.at()

```javascript
const array = ['Un', 'Deux', 'trois'];

array.at(2); // 'Trois'
array.at(-2); // 'Deux'
array.at(200); // undefined
```


<!-- .slide: data-background="#eb4034" -->
## Public Typescript style

```javascript
class Boulangerie {
  by = 'nobody';
  buyerMoney = 10_00;
  static amount = 5_80;

  buySandwitch() {
    this.by = 'Florent Berthelot';
    this.money -= Boulangerie.amount;

    return 'done';
  }
}
```


<!-- .slide: data-background="#eb4034" -->
## Private

```javascript
class TwitterIsFullPrivate {
  #by;

  #buyTwitter() {
    this.#by = 'Elon Musk'
    return 'done';
  }

  static #AMOUNT = 44_000_000_000;

  static getAmount() {
    return this.#AMOUNT;
  }
}
```


<!-- .slide: data-background="#eb4034" -->
## RegExp Match Indices

```javascript
const match = /(?<nom>.*) (?<prenom>.*)/d.exec('Florent Berthelot');

match.indices.groups;
/*
{
    nom: [0,7],
    prenom: [8,17]
}
*/
```


<!-- .slide: data-background="#eb4034" -->
## Error Cause

```javascript
throw new Error(`Une erreur est survenue.`,
{cause: new Error('Une erreur de récursivité ?')}
);
```



<!-- .slide: data-background="#899fa9" -->
# ES2023

28 ans après, les tableaux sont réparés 🎉


<!-- .slide: data-background="#899fa9" -->
## Commençons par la fin

```javascript
[1,2,3,4].findLast((el) => el === 2) // 2
[1,2,3,4].findLastIndex((el) => el === 2) // 1

[1,2,3,4].findLastIndex(() => true) // 3
[1,2,3,4].findIndex(() => true) // 0
```


<!-- .slide: data-background="#899fa9" -->
## Bash compatible!

```javascript
#!/usr/bin/env node

console.log('Bonjour :-) Je suis un script node !');
export default {};
```


<!-- .slide: data-background="#899fa9" -->
## Immutabilité ! (1/4)

```javascript
const sample = ['p', 'o', 'r', 't'];

const newSample = sample.toReversed();
console.log(newSample); // trop
console.log(sample); // port

console.log(sample.reverse()); // trop
console.log(sample); // trop
```


<!-- .slide: data-background="#899fa9" -->
## Immutabilité ! (2/4)

```javascript
const sample = [3, 2, 1];

console.log(sample.toSorted()); // 1 2 3
console.log(sample); // 3 2 1
console.log(sample.sort()); // 1 2 3
console.log(sample); // 1 2 3
```


<!-- .slide: data-background="#899fa9" -->
## Immutabilité ! (3/4)

```javascript
const sample = [3, 2, 1];

console.log(sample.toSpliced(1, 2)); // 3
console.log(sample); // 3 2 1
console.log(sample.splice(1, 2)); // 2 1
console.log(sample); // 3
```


<!-- .slide: data-background="#899fa9" -->
## Immutabilité ! (4/4)

Si on change 4 lettres à coca ça fait...
```javascript
const sample = ['c', 'o', 'c', 'a'];

const changed = sample
.with(0, 'a')
.with(1, 'c')
.with(2, 'i')
.with(3, 'd')

console.log(changed); // acid
console.log(sample); // coca
```


<!-- .slide: data-background="#899fa9" -->
## WeakMap supporte les symboles comme clé

```javascript
const weak = new WeakMap();
weak.set(Symbol('borne'), {followers: 49.3});
```



<!-- .slide: data-background="#20214F" -->
# ES2024

GroupBy et des trucs cools sur les Regexs !


<!-- .slide: data-background="#20214F" -->
## RegExp again

```javascript
// difference/subtraction
// [A--B]

// intersection
//[A&&B]

// Par exemple :
'023370'.match(/([[0-9]--[89]])/v);
```


<!-- .slide: data-background="#20214F" -->
## RegExp again

```javascript
'🎉 ☀︎'.match(/[\p{Emoji}--\p{ASCII}]/v);
```


<!-- .slide: data-background="#20214F" -->
## Array GroupBy

```javascript
const array = [1, 2, 3, 4, 5];

Object.groupBy(array, (num, index) => {
  return num % 2 === 0 ? 'even': 'odd';
});
```


<!-- .slide: data-background="#20214F" -->
## Promise.withResolver()

```javascript
// Utile dans les tests ?
const {resolve, reject} = Promise.withResolver();

// Later...
resolve('ok');
```


<!-- .slide: data-background="#20214F" -->
## isWellFormed()

```javascript
const illFormed = "https://example.com/search?q=\uD800";
// UTF-16 is between 0xDC00 and 0xDFFF

console.log(illFormed.isWellFormed()); // false
```


<!-- .slide: data-background="#20214F" -->
## Atomics.waitAsync()

```javascript
const bufferShared = new SharedArrayBuffer(1024);
const arrayInt32 = new Int32Array(sab);

Atomics.waitAsync(arrayInt32, 0, 0, 2000)
  .then((result) => {
    console.log(result); // 'ok'
  });

setTimeout(() => {
  Atomics.notify(arrayInt32, 0);
}, 1000);
```


<!-- .slide: data-background="#20214F" -->
## Resizable ArrayBuffer

```javascript
const bufferResizable = new ArrayBuffer(8, { maxByteLength: 16 });
const bufferNotResizable = new ArrayBuffer(8);

bufferResizable.resize(12);
```


<!-- .slide: data-background="#20214F" -->
## Buffer Transfer

```javascript
const buffer = new ArrayBuffer(8);
const buffer2 = buffer.transfer();
```



<!-- .slide: data-background="#1E5945" -->
# ES2025

JSON is back!


<!-- .slide: data-background="#1E5945" -->
# JSON Import

```javascript
import json from "./foo.json" with { type: "json" };
import("foo.json", { with: { type: "json" } });
```


<!-- .slide: data-background="#1E5945" -->
# Capturing Group V2

```javascript
'2025-01 ou 01-2025 ?'.match(/(?<year>[0-9]{4})-[0-9]{2}|[0-9]{2}-(?<year>[0-9]{4})/)
```


<!-- .slide: data-background="#1E5945" -->
# Promise.try

```javascript
Promise.try(signIn, 'florent', 'password')
  .catch((err) => {
    console.error(err);
  });
```


<!-- .slide: data-background="#1E5945" -->
# Un autre pattern ?

```javascript
function catchOnSentry(action) {
  return Promise.try(action)
    .then((result) => console.log(result))
    .catch(sendErrorToSentry)
    .finally(() => console.log("Done"));
}

catchOnSentry(() => "Sync result");

catchOnSentry(() => {
  throw new Error("Sync error");
});

catchOnSentry(async () => "Async result");

catchOnSentry(async () => {
  throw new Error("Async error");
});
```


<!-- .slide: data-background="#1E5945" -->
# Set improvments

```javascript
Set.prototype.intersection(fn)
Set.prototype.union(fn)
Set.prototype.difference(fn)
Set.prototype.symmetricDifference(fn)
Set.prototype.isSubsetOf(fn)
Set.prototype.isSupersetOf(fn)
Set.prototype.isDisjointFrom(fn)
```


<!-- .slide: data-background="#1E5945" -->
# Iterator improvments

```javascript
Iterator.prototype.map(fn)
Iterator.prototype.filter(fn)
Iterator.prototype.take(fn)
Iterator.prototype.drop(fn)
Iterator.prototype.flatMap(fn)
Iterator.prototype.reduce(fn)
Iterator.prototype.toArray(fn)
Iterator.prototype.forEach(fn)
Iterator.prototype.some(fn)
Iterator.prototype.every(fn)
Iterator.prototype.find(fn)
Iterator.prototype.from(fn)
```



<!-- .slide: data-background="#1E5945" -->
# ES2026

Qu'est ce qu'ils nous cuisinent ?


<!-- .slide: data-background="#1E5945" -->
## Temporal

Bye bye `new Date()`

```javascript
const now = Temporal.now.plainDateTimeISO();
```
Immutable, toutes timezones, etc.


# Suivre l'actualité

- [Proposal](https://github.com/tc39/proposals)
- [Finished Proposal](https://github.com/tc39/proposals/blob/master/finished-proposals.md)

<!-- # Pratiquons !

- [Code Combat](https://codecombat.com)
- [Coding Game](https://www.codingame.com)
- [NodeSchool](http://nodeschool.io/)
- [plunker](https://plnkr.co/)
- [jsfiddle](https://jsfiddle.net/)

- [**ES6 katas**](http://es6katas.org/)

- [Code kata](http://codekata.com/)
- [Coding Dojo](http://codingdojo.org/kata/) -->


## Bonus


### L'asynchrone en JS



```javascript
function playLoto() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('La FIV a fonctionné');
        return;
      }
      reject(new Error("La FIV n'a pas fonctionné"));
    }, 1000);
  });
}

async function go() {
  try {
    const result = await Promise.any([haveABaby(), haveABaby(), haveABaby()]);
    console.log(result, "Préparons une chambre pour l'enfant 1");
  } catch (err) {
    console.error('Recommençons !', err.message);
  }
}
go();
```