# CSS el modelo de caja

Todo en CSS tiene una caja alrededor, y comprender estas cajas es clave para poder crear diseños con CSS o para alinear elementos con otros elementos. [^1]

Como ya vimos en el apartado de *Elementos de bloque vs elementos de línea* del html existen dos tipos de elementos esto es debido a los tipos de caja que se aplican por defecto a los elementos. Hay dos tipos de cajas: **cajas en bloque** y **cajas en línea**. Estas características se refieren al modo como se comporta la caja en términos de flujo de página y en relación con otras cajas de la página.

El tipo de caja que se aplica a un elemento está definido por los valores de propiedad **display**, como por ejemplo *block* y *inline*

Las cajas en CSS tienen un tipo de visualización externa, que define si se trata de una caja en bloque o en línea. Sin embargo, las cajas también tienen un tipo de visualización interna, que determina cómo se disponen los elementos dentro de esa caja. Por defecto los elementos dentro de una caja se presentan en flujo normal, lo que significa que se comportan como otros elementos de tipo en bloque o en línea.

Sin embargo, podemos cambiar el tipo de visualización interna utilizando valores de display, como *flex* o *grid* (que veremos más adelante). Por ejemplo si en un elemento establecemos **display: flex;**, el tipo de visualización externa es de tipo bloque (*block*), pero el tipo de visualización interna cambia a flexible (*flex*). Cualquier elemento que sea hijo directo de esta caja pasará a comportarse como un elemento de tipo flex, de acuerdo con las reglas que se establecen en la especificación de Flexbox.

Ejemplo

``` css
* {
    border: 1px solid red;
}

p, 
ul {
  border: 2px solid rebeccapurple;
  padding: .5em;
}

.block,
li {
  border: 2px solid blue;
  padding: .5em;
}

ul {
  display: flex;
  list-style: none;
}

.block {
  display: block;
}  
```

``` html
<p>Soy un párrafo.</p>
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
<p>Otro párrafo. Algunas <span class="block">palabras</span> están contenidas en <span>elementos de tipo span</span> tanto en linea como en bloque.</p>
```

Hay un valor especial de **display: inline-block** que proporciona un punto medio entre *inline* y *block*. Esto es útil para situaciones en las que no deseas que un elemento fuerce un salto de línea, pero sí deseas que se respeten las propiedades width y height para evitar superposiciones. Esto puede ser útil cuando deseas dar a un enlace un área de impacto más grande añadiendo padding. `<a>` es un elemento en línea como `<span>`; puedes usar *display: inline-block* para configurar el área de relleno para facilitar al usuario hacer clic en el enlace.

## Partes de una caja

* **Contenido de la caja**: (o content box): El área donde se muestra el contenido, cuyo tamaño puede cambiarse utilizando propiedades como *width* y *height*.
* **Relleno de la caja**: (o padding box): El relleno es espacio en blanco alrededor del contenido; es posible controlar su tamaño usando la propiedad *padding* y otras propiedades relacionadas.
* **Borde de la caja**: o border box): El borde de la caja envuelve el contenido y el de relleno. Es posible controlar su tamaño y estilo utilizando la propiedad *border* y otras propiedades relacionadas.
* **Margen de la caja**: (o margin box): El margen es la capa más externa. Envuelve el contenido, el relleno y el borde como espacio en blanco entre la caja y otros elementos. Es posible controlar su tamaño usando la propiedad *margin* y otras propiedades relacionadas.

![Partes de una caja](img/box-model.png "Partes de una caja")

### El modelo de cajas estándar

En el modelo de cajas estándar, cuando estableces los atributos width y height para una caja, defines el ancho y el alto del contenido de la caja. Cualquier área de relleno y borde se añade a ese ancho y alto para obtener el tamaño total que ocupa la caja.

Ejemplo

