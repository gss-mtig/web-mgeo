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

## Clases

Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia. Las clases son "funciones especiales".

### Declaración de clases

Una manera de definir una clase es mediante una declaración de clase. Para declarar una clase, se utiliza la palabra reservada **class** y un nombre para la clase

Ejemplo

``` js
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}
```

!!! warning

    Una importante diferencia entre las declaraciones de funciones y las declaraciones de clases es que las declaraciones de funciones son alojadas y las declaraciones de clases no lo son. En primer lugar necesitas declarar tu clase y luego acceder a ella, de otro modo el código arrojará un error.

Otra manera de definir una clase es mediante las expresiones de clase que pueden ser nombradas o anónimas.

Ejemplo

``` js
// Anonima
let Rectangulo = class {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};

console.log(Rectangulo.name);
// output: "Rectangulo"

// Nombrada
let Rectangulo = class Rectangulo2 {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};
console.log(Rectangulo.name);
// output: "Rectangulo2"
```

### Cuerpo de la clase y definición de métodos

El contenido de una clase es la parte que se encuentra entre las llaves {}. Este es el lugar se definen los miembros de clase, como los métodos o constructores.

El método constructor es un método especial para crear e inicializar un objeto creado con una clase. Solo puede haber un método especial con el nombre "constructor" en una clase. Un constructor puede usar la palabra reservada super para llamar al constructor de una superclase.

Ejemplo 

``` js
class Rectangulo {
  constructor (alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Getter
  get area() {
     return this.calcArea();
   }
  // Método
  calcArea () {
    return this.alto * this.ancho;
  }
}

const cuadrado = new Rectangulo(10, 10);

console.log(cuadrado.area); // 100
console.log(cuadrado.calcArea()); // 100
```

La palabra clave **static** define un método estático para una clase. Los métodos estáticos son llamados sin instanciar su clase y no pueden ser llamados mediante una instancia de clase. Los métodos estáticos son a menudo usados para crear funciones de utilidad para una aplicación.

Ejemplo

``` js
class Calcula {

    static suma (a, b) {
        return a + b;
    }

    static resta (a, b) {
        return a - b;
    }
}

console.log (Calcula.suma(2, 3));
console.log (Calcula.resta(20, 7));
```

### Subclases

La palabra clave **extends** es usada en declaraciones de clase o expresiones de clase para crear una clase hija.

Ejemplo

``` js
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + ' hace un ruido.');
  }
}

class Perro extends Animal {
  hablar() {
    console.log(this.nombre + ' ladra.');
  }
}

const p = new Perro('Mitzie');
p.hablar();
```

### Súperclases

La palabra clave **super** es usada para llamar funciones del objeto padre.

Ejemplo

``` js
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(this.nombre + ' hace un ruido.');
  }
}

class Perro extends Animal {
  hablar() {
    super.hablar();
    console.log(this.nombre + ' ladra.');
  }
}

const p = new Perro('Mitzie');
p.hablar();
```

## Trabajar con Matrices

Veremos algunos métodos bastante útiles relacionados con matrices

### Agregar y eliminar elementos de la matriz

Antes que nada, para añdir o eliminar un elemento al final de una matriz podemos usar **push()** y **pop()** respectivamente.

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

### Operadores de matrices

A menudo, nos encontramos en la necesidad de tomar un array y modificar cada elemento de la misma manera o filtrar los elementos de un array, etc. Para eso tenemos los siguientes métodos. [^2]

#### forEach

El método **forEach()** ejecuta la función indicada una vez por cada elemento del array.

Ejemplo

``` js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
```

#### map

El método **map()** crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

Ejemplo

``` js
const numbers = [1, 5, 10, 15];
const doubles = numbers.map(function(x) {
   return x * 2;
});
```

#### filter

El método **filter()** crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

Ejemplo

``` js
const numbers = [1, 5, 10, 15];
const mayores = numbers.filter(function(x) {
   return x >= 10;
});
//usando la arrow function
const menores = numbers.filter(x => x < 10);
console.log(mayores);
console.log(menores);
```

#### reduce

El método **reduce()** ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

Ejemplo

``` js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

Para ver más métodos de las matrices ir a https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array#m%C3%A9todos_de_instancia

## Referencias

[^1]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos
[^2]: https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209

