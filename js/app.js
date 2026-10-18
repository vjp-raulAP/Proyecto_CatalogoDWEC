const NOMBRE_APP = "Catálogo de repuestos de coches";

const repuestos = [
    {
        id: 1, nombre: "Pastillas de freno", categoria: "Frenos", marca: "Bosch", modelo: "Volkswagen Golf", precio: 45.99, fecha: "2026-10-05"},
    {   id: 2, nombre: "Filtro de aceite", categoria: "Filtros", marca: "Mann-Filter", modelo: "Seat León", precio: 12.50, fecha: "2026-10-05"},
    {   id: 3, nombre: "Batería 70Ah", categoria: "Electricidad", marca: "Varta", modelo: "Ford Focus", precio: 89.99, fecha: "2026-10-06"},
    {   id: 4, nombre: "Amortiguador delantero", categoria: "Suspensión", marca: "Monroe", modelo: "Renault Megane", precio: 76.90, fecha: "2026-10-06"},
    {   id: 5, nombre: "Filtro de aire", categoria: "Filtros", marca: "Mahle", modelo: "BMW Serie 3", precio: 18.75, fecha: "2026-10-07"},
    {   id: 6, nombre: "Disco de freno", categoria: "Frenos", marca: "Brembo", modelo: "Audi A4", precio: 64.99, fecha: "2026-10-07"},
    {   id: 7, nombre: "Bujías", categoria: "Motor", marca: "NGK", modelo: "Opel Astra", precio: 28.40, fecha: "2026-10-08"},
    {   id: 8, nombre: "Correa de distribución", categoria: "Motor", marca: "Gates", modelo: "Peugeot 308", precio: 95.50, fecha: "2026-10-08"},
    {   id: 9, nombre: "Escobillas limpiaparabrisas", categoria: "Carrocería", marca: "Valeo", modelo: "Toyota Corolla", precio: 22.99, fecha: "2026-10-09"},
    {   id: 10, nombre: "Bombilla LED H7", categoria: "Iluminación", marca: "Philips", modelo: "Mercedes Clase A", precio: 34.90, fecha: "2026-10-10"
    }
];


console.log(`${NOMBRE_APP}: ${repuestos.length} elementos cargados`);
console.table(repuestos);

//Parte D. Reto 3 : tus primeros pasos
//listado 1. Recorrer el array de elementos  con for ..of.

/* Guardamos el precio límite para considerar un repuesto caro.
   Si el precio es igual o superior a 50 €, será caro. */
const PRECIO_CARO = 50;

console.log("--- Todos los repuestos  ¿Cual es caro y cual Barato---"); 

for (const elemento of repuestos) {   //recorremos todos los elementos

    // Utilizamos un operador ternario para calcular la etiqueta.
    // Si el precio es >= 50 €, la etiqueta será "caro".
    // Si no, la etiqueta será "barato".
    const etiqueta = elemento.precio >= PRECIO_CARO ? "caro" : "barato"; 

    console.log(`${elemento.id}. ${elemento.nombre} - ${elemento.precio} € (${etiqueta})`);
}

//Listado 2 . Los que cumplen esa condición (filtrar por los que cumplen la condicion con for clasico)

//utilizo un for clasico y un condicionante if 

console.log("--- Repuestos que cumplen la condición ---");
let encontrados = 0;
// Recorremos el array utilizando un for clásico.
for (let i = 0; i < repuestos.length; i++) {

    // Guardamos el repuesto de la posición actual.
    const elemento = repuestos[i];

    // Comprobamos si cuesta menos de 50 € y pertenence a fltros.
    if (elemento.precio < PRECIO_CARO  && elemento.categoria == "Filtros") {

        // Mostramos el nombre y el precio del repuesto.
        console.log(`${elemento.nombre} - ${elemento.precio} €`);

        // Aumentamos el contador de repuestos encontrados.
        encontrados++;
    }

}

    // Mostramos cuántos repuestos cumplen la condición del total.
console.log(`${encontrados} de ${repuestos.length} cumplen la condición`);


/* PARTE B. RETO 2: LISTADOS COMO FUNCIONES */

