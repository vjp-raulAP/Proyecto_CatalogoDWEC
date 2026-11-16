import { repuestos } from "./datos.js";
import { buscarRepuestos, ordenarRepuestos, anadir, estadisticas, fechaLegible, diasDesde, DIAS_RECIENTE } from "./logica.js";

 // SPRINT 1. PINTAR COLECCION
const listado = document.querySelector("#listado");
 // Función para crear una tarjeta de una categoría.
function crearTarjetaRepuesto(categoria, listaRepuestos) {

    // Creamos la tarjeta.
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta");

    // Creamos el título con el nombre de la categoría.
    const titulo = document.createElement("h3");
    titulo.textContent = categoria;

    tarjeta.append(titulo);

    // Recorremos los repuestos de esa categoría.
    for (const repuesto of listaRepuestos) {

        // Creamos un separador.
        const separador = document.createElement("hr");

        const datos = document.createElement("p");
        datos.textContent =
            `${repuesto.nombre} · ${repuesto.marca} · ${repuesto.precio} €`;

        // Creamos el párrafo de la fecha.
        const fecha = document.createElement("p");
        fecha.classList.add("fecha");
        fecha.textContent = fechaLegible(repuesto.fecha);

        // Comprobamos si el repuesto es reciente.
        if (diasDesde(repuesto.fecha) <= DIAS_RECIENTE) {
            tarjeta.classList.add("reciente");
        }

        // Añadimos los elementos a la tarjeta.
        tarjeta.append(separador, datos, fecha);
    }

    return tarjeta;
}


// Función para mostrar los repuestos agrupados por categoría.
function mostrarRepuestos(lista) {

    // Vaciamos el contenedor de tarjetas.
    listado.replaceChildren();

    // Creamos un objeto para guardar las categorías.
    const categorias = {};

    // Agrupamos los repuestos por categoría.
    for (const repuesto of lista) {

        // Si la categoría no existe, creamos una lista vacía.
        if (!categorias[repuesto.categoria]) {
            categorias[repuesto.categoria] = [];
        }

        // Añadimos el repuesto a su categoría.
        categorias[repuesto.categoria].push(repuesto);
    }

    // Recorremos las categorías.
    for (const categoria in categorias) {

        // Creamos una tarjeta con todos los repuestos de esa categoría.
        const tarjeta = crearTarjetaRepuesto(categoria,categorias[categoria]);

        // Añadimos la tarjeta al HTML.
        listado.append(tarjeta);
    }

    // Mostramos el número total de repuestos.
    document.querySelector("#resumen").textContent =
        "Total de repuestos: " + lista.length;

    // Mostramos las estadísticas.
    document.querySelector("#estadisticas").textContent =
        "Categorías: " + Object.keys(categorias).length;
}

// RETO 2. BUSCADOR Y ORDENACIÓN

let textoBuscado = "";
let criterioOrdenacion = "ninguno";

// Función para actualizar el listado.
function actualizarListado() {
    let listaFiltrada = buscarRepuestos(repuestos, textoBuscado);

    listaFiltrada = ordenarRepuestos(listaFiltrada, criterioOrdenacion);

    mostrarRepuestos(listaFiltrada);

      // Mostramos el resumen después de pintar.
    pintarResumen(listaFiltrada.length);

    // Mostramos las estadísticas de los repuestos que aparecen.
    pintarEstadisticas(listaFiltrada);
}

// Añade a la zona de estadísticas el total, la media y el más caro.
function pintarEstadisticas(lista) {
    const datos = estadisticas(lista);

    // Si la lista está vacía, estadisticas no devuelve nada.
    if (!datos) {
        return;
    }

    document.querySelector("#estadisticas").textContent +=
        ` · Total: ${datos.suma.toFixed(2)} €` +
        ` · Media: ${datos.media.toFixed(1)} €` +
        ` · Más caro: ${datos.maximo.nombre} (${datos.maximo.precio} €)`;
}
// Buscamos los controles del HTML.
const buscadorReto2 = document.querySelector("#buscador");
const botonNombreReto2 = document.querySelector("#ordenNombre");
const botonPrecioReto2 = document.querySelector("#ordenPrecio");
const botonFecha = document.querySelector("#ordenFecha");

