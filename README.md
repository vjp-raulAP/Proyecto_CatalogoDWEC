# Proyecto "Catálogo de Repuestos de coche"


# catalogo-repuestos

## ¿Qué hará la aplicación?

La aplicación será un catálogo de repuestos de coches que permitirá consultar información sobre diferentes piezas.
Cada repuesto estará asociado a una marca y modelo de coche y tendrá información sobre su categoría, precio y fecha.

## Campos

Cada repuesto contiene los siguientes campos:

- id: número
- nombre: texto
- categoria: texto
- marca: texto
- modelo: texto
- precio: número
- fecha: fecha

## ¿Cómo se ejecuta?

Para ejecutar la aplicación hay que abrir el archivo `index.html` en un navegador.
Después se deben abrir las herramientas de desarrollador con `F12` y entrar en la pestaña `Console` para consultar los repuestos mediante `console.table()`.

## Uso de IA

Se ha utilizado inteligencia artificial como ayuda para la elaboración de los datos insertados en el array
## Trabajo realizado en el Sprint 0

### Sesión 6: Preparación del proyecto

- Creación del archivo `index.html`

- Creación de la carpeta `js` y del archivo `app.js`

- Creación del array `repuestos` con 10 elementos

- Definición de los campos de cada repuesto

- Preparación del repositorio de GitHub y del archivo `README.md`

### Sesión 7: Recorridos, listados y filtros

#### 3.1. Recorrer los repuestos y clasificarlos

Se utiliza un bucle `for...of` y un operador ternario para indicar si cada repuesto es caro o barato. Se considera caro cuando su precio es igual o superior a 50 €.

```javascript
const PRECIO_CARO = 50;

for (const elemento of repuestos) {
const etiqueta = elemento.precio >= PRECIO_CARO ? "caro" : "barato";

console.log(
    \`\${elemento.id}. \${elemento.nombre} - \${elemento.precio} € (\${etiqueta})\`
);

}
```

#### 3.2. Filtrar por precio y categoría

Se utiliza un bucle `for` y una condición compuesta con `&&` para mostrar los repuestos que cuestan menos de 50 € y pertenecen a la categoría «Filtros».

```javascript
let encontrados = 0;

for (let i = 0; i < repuestos.length; i++) {
const elemento = repuestos[i];

if (elemento.precio < PRECIO_CARO && elemento.categoria == "Filtros") {
    console.log(\`\${elemento.nombre} - \${elemento.precio} €\`);
    encontrados++;
}

}

console.log(`${encontrados} de ${repuestos.length} cumplen la condición`);
```

#### 3.3. Función `listarTodos(lista)`

Recorre la lista y muestra cada repuesto indicando si es caro o barato.

```javascript
function listarTodos(lista) {
console.log("--- Funcion Listar los elementos con ternario ---");

for (const elemento of lista) {
    let etiqueta;

    if (elemento.precio >= PRECIO_CARO) {
        etiqueta = "caro";
    } else {
        etiqueta = "barato";
    }

    console.log(
        \`\${elemento.id}. \${elemento.nombre} - \${elemento.precio} € (\${etiqueta})\`
    );
}

}

listarTodos(repuestos);
```

#### 3.4. Función `filtrar(lista, limite)`

Recibe una lista y un límite de precio. Muestra los repuestos que cuestan menos que ese límite y devuelve el número de resultados.

```javascript
function filtrar(lista, limite) {
let encontrados = 0;

for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    if (elemento.precio < limite) {
        console.log(\`\${elemento.nombre} - \${elemento.precio} €\`);
        encontrados++;
    }
}

return encontrados;

}

const total1 = filtrar(repuestos, 50);
console.log(`Total encontrados: ${total1}`);

const total2 = filtrar(repuestos, 30);
console.log(`Total encontrados: ${total2}`);
```

#### 3.5. Función `contarPorCategoria(lista)`

Utiliza `switch` para contar cuántos repuestos hay en cada categoría.