//Función 1 listar todos:
// Esta función recibe el array de repuestos como parámetro.
function listarTodos(lista) {

    console.log("--- Funcion Listar los elementos con ternario ---");

    // Recorremos todos los repuestos.
    for (const elemento of lista) {

        // Creo una variable para guardar la etiqueta.
        let etiqueta;

        // Compruebo si el repuesto es caro o barato.
        if (elemento.precio >= PRECIO_CARO) {
            etiqueta = "caro";
        } else {
            etiqueta = "barato";
        }

        // Muestro el repuesto y su etiqueta.
        console.log(`${elemento.id}. ${elemento.nombre} - ${elemento.precio} € (${etiqueta})`);
    }
}

//llamada a la funcion y le paso por parametro el array
listarTodos(repuestos);

//Funcion 2 filtrar (con lista y límite)

// Recibe la colección y el límite de precio.
function filtrar(lista, limite) {

    // Creamos un contador que empieza en cero.
    let encontrados = 0;

    console.log(`--- Repuestos con precio inferior a ${limite} € ---`);

    // Recorremos la colección con un for clásico.
    for (let i = 0; i < lista.length; i++) {

        // Guardamos el repuesto actual.
        const elemento = lista[i];

        // Comprobamos si el precio es inferior al límite.
        if (elemento.precio < limite) {

            // Mostramos el repuesto que cumple la condición.
            console.log(`${elemento.nombre} - ${elemento.precio} €`);

            // Sumamos uno al contador.
            encontrados++;
        }
    }

    // Devolvemos la cantidad de repuestos encontrados.
    return encontrados;
}

// Probamos la función con dos límites diferentes.
const total1 = filtrar(repuestos, 50);
console.log(`Total encontrados: ${total1}`);

const total2 = filtrar(repuestos, 30);
console.log(`Total encontrados: ${total2}`);


//FUNCIÓN 3. Contar repuestos por categoría.

function contarPorCategoria(lista) {

    // Creamos un contador para cada categoría.
    let frenos = 0;
    let filtros = 0;
    let electricidad = 0;
    let suspension = 0;
    let motor = 0;
    let carroceria = 0;
    let iluminacion = 0;

    // Recorremos todos los repuestos de la lista.
    for (const elemento of lista) {

        // Comprobamos la categoría de cada repuesto.
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
                console.warn(`Categoría inesperada: ${elemento.categoria}`);
        }
    }

    // Mostramos el resultado de los contadores.
    console.log("--- Funcion 3 contar por categoria---");
    console.log("--- Repuestos por categoría ---");
    console.log(`Frenos: ${frenos}`);
    console.log(`Filtros: ${filtros}`);
    console.log(`Electricidad: ${electricidad}`);
    console.log(`Suspensión: ${suspension}`);
    console.log(`Motor: ${motor}`);
    console.log(`Carrocería: ${carroceria}`);
    console.log(`Iluminación: ${iluminacion}`);
}

// Llamamos a la función pasando nuestro array.
contarPorCategoria(repuestos);

//RETOS SESION 8
//Reto2: las funciones del proyecto 

//FUNCION 1. Listar(lista)--> mostrar 1 linea x elemento con datos principales.

function listar(lista) {

    console.log("--- Listado de repuestos ---");

    for (const elemento of lista) {
        console.log(`${elemento.nombre} - ${elemento.categoria} - ${elemento.precio} €`);
    }
}

// Llamamos a la función.
listar(repuestos);

//FUNCION 2. Buscar respuestas por texto.
function buscarPorTexto(lista,texto){
    //convertimos el texto buscado en minusculas

    const buscado = texto.toLowerCase()

    //creamos un array vacio donde guardamos los resultados

    const resultado = [];

    //recorremos los elementos
    for(const repuesto of lista){
        if(repuesto.nombre.toLowerCase().includes(buscado)){
            resultado.push(repuesto)  //introducimos ne el array el repuesto encntrado
        }
    } 
    return resultado;
}

//llamamoa a la función buscando "filtro"

const encontradoTexto = buscarPorTexto(repuestos,"filtro");
console.log("---Resultado de la busqueda----");
console.table(encontradoTexto);

//FUNCION 3. añadir(lista,elemento)--> Calcular mayor id 



