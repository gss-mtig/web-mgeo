# CSS - Cascading Style Sheets - Hojas de Estilo en Cascada

Hojas de Estilo en Cascada (del inglés **C**ascading **S**tyle **S**heets) o **CSS** es el lenguaje de estilos utilizado para describir la presentación de documentos HTML. CSS describe como debe ser renderizado el elemento estructurado en la pantalla, en papel, en el habla o en otros medios. CSS es uno de los lenguajes base de la Open Web y posee una especificación estandarizada por parte del W3C. [^1]

CSS es el segundo lenguaje más básico y esencial para crear páginas web. El primero sería HTML, con el que se define el contenido de la página. El segundo CSS, con el que se define la parte de la presentación, es decir, cómo deben mostrarse los elementos de la página, su posición, forma, espaciados, colores y en resumen, toda la parte estética.

*CSS* está formado por un conjunto de reglas que te permite aplicar estilos de manera selectiva a elementos en documentos HTML. Por ejemplo, para seleccionar todos los elementos de párrafo en una página HTML y volver el texto dentro de ellos de color rojo.

## Uso de estilos en HTML

En HTML existen tres métodos para agregar información de estilo a un documento.

### El atributo style

El uso del atributo *style* es la forma más fácil y directa de aplicar declaraciones de estilo a un elemento. Este atributo puede tener como contenido, cualquier número de declaraciones de estilo, separadas unas de otras por un punto y coma (";"). Como style es un atributo global, puede ser usado en cualquier elemento de HTML.

Ejemplo

``` html
<p style="background-color: gray;">Este texto tiene el estilo <b style="color: white; text-decoration: underline;">definido</b> por atributo</p>
```
<p style="background-color: gray;">Este texto tiene el estilo <b style="color: white; text-decoration: underline;">definido</b> por atributo</p>

A pesar de toda su simplicidad e inmediatez, el uso de este método rompe de alguna manera uno de los principales beneficios de CSS: la posibilidad de crear declaraciones de estilo que pueden ser reutilizadas en tantos elementos como sea posible, algo que se traduce en flexibilidad y portabilidad.

### El elemento style

El elemento `<style>` es un contenedor para declaraciones de estilo. Dentro de este elemento podemos arrojar cualquier número de declaraciones de reglas de estilo. Este elemento sólo puede ser declarado en la sección del encabezado (`<head>`) del documento.

Ejemplo

``` html
<head>
  <title>Hombre de negro</title>
  <style>
    h1 {
      background-color: gray;
      margin: 0;
    }
 
    p {
      background-color: black;
      color: white;
      margin: 0;
    }
  </style>
</head>
<body>
  <h1>Mi color favorito</h1>
  <p>¿Te atreverías a adivinar cuál es mi color favorito?</p>
</body>
```

Ahora, con este método podemos compartir declaraciones entre los muchos elementos presentes en una misma página. Pero, ¿es posible compartir declaraciones de estilo entre muchos documentos?

### Archivos externos

La ventaja de utilizar un archivo externo para almacenar información de estilo reside en la posibilidad de compartir ese archivo entre un gran número de documentos. Cuando un documento es cargado, el navegador detecta la referencia al archivo de hojas de estilo, cargando y aplicando los estilos como si fueran parte del documento.

Un archivo externo de hojas de estilo puede ser insertando en el documento con el elemento `<link>`, teniendo el valor "text/css" en el atributo *type*, y el URI del archivo de hojas de estilo en el atributo *href*. Ten presente que, como style, este elemento solo puede estar ubicado en el bloque de encabezado (`<head>`) del documento.

Ejemplo

``` html
<head>
  <title>Hombre de negro</title>
  <link type="text/css" href="estilos.css">
</head>
<body>
  <h1>Mi color favorito</h1>
  <p>¿Te atreverías a adivinar cuál es mi color favorito?</p>
</body>
```

1. Crear una carpeta llamada **css** dentro de la carpeta *web-mgeo*

2. Crear un archivo llamado **estilos.css** dentro de la carpeta *css*

