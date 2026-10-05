const NOMBRE_APP = "Catálogo de repuestos de coches";

const elementos = [
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