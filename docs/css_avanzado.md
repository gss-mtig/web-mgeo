# CSS Avanzado

## Tipos de Selectores avanzados

Guia visual de selectores: [CSS Selectors: A Visual Guide](https://fffuel.co/css-selectors/)

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

``` html hl_lines="8"
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
