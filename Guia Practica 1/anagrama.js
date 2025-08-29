import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

function sonAnagramas(palabraA, palabraB) {
    const normalizarA = palabraA.toLowerCase().replace(/\s/g, '');
    const normalizarB = palabraB.toLowerCase().replace(/\s/g, '');
    
    if (normalizarA.length !== normalizarB.length) {
        return false;
    }
    
    const ordenarA = normalizarA.split('').sort().join('');
    const ordenarB = normalizarB.split('').sort().join('');
    
    return ordenarA === ordenarB;
}

rl.question("Ingresa dos palabras separadas por espacio para comprobar si son anagramas: ", (palabras) => {
    const [palabraA, palabraB] = palabras.trim().split(' ');
    
    if (!palabraA || !palabraB) {
        console.log("Por favor ingresa dos palabras válidas separadas por espacio.");
        rl.close();
        return;
    }
    
    const resultado = sonAnagramas(palabraA, palabraB);
    
    if (resultado) {
        console.log(`"${palabraA}" y "${palabraB}" SON anagramas.`);
    } else {
        console.log(`"${palabraA}" y "${palabraB}" NO son anagramas.`);
    }
    
    rl.close();
}); 