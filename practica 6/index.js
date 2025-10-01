// Funciones Avanzadas

// Closure Ejemplos
function crearContador (){
    let contador = 0
    return function(){
        contador++
        return contador
    }
}

let contador1 = crearContador()
let contador2 = crearContador()
console.log(contador1())
console.log(contador1(), "<= contador 1\n")
console.log("Hola soy el contador 2 =>", contador2())

// El saldo de una cuenta bancaria
function cuentaDeAhorro(inicial){
    let saldo = inicial;
    return{
        verSaldo: ()=> saldo,
        depositar: x => saldo += x,
        retirar: x => saldo -= x - 1
    }
}
let miCuenta = cuentaDeAhorro(100)
console.log(`Tu saldo es: ${miCuenta.verSaldo()}`)
miCuenta.depositar(250)
miCuenta.retirar(110)
console.log(`Tu saldo es: ${miCuenta.verSaldo()}`)

// Callback function
let numeros = [2,4,6,7,9]
function recorrerArray(arr, callback){
    for(let item of arr){
        callback(item)
    }
}
recorrerArray(numeros, n => console.log(n * n))

function procesarUsuario(nombre, callback){
    console.log("Procesando usuario, espere...")
    callback(nombre)
}

procesarUsuario("Kevin", function(nombre){
    console.log("Ya estas siendo procesado", nombre)
})

// FUNCIONES
const sumar = (a,b) => a+b;
const saludo = () => "Hola, Mundo"
console.log(sumar(45,55))
console.log(saludo())

const pares = [2,4,6,8]
const exponente = pares.map( x => x * x)
console.log("Array normal: ", pares)
console.log("Elevado a si mismo", exponente)

function fibbo(numero){
    console.log(`Llamando Fibbo ${numero}`)

    if (numero <= 1) {
        console.log(`Caso base: fibbo(${numero}) - ${numero}`);
        return numero
    }

    console.log(`Calculando fibbo(${numero-1}) + fibbo(${numero-2})`)
    const resultado = fibbo(numero - 1) + fibbo(numero - 2)
    console.log(`fibbo (${numero}) = ${resultado}`)
    return resultado
}

console.log("fibbo 5", fibbo(5))