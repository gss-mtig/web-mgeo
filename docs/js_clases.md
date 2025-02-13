# Clases

Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia. Las clases son "funciones especiales".

## Declaración de clases

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

## Cuerpo de la clase y definición de métodos

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

## Subclases

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

## Súperclases

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
