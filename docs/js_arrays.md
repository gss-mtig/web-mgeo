# Matrices o Arreglos

Las matrices **Array** son una manera ordenada de almacenar una lista de elementos de datos bajo un solo nombre de variable. Las matrices se describen como "objetos tipo lista"; básicamente son objetos individuales que contienen múltiples valores almacenados en una lista. Si no tuvieramos matrices, tendríamos que almacenar cada elemento en una variable separada.

Las matrices se construyen con corchetes, que contiene una lista de elementos separdos por comas. Puedes almacenar cualquier elemento en una matriz — cadena, número, objeto, otra variable, incluso otra matriz.

* Los arrays usan `[]`.
* Los elementos están separados por `,`.

``` js
let compra = ["pan", "leche", "queso", "hummus", "noodles"];
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ["tree", 795, [0, 1, 2]];
let colores = ["Rojo", "Verde", "Azul"];
```

## Acceder y modificar elementos de la matriz

Se puede acceder a elementos individuales en la matriz mediante la notación de corchetes, indicando la posición del elemento que se quiera acceder

!!! warning

    Las posiciones dentro de las matrices se comienzan a contar desde 0. El primer elementos de la matriz tiene la posición 0. 

``` js
let compra = ["pan", "leche", "jamón", "hummus", "noodles"];
let pan = compra[0];
let charcuteria = compra[2];
```

Puedes modificar un elemento en una matriz simplemente dando a un item de la matriz un nuevo valor.

``` js
let compra = ["pan", "leche", "jamón", "hummus", "noodles"];
compra[0] = "tomates";
```

Ten en cuenta que una matriz dentro de otra matriz se llama matriz multidimensional. Puedes acceder a los elementos de una matriz que estén dentro de otra, encadenando dos pares de corchetes.

``` js
let random = ["tree", 795, [0, 3, 2]];
let tres = random[2][1];
```

## Agregar elementos

Veremos algunos métodos bastante útiles relacionados con matrices

|    Método   |   Descripción   |
|:-----------:|:---------------:|
| `push(valor)` | Agrega al final |
| `pop()` | Elimina el último |
| `unshift(valor)` | Agrega al inicio |
| `shift()` | Elimina el primero |

``` js
let numeros = [1, 2, 3];
numeros.pop(); // [1, 2]
numeros.unshift(0); // [0, 1, 2]
```

Para añadir o eliminar un elemento al final de una matriz podemos usar **push()** y **pop()** respectivamente.

Ejemplo

``` js
let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
//agregar un elemento
myArray.push('Cardiff');
console.log(myArray);

//eliminar el último elemento
myArray.pop();
console.log(myArray);
```

Los métodos **unshift()** y **shift()** funcionan exactamente igual de *push()* y *pop()*, respectivamente, excepto que funcionan al principio de la matriz, no al final.

Ejemplo

``` js
let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
//agregar un elemento
myArray.unshift('Cardiff');
console.log(myArray);

//eliminar el último elemento
myArray.shift();
console.log(myArray);
```

Para var más metodos de agregar o eliminar elementos en una matriz ver https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array#operaciones_habituales

## Recorrer un array con `for`

`.length` devuelve el número de elementos del array.

```js
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
}
```

## Recorrer un array con `forEach` (más moderno)

`forEach` aplica una función a cada elemento del array.

```js
colores.forEach(color => console.log(color));
```

## Métodos útiles para Arrays

A menudo, nos encontramos en la necesidad de tomar un array y modificar cada elemento de la misma manera o filtrar los elementos de un array, etc. Para eso tenemos los siguientes métodos. [^2]

### `map()`: Crear un nuevo array modificando los valores

`map()` devuelve un nuevo array con los valores transformado de cada uno de sus elementos.

``` js
let numeros = [1, 2, 3, 4];
let dobles = numeros.map(n => n * 2);
console.log(dobles); // [2, 4, 6, 8]
```

### `filter()`: Filtrar elementos de un array

`filter()` devuelve un nuevo array con los elementos que cumplen la condición.

``` js
let mayoresDeDos = numeros.filter(n => n > 2);
console.log(mayoresDeDos); // [3, 4]
```

### `reduce()`: Reducir un array a un solo valor

`reduce()` toma un acumulador y lo actualiza con cada elemento.

``` js
let suma = numeros.reduce((acumulador, n) => acumulador + n, 0);
console.log(suma); // 10
```

### `find()`: Buscar un elemento en el array

Devuelve el **primer elemento** que cumple la condición.

``` js
let encontrado = numeros.find(n => n > 2);
console.log(encontrado); // 3
```

### Ordenar arrays con `sort()`

```
let numerosDesordenados = [3, 1, 4, 2, 6, 10];
numerosDesordenados.sort();
console.log(numerosDesordenados); // [1, 10, 2, 3, 4, 6]
```

!!! info

    Para ordenar **números correctamente**, usa:

    ``` js
    numerosDesordenados.sort((a, b) => a - b);
    ```

Para ver más métodos de las matrices ir a https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array#m%C3%A9todos_de_instancia

#### Ejercicios Prácticos

!!! example "Sumar todos los números de un array"

    1. Crea una función `sumarNumeros` que reciba un array de números y devuelva la suma de todos sus elementos.

    ``` js
    console.log(sumarNumeros([1, 2, 3, 4])); // 10
    console.log(sumarNumeros([10, 20, 30])); // 60
    ```

!!! example "Filtrar números mayores a un valor"

    1. Escribe una función que reciba un array de números y un número limite. La función debe devolver un nuevo array con los números mayores al limite.

    ``` js
    console.log(filtrarMayores([10, 20, 5, 30, 40], 15)); // [20, 30, 40]
    console.log(filtrarMayores([1, 5, 8, 12], 6)); // [8, 12]
    ```  

!!! example "Gestión de Inventario de Productos"

    Crea un sistema que permita realizar las siguientes tareas:

    1. Agregar un producto al inventario por su nombre.
    2. Eliminar un producto del inventario por su nombre.
    3. Mostrar todos los productos en inventario con su nombre.
    4. Filtrar productos que tengan un nombre cuya primera letra sea mayor a un valor dado.
    5. Ordenar el inventario por el nombre de los productos de menor a mayor.

    ``` js
    // Pruebas de ejemplo:
    agregarProducto("Chaqueta");
    eliminarProducto("Gorra");
    mostrarInventario();
    console.log(filtrarPorNombre("M"));  // Productos con nombre mayor M
    ordenarPorNombre();
    ```

### for...of

La sentencia **for...of** ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, TypedArray, Map, Set e iterables definidos por el usuario. La sintaxis de  **for...of** es específica para las colecciones, y no para todos los objetos. Esta Iterará sobre cualquiera de los elementos de una colección. [^2]

La sintaxis es la siguiente

``` js
for (variable of objeto) { 
   	//sentencias a ejecutar en cada iteración 
}
```

Ejemplo
``` js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
```

## Referencias

[^2]: https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209