function anadir(lista, elemento) {

    // Buscamos el ID más alto.
    let idMayor = 0;

    for (const repuesto of lista) {
        if (repuesto.id > idMayor) {
            idMayor = repuesto.id;
        }
    }

    // Asignamos el siguiente ID al nuevo repuesto.
    elemento.id = idMayor + 1;
    console.log("ID asignado al nuevo repuesto:", elemento.id);
    // Añadimos el repuesto a la lista.
    lista.push(elemento);

    // Devolvemos el ID asignado.
    return elemento.id;
}

const nuevoId = anadir(repuestos, {
   
    nombre: "Espejo retrovisor",
    categoria: "Carrocería",
    marca: "Valeo",
    modelo: "Seat Ibiza",
    precio: 39.99,
    fecha: "2026-10-17"
});
console.log("---Nuevo id añadido----");

// Mostramos únicamente el último repuesto.
console.log("Último repuesto añadido:");
console.log(repuestos[repuestos.length - 1]);
console.log("ID del nuevo repuesto:", nuevoId);
console.table(repuestos);

// FUNCIÓN 4. Eliminar un repuesto por su ID.
function eliminarPorId(lista, id) {

    // Recorremos la lista con un for clásico.
    for (let i = 0; i < lista.length; i++) {

        // Comprobamos si el ID coincide.
        if (lista[i].id === id) {

            // Eliminamos el repuesto encontrado.
            lista.splice(i, 1);

            // Devolvemos true porque se ha eliminado.
            return true;
        }
    }

    // Si no encontramos el ID, devolvemos false.
    return false;
}

// Eliminamos el repuesto con ID 3.
console.log(eliminarPorId(repuestos, 3));  // true

// Intentamos eliminar un ID que no existe.
console.log(eliminarPorId(repuestos, 55)); // false

// Mostramos la lista actualizada.
console.table(repuestos);


//PARTE C 
//Reto3. Estadísticas de lso repuestos

function estadisticas(lista) {

    // Comprobamos si la lista está vacía.
    if (lista.length === 0) {
        console.warn("No hay repuestos para calcular las estadísticas.");
        return;
    }

    // Inicializamos la suma y el repuesto más caro.
    let suma = 0;
    let maximo = lista[0];

    // Recorremos todos los repuestos.
    for (const repuesto of lista) {

        // Sumamos el precio del repuesto.
        suma = suma + repuesto.precio;

        // Comprobamos si es más caro que el máximo actual.
        if (repuesto.precio > maximo.precio) {
            maximo = repuesto;
        }
    }

    // Calculamos el precio medio.
    const media = suma / lista.length;

    // Mostramos los resultados.
    console.log("--- Estadísticas de los repuestos ---");
    console.log(`Precio total: ${suma.toFixed(2)} €`);
    console.log(`Precio medio: ${media.toFixed(1)} €`);
    console.log(`Repuesto más caro: ${maximo.nombre} (${maximo.precio} €)`);
}

// Probamos la función con el catálogo.
estadisticas(repuestos);

function estadisticas(lista) {

    // Comprobamos si la lista está vacía.
    if (lista.length === 0) {
        console.warn("No hay repuestos para calcular las estadísticas.");
        return;
    }

    // Inicializamos la suma y el repuesto más caro.
    let suma = 0;
    let maximo = lista[0];

    // Recorremos todos los repuestos.
    for (const repuesto of lista) {

        // Sumamos el precio del repuesto.
        suma = suma + repuesto.precio;

        // Comprobamos si es más caro que el máximo actual.
        if (repuesto.precio > maximo.precio) {
            maximo = repuesto;
        }
    }

    // Calculamos el precio medio.
    const media = suma / lista.length;

    // Mostramos los resultados.
    console.log("--- Estadísticas de los repuestos ---");
    console.log(`Precio total: ${suma.toFixed(2)} €`);  //suma el total con dos decimales.
    console.log(`Precio medio: ${media.toFixed(1)} €`); //suma el toal con un decimal
    console.log(`Repuesto más caro: ${maximo.nombre} (${maximo.precio} €)`);
}

// Probamos la función con el catálogo.
estadisticas(repuestos);

// Comprobamos qué ocurre con una lista vacía.
console.log("-----Prueba con lista vacia----")
estadisticas([]);