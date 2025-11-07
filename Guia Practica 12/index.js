//*Ciclos o Bucles*//
import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//? Ejercicio 1 - Suma de números naturales: Solicita un número N y usa un ciclo (for/while) para sumar los números del 1 al N.

const natural = n => {
    let suma = 0;
    for (let i = 1; i <= n; i++){
        suma += i;
    }
    console.log(`La suma de los números del 1 al ${n} es: ${suma}`)
}

/* rl.question("Ingrese un numero: ", n =>{
    n = parseInt(n)
    natural(n)
    rl.close()
}) */

//? Ejercicio 2 - Tabla de multiplicar: Solicita un número y muestra su tabla de multiplicar del 1 al 10 usando un ciclo for.
function tabla(num){
    for(let i = 1; i <= 10; i++){
        const multiplicar = i * num
        console.log(`${i} x ${num} = ${multiplicar}`)
    }
}

/* rl.question("Ingresa un numero para obtener su tabla de multiplicar: ", num =>{
    num = parseInt(num)
    tabla(num)
    rl.close()
}) */

//? Ejercicio 3 - Contador de pares e impares: Pide 10 números, cuenta cuántos son pares y cuántos impares usando while.

/* function contarParesImpares() {
    let i = 0;
    let pares = 0;
    let impares = 0;
    
    const pedirNumero = () => {
        while (i < 10) {
            rl.question(`Ingrese el número ${i + 1}: `, num => {
                num = parseInt(num);
    
                if (num % 2 === 0) {
                    pares++;
                } else {
                    impares++;
                }            
                i++;
                
                if (i < 10) {
                    pedirNumero();
                } else {
                    console.log(`\nTotal de números pares: ${pares}`);
                    console.log(`Total de números impares: ${impares}`);
                    rl.close();
                }
            });
            break;
        }
    };
    
    pedirNumero();
}

contarParesImpares(); */

//? Ejercicio 4 - Contador regresivo: Muestra los números desde N hasta 1 usando for y luego con while.

function contadorFor(num){
    console.log("Contador regresivo con FOR:")
    for(let i = num; i >= 1; i--){
        console.log(i)
    }
}

function contadorWhile(num){
    console.log("\nContador regresivo con WHILE:")
    let i = num;
    while(i >= 1){
        console.log(i)
        i--
    }
}

rl.question("Ingresa un numero: ", num =>{
    num = parseInt(num)
    contadorFor(num)
    contadorWhile(num)
    rl.close()
})

//? Ejercicio 5 - Cálculo de factorial: Solicita un número y calcula el factorial usando un ciclo.