# JS - JavaScript

**JavaScript (JS)** es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase. Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat. JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional). [^1]

El estándar para JavaScript es ECMAScript. En 2015, ECMA International publico la sexta versión principal de ECMAScript, que oficialmente se llama ECMAScript 2015, y que inicialmente se denominó ECMAScript 6 o ES6. Desde entonces, los estándares ECMAScript están en ciclos de lanzamiento anuales. 

!!! note

    * ECMAScript y JavaScript, a efectos prácticos son lo mismo
    * La versión tradicional de JavaScript soportada por todos los navegadores, incluso los de hace 10 0 15 años, es ECMAScript 5.
    * El gran cambio en el lenguaje se produjo con ECMAScript 2015 (que alguna gente llama ES6 aunque no es su nombre oficial).
    * Sus números de versión que no coinciden con su nombre oficial. Por ejemplo la versión 7 ES7 su nombre oficial es ECMAScript 2016.

!!! warning

    No confundas **JavaScript** con el lenguaje de programación **Java**. Son dos lenguajes de programación que tienen sintaxis, semántica y usos muy diferentes.


## ¿Qué podemos hacer con JavaScript en el navegador?

* Almacenar valores útiles dentro de variables.
* Operaciones sobre fragmentos de texto, números, etc.
* Ejecutar código en respuesta a ciertos eventos que ocurren en una página web. Por ejemplo cuándo se hace click sobre un botón.
* Usar las APIs del navegador. Principalmente la API del DOM (Document Object Model) que te permite manipular HTML y CSS, crear, eliminar y cambiar el HTML, aplicar dinámicamente nuevos estilos a tu página, etc.
* Usar APIS de terceros. Por ejemplo la API de Google Maps, la API de Twitter, etc.

Las API (interfaces de programación de aplicaciones) son conjuntos de bloques de construcción de código listos para usar que permiten a un desarrollador implementar programas que de otro modo serían difíciles o imposibles de implementar. Hacen lo mismo para la programación que los kits de muebles prefabricados para la construcción de viviendas — es mucho más fácil tomar paneles precortados y atornillarlos para hacer una estantería que elaborar el diseño tú mismo, que ir y encontrar la madera correcta, cortar todos los paneles del tamaño y la forma correctos, buscar los tornillos del tamaño correcto y luego júntalos para hacer una estantería.

Un uso muy común de JavaScript es modificar dinámicamente HTML y CSS para actualizar una interfaz de usuario, a través de la API del modelo de objetos del documento. Hay que tener en cuenta que el código de tus documentos web generalmente se cargan y ejecutan en el orden en que aparece en la página. Si JavaScript se carga e intenta ejecutarse antes de que se hayan cargado el HTML y el CSS al que afecta, pueden producirse errores, igualmente se produciran errores si queremos llamar a una API de terceros antes de cargarla. 

!!! note

    Cuando el navegador encuentra un bloque de JavaScript, generalmente lo ejecuta en orden, de arriba a abajo. Esto significa que debes tener cuidado con el orden en el que colocas las cosas.

## ¿Cómo agregas JavaScript a tu página?

JavaScript se aplica a tu página HTML de manera similar a CSS. Mientras que CSS usa elementos `<link>` para aplicar hojas de estilo externas y elementos `<style>` para aplicar hojas de estilo internas a HTML, JavaScript solo necesita el elemento `<script>` tanto para la carga de JavaScript externo como el interno.

Otra diferencia con respecto al CSS que se debe agregar en el **`<head>`** es que los elementos `<script>` se pueden agregar en cualquier parte de nuestra página ya sea dentro del `<head>` o del `<body>`. Por norma general se agrega en el *head* al final de todo justo antes de la etiqueta de cierre `</head>`, esto es despues de las declaraciones de estilo y/o al final del elemento *body* despues de todo nuestro codigo html justo antes de la etiqueta de cierre `</body>`.   

### JavaScript interno

Es el método de ejecutar scripts más básico. En este caso se incluyen las instrucciones de código dentro de la etiqueta `<script>`. Cuando el navegador lee la página y encuentra un script va interpretando las líneas de código y las va ejecutando una después de otra.

Ejemplo 

``` html hl_lines="12 13 14 15 16"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo ejecución directa</title>
</head>
<body>
    <h1>Página con Javascript</h1>
    <p>Esta página tiene un cuadro de diálogo, que se mostrará nada más el navegador la procese.</p>

    <script>
      var personas = 4;
      var importeEntradas = 9.50;
      alert('Necesitas ' + personas * importeEntradas + ' euros para que entren todos al cine');
    </script>

    <p>Cuando el usuario pulse aceptar en el cuadro de diálogo, el navegador mostrará la página completa.</p>
</body>
</html>
```

