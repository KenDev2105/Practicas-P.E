import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question("Ingrese una cadena de texto: ", (texto) => {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    const contador = texto.toLowerCase().split('').filter(char => vocales.includes(char)).length;
    console.log(contador);
})