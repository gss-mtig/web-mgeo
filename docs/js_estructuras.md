# Estructuras de control en JS

Para realizar cosas más complejas en nuestros scripts se utilizan las estructuras de control. Con ellas podemos realizar tomas de decisiones y bucles. [^1]

## Toma de decisiones - control de flujo

Nos sirven para realizar unas acciones u otras en función del estado de las variables. Es decir, tomar decisiones para ejecutar unas instrucciones u otras dependiendo de lo que esté ocurriendo en ese instante en nuestros programas. Por ejemplo podemos mostrar cierta información dependiento del valor de una variable.

En Javascript podemos tomar decisiones utilizando dos estructuras distintas. 

### if ... else

**if** es una estructura de control utilizada para tomar decisiones. Es un condicional que sirve para realizar unas u otras operaciones en función de una expresión. Funciona de la siguiente manera, primero se evalúa una expresión, si da resultado positivo se realizan las acciones relacionadas con el caso positivo.

Ejecuta una sentencia si una condición específicada es evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada.

La sintaxis es la siguiente

``` js
if (condición) sentencia1 [else sentencia2]
```

Ejemplos

Ejecutar una sentencia si una condición específicada es evaluada como verdadera

``` js
if (expresión) { 
   //acciones a realizar en caso positivo 
   //... 
}
```

Opcionalmente se pueden indicar acciones a realizar en caso de que la evaluación de la sentencia devuelva resultados negativos. 

``` js
if (expresión) { 
   //acciones a realizar en caso positivo 
   //... 
} else { 
   //acciones a realizar en caso negativo 
   //... 
}
```

Multiples sentencias *if...else* pueden ser anidadas para crear una cláusula else if

``` js
if (condición1) {
   //acciones a realizar en caso que la condición1 sea positiva 
   //...
} else if (condición2) {
   //acciones a realizar en caso que la condición2 sea positiva 
   //...
} else if (condición3) {
   //acciones a realizar en caso que la condición3 sea positiva 
   //...
} else {
   //acciones a realizar en caso que ninguna de las condiciones anteriores sea positiva 
   //...
}
```

#### Operador Ternario

Es una forma más esquemática de realizar algunos **if-else** sencillos. No sólo realiza una comparación de valores, además asigna un valor a una variable. Lo que hace es evaluar la condición (colocada entre paréntesis) y si es positiva asigna el valor1 a la variable y en caso contrario le asigna el valor2

La sintaxis es la siguiente

``` js
variable = (condición) ? valor1 : valor2
```

Ejemplo

``` js
momento = (hora_actual < 12) ? "Antes del mediodía" : "Después del mediodía"
```

### switch

**switch** es una estructura un poco más compleja que permite hacer múltiples operaciones dependiendo del estado de una variable. Sirve para tomar decisiones en función de distintos estados de las variables. Esta expresión se utiliza cuando tenemos múltiples posibilidades como resultado de la evaluación de una sentencia. Es una alternativa a múltiples `if-else`.

La declaración **switch** evalúa una expresión, comparando el valor de esa expresión con una instancia *case*, y ejecuta declaraciones asociadas a ese *case*, así como las declaraciones en los *case* que siguen.

La sintaxis es la siguiente

``` js
switch (expresión) { 
   	case valor1: 
      	//Sentencias a ejecutar si la expresión tiene como valor a valor1 
      	break 
   	case valor2: 
      	//Sentencias a ejecutar si la expresión tiene como valor a valor2 
      	break 
   	case valor3: 
      	//Sentencias a ejecutar si la expresión tiene como valor a valor3 
      	break 
   	default: 
      	//Sentencias a ejecutar si el valor no es ninguno de los anteriores 
}
```

!!! note
    La palabra break es opcional, pero si no la ponemos a partir de que se encuentre coincidencia con un valor se ejecutarán todas las sentencias relacionadas con este y todas las siguientes. Es decir, si en nuestro esquema anterior no hubiese ningún break y la expresión valiese valor1, se ejecutarían las sentencias relacionadas con valor1 y también las relacionadas con valor2, valor3 y default.

    También es opcional la opción default u opción por defecto.

Ejemplo

