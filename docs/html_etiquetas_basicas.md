# Estructura y Etiquetas Básicas

## Elementos de bloque vs elementos de línea

Un elemento de *línea* es aquel que ocupa el espacio mínimo necesario en horizontal, y permite que otro elemento se coloque a su lado. Ejemplos: `<span>`, `<a>`, `<strong>`.

En cambio un elemento de *bloque*, ocupa todo el ancho disponible y no permite que otro elemento se coloque a su lado (aunque tenga lugar suficiente). Ejemplos: `<div>`, `<h1>`, `<p>`, `<ul>`.

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

## Principales etiquetas de texto:

### Encabezado o título `<h[X]>`

Hay seis elementos de encabezado: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>` y `<h6>`. Se usan para establecer los niveles de contenido de la página. Por ejemplo el `<h1>` representa el título principal, `<h2>` sería un subtítulo y así sucesivamente. Donde `<h1>` es el más importante y grande, y `<h6>` el más pequeño.

Preferiblemente se debe usar un solo `<h1>` por página. Y se debe procuarar no usar más de tres niveles por página.

El uso de los encabezados favorece al **SEO** de las páginas. Los motores de búsqueda que indexan tu página consideran el contenido de los títulos como palabras clave importantes e influyen en la puntuación de búsqueda de la página.

####  Ejercicios entregables

!!! question "Calculadora geodésica"

    1. Modificar el *index.html* para agregar el titulo

        ``` html hl_lines="8"
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Mi calculadora geodésica</title>
        </head>
        <body>
            <h1>Mi calculadora geodésica</h1>
        </body>
        </html>
        ```

    2. Guardar y recargar la página para ver como ha cambiado el estilo del título de la página

### Párrafos

Usa la etiqueta <p> para crear bloques de texto.

```html
<p>Este es un párrafo de texto.</p>
```

<p>Este es un párrafo de texto.</p>

### Énfasis, Cursiva, negrita, subrayado...

En el lenguaje humano, a menudo enfatizamos ciertas palabras para alterar el significado de una frase, y a menudo queremos destacar ciertas palabras como importantes o diferentes en algún sentido. HTML nos dota de diversos elementos semánticos que nos permiten destacar contenido textual con tales efectos, y en esta sección veremos los más comunes.

```html
<p>Esto es <strong>negrita</strong> y esto es <em>cursiva</em>.</p>
```

<p>Esto es <strong>negrita</strong> y esto es <em>cursiva</em>.</p>

#### Negrita

Para el texto en negrita, use las etiquetas `<strong>` o `<b>`. La diferencia es semántica, `<strong>` se utiliza para indicar que el texto es fundamental o semánticamente importante para el texto circundante, mientras que `<b>` no indica tal importancia y simplemente representa texto que debe estar en negrita.

#### Cursiva

Para poner el texto en cursiva, use las etiquetas `<em>` o `<i>`. Al igual que en las negritas la diferencia es semántica. `<em>` se utiliza para indicar que el texto debe tener un énfasis adicional que se debe resaltar, mientras que `<i>` simplemente representa el texto que se debe diferenciar del texto normal que lo rodea. 

#### Subrayado

El elemento `<u>` se usa para representar una anotación no textual no articulada (No es un hipervínculo). Se usa para transmitir el significado que tradicionalmente conlleva el subrayado: nombres propios, errores ortográficos...

### Hipervínculos o enlaces

Los enlaces `<a>` son elementos verdaderamente importantes son los que hacen que la web sea **web**.

Un enlace se crea incluyendo el texto o cualquier otro contenido que queramos convertir en un enlace usando un elemento `<a>`. Donde le daremos un atributo **href** que contendrá la dirección web hacia dónde queremos que apunte el enlace.

Ejemplo

``` html
<a href="https://www.mozilla.org/es-ES/">la página de inicio de Mozilla</a>
```
<a href="https://www.mozilla.org/es-ES/">la página de inicio de Mozilla</a>

Otro atributo que es recomendable agregar a los enlaces es el *title*. El título contiene información adicional sobre el enlace. El título se mostrará al pasar el ratón sobre el texto del enlace.

El atributo **target** es muy útil ya que en donde desplegar la URL enlazada. Por defecto si no se especifica los enlaces se abren en la ventana o pestaña actual. Los valores mas usados para este atributo son:

* **_self**: Carga la URL en el mismo contexto de navegación que el actual. Este es el comportamiento por defecto.
* **_blank**: Carga la URL en un nuevo contexto de navegación. Usualmente es una pestaña, sin embargo, los usuarios pueden configurar los navegadores para utilizar una ventana nueva en lugar de la pestaña.
* **_parent**: Carga la URL en el contexto de navegación padre (parent) del actual. Si no existe el padre, este se comporta del mismo modo que *_self*.

!!! note
    Cuando se utiliza **target**, considera agregar rel="noopener noreferrer" para evitar el uso de la API window.opener.

Ejemplo

``` html
<a href="https://www.mozilla.org/es-ES/" title="El mejor lugar para encontrar más información acerca de la misión de Mozilla y cómo contribuir" target="_blank" rel="noopener noreferrer">la página de inicio de Mozilla</a>
```
<a href="https://www.mozilla.org/es-ES/" title="El mejor lugar para encontrar más información acerca de la misión de Mozilla y cómo contribuir"  target="_blank" rel="noopener noreferrer">la página de inicio de Mozilla</a>

#### Ejercicios Prácticos

!!! example "DragonBall: (10 minutos)"

    1. Mueve el elemento `<h1>` dentro de otro elemento que se va usar de encabezado de la pagina

    2. Selecciona un personaje de Dragonball y crea diferentes elementos donde poner la descripcion del personaje. Podeis sacar informacion de https://web.dragonball-api.com/

    ??? tip

        ```html
        <div><h1>Personajes de DragonBall</h1></div>
        <div>
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