3. Modificar el *index.html* para agregar una hoja de estilo externa a nuestra calculadora

	``` html hl_lines="9"
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="[VUESTRO NOMBRE]">
        <meta name="description" content="Calculadora geodésica que permite hacer la transformación de coordenadas geográficas en linea">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="https://www.icgc.cat/bundles/microblauicgc/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
		<link type="text/css" href="css/estilos.css" rel="stylesheet">
        <title>Mi calculadora geodésica</title>
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
                        <td colspan="4"><button>Transformar coordenadas</button></td>
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

4. Guardar el archivo.

## Anatomía de una regla CSS

* **Selector**: es el elemento con el que comienza la regla y selecciona el(los) elemento(s) a dar estilo.
* **Declaración**: es la unidad básica de CSS y consiste, básicamente, en la asignación de un valor a una propiedad. CSS tiene un formato específico que debe seguir toda declaración. Éste consiste en el nombre de la propiedad seguido de dos puntos (":") y el valor que le será asignado. Cuando se provee más de una declaración en el mismo bloque, cada declaración debe ser separada de su próxima por un punto y coma (";"). Este es el motivo por el cual los autores normalmente usan un punto y coma al final de cada declaración, independientemente de la presencia de declaraciones siguientes. [^2]
* **Propiedades**: es la propiedad quieres afectar en tu regla. Por ejemplo: *color*
* **Valores de propiedades**: es el valor que se le asigna a la propiedad. Por ejemplo: *red*

![Regla css](img/csspartes.png "Regla css")
Regla css

Para modificar varios valores de propiedades a la vez, solo necesitas escribirlos separados por punto y coma (;).

Ejemplo

``` css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

También puedes seleccionar varios elementos y aplicar una sola regla a todos ellos. Incluye varios selectores separados por comas (,). 

Ejemplo

``` css
p, li, h1 {
  color: red;
}
```

## Tipos de Selectores simples

### Selector de elemento o de tipo

Se corresponde con todos los elementos en el documento que tienen el tipo especificado. Con este selector puedes aplicar declaraciones a, por ejemplo, todos los párrafos (elementos `<p>`), todos los ítems de listas (elemento `<li>`) o todos los vínculos (elementos `<a>`) de un documento.

¿Qué selecciona?. Todos los elementos HTML del tipo especificado.

Ejemplo

``` css
div {
  width: 500px;
}
```

### Selector de identificación (ID)