```javascript
function contarPorCategoria(lista) {
let frenos = 0;
let filtros = 0;
let electricidad = 0;
let suspension = 0;
let motor = 0;
let carroceria = 0;
let iluminacion = 0;

for (const elemento of lista) {
    switch (elemento.categoria) {
        case "Frenos":
            frenos++;
            break;
        case "Filtros":
            filtros++;
            break;
        case "Electricidad":
            electricidad++;
            break;
        case "Suspensión":
            suspension++;
            break;
        case "Motor":
            motor++;
            break;
        case "Carrocería":
            carroceria++;
            break;
        case "Iluminación":
            iluminacion++;
            break;
        default:
            console.warn(\`Categoría inesperada: \${elemento.categoria}\`);
    }
}

console.log(\`Frenos: \${frenos}\`);
console.log(\`Filtros: \${filtros}\`);
console.log(\`Electricidad: \${electricidad}\`);
console.log(\`Suspensión: \${suspension}\`);
console.log(\`Motor: \${motor}\`);
console.log(\`Carrocería: \${carroceria}\`);
console.log(\`Iluminación: \${iluminacion}\`);

}

contarPorCategoria(repuestos);
```

### Sesión 8: Funciones básicas y estadísticas

#### 3.6. Función `listar(lista)`

Muestra el nombre, la categoría y el precio de cada repuesto.

```javascript
function listar(lista) {
console.log("--- Listado de repuestos ---");

for (const elemento of lista) {
    console.log(
        \`\${elemento.nombre} - \${elemento.categoria} - \${elemento.precio} €\`
    );
}

}

listar(repuestos);
```

#### 3.7. Función `buscarPorTexto(lista, texto)`

Busca repuestos cuyo nombre contiene el texto indicado, sin distinguir entre mayúsculas y minúsculas. Devuelve un array con los resultados.

```javascript
function buscarPorTexto(lista, texto) {
const buscado = texto.toLowerCase();
const resultado = [];

for (const repuesto of lista) {
    if (repuesto.nombre.toLowerCase().includes(buscado)) {
        resultado.push(repuesto);
    }
}

return resultado;

}

const encontradoTexto = buscarPorTexto(repuestos, "filtro");

console.log("--- Resultado de la búsqueda ---");
console.table(encontradoTexto);
```

#### 3.8. Función `anadir(lista, elemento)`

Busca el ID más alto, asigna el siguiente al nuevo repuesto, lo añade al array y devuelve el ID asignado.

```javascript
function anadir(lista, elemento) {
let idMayor = 0;

for (const repuesto of lista) {
    if (repuesto.id > idMayor) {
        idMayor = repuesto.id;
    }
}

elemento.id = idMayor + 1;
lista.push(elemento);

return elemento.id;

}
```

#### 3.9. Función `eliminarPorId(lista, id)`

Busca un repuesto por su ID. Si lo encuentra, lo elimina con `splice()` y devuelve `true`. Si no existe, devuelve `false`.

```javascript
function eliminarPorId(lista, id) {
for (let i = 0; i < lista.length; i++) {
if (lista[i].id === id) {
lista.splice(i, 1);
return true;
}
}

return false;

}
```

#### 3.10. Función `estadisticas(lista)`

Calcula el precio total, el precio medio con un decimal y el repuesto más caro. Si la lista está vacía, muestra un aviso.

```javascript
function estadisticas(lista) {
if (lista.length === 0) {
console.warn("No hay repuestos para calcular las estadísticas.");
return;
}

let suma = 0;
let maximo = lista[0];

for (const repuesto of lista) {
    suma = suma + repuesto.precio;

    if (repuesto.precio > maximo.precio) {
        maximo = repuesto;
    }
}

const media = suma / lista.length;

console.log(\`Precio total: \${suma.toFixed(2)} €\`);
console.log(\`Precio medio: \${media.toFixed(1)} €\`);
console.log(\`Repuesto más caro: \${maximo.nombre} (\${maximo.precio} €)\`);

}

estadisticas(repuestos);
```
## ¿Cómo se ejecuta?

Descargar o clonar el repositorio de GitHub.

Abrir la carpeta del proyecto en Visual Studio Code.

Abrir el archivo `index.html` en un navegador, utilizando Live Server si está instalado.

Pulsar `F12` para abrir las herramientas de desarrollador.

Entrar en la pestaña `Console` para consultar los resultados.

La aplicación muestra los resultados de las funciones en la consola del navegador.

## Uso de IA

Se ha utilizado ChatGPT como herramienta de apoyo para comprender conceptos de JavaScript, resolver dudas, revisar errores y obtener explicaciones sobre el funcionamiento de las funciones.

## Herramientas utilizadas

- HTML: estructura de la página.

- JavaScript: gestión de los datos y desarrollo de las funciones.

- Visual Studio Code: edición del código.

- Git y GitHub: control de versiones y almacenamiento del proyecto.

- Consola del navegador: ejecución y comprobación de los resultados.
