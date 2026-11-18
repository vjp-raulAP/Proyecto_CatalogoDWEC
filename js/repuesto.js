export class Repuesto {
    constructor(datos) {
        this.id = datos.id;
        this.nombre = datos.nombre;      // antes que el precio: lo usa el mensaje de error
        this.categoria = datos.categoria;
        this.marca = datos.marca;
        this.modelo = datos.modelo;
        this.precio = datos.precio;      // pasa por el setter, que valida
        this.fecha = datos.fecha;
    }
    get precio() {
        return this._precio;
    }
     set precio(valor) {
        if (typeof valor !== "number" || !Number.isFinite(valor) || valor <= 0) {
            throw new Error(`Precio no válido en «${this.nombre}»: ${valor}`);
        }
        this._precio = valor;
    }

     get precioTexto() {
    return `${this._precio.toFixed(2)} €`;
    }

    
    descripcion() {
        return `${this.nombre} (${this.marca}) · ${this.modelo} · ${this.precioTexto}`;
    }
}
