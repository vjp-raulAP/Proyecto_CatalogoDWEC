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


console.log(`${NOMBRE_APP}: ${elementos.length} elementos cargados`);
console.table(elementos);

//Parte D. Reto 3 : tus primeros pasos
//listado 1. Recorrer el array de elementos  con for ..of.

/* Guardamos el precio límite para considerar un repuesto caro.
   Si el precio es igual o superior a 50 €, será caro. */
const PRECIO_CARO = 50;

console.log("--- Todos los repuestos  ¿Cual es caro y cual Barato---"); 

for (const elemento of elementos) {   //recorremos todos los elementos

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
for (let i = 0; i < elementos.length; i++) {

    // Guardamos el repuesto de la posición actual.
    const elemento = elementos[i];

    // Comprobamos si cuesta menos de 50 € y pertenence a fltros.
    if (elemento.precio < PRECIO_CARO  && elemento.categoria == "Filtros") {

        // Mostramos el nombre y el precio del repuesto.
        console.log(`${elemento.nombre} - ${elemento.precio} €`);

        // Aumentamos el contador de repuestos encontrados.
        encontrados++;
    }

}

    // Mostramos cuántos repuestos cumplen la condición del total.
console.log(`${encontrados} de ${elementos.length} cumplen la condición`);



