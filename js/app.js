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

