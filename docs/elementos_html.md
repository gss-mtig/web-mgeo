# Elementos HTML

## head

El elemento HTML **`<head>`** provee información general (metadatos) acerca del documento, incluyendo su título y enlaces a scripts y hojas de estilos. [^1]

Es la **cabecera** y actua como contenedor para todos los parámetros que quieras incluir en el documento HTML que no serán visibles a los visitantes de la página. Incluye cosas como palabras clave y la descripción de la página que quieras mostrar en los resultados de búsqueda, así como la hoja de estilo para formatear nuestro contenido, declaraciones de codificación de caracteres y más.

Algunos elementos que deberían estar presentes en la cabecera 

### title

El elemento **`<title>`** se usa para poner el título a la página. Es lo que aparece en la barra del navegador

### metadatos

Los metadatos son los datos que describen la página. HTML tiene una forma "oficial" para introducir metadatos y para ello se usa el elemento **`<meta>`**. Hay muchos tipos diferentes de `<meta>` que se pueden incluir en el `<head>` de una página.

A continuación veremos algunos de los `<meta>` más usados

#### Codificación de caracteres

Especifica especifica la codificación de caracteres del documento, esto quiere decir el conjuto de carácteres que se pueden usar en la página. Esto es muy útil e importante para representar correctamente caracteres especiales como los acentos u caracteres de otros idioma. Por ejemplo japonés 

Ejemplo

``` html
<meta charset="utf-8">
```

#### Autor

Especificar un autor resulta ventajoso por diversos motivos: es útil saber quién escribió la página para poder ponerte en contacto con el autor si tienes preguntas sobre el contenido. Algunos sistemas de gestión de contenido tienen herramientas para extraer automáticamente la información del autor de la página y ponerla a disposición para tales fines. [^2]

Ejemplo

``` html
<meta name="author" content="Pepe Perez">
```

#### Descripción

Especificar una descripción que incluya palabras clave relacionadas con el contenido de tu página resulta útil porque tiene el potencial de hacer que la página aparezca más arriba en las búsquedas relevantes que efectúan los motores de búsqueda. Mejora el SEO

Ejemplo

``` html
<meta name="description" content="El área de aprendizaje de MDN pretende
proporcionar a los recién llegados a la web todo lo que deben
saber para empezar a desarrollar páginas web y aplicaciones web.">
```

#### Viewport

El viewport del navegador es el área de la ventana en donde el contenido web está visible. Generalmente no es del mismo tamaño que la página renderizada, en donde se brindan barras de desplazamiento para que el usuario pueda acceder a todo el contenido.

Dispositivos con pantallas angostas (p.e. móviles) muestran la página en una ventana virtual o viewport, que es usualmente más ancho que la pantalla y la comprimen de manera que pueda verse completa. El usuario podrá recorrerla y hacer zoom para ver diferentes áreas de la página. Por ejemplo, si una pantalla móvil tiene un ancho 640px, las páginas pueden ser procesadas con un viewport de 980px, y después comprimidas para que entren en 640px.

Esto se hace porque muchas páginas no están optimizadas para dispositivos móviles y se quiebran (o, al menos, se ven mal) cuando son procesadas a un ancho de viewport pequeño. El viewport virtual es una forma de resolver el problema de sitios no optimizados para móviles, logrando que se vean mejor. [^3]

El uso del viewport fácilita el diseño *responsive* de las páginas. 

La propiedad **width** controla el tamaño del viewport. Puede definirse con un número en pixeles como *width=600* o con un valor especial **device-width** que es el equivalente al ancho de la pantalla en píxeles CSS en una escala de 100%. 

La propiedad **initial-scale** controla el nivel de zoom cuando la página se carga por primera vez.

Ejemplo

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### Redes sociales

[Open Graph Data](https://ogp.me/) es un protocolo de metadatos que Facebook inventó para proveer metadatos más ricos para los sitios web. Un efecto de esto es que cuando desde Facebook enlazas a una paágina, el enlace aparece con una imagen y una descripción, lo que resulta en una experiencia más enriquecedora para los usuarios.

Ejemplo

``` html
<meta property="og:image" content="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png">
<meta property="og:description" content="The Mozilla Developer Network (MDN) proporciona información
sobre tecnologías Open Web, incluidas HTML, CSS y APIs para ambos sitios web
y aplicaciones HTML5. También documenta productos Mozilla, como el sistema operativo Firefox.">
<meta property="og:title" content="Mozilla Developer Network">
```

Twitter también tiene sus metadatos propios, las [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards), que tienen un efecto similar cuando la URL del sitio se muestra en twitter.com.

Ejemplo

``` html
<meta name="twitter:title" content="Mozilla Developer Network">
```

### favicon

Para enriquecer un poco más el diseño de tu sitio puedes añadir en tus metadatos referencias a iconos personalizados, que se mostrarán en determinados contextos. El más común de ellos es el **favicon** (abreviatura de *favorite icon* —icono favorito, referido al uso que se le da en las listas de favoritos o de marcadores (bookmarks).

El humilde favicon ha existido durante muchos años. Es el primer icono de este tipo: un icono cuadrado de 16 píxeles que se utiliza en varios lugares. Es posible que veas (según el navegador) favicons que se muestran en la pestaña del navegador que contiene cada página abierta y junto a las páginas marcadas en el panel de marcadores.

Ejemplo

``` html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
```

### Carga de CSS y JavaScript

Prácticamente todos los sitios web usan CSS para darles un buen aspecto y JavaScript para añadir funcionalidades interactivas, como reproductores de vídeo, mapas, juegos y demás. La manera más habitual de añadir CSS y JavaScript a una página web es con los elementos `<link>` y el elemento `<script>`, respectivamente.

El elemento `<link>` siempre debe ir dentro del `<header>` de tu documento. Este toma dos atributos, rel="stylesheet", que indica que es la hoja de estilo del documento, y href, que contiene la ruta al archivo de la hoja de estilo.

Ejemplo

``` html
<link rel="stylesheet" href="my-css-file.css">
```

El elemento `<script>` también debería ir en el head, y debería incluir un atributo *src* con la ruta al JavaScript que quieres cargar, y *defer*, que básicamente le dice al navegador que cargue el JavaScript al mismo tiempo que el HTML de la página. Esto es útil porque hace que todo el HTML se cargue antes de ejecutar el JavaScript, para que no haya errores porque el JavaScript ha intentado acceder a un elemento HTML que todavía no existe. De hecho hay múltiples formas de gestionar la carga del JavaScript en una página por ejemplo poner el elemento `<script>` al final del body.

Ejemplo

``` html
<script src="my-js-file.js" defer></script>
```

## Referencias

[^1]: https://developer.mozilla.org/es/docs/Web/HTML/Elemento/head
[^2]: https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML/Metados_en
[^3]: https://developer.mozilla.org/es/docs/M%C3%B3vil/Viewport_meta_tag