``` js
switch (dia_de_la_semana) { 
   	case 1: 
      	document.write("Es Lunes") 
      	break 
   	case 2: 
      	document.write("Es Martes") 
      	break 
   	case 3: 
      	document.write("Es Miércoles") 
      	break 
   	case 4: 
      	document.write("Es Jueves") 
      	break 
   	case 5: 
      	document.write("Es viernes") 
      	break 
   	case 6: 
   	case 7: 
      	document.write("Es fin de semana") 
      	break 
   	default: 
      	document.write("Ese día no existe") 
}
```

## Bucles - iteraciones

Los bucles se utilizan para realizar ciertas acciones repetidamente. Son muy utilizados a todos los niveles en la programación. Con un bucle podemos por ejemplo imprimir en una página los números del 1 al 100 sin necesidad de escribir cien veces el la instrucción imprimir.

En Javascript existen varios tipos de bucles, cada uno está indicado para un tipo de iteración distinto y son los siguientes:

https://developer.mozilla.org/es/docs/Web/JavaScript

### for

El bucle **for** se utiliza para repetir una o más instrucciones un determinado número de veces. De entre todos los bucles, el for se suele utilizar cuando sabemos seguro el número de veces que queremos que se ejecute. 

La sintaxis es la siguiente

``` js
for (inicialización; condición; actualización) { 
   	//sentencias a ejecutar en cada iteración 
}
```

 El bucle for tiene tres partes incluidas entre los paréntesis, que nos sirven para definir cómo deseamos que se realicen las repeticiones. La primera parte es la *inicialización*, que se ejecuta solamente al comenzar la primera iteración del bucle. En esta parte se suele colocar la variable que utilizaremos para llevar la cuenta de las veces que se ejecuta el bucle.

La segunda parte es la *condición*, que se evaluará cada vez que comience una iteración del bucle. Contiene una expresión para decidir cuándo se ha de detener el bucle, o mejor dicho, la condición que se debe cumplir para que continúe la ejecución del bucle.

Por último tenemos la *actualización*, que sirve para indicar los cambios que queramos ejecutar en las variables cada vez que termina la iteración del bucle, antes de comprobar si se debe seguir ejecutando.

Ejemplo para escribir los número del 1 al 10.

``` js
var i 
for (i=0; i<=10; i++) { 
   	document.write(i)
   	document.write("<br>") 
}
```

Por ejemplo si queremos escribir los número del 500 al 1.000 de dos en dos se escribirá el siguiente bucle.

``` js
var i 
for (i=500; i<=1000; i+=2) { 
   	document.write(i)
   	document.write("<br>") 
}
```

### while

Este bucle se utiliza cuando queremos repetir la ejecución de unas sentencias un número indefinido de veces, siempre que se cumpla una condición.

La sintaxis es la siguiente

``` js
while (condición){ 
   	//sentencias a ejecutar 
}
```

Ejemplo

``` js
let n = 0;
let x = 0;
while (n < 3) {
  n ++;
  x += n;
}
```

Ejemplo. Lo que hace es pedir que el usuario introduzca un color y lo hace repetidas veces, mientras que el color introducido no sea rojo. 

``` js
var color = "" 
while (color != "rojo"){ 
   	color = prompt("dame un color (escribe rojo para salir)","") 
}
```

### do...while

Es una variación del bucle *while* visto anteriormente. Se utiliza generalmente cuando no sabemos cuantas veces se habrá de ejecutar el bucle, igual que el bucle *while*, con la diferencia de que sabemos seguro que el bucle por lo menos se ejecutará una vez.

La sintaxis es la siguiente

``` js
do { 
   	//sentencias del bucle 
} while (condición)
```

Ejemplo. Este ejemplo funciona exactamente igual que el anterior, excepto que no tuvimos que inicializar la variable color antes de introducirnos en el bucle 

``` js
var color 
do { 
   	color = prompt("dame un color (escribe rojo para salir)","") 
} while (color != "rojo")
```

## Funciones

En términos generales, una función es un "subprograma" que puede ser llamado por código externo (o interno en caso de recursión) a la función. Al igual que el programa en sí mismo, una función se compone de una secuencia de declaraciones, que conforman el llamado cuerpo de la función. Se pueden pasar valores a una función, y la función puede devolver un valor. [^4]

