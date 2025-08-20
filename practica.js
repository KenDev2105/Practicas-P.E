import readline from "readline";

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rd.question("Ingresa una palabra:", (word) => {
    const wordLower = word.toLowerCase(); //LowerCase para evitar problemas con mayusculas y minusculas
    const reverse = wordLower.split("").reverse().join("");
    const wordIncludes = reverse.includes(word)
    if (reverse === wordLower) {
        console.log(`La palabra "${word}" es un palíndromo.`);
    } else {
        console.log(`La palabra "${word}" no es un palíndromo.`);
    }
    rd.close();
});