En este ejemplo vemos como la ejecución del código bloquea la cargar de la página.

### JavaScript externo

La ventaja de utilizar un archivo externo de JavaScript reside en la posibilidad de compartir ese archivo entre un gran número de documentos. Cuando un documento es cargado, el navegador detecta la referencia al archivo JavaScript y lo carga como si fueran parte del documento.

Un archivo externo de código puede ser insertando en el documento con el elemento `<script>`, teniendo el valor "text/javascript" en el atributo *type* (esto no es obligatorio en versiones modernas pero su uso es muy común), y el URI del archivo JavaScript en el atributo *src*.

``` html
<script src="archivo_externo.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

### Estategias para la carga de scripts

Hay una serie de problemas relacionados con la carga de los scripts en el momento adecuado. Un problema común es que todo el HTML de una página se carga en el orden en que aparece. Si estás utilizando JavaScript para manipular elementos en la página, tu código no funcionará si el JavaScript se carga y procesa antes que el HTML que estás intentando haga algo.

Como vimos en el ejemplo anterior la ejecución del código Js bloquea la cargar de la página. Por ejemplo si ponemos el JavaScript en el *head* el código se carga y se ejecuta en el encabezado del documento, antes de analizar el cuerpo HTML, por lo que podríamos causar un error si intentamos acceder a algún elemento del HTML.

Una solución pasada de moda (aunque se suele seguir usando) a este problema solía ser colocar tu elemento script justo en la parte inferior del cuerpo (por ejemplo, justo antes de la etiqueta </body>), para que se cargara después de haber procesado todo el HTML. El problema con esta solución es que la carga/procesamiento del script está completamente bloqueado hasta que se haya cargado el DOM HTML. En sitios muy grandes con mucho JavaScript, esto puede causar un importante problema de rendimiento y ralentizar tu sitio.

En realidad, hay dos formas "modernas" que podemos usar para evitar el problema del bloqueo de script: **async** y **defer**

Los scripts cargados con el atributo async (ve más abajo) descargarán el script sin bloquear el renderizado de la página y lo ejecutará tan pronto como el script se termine de descargar. No tienes garantía de que los scripts se ejecuten en un orden específico, solo que no detendrán la visualización del resto de la página. Es mejor usar async cuando los scripts de la página se ejecutan de forma independiente y no dependen de ningún otro script de la página.

``` html
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>
```

Usando **async** no puedes confiar en el orden en que se cargarán los scripts. jquery.js se puede cargar antes o después de script2.js y script3.js y si este es el caso, cualquier función en esos scripts depende de jquery producirá un error porque jquery no se ha cargado en el momento en que se ejecute el script.

Los scripts cargados con el atributo **defer** se ejecutarán en el orden en que aparecen en la página y los ejecutará tan pronto como se descarguen el script y el contenido.

``` html
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
```

Todos los scripts con el atributo defer se cargarán en el orden en que aparecen en la página. Entonces, en el segundo ejemplo, podemos estar seguros de que jquery.js se cargará antes que script2.js y script3.js y que script2.js se cargará antes de script3.js. No se ejecutarán hasta que se haya cargado todo el contenido de la página, lo cual es útil si tus scripts dependen de que el DOM esté en su lugar (por ejemplo, modifican uno o más elementos de la página).

* **async** y **defer** indican al navegador que descargue los scripts en un hilo separado, mientras que el resto de la página (el DOM, etc.) se descarga, por lo que los scripts no bloquean la carga de la página.
* Si tus scripts se deben ejecutar inmediatamente y no tienen ninguna dependencia, utiliza **async**.
* Si tus scripts necesitan esperar a ser procesados y dependen de otros scripts y/o del DOM en su lugar, cárgalos usando **defer** y coloca tus elementos `<script>` correspondientes en el orden que desees que el navegador los ejecute.

####  Ejercicios entregables

!!! question "Calculadora geodésica"

    A continuación vamos a agregar un archivo JavaScript (de momento vacío - sin código) a nuestra calculadora

    1. Crear una carpeta llamada **js** dentro de la carpeta *web-mgeo*

    2. Crear un archivo llamado **script.js** dentro de la carpeta *js*

    3. Modificar el *index.html* para agregar una JavaScript externo a nuestra calculadora

        ``` html hl_lines="13"
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="author" content="[VUESTRO NOMBRE]">
            <meta name="description" content="Calculadora geodésica que permite hacer la transformación de coordenadas geográficas en linea">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://www.icgc.cat/bundles/microblauicgc/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
            <link type="text/css" href="css/estilos.css" rel="stylesheet">
            <title>Mi calculadora geodésica</title>
            <script src="js/script.js" defer></script>
        </head>
        <body>
            <header>
                <img src="https://www.uab.cat/Imatge/635/883/logop.gif" alt="UAB">
                <h1>Mi calculadora geodésica</h1>
            </header>
            <main>
                <div>
                    <table>
                        <tr>
                            <th colspan="2"><label for="origen">Sistema de referencia de origen</label></th>
                            <th colspan="2"><label for="destino">Sistema de referencia de destino</label></th>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <select id="origen">
                                    <option value="EPSG:4326">EPSG:4326</option> 
                                    <option value="EPSG:3857">EPSG:3857</option>
                                    <option value="EPSG:25831">EPSG:25831</option>
                                    <option value="EPSG:23031">EPSG:23031</option>
                                </select>
                            </td>
                            <td colspan="2">
                                <select id="destino">
                                    <option value="EPSG:4326">EPSG:4326</option> 
                                    <option value="EPSG:3857">EPSG:3857</option>
                                    <option value="EPSG:25831">EPSG:25831</option>
                                    <option value="EPSG:23031">EPSG:23031</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label for="lat">Latitud</label></td>
                            <td><label for="lng">Longitud</label></td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td><input type="text" id="lat"></td>
                            <td><input type="text" id="lng"></td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td colspan="4"><button class="btn-tranformar">Transformar coordenadas</button></td>
                        </tr>
                    </table>
                </div>
                <aside>
                    <ul>
                        <li><a href="https://epsg.io/4326" title="WGS 84 -- WGS84 - World Geodetic System 1984, used in GPS" target="_blank" rel="noopener noreferrer">EPSG:4326</a></li>
                        <li>EPSG:3857</li>
                        <li>EPSG:25831</li>
                        <li>EPSG:23031</li>
                    </ul>
                </aside>
            </main>
            <footer>©Copyright 2020 de nadie. Ningún derecho reservado.</footer>
        </body>
        </html>
        ```

    4. Guardar el archivo index.html

## Comentarios

Al igual que con HTML y CSS, es posible escribir comentarios en tu código JavaScript que el navegador ignorará y que existen simplemente para proporcionar instrucciones a tus compañeros desarrolladores sobre cómo funciona el código (y a ti, si regresas a tu código después de seis meses y no puedes recordar lo que hiciste). Los comentarios son muy útiles y deberías utilizarlos con frecuencia, especialmente para aplicaciones grandes. Hay dos tipos:

* Un comentario de una sola línea se escribe después de una doble barra inclinada (//)

    ``` js
    // soy un comentario
    ```

* Un comentario de varias líneas se escribe entre las cadenas /* y */

    ``` js
    /*
    Yo también soy
    un comentario
    de varias 
    líneas
    */
    ```

## Mayúsculas y minúsculas

 En Javascript se han de respetar las mayúsculas y las minúsculas. Si nos equivocamos al utilizarlas el navegador responderá con un mensaje de error, ya sea de sintaxis o de referencia indefinida. [^2]

Por ejemplo, no es lo mismo la función alert() que la función Alert(). La primera muestra un texto en una caja de diálogo y la segunda (con la primera A mayúscula) simplemente no existe, a no ser que la definamos nosotros. Como se puede comprobar, para que la función la reconozca JavaScript, se tiene que escribir toda en minúscula. Otro claro ejemplo lo veremos cuando tratemos con variables, puesto que los nombres que damos a las variables también son sensibles a las mayúsculas y minúsculas.

## Separación de instrucciones

Las distintas instrucciones que contienen nuestros scripts se han de separar convenientemente para que el navegador no indique los correspondientes errores de sintaxis. Javascript tiene dos maneras de separar instrucciones. La primera es a través del carácter punto y coma (;) y la segunda es a través de un salto de línea.

 Por esta razón Las sentencias Javascript no necesitan acabar en punto y coma a no ser que coloquemos dos instrucciones en la misma línea. No es una mala idea (principalmente cuando se está comenzando), acostumbrarse a utilizar el punto y coma después de cada instrucción.

## Variables

Una variable es un contenedor para un valor, como un número que podríamos usar en una suma, o una cadena que podríamos usar como parte de una oración. Pero una cosa especial acerca de las variables es que los valores que contienen pueden cambiar. Las variables pueden contener casi cualquier cosa, no solo cadenas y números. Las variables también pueden contener datos complejos e incluso funciones completas.

Para usar una variable, primero debes crearla — precisamente, a esto lo llamamos *declarar la variable*. Para hacerlo, escribimos la palabra clave **var** o **let** seguida del nombre con el que deseas llamar a tu variable.

``` js
var miNombre;
let miEdad;
```

Una vez que hayas declarado una variable, la puedes *iniciar* con un valor. Para ello, escribe el nombre de la variable, seguido de un signo igual (=), seguido del valor que deseas darle.

``` js
miNombre = "Pedro";
miEdad = 39;
```

Puedes declarar e iniciar una variable al mismo tiempo. Esto es lo que harás la mayor parte del tiempo, ya que es más rápido que realizar las dos acciones en dos líneas separadas.

``` js
let miCoche = "Toyota";
```

JavaScript es un "lenguaje tipado dinámicamente", lo cual significa que, a diferencia de otros lenguajes, no es necesario especificar qué tipo de datos contendrá una variable (números, cadenas, matrices, etc.).

Por ejemplo, si declaras una variable y le das un valor entre comillas, el navegador trata a la variable como una cadena (string), pero en cualquier momento se puede asignar otro valor.


``` js
let miVariable = "Toyota";
...
...
...
miVariable = 400;
```

Se le llama ámbito de las variables al lugar donde estas están disponibles. Por lo general, cuando declaramos una variable hacemos que esté disponible en el lugar donde se ha declarado. 

### Variables globales y locales

Las variables **globales** son las que están declaradas en el ámbito más amplio posible, que en Javascript es una página web. Son accesibles desde cualquier lugar de la página, es decir, desde el script donde se han declarado y todos los demás scripts de la página.

También podremos declarar variables en lugares más acotados, como por ejemplo una función. A estas variables les llamaremos locales. Cuando se declaren variables locales sólo podremos acceder a ellas dentro del lugar donde se ha declarado, es decir, si la habíamos declarado en una función solo podremos acceder a ella cuando estemos en esa función. En general, son ámbitos locales cualquier lugar acotado por llaves.

No hay problema en declarar una variable local con el mismo nombre que una global (aunque no es buena idea repetir nombres de variables), en este caso la variable global será visible desde toda la página, excepto en el ámbito donde está declarada la variable local ya que en este sitio ese nombre de variable está ocupado por la local.

### Diferencia entre var y let

Cuando se creó JavaScript por primera vez, solo existía **var** que funciona bien en la mayoría de los casos, pero tiene algunos problemas en la forma en que trabaja. En versiones modernas de JavaScript ES6 se crea la nueva palabra clave **let** que funciona de manera algo diferente a *var* y soluciona los problemas que esta presenta.

Algunas diferencias

* La elevación (hoisting). Si usas *var* puedes acceder a la variable andes de declararla. Con *let* esto no funciona y da un error.
* Cuando usas *var*, puedes declarar la misma variable tantas veces como desees, pero con *let* no puedes.
* El scope (alcance) de la declaración. Con *var* puedes terminar creando variables globales y reasignando valores sin darte cuenta.

El uso de *let* mantendrá tus funciones limpias y claras. Se dice que *let* es el nuevo *var* por lo tanto a partir de ES6 no hay razones para usar var.

## Constantes

Muchos lenguajes de programación tienen el concepto de una constante — un valor que, una vez declarado no se puede cambiar. Hay muchas razones por las que querrías hacer esto, desde la seguridad (si un script de un tercero cambia dichos valores, podría causar problemas) hasta la depuración y la comprensión del código (es más difícil cambiar accidentalmente valores que no se deben cambiar y estropear cosas claras).

En los primeros días de JavaScript, las constantes no existían. En JavaScript moderno ES6, tenemos la palabra clave **const**, que nos permite almacenar valores que nunca se pueden cambiar; funciona exactamente de la misma manera que *let*, excepto que a *const* no le puedes dar un nuevo valor.

Si intentamos asignar un nuevo valor a una variable *const* nos daría el siguiente error: "Error Message : Uncaught TypeError: Assignment to constant variable.".

``` js
const miCoche = "Toyota";
miCoche = "Seat";
```

!!! note

    Que no se puedan reasignar valores no significa que sean inmutables. Si el valor de una variable constante es «algo» mutable, como un **array** o un **objeto**, se pueden cambiar los valores de sus elementos.

    ``` js
    const coches = ["Toyota", "Seat"];
    coches[2] = "Fiat"; // es valido
    coches = ["Mercedes", "BMW"]; // da error
    ```

## Reglas de nombres de variables

* No pueden empezar con números
* No pueden contener espacios ni caracteres especiales (excepto `_`y `$`)
* Usar `camelCase` es una buena práctica (`miVariableEjemplo`)

## Tipos de datos

### Numérico

Sólo existe un tipo de datos numérico, al contrario que ocurre en la mayoría de los lenguajes más conocidos. Todos los números son por tanto del tipo numérico, independientemente de la precisión que tengan o si son números reales o enteros.

``` js
let miEdad = 50;
```

### Boleano

El tipo bolean, *boolean* en inglés, sirve para guardar un si o un no o dicho de otro modo, un verdadero o un falso. Se utiliza para realizar operaciones lógicas, generalmente para realizar acciones si el contenido de una variable es verdadero (**true**) o falso (**false**). 

``` js
let soyVerdadero = true;
```

### Cadena de caracteres

Javascript sólo tiene un tipo de datos para guardar texto **string** y en el se pueden introducir cualquier número de caracteres. Un texto puede estar compuesto de números, letras y cualquier otro tipo de caracteres y signos. Los textos se escriben entre comillas, dobles o simples.

Todo lo que se coloca entre comillas es tratado como una cadena de caracteres independientemente de lo que coloquemos en el interior de las comillas. Por ejemplo, en una variable de texto podemos guardar números y en ese caso tenemos que tener en cuenta que las variables de tipo texto y las numéricas no son la misma cosa y mientras que las de numéricas nos sirven para hacer cálculos matemáticos las de texto no. 

``` js
let soyTexto = "500";
let yoTambienTexto = "Hola soy un texto compuesto por 41 letras";
```

#### Caracteres especiales

Hay una serie de caracteres especiales que sirven para expresar en una cadena de texto determinados controles como puede ser un salto de línea o un tabulador. Estos son los caracteres de escape y se escriben con una notación especial que comienza por una contra barra (una barra inclinada al revés de la normal '') y luego se coloca el código del carácter a mostrar.

Un carácter muy común es el salto de línea, que se consigue escribiendo **\n**. Otro carácter muy habitual es colocar unas comillas **\"**, pues si colocamos unas comillas sin su carácter especial nos cerrarían las comillas que colocamos para iniciar la cadena de caracteres.

``` js
let textoComillas = "Hola soy un \"texto con comillas\"";
let saltoDeLinea = "Soy texto en \n 2 líneas";
```

#### Concatenar cadenas

Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente. Puedes unir texto con variables ya sean de texto o numéricas.

``` js
let one = 'Hola, ';
let two = 'como estás?';
let joined = one + two;
let miEdad = 45;
let miNombre = "Carlos";
let esMiEdad = "Me llamo " + miNombre + " y tengo " + miEdad + " años.";
let myFecha = "19" + "67"; //resultado "1967"
```

#### Plantillas literales

Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres. Las plantillas literales se delimitan con el caracter de comillas o tildes invertidas (` `) (grave accent), en lugar de las comillas sencillas o dobles.

Las plantillas de cadena de caracteres pueden contener marcadores, identificados por el signo de dólar y envueltos en llaves (**${expresión}**). Las expresiones contenidas en los marcadores, junto con el texto entre ellas, son enviados como argumentos a una función. La función por defecto sencillamente concatena las partes para formar una única cadena de caracteres. Para más información sobre plantilla etiquetadas, anidadas, etc. ver [template_strings](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings) [^3] 

``` js
let expresion = "literales";
let cadena = `texto de cadena de caracteres ${expresion} texto adicional`;
```

Los caracteres de fin de línea encontrados forman parte de la plantilla literal. Utilizando cadenas de caracteres normales, sería necesario utilizar la siguiente sintaxes para producir cadenas de más de una línea:

``` js
let multiLinea = 'línea 1 de cadena de texto\n' +
'línea 2 de cadena de texto');
```

Utilizando plantillas literales, se puede obtener el mismo resultado de la siguiente forma:

``` js
let multiLinea = `línea 1 de la cadena de texto
línea 2 de la cadena de texto`);
```

Se pueden insetar expresiones dentro de cadenas de caracteres normales como por ejemplo:

``` js
let a = 5;
let b = 10;
let repuesta = `Quince es ${a + b} y
no ${2 * a + b}.`;
```

En lineas generales es recomentable usar plantillas literales en lugar de la concatenación de cadenas de caracteres.

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

[^1]: https://developer.mozilla.org/es/docs/Web/JavaScript
[^2]: https://desarrolloweb.com/articulos/507.php
[^3]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings
[^4]: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones
