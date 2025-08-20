import readline from "readline";

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

// rd.question ("What is your name? ", (name) => {
//     console.log(`Welcome, ${name}!`);
//     rd.close();
// });

// Metodos de Strings

let word = "Hola esto es    JavaScript";
console.log(word);

// ToLowerCase
console.log(word.toLowerCase());
// ToUpperCase
console.log(word.toUpperCase());
// Trim
console.log(word.trim().split(/\s+/));
// Split
console.log("reverse: " + word.split("").reverse().join(""));
// ReplaceAll
console.log(word.replaceAll(" ", "").split(","));