``` css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

El espacio que ocupa nuestra caja usando el modelo de cajas estándar será en realidad de 410 px (350 + 25 + 25 + 5 + 5); y su altura, de 210 px (150 + 25 + 25 + 5 + 5), porque el área de relleno y el borde se añaden al ancho que se utiliza para el contenido de la caja.

![Modelo de cajas estándar](img/standard-box-model.png "Modelo de cajas estándar")

### El modelo de cajas alternativo

Podrías pensar que es más bien incómodo tener que sumar el borde y el área de relleno para obtener el tamaño real de la caja, ¡y tienes razón! Por este motivo, CSS introdujo un modelo de caja alternativo algún tiempo después del modelo de cajas estándar. Con este modelo, cualquier ancho es el ancho de la caja visible en la página, por lo tanto, el ancho del área de contenido es ese ancho menos el ancho para el relleno y el borde. El mismo CSS que hemos usado antes daría entonces el resultado siguiente (ancho = 350 px, altura = 150 px).

![Modelo de cajas alternativo](img/alternate-box-model.png "Modelo de cajas alternativo")

Por defecto, los navegadores usan el modelo de cajas estándar. Si deseas activar el modelo de cajas alternativo para un elemento, hazlo configurando **box-sizing: border-box**.

Ejemplo

``` css
.box {
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Si quieres que todos tus elementos usen el modelo de cajas alternativo (opción común entre los desarrolladores) debes establecer la propiedad box-sizing en el elemento `<html>`. Luego debes configurar todos los demás elementos para que hereden ese valor, como se ve en el fragmento de código siguiente.

Ejemplo

``` css
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```

## Márgenes, rellenos y bordes

### Margen

El margen es un espacio invisible que hay alrededor de la caja. Aleja el resto de elementos de la caja. Los márgenes pueden tener valores positivos o negativos. Establecer un margen negativo para un lado de tu caja puede hacer que se superponga con otros elementos de la página. Tanto si utilizas el modelo de cajas estándar como el alternativo, el margen siempre se añade después de haber calculado el tamaño de la caja que se ve.

Podemos controlar todos los márgenes de un elemento a la vez usando la propiedad **margin**, o cada lado individualmente usando las propiedades equivalentes sin abreviar: *margin-top*, *margin-right*, *margin-bottom* y *margin-left*.

Un punto clave a la hora de entender los márgenes es el concepto de colapso del margen. Si tienes dos elementos cuyos márgenes se tocan, esos márgenes se combinan para convertirse en un solo margen, cuyo tamaño es el del margen más grande.

### Bordes

El borde se dibuja entre el margen y el área de relleno de una caja. Si utilizas el modelo de cajas estándar, el tamaño del borde se añade a los elementos width y height que establecen el alto y el ancho de la caja. Si utilizas el modelo de cajas alternativo, el tamaño del borde reduce el tamaño de la caja de contenido, porque ocupa una parte del alto y el ancho disponibles.

Al igual que el margen puedes establecer el ancho, el estilo o el color de los cuatro bordes a la vez utilizando la propiedad **border** o cada lado de forma individual.

Para establecer el ancho, el estilo o el color de todos los lados, usa lo siguiente: *border-width*, *border-style* o *border-color*. Esta propiedades también se pueden aplicar de forma individual para cada lado. Ejemplos: *border-top-width*, *border-right-style* y *border-bottom-color*

Se puede establecer el ancho, el estilo y el color de forma abreviada al borde combinandolos en una sola propiedad:

Ejemplo

``` css
.container {
  border-top: 5px dotted green;
  border-right: 1px solid black;
  border-bottom: 20px double rgb(23,45,145);
}

.box {
  border: 1px solid #333333;
}
```

El redondeo de esquinas en una caja se logra mediante el uso de la propiedad **border-radius** y otras propiedades asociadas que se relacionan con cada esquina de la caja. Como valor pueden usarse dos longitudes o porcentajes: el primer valor define el radio horizontal y el segundo el radio vertical. En muchos casos, solo se pondrá un valor, que se utilizará para ambos.

``` css
.box { 
  border-radius: 10px; 
}
```

### Relleno

El relleno se encuentra entre el borde y el área de contenido. A diferencia de los márgenes, el relleno no puede tomar valores negativos, por lo que el valor debe ser 0 o positivo. Cualquier fondo aplicado a tu elemento se mostrará detrás del área de relleno y, generalmente, se usa para mantener el contenido alejado del borde.

Podemos controlar el área de relleno para todos los lados de un mismo elemento usando la propiedad **padding**, o para cada lado uno de los lados usando las propiedades equivalentes.

## Desbordamiento

Ya sabemos que todo en CSS está dentro de una caja, y que podemos restringir el tamaño de estas cajas asignándoles los valores *width* y *height*. El desbordamiento es lo que sucede cuando hay demasiado contenido en una caja, y no cabe cómodamente en ella.

El CSS trata de evitar «la pérdida de datos». Siempre que sea posible, el CSS no oculta su contenido; hacerlo provocaría la pérdida de datos, que generalmente es un problema. Así que, en vez de esto, el CSS tiende a desbordarse de un modo que sea visible.

La propiedad **overflow** es el modo como tomas el control del desbordamiento de un elemento y le dices al navegador cómo desea que se comporte. El valor predeterminado para la propiedad overflow es *visible*, por lo que, de forma predeterminada vamos a poder ver cuándo se desborda nuestro contenido.

Si deseas cortar el contenido (ocultar el desbordamiento) cuando se desborda, puedes establecer el valor **overflow: hidden** en tu caja. Si deseas que aparezcan barras de desplazamiento solo si hay más contenido del que cabe en la caja, utiliza **overflow: auto**.

## Fondos

https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Fondos_y_bordes

## Referencias

[^1]: https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/El_modelo_de_caja

[^1]: https://developer.mozilla.org/es/docs/Web/CSS


https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Contenido_desbordado
https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout
https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks

