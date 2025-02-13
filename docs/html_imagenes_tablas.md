# Imágenes y Tablas

## Imágenes y multimedia

HTML soporta varios recursos multimedia como imágenes, audio, y video. En nuestro caso explicaremos únicamente las imágenes ya que son el elemento multimedia más utilizado.

El elemento de imagen `<img>` representa una imagen en el documento.

Una imagen se crea usando un elemento `<img>`. Donde le daremos un atributo **src** que contendrá la dirección web donde está ubicada la imagen.

Ejemplo 

``` html
<img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Sistemas_de_proyeccion_con_xcalidraw.png" />
```
<img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Sistemas_de_proyeccion_con_xcalidraw.png" />

Un atributo que es recomendable agregar a las imágenes es el *alt*. Este atributo define el texto alternativo que describe la imagen, texto que los usuarios verán si la URL de la imagen es errónea o la imagen tiene un formato no soportado o si la imagen aún no se ha descargado.

Otros atributos comunes son el *height* (altura) y el *width* (ancho) para definir las dimensiones de la imagen.

``` html
<img alt="Proyecciones geográficas" width="200" height="100" src="https://upload.wikimedia.org/wikipedia/commons/7/77/Sistemas_de_proyeccion_con_xcalidraw.png" />
```

<img alt="Proyecciones geográficas" width="200" height="100" src="https://upload.wikimedia.org/wikipedia/commons/7/77/Sistemas_de_proyeccion_con_xcalidraw.png" />

####  Ejercicios entregables

!!! question "Calculadora geodésica"

    1. Modificar el *index.html* para agregar una imagen en nuestra página.

        ``` html hl_lines="8"
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Mi calculadora geodésica</title>
        </head>
        <body>
            <img src="https://www.uab.cat/Xcelerate/WAI/img/UAB-2linies-verd.svg" alt="UAB" style="height: 100px;">
            <h1>Mi calculadora geodésica</h1>
        </body>
        </html>
        ```

    2. Guardar y recargar la página para ver que aparece la imagen del logo de la UAB en nuestra página.

#### Ejercicios Prácticos

!!! example "DragonBall: (10 minutos)"

    1. Agrega la imagen de tu personaje para que aparezca antes que la descripción

    2. Definir el tamaño de la imagen para que se vea bien junto con la descripción

    ??? tip

        ```html
        <div><h1>Personajes de DragonBall</h1></div>
        <div>
            <img
              src="https://dragonball-api.com/characters/goku_normal.webp"
              alt="Goku"
              width="200px"
            />
            <h2>Goku</h2>
            <div>Saiyan - Male</div>
            <div>Base KI:</div>
            <div>60.000.000</div>
            <div>Total KI:</div>
            <div>90 Septillion</div>
            <div>Afilliation:</div>
            <div>Z Fighter</div>
        </div>
        ```

## Tablas

El elemento `<table>` se usa para representar datos en dos o mas dimensiones. Permite organizar los datos en filas y columnas.  

En documentos HTML una tabla puede ser considerada, como un grupo de filas donde cada una contiene a un grupo de celdas.

Como muchas otras estructuras de HTML, las tablas son construidas utilizando elementos. En particular, una tabla básica puede ser declarada usando tres elementos, `<table>` (el contenedor principal), `<tr>` (representando a las filas contenedoras de las celdas) y `<td>` (representando a las celdas) [^4]

Ejemplo

``` html
<table>
  <tr>
    <td>Celda 1</td>
    <td>Celda 2</td>
    <td>Celda 3</td>
  </tr>
  <tr>
    <td>Celda 4</td>
    <td>Celda 5</td>
    <td>Celda 6</td>
  </tr>
</table>
```

<table>
  <tr>
    <td>Celda 1</td>
    <td>Celda 2</td>
    <td>Celda 3</td>
  </tr>
  <tr>
    <td>Celda 4</td>
    <td>Celda 5</td>
    <td>Celda 6</td>
  </tr>
</table>

Conjuntamente con los elementos básicos de la tabla existen otros tipos de elementos que permiten hacer tablas más avanzadas. A continuación veremos algunos de ellos.

* El elemento `<th>` es un tipo especial de celda y se usa para los encabezados.
* El elemento `<caption>` de ser insertado justo después de la etiquete de apertura de la tabla y antes que todos los demás elementos. Se usa para definir el título de la tabla.


Ejemplo

``` html
<table>
  <caption>Titulo de la tabla</caption>
  <tr>
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>
    <th>Encabezado 3</th>
  </tr>
  <tr>
    <td>Celda 1</td>
    <td>Celda 2</td>
    <td>Celda 3</td>
  </tr>
  <tr>
    <td>Celda 4</td>
    <td>Celda 5</td>
    <td>Celda 6</td>
  </tr>
</table>
```

<table>
  <caption>Titulo de la tabla</caption>
  <tr>
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>
    <th>Encabezado 3</th>
  </tr>
  <tr>
    <td>Celda 1</td>
    <td>Celda 2</td>
    <td>Celda 3</td>
  </tr>
  <tr>
    <td>Celda 4</td>
    <td>Celda 5</td>
    <td>Celda 6</td>
  </tr>
</table>

La unificación de celdas es un mecanismo mediante el cual se pueden combinar o fusionar dos o más celdas adyacentes en una tabla. Este efecto puede lograrse utilizando los atributos **colspan**, para unificación horizontal, y **rowspan**, para unificación vertical. Estos atributos pueden tomar un valor entero mayor a cero, que representa el número de celdas que participarán en la unificación.

Ejemplo

``` html
<table>
  <caption>Titulo de la tabla</caption>
  <tr>
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>
    <th>Encabezado 3</th>
  </tr>
  <tr>
    <td>Celda 1</td>
    <td colspan="2">Celda 2 y 3</td>
  </tr>
  <tr>
    <td>Celda 4</td>
    <td>Celda 5</td>
    <td>Celda 6</td>
  </tr>
</table>
```

<table>
  <caption>Titulo de la tabla</caption>
  <tr>
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>
    <th>Encabezado 3</th>
  </tr>
  <tr>
    <td>Celda 1</td>
    <td colspan="2">Celda 2 y 3</td>
  </tr>
  <tr>
    <td>Celda 4</td>
    <td>Celda 5</td>
    <td>Celda 6</td>
  </tr>
</table>

También existen 3 elementos que pueden ayudar a organizar la información presentada en una tabla permitiendo una agrupación semántica de filas. Éstos son: `<thead>` para agrupar las filas que presentan infromación de encabezado; `<tfoot>` para contener a las filas que representan un pie o resumen; y `<tbody>` para representar un bloque de filas que consiste en un cuerpo de datos. Estos grupos temáticos son meramente semánticos, y se debe evitar su uso para temas de estilo.

De igual forma existe un elemento `<colgroup>` para hacer agrupaciones semánticas de columnas.

#### Ejercicios Prácticos

!!! example "DragonBall: (10 minutos)"

    1. Crea una tabla donde mostrar los datos de la descripción del personaje. Donde se vea la raza, sexo, base KI, total KI, afiliación 
