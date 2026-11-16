# Proyecto: Catálogo de Repuestos de Coche

**Repositorio:** `catalogo-repuestos`

## ¿Qué hará la aplicación?

Aplicación para consultar y gestionar un catálogo de repuestos de coches, con información sobre sus características y precios.

## Campos de cada repuesto

- `id`: número identificador.
- `nombre`: nombre del repuesto.
- `categoria`: categoría.
- `marca`: marca del repuesto.
- `modelo`: modelo de coche.
- `precio`: precio en euros.
- `fecha`: fecha.

# Trabajo realizado en el Sprint 0

### Sesión 6: Preparación del proyecto

- Creación de `index.html` y `js/app.js`.
- Creación del array `repuestos` con 10 elementos.
- Definición de los campos de cada repuesto.
- Preparación del repositorio de GitHub y del README.

### Sesión 7: Recorridos, listados y filtros

- Recorrido de los repuestos mediante bucles.
- Clasificación por precio en caros y baratos.
- Filtrado por precio y categoría.
- Conteo de repuestos por categoría mediante `switch`.

### Sesión 8: Funciones básicas y estadísticas

- Búsqueda de repuestos por texto.
- Añadir y eliminar repuestos mediante su ID.
- Cálculo del precio total, precio medio y repuesto más caro.
- Listado de repuestos con sus datos principales.

# Trabajo realizado en el Sprint 1

### Sesión 10: La colección en la página

- Creación de la estructura HTML de la aplicación.
- Creación de la carpeta `css` y la hoja de estilos `estilos.css`.
- Creación de tarjetas dinámicamente mediante JavaScript.
- Uso de `createElement()`, `textContent` y `append()`.
- Actualización del contenido mediante `replaceChildren()`.
- Visualización de la colección de repuestos en la página.
- Incorporación del resumen con el número de repuestos y las categorías.

### Sesión 11: Buscador y ordenación

- Incorporación de un buscador para localizar repuestos por nombre.
- Filtrado dinámico mientras se escribe mediante el evento `input`.
- Ordenación alfabética por nombre.
- Ordenación por precio.
- Creación de una función para actualizar el listado.
- Incorporación de un resumen que indica cuántos repuestos se muestran respecto al total.

### Sesión 12: Cookies, fechas y expresiones regulares

- Creación de funciones para guardar y leer cookies.
- Almacenamiento del último criterio de ordenación seleccionado.
- Recuperación del orden guardado al recargar la página.
- Incorporación y tratamiento de fechas en formato `AAAA-MM-DD`.
- Conversión de fechas a un formato legible.
- Cálculo de los días transcurridos desde una fecha.
- Destacado visual de los repuestos recientes (últimos 30 días).
- Incorporación de la ordenación por fecha, mostrando primero los más recientes.
- Práctica de expresiones regulares para validar datos.

### Sesión 13: Validación y entrega del Sprint 1

- Incorporación de un formulario para añadir nuevos repuestos.
- Validación del nombre mediante una expresión regular.
- Comprobación de que el nombre tenga entre 3 y 40 letras o espacios.
- Uso de `event.preventDefault()` para evitar la recarga de la página.
- Muestra de un aviso cuando el nombre no cumple el patrón.
- Incorporación del nuevo repuesto mediante la función `anadir()`.
- Actualización automática del listado después de añadir un repuesto.
- Preparación y revisión final del proyecto para la entrega y defensa del Sprint 1.

## ¿Cómo se ejecuta?

1. Descargar o clonar el repositorio de GitHub.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir `index.html` en el navegador, preferiblemente con Live Server.
4. Pulsar `F12` y acceder a la pestaña **Console** para consultar posibles errores.

## Uso de IA

Se ha utilizado ChatGPT como herramienta de apoyo para comprender conceptos de JavaScript, resolver dudas, revisar errores y mejorar el código del proyecto.

## Herramientas utilizadas

- **HTML:** estructura de la página.
- **CSS:** diseño y presentación de la aplicación.
- **JavaScript:** gestión de los datos, funciones e interactividad.
- **Visual Studio Code:** edición del código.
- **Git y GitHub:** control de versiones y almacenamiento del proyecto.
- **Live Server:** ejecución de la aplicación en un servidor local.
- **Consola del navegador:** comprobación y depuración del código.