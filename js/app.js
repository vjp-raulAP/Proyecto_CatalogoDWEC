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


console.log(`${NOMBRE_APP}: ${repuestos.length} repuestos cargados`);
console.table(repuestos);



const LIMITE = 50;

//listado  1 para recorrer los elementos con un for of y mostrar en consola el id, nombre y si es barato o caro según el precio comparado con la constante LIMITE.
console.log("-------LISTADO 1-------");
console.log("--- Todos los repuestos ---");

for (const articulo of repuestos) {
    const etiqueta = articulo.precio <= LIMITE ? "barato" : "caro";

    console.log(`${articulo.id}. ${articulo.nombre} - ${etiqueta}`);
}

// listado 2 usamos un for clasico y una condicion compuesta , $$ o  || al terminar muestra cuantos  la cumplen del total.
console.log("-------LISTADO 2-------");
console.log("--- Filtro: frenos o baratos ---");

let encontrados = 0;

for (let i = 0; i < repuestos.length; i++) {
    const articulo = repuestos[i];

    if (articulo.categoria === "Frenos" || articulo.precio < 20) {
        console.log(`${articulo.id}. ${articulo.nombre} - ${articulo.precio}€`);
        encontrados++;
    }
}

console.log(`${encontrados} articulos de ${repuestos.length} cumplen la condición`);