// Buscamos mientras escribimos.
buscadorReto2.addEventListener("input", function () {
    textoBuscado = buscadorReto2.value;
    actualizarListado();
});

// Función para elegir el orden.
function elegirOrden(nuevo) {
    criterioOrdenacion = nuevo;
    guardarCookie("orden", criterioOrdenacion, 30);
    actualizarListado();
}

// Ordenamos por nombre.
botonNombreReto2.addEventListener("click", () => elegirOrden("nombre"));

// Ordenamos por precio.
botonPrecioReto2.addEventListener("click", () => elegirOrden("precio"));

botonFecha.addEventListener("click", () => elegirOrden("fecha"));

// Muestra un resumen de los repuestos que aparecen.
function pintarResumen(mostrados) {
    const resumen = document.querySelector("#resumen");

    if (mostrados > 0) {
        resumen.textContent = `Mostrando ${mostrados} de ${repuestos.length} repuestos`;
    } else {
        resumen.textContent = "No hay repuestos que coincidan con la búsqueda";
    }
}

// Función para guardar una cookie.
function guardarCookie(nombre, valor, dias) {
    const segundos = dias * 24 * 60 * 60;
    const texto = encodeURIComponent(valor);
    document.cookie = `${nombre}=${texto}; max-age=${segundos}; path=/`;
}

// Función para leer una cookie.
function leerCookie(nombre) {
    const partes = document.cookie.split("; ");

    for (const parte of partes) {
        const [clave, valor] = parte.split("=");

        if (clave === nombre) {
            return decodeURIComponent(valor);
        }
    }

    return null;
}

// A3. Recuperamos el último orden guardado.
criterioOrdenacion = leerCookie("orden") || "ninguno";

// Actualizamos el listado.

actualizarListado();

// VALIDACIÓN Y FORMULARIO PARA AÑADIR REPUESTOS

// Expresión regular para validar el nombre.
const patronNombre = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9 ]{3,50}$/;

// Recuperamos los elementos del formulario.
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nuevoNombre");
const categoria = document.querySelector("#nuevaCategoria");
const marca = document.querySelector("#nuevaMarca");
const modelo = document.querySelector("#nuevoModelo");
const precio = document.querySelector("#nuevoPrecio");
const fecha = document.querySelector("#nuevaFecha");

const resultadoNombre = document.querySelector("#errorNombre");

// Función para validar el nombre.
function validar(campo, patron, resultado) {

    if (patron.test(campo.value.trim())) {
        resultado.textContent = "Válido";
        resultado.style.color = "green";
        return true;
    } else {
        resultado.textContent = "No válido";
        resultado.style.color = "red";
        return false;
    }
}

// Validamos mientras escribimos.
nombre.addEventListener("input", function() {
    validar(nombre, patronNombre, resultadoNombre);
});

// Comprobamos el formulario antes de añadir.
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!validar(nombre, patronNombre, resultadoNombre)) {
        return;
    }

    // Creamos el nuevo repuesto.
    const nuevoRepuesto = {
        nombre: nombre.value.trim(),
        categoria: categoria.value,
        marca: marca.value,
        modelo: modelo.value,
        precio: Number(precio.value),
        fecha: fecha.value
    };

    // Añadimos el repuesto al catálogo.
    anadir(repuestos, nuevoRepuesto);

    // Actualizamos el listado.
    actualizarListado();

    // Limpiamos el formulario.
    formulario.reset();

    // Mostramos un mensaje de confirmación.
    alert("¡Repuesto añadido correctamente!");
});