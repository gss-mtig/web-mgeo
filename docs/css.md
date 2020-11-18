# CSS

Hojas de Estilo en Cascada (del inglés **C**ascading **S**tyle **S**heets) o **CSS** es el lenguaje de estilos utilizado para describir la presentación de documentos HTML. CSS describe como debe ser renderizado el elemento estructurado en la pantalla, en papel, en el habla o en otros medios. CSS es uno de los lenguajes base de la Open Web y posee una especificación estandarizada por parte del W3C. [^1]

CSS es el segundo lenguaje más básico y esencial para crear páginas web. El primero sería HTML, con el que se define el contenido de la página. El segundo CSS, con el que se define la parte de la presentación, es decir, cómo deben mostrarse los elementos de la página, su posición, forma, espaciados, colores y en resumen, toda la parte estética.

*CSS* está formado por un conjunto de reglas que te permite aplicar estilos de manera selectiva a elementos en documentos HTML. Por ejemplo, para seleccionar todos los elementos de párrafo en una página HTML y volver el texto dentro de ellos de color rojo.

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

## Tipos de Selectores avanzados

### Selector de atributo

Este grupo de selectores te proporciona diferentes formas de seleccionar elementos según la presencia de un atributo determinado en un elemento. O incluso hacer una selección basada en la presencia de un atributo que tiene un valor particular asignado.

Ejemplo para seleccionar todo los elementos `<a>` que tiene el atributo **target**

``` css
a[target] {
  background-color: yellow;
}
```

Ejemplo para seleccionar todo los elementos `<a>` que tiene el atributo **target** igual a *_blank*

``` css
a[target="_blank"] {
  background-color: yellow;
}
```

Para ver más ejemplos de selectores de atributo https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors o https://www.w3schools.com/css/css_attribute_selectors.asp

### Selector de pseudoclase

Este grupo de selectores te proporciona diferentes formas de seleccionar elementos pero solo cuando esté en el estado especificado, por ejemplo cuando el puntero esté sobre él.

Por ejemplo la pseudoclase **:hover** selecciona un elemento solo cuando se le pasa el ratón por encima.

``` css
a: hover {
  background-color: red;
}
```

Para ver el listado completo de pseudoclase https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

### Selector de pseudoelementos

Este grupo de selectores te proporciona diferentes formas de seleccionar una parte determinada de un elemento en vez del elemento en sí. Por ejemplo, **::first-line** siempre selecciona la primera línea del texto que se encuentra dentro de un elemento (`<p>`, en el ejemplo siguiente), y actúa como si un elemento `<span>` hubiera delimitado la primera línea, seleccionado y aplicado estilo.

``` css
p::first-line {
  color: #ff0000;
}
```

Para ver el listado completo de pseudoelementos https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

### Combinadores

Este grupo de selectores combina otros selectores con el fin de delimitar elementos de nuestros documentos. 

El ejemplo siguiente selecciona los párrafos `<p>` que son hijos directos del elemento `<article>` utilizando el operador de combinación hijo (>)

``` css
article > p {
  color: #ff0000;
}
```

Exiten 4 tipo de selectores de combinación en CSS:

* Selectores descendientes (␣ espacio)
* Selectores de hijo (>)
* Selectores de hermanos adyacentes (+)
* Selectores de hermanos generales (~)

#### Selectores descendientes (espacio)

El ␣ combinador (que se supone que representan un espacio, o mejor dicho uno o más espacios en blanco) combina dos selectores tales que el selector combinado incluye sólo los elementos que coinciden con el segundo selector para los que hay un elemento ancestro que coincide con el primer selector. Los selectores descendientes son similares a selectores hijos , pero que no requieren que la relación entre los elementos coincidentes ser estrictamente entre padres e hijos.

El siguiente ejemplo selecciona todos lo elementos `<p>` que estén dentro de un elemento `<div>`

``` css
div p {
  background-color: green;
}
```

Esta regla afectaría a los elementos que aparecen marcados en amarillo.

``` html hl_lines="2 4"
<div>
    <p>Afectado por el estilo<p>
    <a href="http://ejemplo.com">
        <p>Yo también estoy afectado</p>
    </a>
</div>
<p>Yo no estoy afectado</p>
<a href="http://ejemplo.com">
    <p>Yo tampoco estoy afectado</p>
</a>
```

#### Selectores de hijo (>)

El combinador > separa a dos selectores y busca solo a los elementos que coindicen con el segundo selector y que son hijos directos del primero. Cuando se combinan dos selectores con el selector de descendiente, la expresión busca elementos que coinciden con el segundo selector y que tienen algun ancestro que coindice con el primero.

El siguiente ejemplo selecciona todos lo elementos `<p>` que son hijos directos de un elemento `<div>`

``` css
div > p {
  background-color: green;
}
```

Esta regla afectaría a los elementos que aparecen marcados en amarillo.

``` html hl_lines="2"
<div>
    <p>Afectado por el estilo<p>
    <a href="http://ejemplo.com">
        <p>Yo ya no estoy afectado</p>
    </a>
</div>
<p>Yo no estoy afectado</p>
<a href="http://ejemplo.com">
    <p>Yo tampoco estoy afectado</p>
</a>
```

#### Selectores de hermanos adyacentes (+)

El combinador **+** hace referencia a este selector como selector adyacente o selector del próximo hermano. Sólo seleccionará un elemento especificado que esté inmediatamente después de otro elemento especificado. Tienes que estar en el mismo nivel esto quiere decir que tengan el mismo padre

El siguiente ejemplo selecciona a todos los primeros elementos `<p>` que estan ubicados inmediatamente despúes de un elemento `<div>`

``` css
div + p {
  background-color: green;
}
```

Esta regla afectaría a los elementos que aparecen marcados en amarillo.

``` html hl_lines="7"
<p>Yo no estoy afectado hermano</p>
<div>
    <p>No Afectado por el estilo<p>
    <a href="http://ejemplo.com">
        <p>Yo ya no estoy afectado</p>
    </a>
</div>
<p>Yo estoy afectado hermano</p>
<p>Yo no estoy afectado</p>
<a href="http://ejemplo.com">
    <p>Yo tampoco estoy afectado</p>
</a>
```


#### Selectores de hermanos generales (~)

El combinador ~ separa dos selectores y selecciona el segundo elemento sólo si está precedido por el primero y ambos comparten un padre común. Tienes que estar en el mismo nivel esto quiere decir que tengan el mismo padre

El siguiente ejemplo selecciona a todos los elementos `<p>` que estan ubicados despúes de un elemento `<div>`

``` css
div ~ p {
  background-color: green;
}
```

Esta regla afectaría a los elementos que aparecen marcados en amarillo.

``` html hl_lines="8 9"
<p>Yo no estoy afectado hermano</p>
<div>
    <p>No Afectado por el estilo<p>
    <a href="http://ejemplo.com">
        <p>Yo ya no estoy afectado</p>
    </a>
</div>
<p>Yo estoy afectado hermano</p>
<p>Yo también estoy afectado</p>
<a href="http://ejemplo.com">
    <p>Yo tampoco estoy afectado</p>
</a>
```

## Referencias

[^1]: https://developer.mozilla.org/es/docs/Web/CSS
[^2]: https://www.htmlquick.com/es/tutorials/css.html
