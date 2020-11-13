# HTML

**HTML** es un lenguaje de marcado que nos permite indicar la estructura de nuestro documento mediante etiquetas. Este lenguaje nos ofrece una gran adaptabilidad, una estructuración lógica y es fácil de interpre­tar tanto por humanos como por máquinas. [^1]

El HTML se escribe en forma de **etiquetas**, rodeadas por corchetes angulares (<,>,/). Ejemplo si escribimos `<h1>Hola Mundo!</h1>` en nuestra página veremos
<h1>Hola Mundo!</h1>

## Elementos

Los elementos son la estructura básica de HTML. Los elementos tienen dos propiedades básicas: atributos y contenido. Cada atributo y contenido tiene ciertas restricciones para que se considere válido al documento HTML. Un elemento generalmente tiene una etiqueta de inicio (por ejemplo, `<nombre-de-elemento>`) y una etiqueta de cierre (por ejemplo, `</nombre-de-elemento>`). Los atributos del elemento están contenidos en la etiqueta de inicio y el contenido está ubicado entre las dos etiquetas (por ejemplo, `<nombre-de-elemento atributo="valor">Contenido</nombre-de-elemento>`). Algunos elementos, tales como `<br>`, no tienen contenido ni llevan una etiqueta de cierre

Una página que siempre hay que tener como referencia a la hora de consultar los elementos HTML es https://developer.mozilla.org/es/docs/Web/HTML

### Elementos anidados

Se pueden poner elementos dentro de otros elementos. Esto se llama anidamiento. Si quisiéramos decir que nuestro gato es muy gruñón, podríamos encerrar la palabra muy en un elemento `<strong>` para que aparezca destacada.
Ejemplo `<p>Mi gato es <strong>muy</strong> gruñón.</p>` nos da como resultado
<p>Mi gato es <strong>muy</strong> gruñón.</p>

Hay una forma correcta e incorrecta de anidar. En el ejemplo anterior, primero abrimos el elemento p, luego abrimos el elemento strong. Para un anidamiento adecuado, primero debemos cerrar el elemento strong, antes de cerrar el p.

El siguiente es un ejemplo de la forma incorrecta de anidar:

```html
<p>Mi gato es <strong>muy gruñón.</p></strong>
```

### Elementos vacíos

No todos los elementos siguen el patrón de etiqueta de apertura, contenido y etiqueta de cierre. Algunos elementos consisten solo en una etiqueta única, que se utiliza generalmente para insertar/incrustar algo en el documento en el lugar donde se le quiere incluir. Por ejemplo, el elemento `<img>` inserta una imagen en la página:

```html
<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png">
```

Este texto mostrará lo siguiente en tu página:

<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png">

### Atributos

Los atributos contienen información extra sobre el elemento que no se mostrará en el contenido. En este caso, el atributo class asigna al elemento un identificador que se puede utilizar para dotarlo de información de estilo.

Un atributo debería tener:

* Un espacio entre este y el nombre del elemento. (Para un elemento con más de un atributo, los atributos también deben estar separados por espacios).
* El nombre del atributo, seguido por un signo igual.
* Un valor del atributo, rodeado de comillas de apertura y cierre.

```html
<a href="https://www.mozilla.org/" title="La página de inicio de Mozilla" target="_blank">Mozilla</a>
```

### Atributos booleanos

En ocasiones puedes ver atributos escritos sin valor. Esto está permitido. Estos se denominan atributos booleanos. Los atributos booleanos solo pueden tener un valor, que generalmente es el mismo que el nombre del atributo.

```html
<input type="text" disabled="disabled">
```

También se puede escribir de manera abreviada

```html
<input type="text" disabled>
```

## Anatomía de un HTML

### Estructura básica de un HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mi página de prueba</title>
  </head>
  <body>
    <p>Esta es mi página</p>
  </body>