Se corresponde con todos los elementos que tienen el valor especificado en su atributo **id**. Como, por definición, los valores de id deben ser únicos, este selector puede afectar sólo a un elemento en el documento. En su declaración, el ID especificado debe estar precedido por el signo numeral (**#**).

¿Qué selecciona?. El elemento en la página con el ID especificado.

El siguiente ejemplo muestra un conjunto de declaraciones que están siendo aplicadas a un elemento que tiene el valor "titulo" en el atributo id.

``` css
#titulo {
  font-size: 4em;
  color: blue;
  text-decoration: underline;
}
```

Esta regla afectaría a un elemento como el siguiente.

``` html
<h1 id="titulo">Título con estilo</h1>
```

### Selector de clase

Una clase es un concepto introducido por CSS con el propósito de agrupar declaraciones y aplicarlas a un conjunto personalizado de elementos, independientemente de su tipo o naturaleza.

Se corresponde con  todos los elementos que tienen el nombre de clase especificado en su atributo **class**. En su construcción, un punto (**.**) debe preceder al nombre de la clase.

¿Qué selecciona?. Los elementos en la página con la clase especificada (una clase puede aparecer varias veces en una página).

El siguiente ejemplo muestra un conjunto de declaraciones para la clase llamada "importante".

``` css
.importante {
  font-size: 1.2em;
  font-weight: bold;
  color: red;
}
```

Esta regla afectaría a los elementos como los siguientes.

``` html
<h3 class="importante">Cuidado</h3>
<p class="importante">No abra la escotilla durante viajes interestelares!</p>
<div class="importante">Georeferenciar los datos</div>
```

## Herencia

La herencia es un concepto por el cual los elementos descendientes heredan algunas de las propiedades declaradas para sus ancestros. Esto no es otra cosa más que el comportamiento esperado, y evita tener que redefinir las mismas propiedades en los hijos de un elemento.

El siguiente ejemplo afectaría a todos los elementos del documento.

``` css
body {
  color: red;
  font-style: italic;
}
```

Como ya comentamos esta regla afectaría a todos los elementos que estan dentro del body. En este ejemplo afectaría a los elemento `<h1>` y `<p>`

``` html
<body>
  <h1>Tormenta en el mar rojo</h1>
  <p>Este viento está torciendo mi texto...</p>
</body>
```

Algunas propiedades no se heredan. Por ejemplo, si para un elemento se establece un ancho *width* del 50%, sus descendientes no tendrán un 50% de ancho con respecto al de sus padres.

## Orden de aplicación de las reglas

Los estilos de diferentes orígenes y selectores son aplicados en un orden específico y unívoco. Este orden ayuda a resolver conflictos y hace al sistema más predecible, lo que permite a los autores planear su esquema de estilos con certeza. Es posible que la regla que se aplica finalmente a tu elemento no sea la que esperas (debido a que algunas reglas entran en conflicto), por lo que debes comprender cómo funcionan estos mecanismos.

Los conceptos de **cascada**, y el de **especificidad** son mecanismos que controlan qué regla se aplica cuando aparecen tales conflictos.

### Cascada

En un primer nivel de simplicidad, la cascada en las hojas de estilo significa que el orden de las reglas importa en CSS: cuando dos reglas tienen la misma especificidad, se aplica la que aparece en último lugar en el CSS.

En el ejemplo siguiente tenemos dos reglas que pueden aplicarse al `<h1>`. El `<h1>` acaba siendo de color azul porque estas normas tienen un selector idéntico y, por lo tanto, tienen la misma especificidad. Por esta razón, se aplica la última que aparece.

``` css
h1 { 
    color: red; 
}
h1 { 
    color: blue; 
}
```

### Especificidad

La especificidad es el modo que tiene el navegador de decidir qué regla se aplica si diversas reglas tienen selectores diferentes pero podrían aplicarse a un mismo elemento. Básicamente, la especificidad mide cuán específica es la selección de un selector.

La siguiente lista muestra el orden de especificidad que se aplica en CSS. Cada forma de aplicar estilos en esta lista prevalecerá cuando compita con aquellos debajo de sí.

1. El atributo *style*
2. El selector de ID
3. El selector de clase
4. El selector de tipo
5. El selector universal

Esta lista no dice nada acerca de los selectores avanzados, donde las combinaciones llevan al orden lejos de la simplicidad. Sin embargo, existe un sistema para trabajar con eso también.
 
Por ejemplo tenemos este conjunto de reglas

``` css
p {
  color: gray;
}

#titulo {
  color: red;
}

.blue {
  color: blue;
}

h1 {
  color: green;
}

#titulo {
  color: cyan;
}
```

Y tenemos este html

``` html
<h1 id="titulo" class="blue">Por qué amo las máquinas de arcade</h1>
<p style="color: blue">Todavía puedo oler la ficha de metal en mi mano cuando cierro los ojos...</p>
```

Siguiendo el orden de aplicación de la lista veremos el `<h1>` con el texto en color cyan y el `<p>` en color azul

### Propiedad !important

Hay una pieza especial de CSS que se puede utilizar para anular todos los cálculos anteriores, sin embargo se debe tener mucho cuidado con su uso: **!important**. Se utiliza para convertir una propiedad y un valor particular en el elemento más específico, de modo que se invalidan las reglas normales de la cascada.

## Valores y unidades

### Color

En CSS hay muchas formas de especificar el color. En todas partes en CSS se pueden usar los mismos valores de color, tanto para especificar el color del texto como el color de fondo, o de cualquier otra cosa.

El sistema de colores estándar disponible en los ordenadores modernos es de 24 bits, lo que permite visualizar aproximadamente 16,7 millones de colores distintos a partir de una combinación de diferentes canales de rojo, verde y azul con 256 valores diferentes por canal (256 x 256 x 256 = 16.777.216). Echemos un vistazo a algunas de las formas en que podemos especificar colores en CSS.

#### Palabres claves para los colores

Las palabras clave para los colores, son una forma simple y comprensible de especificar colores. Son identificadores en los que no hay distinción entre mayúsculas y minúsculas y que sirven para representar un color concreto, por ejemplo *red*, *blue*, *brown*, *lightseagreen*. El nombre describe el color aunque es mayormente artificial ya que el color final puede variar ligeramente dependiendo de diversos factores.

Ninguna palabra clave de color tiene transparencia en CSS, son colores planos y sólidos.

#### RGB

Los colores puede ser definidos usando el modelo RGB (rojo-verde-azul) de dos maneras

##### Notación Hexadecimal #RRGGBB y #RGB

Se representa mediante un "#", seguido de treo o seis caracteres hexadecimales (0-9, A-F).

La notación de tres dígitos (#RGB) y la de seis (#RRGGBB) son iguales. Por ejemplo, #f03 y #ff0033 representan el mismo color.

##### Notación funcional rgb(R,G,B) y rgba(R,G,B,A)

Se representa mediante "rgb", seguido por tres valores enteros o tres valores porcentuales. El número entero 255 representa el 100%, y F o FF en notación hexadecimal.

Podemos definir los colores con el modelo Rojo (red) - Verde (green) - Azul (blue) - alpha (RGBa) usando la notación funcional rgba(). RGBa amplia el modelo RGB añadiendo un canal alfa, permitiendo de esta manera especificar la opacidad de un color. La **a** representa opacidad: 0=transparente; 1=opaco; Los valores de opacidad son valores entre 0 y 1. Por ejemplo rgba(255,0,0,0.4)

#### HSL

Los colores también puede ser definidos usando el modelo tono (hue) - saturación (saturation) - brillo (lightness) (HSL) con la notación funcional hsl(). La ventaja del modelo HSL sobre el modelo RGB es que es mucho más intuitivo: puedes adivinar los colores que tú quieres y luego modificarlos. Es también más fácil crear conjuntos de colores (manteniendo el tono (hue)  igual y modificando el brillo y la saturación.

Esta notación también se le puede definir opacidad usando la notación funcional hsla(). HSLa amplía el modelo HSL incluyendo el canal alfa, permitiendo de esta manera especificar la opacidad de un color. La **a** representa opacidad: 0=transparente; 1=opaco; Los valores de opacidad son valores entre 0 y 1. Por ejemplo hsla(240,100%,50%, 0.7)

### Números, longitudes y porcentajes

Al utilizar CSS te puedes encontrar con varios tipos de datos numéricos. Todos los siguientes están clasificados como tipos de datos numéricos:

* Números enteros, por ejemplo 102 o -50
* Números decimales, por ejemplo 0.2 o -2.5
* Una dimensión es un número con una unidad asociada, por ejemplo 45deg (grados), 5s (segundos) o 10px (píxeles)
* Un porcentaje representa una fracción de algún otro valor, por ejemplo, 50%. Los valores de porcentaje siempre son relativos a otra cantidad, por ejemplo, la longitud de un elemento es relativa a la longitud de su elemento padre.

#### Longitudes

El tipo numérico con el que te vas a encontrar con mayor frecuencia es *<length>*, por ejemplo, 10px (píxeles) o 30em. En CSS se utilizan dos longitudes diferentes: relativa y absoluta. Es importante conocer la diferencia para entender qué dimensiones van a tener las cosas.

##### Unidades de longitud absoluta

Todas las unidades siguientes son unidades de longitud absoluta: no son relativas a nada más y en general se considera que siempre tienen el mismo tamaño.

En la siguiente lista se muestran algunas de las unidades más frecuentes

* cm: Centímetros = 1cm = 96px/2,54
* mm: Milímetros
* in: Pulgadas = 1in = 2,54cm = 96px
* pt: Puntos = 1pt = 1/72 de 1in
* px: Píxeles = 1px = 1/96 de 1in

Por ejemplo, normalmente no usamos cm (centímetros) en pantalla. El valor que usarás de forma más frecuente es px (píxeles) o pt (puntos) para las fuentes.

##### Unidades de longitud relativa

Las unidades de longitud relativa son relativas a algo más, por ejemplo, al tamaño de letra del elemento principal o al tamaño de la ventana gráfica. La ventaja de usar unidades relativas es que con una planificación cuidadosa puedes lograr que el tamaño del texto u otros elementos escalen en relación con todo lo demás en la página.

En la siguiente lista se muestran algunas de las unidades más útiles para el desarrollo web.

* em: Tamaño de letra del elemento padre, en el caso de propiedades tipográficas como *font-size*, y tamaño de la fuente del propio elemento en el caso de otras propiedades, como *width*
* rem: Tamaño de la letra del elemento raíz.
* vw: % del ancho de la ventana gráfica.
* vh: % de la altura de la ventana gráfica.

### Funciones

Existe el grupo de valores conocidos como funciones. Ya hemos visto funciones en acción en la sección sobre los colores: rgb(), hsl(), etc.

Un valor que se comporta más como algo que puedes encontrar en un lenguaje de programación tradicional es la función **calc()**. Esta función te proporciona la capacidad de hacer cálculos simples en tu CSS. Es particularmente útil si deseas calcular valores que no puedes definir al escribir el CSS para tu proyecto y necesitas que el navegador lo haga durante la ejecución.

Por ejemplo, a continuación usamos calc() para hacer que la caja tenga 20% + 100px de ancho. El 20% se calcula a partir del ancho del contenedor principal .wrapper y, por lo tanto, cambiará si ese ancho cambia. No podemos hacer este cálculo de antemano porque no sabemos cuál será el 20% del elemento padre, por lo que usamos calc() para decirle al navegador que lo haga por nosotros.

``` css
.wrapper {
  width: 400px;
}

.box {
  width: calc(20% + 100px);
}
```
``` html
<div class="wrapper">
  <div class="box">Mi ancho es calculado.</div> 
</div>
```

### Variables

En CSS, las propiedades personalizadas también conocidas como variables son entidades definidas por autores de CSS que contienen valores específicos que se pueden volver a utilizar en un documento. Se establecen mediante la notación de propiedades personalizadas (por ejemplo, --main-color: black;) y se acceden mediante la función var() (por ejemplo, color: var (--main-color);).

Sitios web complejos tienen cantidades muy grandes de CSS, a menudo con una gran cantidad de valores repetidos. Por ejemplo, el mismo color se puede utilizar en cientos de lugares diferentes, lo cual requiere buscar y reemplazar globalmente si necesitamos cambiar ese color. Las variables CSS permiten que un valor se almacene en un lugar y luego se haga referencia en varios otros lugares. Un beneficio adicional son los identificadores semánticos. Por ejemplo --main-text-color es más fácil de entender que #00ff00, especialmente si este mismo color también se utiliza en otro contexto.

Las variables CSS están sujetas a la cascada, y heredan su valor de su padre.

Para declarar variables usamos un nombre que comienze con dos guiones (--), y un valor que puede ser cualquier valor válido de CSS. Como cualquier otra propiedad, la escribimos dentro de un set de reglas de estilo, algo así:

``` css
elemento {
  --main-bg-color: brown;
}
```

Ten en cuenta que el selector que usemos para las reglas de estilo define el ámbito (scope) en el que podremos usar la propiedad personalizada (variable). Una buena práctica común es declarar variables en la pseudo-clase :root, y así aplicarlas globalmente al documento HTML

``` css
:root {
  --main-bg-color: brown;
}
```

La función **var()** puede ser utilizada como valor en cualquier propiedad de un elemento. La función var() no puede ser usada como nombre de una propiedad, selector o cualquier cosa que no sea un valor de propiedad.

El primer parámetro que recibe la función es el nombre de la variable que será reemplazada. Se puede utilizar un segundo parámetro opcional como fallback de el primero. Si la variable referenciada por el primer parámetro no es válida, entonces la función utiliza el valor del segúndo parámetro.

Ejemplo

``` css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}

/* Fallback --header-color no está definido */
.header {
  color: var(--header-color, blue);
}
```

####  Ejercicios entregables

!!! question "Calculadora geodésica"

    1. Modificar el archivo **estilos.css** para agregar las variables de los colores principales que usaremos en nuestra calculadora. Abrir el archivo con el editor de texto y escribir lo siguiente

        ``` css
        :root {
          --light-blue: #8ecae6ff;
          --blue-green: #219ebcff;
          --prussian-blue: #023047ff;
          --honey-yellow: #ffb703ff;
          --orange: #fb8500ff;
        }
        ```

    2. Guardar el archivo

    Paleta de colores sacada de https://coolors.co/palettes/trending

## Fuentes

Las propiedades CSS que se usan para aplicar estilo al texto pueden clasificarse generalmente en dos categorías:

* **Estilos del tipo de letra**: Propiedades que afectan al texto (qué tipo de letra se usa, su tamaño, si es negrita, itálica, etc.).
* **Estilos de disposición del texto**: Propiedades que afectan al espaciado y otras características relativas a la disposición del texto, lo que permite la elección de, por ejemplo, el espacio entre líneas y letras, y el modo como el texto se alinea dentro de la caja contenedora.

### Estilos del tipo de letra

#### Familia de tipos de letra

Usamos la propiedad **font-family** para definir un tipo de letra diferente para nuestro texto. Esta propiedad indica al navegador el tipo de letra (o una lista de tipos de letra) que debe aplicar a los elementos seleccionados. El navegador solo aplica el tipo de letra si la máquina que accede al sitio web dispone de ella; en caso contrario, simplemente usa el tipo de letra que tiene definido por defecto.

Ya que no puedes garantizar la disponibilidad de los tipos de letra que deseas utilizar (incluso un tipo de letra seguro para la web podría fallar por alguna razón), puedes proporcionar un lista de tipos de letra para que el navegador tenga diversos tipos de letra entre los que elegir. Consiste simplemente en introducirlo como el valor de font-family, que consistirá en una lista de diversos nombres de tipos de letra separados por comas.

En tal caso, el navegador comienza al principio de la lista y busca si el primer tipo de letra está disponible en la máquina. Si es así, aplica ese tipo de letra a los elementos seleccionados, y si no, lo intenta con el nombre siguiente de la lista; y así sucesivamente.

Ejemplo

``` css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

#### Tamaño de la letra

En el apartado sobre Unidades y valores de CSS, vimos las unidades de longitud y tamaño. El tamaño del tipo de letra (establecido con la propiedad **font-size**) puede tomar valores medidos en la mayoría de estas unidades (y en otras, como porcentajes). Sin embargo, las unidades más comunes que vas a usar para ajustar el tamaño del texto son:

* Unidades **px** (píxeles): El número de píxeles de altura que deseas que tenga el texto. Esta es una unidad absoluta, da como resultado el mismo valor calculado final para el tipo de letra en la página en casi cualquier situación.
* Unidades **em**: 1em equivale al tamaño de tipo de letra que se haya establecido en el elemento padre del elemento activo al que aplicamos estilo (más específicamente, el ancho de una letra M mayúscula contenida dentro del elemento padre).
* Unidades **rem**: Funcionan igual que las unidades em, excepto que 1rem equivale al tamaño del tipo de letra establecido en el elemento raíz del documento (es decir, en `<html>`), no en el elemento padre.

Ejemplo
``` css
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem;
}

p {
  font-size: 1.4rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
}
```

#### Estilo y cuerpo del tipo de letra, efectos y decoración del texto

El CSS proporciona cuatro propiedades comunes para alterar el efecto visual / énfasis del texto:

* **font-style**: Se usa para activar y desactivar el texto en cursiva
* **font-weight**: Establece el grueso o peso del texto. Ejemplo *normal* o *bold*
* **text-transform**: Te permite practicar algunas transformaciones sobre tu tipo de letra. Ejemplo *uppercase*, *lowercase*, *capitalize*, etc.
* **text-decoration**: Activa/desactiva decoraciones en los tipos de letra (usarás esto principalmente para desactivar el subrayado por defecto de los enlaces al aplicarles estilo). Ejemplo *none* (desactiva cualquier decoración de texto que presente), *underline*, etc.

### Estilos de disposición del texto

#### Alineación del texto

La propiedad **text-align** se usa para controlar la forma en que el texto se alinea dentro de la caja que lo contiene. Los valores disponibles para esta propiedad son los siguientes, y funcionan de la misma forma que en una aplicación de procesamiento de texto:

* **left**: Alinea el texto por la izquierda.
* **right**: Alinea el texto por la derecha.
* **center**: Centra el texto.
* **justify**: Varía los espacios entre las palabras para que todas las líneas de texto tengan el mismo ancho. 

#### Interlineado

La propiedad **line-height** establece la altura entre cada línea de texto; esta propiedad admite la mayoría de las unidades y magnitudes, pero también puede tomar un valor sin unidades, que actúa como un multiplicador y generalmente se considera la mejor opción porque se multiplica la propiedad font-size para obtener la altura de la línea (line-height)

#### Otras propiedades interesantes

* **white-space**: Define cómo se usan los espacios en blanco y los saltos de línea asociados dentro del elemento.
* **word-break**: Especifica si se deben dividir las palabras a final de línea.
* **word-wrap**: Especifica si el navegador puede dividir palabras a final de línea para evitar desbordamientos del contenido.

### Tipografías web

Las tipografías web son una función del CSS que te permite especificar los archivos de tipo de letra que se van a descargar junto con tu sitio web a medida que el usuario acceda a ellos, lo que significa que cualquier navegador que admita tipografías web puede disponer de los tipos de letra que especificas.

En primer lugar, tienes un bloque @font-face al comienzo del CSS, que especifica los archivos de los tipos de letra que quieres que se descarguen:

``` css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff");
}
```

A continuación, puedes usar el nombre de la familia de tipos de letra especificado en @font-face para aplicar tu tipo de letra personalizado a cualquier elemento que desees

``` css
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

Los navegadores admiten diferentes formatos de tipos de letra, por lo que necesitarás más de un formato de tipos de letra para conseguir una compatibilidad decente entre navegadores. Por ejemplo, la mayoría de los navegadores modernos admiten WOFF/WOFF2 (Web Open Font Format, versiones 1 y 2), el formato más eficiente disponible.

Generalmente las fuentes no son de uso gratuito. Debes pagar por ellas y/o respetar otras condiciones de licencia, como acreditar al creador del tipo de letra en el código (o en tu sitio web)

Puedes obtener fuentes en diversos sitios como por ejemplo: https://fonts.google.com/ o https://fontlibrary.org/

####  Ejercicios entregables

!!! question "Calculadora geodésica"

    1. Modificar el archivo **index.html** para agregar la fuente Roboto de google fonts.

        ``` html hl_lines="9 10"
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
                            <td colspan="4"><button>Transformar coordenadas</button></td>
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

    2. Modificar el archivo **estilos.css** para aplicar la fuente a todo nuestro documento

        ``` css hl_lines="9 10 11"
        :root {
          --light-blue: #8ecae6ff;
          --blue-green: #219ebcff;
          --prussian-blue: #023047ff;
          --honey-yellow: #ffb703ff;
          --orange: #fb8500ff;
        }

        html {
          font-family: "Roboto", sans-serif;
        }
        ```

    3. Guardar el archivo y recargar la página en nuestro navegador para observar el cambio de tipo de letra.

    4. Modificar el archivo **estilos.css** para aplicar algunos estilos a nuestros elementos

        ``` css hl_lines="13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31"
        :root {
          --light-blue: #8ecae6ff;
          --blue-green: #219ebcff;
          --prussian-blue: #023047ff;
          --honey-yellow: #ffb703ff;
          --orange: #fb8500ff;
        }

        html {
          font-family: "Roboto", sans-serif;
        }

        header {
          background-color: var(--light-blue);
        }

        header > h1 {
          color: var(--prussian-blue);
        }

        footer {
          color: var(--blue-green);
        }

        #origen, #destino {
          color: var(--orange);
        }

        aside > ul > li {
          color: var(--honey-yellow);
        }
        ```

    5. Guardar el archivo y recargar la página en nuestro navegador para ver los cambios de colores en nuestra página.

    6. Modificar el archivo **index.html** para agregar un class al botón

        ``` html hl_lines="55"
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

    7. Modificar el archivo **estilos.css** para aplicar estilo al botón

        ``` css hl_lines="33 34 35 36"
        :root {
          --light-blue: #8ecae6ff;
          --blue-green: #219ebcff;
          --prussian-blue: #023047ff;
          --honey-yellow: #ffb703ff;
          --orange: #fb8500ff;
        }

        html {
          font-family: "Roboto", sans-serif;
        }

        header {
          background-color: var(--light-blue);
        }

        header > h1 {
          color: var(--prussian-blue);
        }

        footer {
          color: var(--blue-green);
        }

        #origen, #destino {
          color: var(--orange);
        }

        aside > ul > li {
          color: var(--honey-yellow);
        }

        .btn-tranformar {
          background-color: var(--orange);
          color: var(--prussian-blue);
        } 
        ```

    8. Guardar el archivo y recargar la página en nuestro navegador para ver el cambio de estilo en el botón.

#### Ejercicios Prácticos

!!! example "DragonBall: (15 minutos)"

    1. Agrega un archivo de estilo `estilo.css` a tu pagina del personaje

    2. Agrega classes a tus elementos y darle estilo para que se tenga un aspecto similar a esto

        ![Ejemplo personaje DragonBall con estilo](img/css-dragonball-personaje.png)

## Referencias

[^1]: https://developer.mozilla.org/es/docs/Web/CSS
[^2]: https://www.htmlquick.com/es/tutorials/css.html
