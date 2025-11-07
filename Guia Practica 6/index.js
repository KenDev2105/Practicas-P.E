// Ejercicio 1
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

// Ejercicio 3
let numeros = [2,4,6,7,9]
function recorrerArray(arr, callback){
    for(let item of arr){
        callback(item)
    }
}
recorrerArray(numeros, n => console.log(n * n))