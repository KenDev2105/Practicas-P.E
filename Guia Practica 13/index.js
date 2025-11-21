//*Estructuras Condicionales y Repetitivas Combinadas*//
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//? Ejercicio 1 - Validador de calificaciones con rangos
/* Solicita el número de estudiantes. Para cada estudiante, pide su nombre y calificación.
Valida que la calificación esté entre 0 y 100. Usa condicionales para clasificar: Excelente
(90-100), Bueno (80-89), Satisfactorio (70-79), Necesita mejorar (menor a 70). Al final,
muestra cuántos estudiantes están en cada categoría usando ciclos.
 */

let total;
let contador = 1;
let excelente = 0;
let bueno = 0;
let satisfactorio = 0;
let necesita = 0;

const calificacion = (entrada) => {
    let calf = parseInt(entrada);
    rl.question("Nombre del estudiante: ", (nombre) => {
        if (calf >= 90 && calf <= 100) excelente++;
        else if (calf >= 80 && calf <= 89) bueno++;
        else if (calf >= 70 && calf <= 79) satisfactorio++;
        else if (calf >= 0 && calf < 70) necesita++;

        if (contador < total) {
            contador++;
            rl.question("Calificación (0-100): ", calif =>{
                calificacion(calif)
            });
        } else {
            console.log("Excelente:", excelente);
            console.log("Bueno:", bueno);
            console.log("Satisfactorio:", satisfactorio);
            console.log("Necesita mejorar:", necesita);
            rl.close();
        }
    });
};

// Ejercicio 1 - Comentado para ejecutar solo el ejercicio 2
// rl.question("Número de estudiantes: ", (n) => {
//     total = parseInt(n);
//     rl.question("Calificación (0-100): ", calf =>{
//         calificacion(calf)
//     });
// });

//? Ejercicio 2 - Búsqueda y validación en lista
/* Crea un programa que solicite una lista de productos y sus precios. El usuario ingresa
cuántos productos desea. Luego, solicita un producto específico para buscar. Si el
producto existe, muestra su precio. Si no, permite reintentar hasta 3 veces. Usa ciclos para
ingresar datos y condicionales para validar.
 */

let productos = [];
let precios = [];
let res;
let cont = 1;
let intentos = 3;

const pedirProducto = (entrada) => {
    productos.push(entrada);
    rl.question("Precio: ", (p) => {
        precios.push(parseFloat(p));
        if (cont < res) {
            cont++;
            rl.question("Producto: ", producto => {
                pedirProducto(producto);
            });
        } else {
            intentos = 3; 
            rl.question("Producto a buscar: ", busc => {
                buscar(busc);
            });
        }
    });
};

const buscar = (entrada) => {
    let index = productos.indexOf(entrada);
    if (index !== -1) {
        console.log("Precio:", precios[index]);
        rl.close();
    } else {
        intentos--;
        if (intentos > 0) {
            rl.question("No existe. Intenta de nuevo: ", buscar);
        } else {
            console.log("Producto no encontrado");
            rl.close();
        }
    }
};

// Ejercicio 2 - Comentado para ejecutar solo el ejercicio 3
// rl.question("Cantidad de productos: ", (n) => {
//     res = parseInt(n);
//     rl.question("Producto: ", pedirProducto);
// });

//? Ejercicio 3 - Sistema de votación con validación
/* El programa solicita votaciones para tres candidatos (A, B, C). Valida que cada voto sea
válido (solo A, B o C). Usa un ciclo para capturar votos hasta que el usuario escriba "fin".
Cuenta los votos de cada candidato y determina el ganador usando condicionales.
 */

let votosA = 0;
let votosB = 0;
let votosC = 0;

const votar = (voto) => {
    let votoUpper = voto.toUpperCase().trim();
    
    if (votoUpper === "FIN") {
        console.log("\n=== RESULTADOS DE LA VOTACIÓN ===");
        console.log("Candidato A:", votosA, "votos");
        console.log("Candidato B:", votosB, "votos");
        console.log("Candidato C:", votosC, "votos");
        
        if (votosA > votosB && votosA > votosC) {
            console.log("\nGanador: Candidato A");
        } else if (votosB > votosA && votosB > votosC) {
            console.log("\nGanador: Candidato B");
        } else if (votosC > votosA && votosC > votosB) {
            console.log("\nGanador: Candidato C");
        } else if (votosA === votosB && votosA > votosC) {
            console.log("\nEmpate entre Candidato A y B");
        } else if (votosA === votosC && votosA > votosB) {
            console.log("\nEmpate entre Candidato A y C");
        } else if (votosB === votosC && votosB > votosA) {
            console.log("\nEmpate entre Candidato B y C");
        } else {
            console.log("\nEmpate entre todos los candidatos");
        }
        
        rl.close();
    } else if (votoUpper === "A") {
        votosA++;
        rl.question("Voto (A, B, C o 'fin' para terminar): ", votar);
    } else if (votoUpper === "B") {
        votosB++;
        rl.question("Voto (A, B, C o 'fin' para terminar): ", votar);
    } else if (votoUpper === "C") {
        votosC++;
        rl.question("Voto (A, B, C o 'fin' para terminar): ", votar);
    } else {
        console.log("Voto inválido. Solo se permiten A, B, C o 'fin'");
        rl.question("Voto (A, B, C o 'fin' para terminar): ", votar);
    }
};

