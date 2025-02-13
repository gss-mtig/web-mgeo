# Almacenamiento en el Navegador

El almacenamiento en el navegador permite guardar datos localmente sin necesidad de usar un servidor. 

Existen tres opciones principales:

|    Tipo de Almacenamiento   |   Características   |
|:-----------:|:---------------:|
| Local Storage | Guarda datos de **forma permanente** (hasta que se eliminen manualmente o con código). |
| Session Storage | Guarda datos **solo mientras la pestaña esté abierta**. |
| Cookies | Pequeños archivos que pueden persistir y enviarse a un servidor. |

## Uso de Local Storage

Local Storage es útil para guardar información como preferencias del usuario o configuración de una app.

``` js
// Guardar un dato
localStorage.setItem("usuario", "Juan Pérez");

// Obtener el dato guardado
let usuario = localStorage.getItem("usuario");
console.log(usuario); // "Juan Pérez"

// Eliminar un dato
localStorage.removeItem("usuario");

// Limpiar todo el almacenamiento
localStorage.clear();
```

Usamos `JSON.stringify()` para guardar objetos en Local Storage:

``` js
let usuario = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};

localStorage.setItem("datosUsuario", JSON.stringify(usuario));
```

Ejemplo Práctico: Guardar el Nombre del Usuario

``` html
<input type="text" id="nombre" placeholder="Escribe tu nombre">
<button onclick="guardarNombre()">Guardar</button>
<p id="mensaje"></p>

<script>
function guardarNombre() {
    let nombre = document.getElementById("nombre").value;
    localStorage.setItem("nombreUsuario", nombre);
    document.getElementById("mensaje").textContent = "¡Nombre guardado!";
}

// Recuperar el nombre al cargar la página
window.addEventListener("load", function() {
    let nombreGuardado = localStorage.getItem("nombreUsuario");
    if (nombreGuardado) {
        document.getElementById("mensaje").textContent = "Bienvenido de nuevo, " + nombreGuardado;
    }
});
</script>
```

## Uso de Session Storage

Session Storage funciona igual que Local Storage, pero los datos se eliminan al cerrar la pestaña.

``` js
// Guardar en sessionStorage
sessionStorage.setItem("tema", "oscuro");

// Obtener el dato
let tema = sessionStorage.getItem("tema");
console.log(tema); // "oscuro"

// Eliminar el dato
sessionStorage.removeItem("tema");

// Limpiar toda la sesión
sessionStorage.clear();
```

## Uso de Cookies en JavaScript

Las cookies son pequeños archivos que se pueden enviar al servidor.

``` js
// Crear una cookie con duración de 7 días
document.cookie = "usuario=Juan; expires=" + new Date(2025, 0, 1).toUTCString();

// Leer cookies
console.log(document.cookie);
```

#### Ejercicios Prácticos

!!! example "Contador de Visitas con Local Storage"

    1. Contar cuántas veces el usuario ha visitado la página. Mostrar el contador en la pagina

!!! example "Modo Oscuro con Local Storage"

    1. Guardar la preferencia del usuario sobre el tema oscuro.
    2. Crear un boton para cambiar de modo (claro/oscuro)
    3. Cambiar el color de fondo y de la letra al cambiar de modo.

!!! example "Guardar y Cargar una Lista de Tareas"

    1. Guardar una lista de tareas en localStorage y recuperarlas al recargar la página.
    2. Crear un boton para agregar tareas a la lista

