import { Console } from 'console';
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("Escribe una operación ejemplo: 10 + 20, 7.5 * 3, 100 / 0 \n", (operacion) => {
//     const toArray = operacion.split(' ')
//     const num1 = parseFloat(toArray[0]),
//         num2 = parseFloat(toArray[2]),
//         operador = toArray[1]

//         let resultado;

//     switch (operador) {
//         case '+':
//             resultado = num1 + num2
//             console.log(`${num1} ${operador} ${num2} = ${res}`);
//             break;
//         case '-':
//             resultado = num1 - num2
//             console.log(`${num1} ${operador} ${num2} = ${res}`);
//             break;
//         case '*':
//             resultado = num1 * num2
//             console.log(`${num1} ${operador} ${num2} = ${res}`);
//             break;
//         case '/':
//             resultado = num1 / num2
//             console.log(`${num1} ${operador} ${num2} = ${res}`);
//             break;
//         default:
//         console.error('Operación no valida')
//             break;
//     }
//     rl.close()
// })

// Pide al usuario que escriba un número decimal (Ejemplo: 7.35)
rl.question("Escribe un número decimal: ", (decimal) => {
    console.log("Math Floor: " , Math.floor(decimal))
    console.log("Math Round", Math.round(decimal))
    console.log("Math Ceil", Math.ceil(decimal))
    console.log("Math Trunc", Math.trunc(decimal))
 rl.close()
})