</html>
```

1. `<!DOCTYPE html>`: anteriormente servía para establecer el conjunto de reglas que la página debía seguir para que fuera considerado un buen HTML. En la actualidad se considera un legado histórico que hay que incluir para que todo funcione correctamente.
2. `<html></html>`: este elemento envuelve todo el contenido de la página y se le conoce como elemento raiz.
3. `<head></head>`: es la **cabecera** y actua como contenedor para todos los parámetros que quieras incluir en el documento HTML que no serán visibles a los visitantes de la página. Incluye cosas como palabras clave y la descripción de la página que quieras mostrar en los resultados de búsqueda, así como la hoja de estilo para formatear nuestro contenido, declaraciones de codificación de caracteres y más.
4. `<meta charset="utf-8">`: estable la codificación de caracteres que usará la página. Ayuda a evitar problemas de caracteres especiales como los acentos
5. `<title></title>`: establece el título de la página, que es lo que aparece en la pestaña del navegador.
6. `<body></body>`: contiene todo el contenido que se quiere mostrar en la página

### Espacios en blanco en HTML

No importa cuántos espacios en blanco se utilicen (incluye tanto caracteres de espacio como saltos de línea) el intérprete de HTML reduce cada secuencia de espacio en blanco a un único espacio al interpretar el código. Entonces, ¿por qué utilizar espacios en blanco? La respuesta está en la legibilidad.

Los dos siguientes fragmentos de código son equivalentes:

```html
<p>Máster Oficial en Geoinformación.</p>

<p>Máster    Oficial        en
         Geoinformación.</p>
```

### Caracteres especiales en HTML

En HTML, los caracteres <, >,",' y & son caracteres especiales. Forman parte de la sintaxis HTML. Entonces, ¿cómo incluye uno de estos caracteres especiales en tu texto? Por ejemplo, si deseas utilizar un menor que, y no hacer que se interprete como código.

Haces esto con referencias de caracteres. Estos son códigos especiales que representan caracteres, para ser usados en estas circunstancias exactas. Cada referencia de caracter comienza con un signo de ampersand (&) y finaliza con un punto y coma (;).

| Caracter literal | Equivalente de referencia de caracteres |
|------------------|-----------------------------------------|
| <                | `&lt;`                                  |
| >                | `&gt;`                                  |
| "                | `&quot;`                                |
| '                | `&apos;`                                |
| &                | `&amp;`                                 |

### Comentarios HTML

En HTML hay un mecanismo para escribir comentarios en el código. Los comentarios son ignorados por el navegador y, por tanto, son invisibles para el usuario.

Para convertir en un comentario una sección de contenido de tu archivo HTML, debes delimitarlo con los marcadores especiales `<!--` y `-->`. Por ejemplo:

```html
<p>No soy un comentario</p>

<!-- <p>¡Yo sí!</p> -->
```

### Idioma principal

Merece la pena mencionar que puedes especificar el idioma de tu página. Esto se puede hacer añadiendo el atributo lang a la etiqueta de apertura del HTML. Para definir el idioma se usa el estándar [ISO_639-1](https://es.wikipedia.org/wiki/ISO_639-1)

Esto resulta útil en muchos sentidos. Los motores de búsqueda indizarán tu documento HTML de modo más efectivo si estableces el idioma, y resulta útil para que las personas con discapacidad visual que utilizan los lectores de pantalla.

Ejemplo
```html
<html lang="es">
```

También puedes establecer que las subsecciones de tu documento se reconozcan en diferentes idiomas. Por ejemplo, podemos establecer que nuestra sección de japonés se reconozca como japonés, de la siguiente manera:

```html
<p>Ejemplo Japonés: <span lang="ja">ご飯が熱い。</span>.</p>
```

### Elementos de bloque vs elementos de línea

Un elemento de *línea* es aquel que ocupa el espacio mínimo necesario en horizontal, y permite que otro elemento se coloque a su lado. En cambio un elemento de *bloque*, ocupa todo el ancho disponible y no permite que otro elemento se coloque a su lado (aunque tenga lugar suficiente).

Ejemplo de elementos de linea

```html
<span>hola </span>
<span>estamos</span>
<span>en línea</span>
```

Produce la siguiente salida

<span>hola </span>
<span>estamos</span>
<span>en línea</span>

Ejemplo de elementos de bloque

```html
<div>hola </div><div>no estamos</div><div>en línea</div>
```

Produce la siguiente salida

<div>hola </div><div>no estamos</div><div>en línea</div>

## Mi primera página

1. Crear una carpeta llamada **web-mgeo**

2. Crear un archivo llamado **index.html** dentro de la carpeta *web-mgeo*

3. Abrir el archivo con el editor de texto y escribir lo siguiente

``` html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi calculadora geodésica</title>
</head>
<body>
    Mi calculadora geodésica
</body>
</html>
```

4. Abrir la página en el navegador y ver el resultado

## Referencias

[^1]: https://es.wikipedia.org/wiki/HTML