/* rl.question("Voto (A, B, C o 'fin' para terminar): ", votar); */

//? Ejercicio 4 - Generador de serie numérica con filtros
/* Solicita un número inicial y uno final. Genera la serie numérica entre esos números. 
Usa condicionales para aplicar filtros: mostrar solo pares, solo impares, o solo múltiplos de un
número específico que el usuario proporcione. Usa ciclos para recorrer la serie */

let inicio;
let fin;
let filtro;

const aplicarFiltro = () => {
    console.log("\n=== SERIE NUMÉRICA FILTRADA ===");
    let serie = [];
    
    for (let i = inicio; i <= fin; i++) {
        let mostrar = false;
        
        if (filtro === "par") {
            if (i % 2 === 0) mostrar = true;
        } else if (filtro === "impar") {
            if (i % 2 !== 0) mostrar = true;
        } else {
            // Filtro de múltiplos
            let multiplo = parseInt(filtro);
            if (!isNaN(multiplo) && i % multiplo === 0) mostrar = true;
        }
        
        if (mostrar) {
            serie.push(i);
        }
    }
    
    if (serie.length > 0) {
        console.log("Serie:", serie.join(", "));
    } else {
        console.log("No hay números que cumplan el filtro");
    }
    
    rl.close();
};

const pedirFiltro = () => {
    rl.question("Filtro (par/impar/número múltiplo): ", (f) => {
        filtro = f.toLowerCase().trim();
        aplicarFiltro();
    });
};

const pedirFin = (entrada) => {
    fin = parseInt(entrada);
    if (isNaN(fin)) {
        console.log("Error: Debe ingresar un número válido");
        rl.question("Número final: ", pedirFin);
    } else {
        pedirFiltro();
    }
};

const pedirInicio = (entrada) => {
    inicio = parseInt(entrada);
    if (isNaN(inicio)) {
        console.log("Error: Debe ingresar un número válido");
        rl.question("Número inicial: ", pedirInicio);
    } else {
        rl.question("Número final: ", pedirFin);
    }
};

// Ejercicio 4 - Comentado para ejecutar solo el ejercicio 5
// rl.question("Número inicial: ", pedirInicio);

//? Ejercicio 5 - Gestor de inventario simple
/* Crea un programa que simule un inventario de tienda. El usuario define productos (nombre
y cantidad). Usa un ciclo do-while para permitir múltiples operaciones: agregar producto,
vender producto, mostrar inventario. Valida que la cantidad de venta sea válida usando
condicionales. Termina cuando el usuario seleccione "salir". */

let inventario = {};

const mostrarInventario = () => {
    console.log("\n=== INVENTARIO ===");
    if (Object.keys(inventario).length === 0) {
        console.log("El inventario está vacío");
    } else {
        for (let producto in inventario) {
            console.log(`${producto}: ${inventario[producto]} unidades`);
        }
    }
    console.log("");
};

const agregarProducto = () => {
    rl.question("Nombre del producto: ", (nombre) => {
        rl.question("Cantidad: ", (cantidad) => {
            let cant = parseInt(cantidad);
            if (isNaN(cant) || cant < 0) {
                console.log("Error: Cantidad inválida");
                menu();
            } else {
                if (inventario[nombre]) {
                    inventario[nombre] += cant;
                } else {
                    inventario[nombre] = cant;
                }
                console.log(`Producto agregado: ${nombre} - ${cant} unidades`);
                menu();
            }
        });
    });
};

const venderProducto = () => {
    rl.question("Nombre del producto a vender: ", (nombre) => {
        if (!inventario[nombre]) {
            console.log("Error: El producto no existe en el inventario");
            menu();
        } else {
            rl.question("Cantidad a vender: ", (cantidad) => {
                let cant = parseInt(cantidad);
                if (isNaN(cant) || cant <= 0) {
                    console.log("Error: Cantidad inválida");
                    menu();
                } else if (cant > inventario[nombre]) {
                    console.log(`Error: No hay suficiente stock. Disponible: ${inventario[nombre]}`);
                    menu();
                } else {
                    inventario[nombre] -= cant;
                    if (inventario[nombre] === 0) {
                        delete inventario[nombre];
                    }
                    console.log(`Venta realizada: ${nombre} - ${cant} unidades`);
                    menu();
                }
            });
        }
    });
};

const menu = () => {
    rl.question("Operación (agregar/vender/mostrar/salir): ", (opcion) => {
        let op = opcion.toLowerCase().trim();
        
        if (op === "salir") {
            console.log("Saliendo del sistema de inventario...");
            rl.close();
        } else if (op === "agregar") {
            agregarProducto();
        } else if (op === "vender") {
            venderProducto();
        } else if (op === "mostrar") {
            mostrarInventario();
            menu();
        } else {
            console.log("Opción inválida. Use: agregar, vender, mostrar o salir");
            menu();
        }
    });
};

menu();