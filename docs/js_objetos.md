# Objetos en JS

JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. [^1]

El concepto de Objetos se puede entender con objetos tangibles de la vida real. Por ejemplo una mesa es un objeto con propiedades. La mesa tiena color, un deseño, material, número de patas, etc. Otro ejemplo sería un coche. El coche tiene uan serie de propiedades como la marca, modelo, color, etc. pero también tiene una serie de métodos (funciones) como puede ser encender, girar, avanzar, etc.

Debemos tener en cuenta que *todo* es un objeto en JavaScript.

Por ejemplo si creamos una cadena de texto JS internamente crea un objeto de tipo String (cadena de texto).

``` js
const texto = "Hola mundo!";

/// para ver su longitud podemos consultar la propiedad length
texto.length;
/// podemos convertir todo el texto a mayúsculas usando el médoto toUpperCase
texto.toUpperCase();
```

Para ver los métodos más usados cuando se trabajan con cadenas de texto visitar https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Useful_string_methods. Aquí podremos ver como acceder a una subcadena de caracteres, pasar el texto a mayúsculas, etc.

Pero normalmente cuando hablamos de **objetos** en JavaScript, nos referimos a estructuras de datos que almacenan información en pares **clave-valor**.

En JavaScript se pueden crear nuevos objetos de diferentes maneras a continuación veremos algunas.

## Iniciador de objeto

Es la forma más simple de crear un objeto. Consiste en crear una lista delimitada por comas de cero o más pares de nombres de propiedad y valores asociados de un objeto, encerrados entre llaves ({}).

Ejemplo

``` js
const miPerro = {
    nombre: 'Hércules',
    raza: 'Maltés',
    edad: 5,
    ladrar: function () {
        console.log("guau");
    }
};

const tuPerro = {
    nombre: 'Rex',
    raza: 'Pastor',
    edad: 10,
    ladrar: function () {
        console.log("guau");
    }
};
```

## Función constructora

Como alternativa, puedes crear un objeto con estos dos pasos:

1. Definir el tipo de objeto escribiendo una función constructora. Existe una fuerte convención, con buena razón, para utilizar en mayúscula la letra inicial.
2. Crear una instancia del objeto con el operador new.

Ejemplo

``` js
function Perro(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.ladrar = function () {
        console.log("guau");
    }
}

const myPerro = new Perro('Hércules', 'Maltés', 5);
const tuPerro = new Perro('Rex', 'Pastor', 10);
```

## Acceder a las propiedades 

Podemos acceder a las prpopiedades de los objetos de 2 formas:

1. Usando la notación de punto.

    Ejemplo 

    ``` js
    const myPerro = new Perro('Hércules', 'Maltés', 5);

    console.log(myPerro.nombre); //debe retornar Hércules
    ```

2. Usando la notación de corchetes.

    Ejemplo 

    ``` js
    const myPerro = new Perro('Hércules', 'Maltés', 5);

    console.log(myPerro["nombre"]); //debe retornar Hércules
    ```

El nombre de la propiedad de un objeto puede ser cualquier cadena válida de JavaScript, o cualquier cosa que se pueda convertir en una cadena, incluyendo una cadena vacía. Sin embargo, cualquier nombre de propiedad que no sea un identificador válido de JavaScript (por ejemplo, el nombre de alguna propiedad que tenga un espacio o un guión, o comience con un número) solo se puede acceder utilizando la notación de corchetes. Esta notación es muy útil también cuando los nombres de propiedades son determinados dinámicamente.

## Modificar o crear propiedades

Igualmente que en el caso anterior podemos usar las dos notaciones. En este caso le asignaremos un nuevo valor a la propiedad. Si la propiedad ya existe se modifica su valor y si la propiedad no existe se crea esta nueva propiedad.

Ejemplo 

``` js
const myPerro = new Perro('Hércules', 'Maltés', 5);

//modficar una propiedad
myPerro.edad = 6;
myPerro["raza"] = "Dogo";

//crear una propiedad
myPerro.color = "Blanco";
myPerro["peso-kg"] = 64; 
```

## Eliminar propiedades

`delete` elimina una propiedad de un objeto.

``` js
delete myPerro.edad;
console.log(myPerro);
```