Las funciones permiten reutilizar código y organizarlo mejor.

En JavaScript, las funciones son objetos de primera clase, es decir, son objetos y se pueden manipular y transmitir al igual que cualquier otro objeto. Concretamente son objetos **Function**.

JavaScript tiene integradas varias funciones de nivel superior como por ejemplo parseInt(), decodeURI(), etc.

### Declaracion de una función

Una definición de función (también denominada declaración de función o expresión de función) consta de la palabra clave `function`, seguida de:

* El nombre de la función.
* Una lista de parámetros o argumentos de la función, entre paréntesis y separados por comas.
* Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }.

Se ejecuta llamándola con su nombre y pasando valores.

```js
function saludar(nombre) {
    console.log("Hola, " + nombre);
}

saludar("Carlos"); // Llama a la función
```

### Funciones con retorno (`return`)

``` js
function suma(a, b) {
    return a + b;
}

const resultado = suma(4,5); //Llama a la función y guardar el resultado en una variable
console.log(resultado); // 9
```

En el ejemplo anterior tenemos a la función *suma* que toma 2 parámetros *a* y *b* y devuelve un valor con la suma de *a+b*. La instrucción **return** especifica el valor devuelto por la función.

### Funciones anónimas

Las funciones también se pueden crear mediante una **expresión function**. Esta función puede ser anónima; no tiene por qué tener un nombre. Por ejemplo, la función *suma* se podría haber definido como:

``` js
const suma = function(a, b) {
    return a + b;
}
```

Las *expresión function* son convenientes cuando se pasa una función como argumento a otra función.

### Parámetros de una función

Existe una variable "especial" llamada **arguments** que es similar a una matriz. Esta variable guarda todos los argumentos de la función. 

``` js
const suma = function(a, b) {
    let parametroB = arguments[1]; 
}
```

Usando el objeto *arguments*, puedes llamar a una función con más argumentos de los que formalmente declara aceptar. Esto suele ser útil si no sabes de antemano cuántos argumentos se pasarán a la función.

### Parámetros predeterminados

En el pasado (pre ES6), la estrategia general para establecer valores predeterminados era probar los valores de los parámetros en el cuerpo de la función y asignar un valor si eran **undefined**.

Con parámetros predeterminados, ya no es necesaria una verificación manual en el cuerpo de la función. Simplemente puedes poner un valor predeterminado para algún parámetro en el encabezado de la función.

``` js
const suma = function(a, b = 2) {
    return a + b;
}
```

### Parámetros rest

La sintaxis del parámetro rest (resto de parámetros) nos permite representar un número indefinido de argumentos como una matriz. Para ello ponemos tres puntos antes del nombre del parámetro

``` js
const suma = function(a, ...masParametros) {
    ...
    ...
}
suma(1, 2, 4, 7); //en este caso ...masParametros sería igual a [2, 4, 7]
```

### Funciones flecha

Dos factores influyeron en la introducción de las funciones flecha son: funciones más cortas y no vinculantes de *this*.

Hasta las funciones flecha, cada nueva función definía su propio valor *this*, lo que causaba algunos problemas. Para más detalles sobre funciones flecha https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions y https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/

``` js
const suma = (a, b) => a + b;

const resta = (a, b) => { //Si tiene varias líneas de código, necesita {} y return
    let resultado = a - b;
    return resultado;
};

const cuadrado = a => a * a; //Si tiene un solo parámetro, no necesita paréntesis 
```

#### Ejercicios Prácticos

!!! example "Dónde estoy? (15 minutos)"

    1. Crear una función que reciba como parametros la latitud y la longitud y devuelva en que hemisferio está (norte o sur) y si es al este u oeste del meridiano 0 (oriental u occidental).

## Ejercicios extras

* [W3 Schools JS Exercises](https://www.w3schools.com/js/js_exercises.asp)
* [Exercism](https://exercism.org/tracks/javascript/exercises)
* [JS Challenger](https://www.jschallenger.com/javascript-basics)

## Referencias

[^1]: https://desarrolloweb.com/articulos/543.php
[^2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias
[^3]: https://uniwebsidad.com/libros/javascript/capitulo-3/operadores
[^4]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#precedencia_de_los_operadores
