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

#### Operador if

Es una forma más esquemática de realizar algunos **if** sencillos. No sólo realiza una comparación de valores, además asigna un valor a una variable. Lo que hace es evaluar la condición (colocada entre paréntesis) y si es positiva asigna el valor1 a la variable y en caso contrario le asigna el valor2

La sintaxis es la siguiente

``` js
variable = (condición) ? valor1 : valor2
```

Ejemplo

``` js
momento = (hora_actual < 12) ? "Antes del mediodía" : "Después del mediodía"
```

### switch

**switch** es una estructura un poco más compleja que permite hacer múltiples operaciones dependiendo del estado de una variable. Sirve para tomar decisiones en función de distintos estados de las variables. Esta expresión se utiliza cuando tenemos múltiples posibilidades como resultado de la evaluación de una sentencia.

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

### TRY ... CATCH

La declaración **try...catch** señala un bloque de instrucciones a intentar (*try*), y especifica una respuesta si se produce una excepción (*catch*).

La sentencia try consiste en un bloque try que contiene una o más sentencias. Las llaves {} se deben utilizar siempre, incluso para una bloques de una sola sentencia. Al menos un bloque catch o un bloque finally debe estar presente. Esto nos da tres formas posibles para la sentencia try:

    try...catch
    try...finally
    try...catch...finally

Un bloque catch contiene sentencias que especifican que hacer si una excepción es lanzada en el bloque try. Si cualquier sentencia dentro del bloque try (o en una funcion llamada desde dentro del bloque try) lanza una excepción, el control cambia inmediatamente al bloque catch . Si no se lanza ninguna excepcion en el bloque try, el bloque catch se omite.

La bloque finally se ejecuta despues del bloque try y el/los bloque(s) catch hayan finalizado su ejecución. Éste bloque siempre se ejecuta, independientemente de si una excepción fue lanzada o capturada

Ejemplo

``` js
try {
   throw "myException"; // genera una excepción
}
catch (e) {
   // sentencias para manejar cualquier excepción
   logMyErrors(e); // pasa el objeto de la excepción al manejador de errores
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

#### for...in

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

#### for...of

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

## Operadores

Los operadores permiten manipular el valor de las variables, realizar operaciones matemáticas con sus valores y comparar diferentes variables. De esta forma, los operadores permiten a los programas realizar cálculos complejos y tomar decisiones lógicas en función de comparaciones y otros tipos de condiciones. [^3]

JavaScript tiene una serie de operadores entre los más comúnes están: operadores de asignación, de comparación, aritméticos y lógicos. Se puede ver el listado completo de los operadores en https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators 

Al igual que en las matémaaticas los operadores tiene un orden de preferencia a la hora de evaluar una expresión. [^4]

### Operadores de asignación

Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho. El operador de asignación simple es igual (=), que asigna el valor de su operando derecho a su operando izquierdo. Es decir, x = y asigna el valor de y a x.

Ejemplos

``` js
var color = "rojo";
let count = 23;
const frutas = [];
```

### Operadores de comparación

Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false).

Ejemplos

``` js
var var1 = 3;
var var2 = 4;

//igual
3 == var1;
"3" == var1;
//no igual
var1 != 4
var2 != var1
//estrictamente igual
3 === var1
//estricatamente no igual
var1 !== "3"
//mayor que
var2 > var1
//menor igual que
var1 <= var2
```

### Operadores aritméticos

Un operador aritmético toma valores numéricos como sus operandos y devuelve un solo valor numérico. Los operadores aritméticos estándar son suma (+), resta (-), multiplicación (*) y división (/).

Ejemplos

``` js
var var1 = 3;
var var2 = 4;

var1 + var2;
var2 * var1;
```

### Operadores lógicos

Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelven un valor booleano.

| Operador         | Uso              | Descripción                                                                                                                                                                                                                  |
|------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AND Lógico (&&)  | expr1 && expr2   | Devuelve expr1 si se puede convertir a false; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, && devuelve true si ambos operandos son true; de lo contrario, devuelve false.             |
| OR lógico (\|\|) | expr1 \|\| expr2 | Devuelve expr1 si se puede convertir a true; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, \|\| devuelve true si alguno de los operandos es true; si ambos son falsos, devuelve false. |
| NOT lógico (!)   | !expr            | Devuelve false si su único operando se puede convertir a true; de lo contrario, devuelve true.                                                                                                                               |

Ejemplos

``` js
var a1 =  true && true;     // t && t devuelve true
var a2 =  true && false;    // t && f devuelve false
var o1 =  true || true;     // t || t devuelve true
var o2 = false || true;     // f || t devuelve true
var o3 = false || false;     // f || f devuelve false
var n1 = !true;  // !t devuelve false
var n2 = !false; // !f devuelve true
```

## Referencias

[^1]: https://desarrolloweb.com/articulos/543.php
[^2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias
[^3]: https://uniwebsidad.com/libros/javascript/capitulo-3/operadores
[^4]: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#precedencia_de_los_operadores