## Objetos con métodos (funciones dentro de objetos)

Los métodos son funciones dentro de un objeto. Se llaman con `objeto.metodo()`.

``` js
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    arrancar: function () {
        console.log("El coche ha arrancado.");
    }
};

coche.arrancar(); // "El coche ha arrancado."
```

#### Ejercicios Prácticos

!!! example "Crear un objeto persona"

    1. Crea un objeto persona que tenga las siguientes propiedades:
        * nombre (string),
        * edad (número),
        * ocupacion (string).

    2. Además, agrega un método dentro del objeto que imprima un mensaje con el nombre y la ocupación de la persona.

!!! example "Modificar un objeto"

    Tienes un objeto libro con las propiedades:
      * titulo (string)
      * autor (string),
      * año (número).

    1. Modifica el titulo y el ano del libro para actualizar la información. Luego, muestra los cambios en consola.

!!! example "Añadir un nuevo método a un objeto"

    1. Crea un objeto vehiculo con las propiedades:
        * marca (string),
        * modelo (string),
        * año (número),
        * kilometraje (número).
    2. Agrega un método que aumente el kilometraje cada vez que se "realice un viaje". Cada vez que se llame a este método, el kilometraje aumentará en una cantidad que pases como parámetro.

!!! example "Comparar dos objetos"

    1. Crea dos objetos producto1 y producto2 con las propiedades:
        * nombre (string),
        * precio (número).
    2. Escribe una función que compare ambos productos y determine si tienen el mismo precio y nombre. La función debe devolver un mensaje indicando si son iguales o no.

!!! example "Gestión de Inventario de Productos"

    Imagina que tienes un inventario de productos en una tienda, donde cada producto tiene las siguientes propiedades:

    * nombre: El nombre del producto.
    * precio: El precio del producto.
    * cantidad: Cuántos productos hay en stock.

    Crea un sistema que permita realizar las siguientes tareas:

    1. Agregar un producto al inventario (con nombre, precio y cantidad).
    2. Eliminar un producto del inventario por su nombre.
    3. Actualizar el stock de un producto (aumentar o disminuir la cantidad disponible).
    4. Mostrar todos los productos en inventario con su nombre, precio y cantidad.
    5. Filtrar productos que tengan un precio mayor a un valor dado.
    6. Ordenar el inventario por el precio de los productos de menor a mayor.
    7. Calcular el valor total del inventario, multiplicando el precio de cada producto por su cantidad disponible. 

    ``` js
    const inventario = [
        { nombre: "Camiseta", precio: 20, cantidad: 50 },
        { nombre: "Pantalón", precio: 40, cantidad: 30 },
        { nombre: "Zapatos", precio: 60, cantidad: 15 },
        { nombre: "Gorra", precio: 15, cantidad: 100 }
    ]

    // Pruebas de ejemplo:
    agregarProducto("Chaqueta", 80, 10);
    eliminarProducto("Gorra");
    actualizarStock("Zapatos", 5);
    mostrarInventario();
    console.log(filtrarPorPrecio(30));  // Productos con precio mayor a 30
    ordenarPorPrecio();
    mostrarInventario();
    console.log("Valor total del inventario: $", calcularValorInventario());
    ```

## Manipulación de Datos con JSON

JSON (JavaScript Object Notation) es el formato más usado para intercambiar datos.

Ejemplo de un Objeto en JSON

``` js
let usuario = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};
```

### Convertir un Objeto en JSON (`JSON.stringify()`)

``` js
let usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON); // '{"nombre":"Ana","edad":25,"ciudad":"Madrid"}'
```

### Convertir un JSON a Objeto (`JSON.parse()`)

``` js
let datos = localStorage.getItem("datosUsuario");
let usuarioObjeto = JSON.parse(datos);
console.log(usuarioObjeto.nombre); // "Ana"
```

## Recorrer propiedades de un objeto

### for...in

Un bucle **for...in** itera sobre las propiedades de un objeto en un orden arbitrario

La sintaxis es la siguiente

``` js
for (variable in objeto) { 
   	//sentencias a ejecutar en cada iteración 
}
```

Ejemplo
``` js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
```

## Referencias

[^1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos


