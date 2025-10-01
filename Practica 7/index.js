import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* let palabra = []

function pedirPalabra() {
    rl.question("Ingrese una palabra o fin para terminar ", (entrada)=>{
if (entrada.toLocaleLowerCase() == 'fin'){
    mostrarInventario()
}else{
    palabra.push(entrada)
    pedirPalabra()
}
  })
}

function mostrarInventario(){
    console.log(`Original: ${palabra}`)
    console.log(`Invertido: `, [...palabra].reverse())
    rl.close()
}

pedirPalabra()
 */
// Buscar el primer elemento PAR
// 2 Funciones 1 para pedir numero 1 para BuscarPar()

// function pedirNumero(){
//     rl.question("Ingrese un numero: ", (numero)=>{
//         if (numero.toLocaleLowerCase() == 'fin'){
//             console.log("Fin")
//         }else{
//             if(numero % 2 == 0){
//             buscarPar(numero)
//         }else{
//             pedirNumero()
//         }
//         }
//     })
// }

// function buscarPar(numero){
//     console.log(`El primer numero par es: ${numero}`)
//     rl.close()
// }

// pedirNumero()

// 1 funcion: Pedir palabras y 2 funcion: Mostrar un array con sus longitudes

let palabra = []
function pedirPalabra() {
    rl.question("Ingrese una palabra o fin para terminar ", (entrada)=>{
if (entrada.toLocaleLowerCase() == 'fin'){
    longitudPalabra()
}else{
    palabra.push(entrada)
    pedirPalabra()
}
  })
}

function longitudPalabra(){
    for (let i = 0; i < palabra.length; i++){
        console.log(`Longitud de ${palabra[i]}: ${palabra[i].length}`)
    }
    rl.close()
}

pedirPalabra()