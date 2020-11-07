# Taller de JavaScript Vol.2
**Segundo taller de JavaScript del DSC-UPIITA**

[![N|Solid](https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_hPnue3j.svg)](https://dsc.community.dev/national-polytechnic-institute-of-mexico-upiita/)

Segunda parte del taller de JavaScript del DSC en el que retomaremos los últimos temas del primero, retomaremos los tipos de variable y funciones para entrar del lleno a hoisting y scope, generadores, getters y setters, hablaremos del Event Loop y la Asincronia de Javascript, la cual pondemos en practica para realizar juntos un mini proyecto que podran encontrar completo en los archivos de este repo. 


---

## Glosario

### `scope`
Scope o contexto actual de ejecución. Es el contexto en el que los valores y las expresiones son "visibles" o pueden ser referenciados. Si una variable u otra expresión no está "en el Scope- alcance actual", entonces no está disponible para su uso. Los Scope también se pueden superponer en una jerarquía, de modo que los Scope secundarios tengan acceso a los ámbitos primarios, pero no al revés.


### `hoisting`
Hosting, o elevación es el comportamiento por defecto de JavaScript de “mover declaraciones al principio” del código. Hosting es un término que se puede encontrar a partir de ECMAScript® 2015 Language Specification.
```javascript
  var x = 5;

  (function () {
      console.log("x:", x); // no obtenemos '5' sino 'undefined'
      var x = 10;
      console.log("x:", x); // 10
  }());
```
**Explicación:**
```javascript
  var x = 5;

  (function () {
      var x; // Se elevo la declaración
      console.log("x:", x); // undefined
      x = 10;
      console.log("x:", x); // 10
  }());
```
> Lección: No user `var`. En su lugar usa `let` o `const`, inicializa tu variables a valores vacíos como `let texto = ""`, `let numero = 0` , `const arreglo = []`, `const objeto = {}`

[Ver más](https://developer.mozilla.org/es/docs/Glossary/Hoisting)


### `arrays`

```javascript
  const fruit = ["Banana", "Apple", "Pear"];
```

### Array Methods
Cuando creas un arreglo, puedes hacer varias cosas interesantes:

- concat() — Join several arrays into one
- indexOf() — Returns the first position at which a given element appears in an array
- join() — Combine elements of an array into a single string and return the string
- lastIndexOf() — Gives the last position at which a given element appears in an array
- pop() — Removes the last element of an array
- push() — Add a new element at the end
- reverse() — Sort elements in a descending order
- shift() — Remove the first element of an array
- slice() — Pulls a copy of a portion of an array into a new array
- sort() — Sorts elements alphabetically
- splice() — Adds elements in a specified way and position
- toString() — Converts elements to strings
- unshift() —Adds a new element to the beginning
- valueOf() — Returns the primitive value of the specified object

### `object`
Objects are certain kinds of variables. They are variables that can have their own values and methods. The latter are actions that you can perform on objects.

Los objectos (`Objects`) son cierto tipo de variable. Pueden tener sus propios variables y métodos (funciones). 

```javascript
const person = {
    firstName:"Juan",
    lastName:Pérez",
    age:20,
    nationality:"Mexican"
};
```

### `getter`

Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.


```javascript
  {get prop() { . . . } }
```

### `setter`
Asocia la propiedad de un objeto a una función que será llamada cuando haya un intento de asignar valor a esa propiedad.

```javascript
  {set prop(val) { . . . }}
  {set [expression](val) { . . . }}
```

### `generator`
El objeto `Generator` es retornado por una función generator y es conformado tanto el protocolo iterable como el protocolo iterador.


```javascript
  	function fibonacci() {
      var a = yield 1;
      yield a * 2;
    }

    var it = fibonacci();
    console.log(it);          // "Generator {  }"
    console.log(it.next());   // 1
    console.log(it.send(10)); // 20
    console.log(it.close());  // undefined
    console.log(it.next());   // throws StopIteration (as the generator is now closed)
```

### `event loop`



### `asincronia` (en JS):

Tarde o temprano necesitaremos realizar operaciones asíncronas, especialmente en ciertos lenguajes como Javascript, donde tenemos que realizar tareas que tienen que esperar a que ocurra un determinado suceso que no depende de nosotros, y reaccionar realizando otra tarea sólo cuando dicho suceso ocurra.

Ten en cuenta que pueden existir múltiples tareas asíncronas, dichas tareas puede que terminen realizandose correctamente (o puede que no) y ciertas tareas pueden depender de otras, por lo que deben respetar un cierto orden. Además, es muy habitual que no sepamos previamente cuanto tiempo va a tardar en terminar una tarea, por lo que necesitamos un mecanismo para controlar todos estos factores: las promesas, las cuales veremos algunos capítulos más adelante.

¿Cómo se gestiona la asincronía?
- `promises`
- `callbacks`
- `async/await` (ES6+)

Entender sobre asincronia, promersas, callbacks, etc. puede ser difícil cuando empieza. Te recomendamos este [artículo de Medium](https://medium.com/academia-hack/javascript-y-su-asincron%C3%ADa-1a9f3bcdc9ee). Y esta [otra referencias](https://lenguajejs.com/javascript/asincronia/que-es/)
  
## Referencias y recursos
- [JavaScript Cheatsheet](https://websitesetup.org/javascript-cheat-sheet/)
- [La biblia](https://developer.mozilla.org/es/) (aka Mozilla MDN)
  
## Retos
Los primeros 3 en mandarnos el miniproyecto con estilos propios **ganan un sticker**!

### Preguntas
Puedes usar el canal de `#javascript` en Discord o en el Grupo de Facebook.

## Sígue al DSC
| Red Social | Link |
| ------ | ------ |
| Facebook| [DSC IPN - UPIITA en Facebook](https://www.facebook.com/dscipnupiita) |
| Instagram | [DSC IPN - UPIITA en Instagram](https://www.instagram.com/dscipnupiita/) |
| Twitter | [DSC IPN - UPIITA en Twitter](https://twitter.com/dscipnupiita) |
