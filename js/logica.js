// Guardamos el precio límite para considerar un repuesto caro.
export const PRECIO_CARO = 50;

// Días para considerar un repuesto reciente.
export const DIAS_RECIENTE = 30;

//Función 1 listar todos:
// Esta función recibe el array de repuestos como parámetro.
export function listarTodos(lista) {

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

//Funcion 2 filtrar (con lista y límite)
// Recibe la colección y el límite de precio.
export function filtrar(lista, limite) {

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

//FUNCIÓN 3. Contar repuestos por categoría.
export function contarPorCategoria(lista) {

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

//FUNCION 1. Listar(lista)--> mostrar 1 linea x elemento con datos principales.
export function listar(lista) {

    

    for (const elemento of lista) {
        console.log(`${elemento.nombre} - ${elemento.categoria} - ${elemento.precio} €`);
    }
}

//FUNCION 2. Buscar respuestas por texto.
export function buscarPorTexto(lista,texto){
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

//FUNCION 3. añadir(lista,elemento)--> Calcular mayor id 
export function anadir(lista, elemento) {

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

// FUNCIÓN 4. Eliminar un repuesto por su ID.
export function eliminarPorId(lista, id) {

    // Recorremos la lista con un for clásico.
    for (let i = 0; i < lista.length; i++) {

        // Comprobamos si el ID coincide.
        if (lista[i].id === id) {

            // Eliminamos el repuesto encontrado.
            lista.splice(i, 1);
             console.log(`El artículo con ID ${id} se ha eliminado correctamente`);
            // Devolvemos true porque se ha eliminado.
            return true;
            
        }
    }

    // Si no encontramos el ID, devolvemos false.
    console.log(`No se ha encontrado el repuesto con el ID ${id}. `);
    return false;
}

//Reto3. Estadísticas de lso repuestos
export function estadisticas(lista) {

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

    // Devolvemos los resultados para poder mostrarlos en la página.
    return { suma, media, maximo };
}

// RETO 2. BUSCADOR Y ORDENACIÓN

// Función para ordenar los repuestos.
export function ordenarRepuestos(lista, criterio) {
    const copia = [...lista];

    if (criterio === "nombre") {
        copia.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    if (criterio === "precio") {
        copia.sort((a, b) => b.precio - a.precio);
    }
    if (criterio === "fecha") {
    copia.sort((a, b) => fechaCorrecta(b.fecha) - fechaCorrecta(a.fecha));
    }   
    return copia;
}

// Función para buscar repuestos por nombre.
export function buscarRepuestos(lista, texto) {
    return lista.filter(repuesto =>
        repuesto.nombre.toLowerCase().includes(texto.toLowerCase())
    );
}

// B2. Funciones para las fechas.

// Convertimos la fecha en una fecha correcta.
export function fechaCorrecta(texto) {
    return new Date(texto + "T00:00:00");
}

// Convertimos la fecha a formato legible.
export function fechaLegible(texto) {
    return fechaCorrecta(texto).toLocaleDateString("es-ES", {
        day: "numeric",month: "long",
        year: "numeric"
    });
}

// Calculamos los días que han pasado.
export function diasDesde(texto) {
    const MS_DIA = 24 * 60 * 60 * 1000;
    const ahora = new Date();
    const fecha = fechaCorrecta(texto);

    return Math.floor((ahora - fecha) / MS_DIA);
}