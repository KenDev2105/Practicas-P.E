import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

rl.question("Ingrese una frase: ", (frase) => {
    const encontrarPalabraMasFrecuente = (texto) => {
        const palabras = texto.toLowerCase().replace(/[^a-záéíóúüñ\s]/gi, '').split(/\s+/);
        
        const contador = {};
        for (const palabra of palabras) {
            if (palabra) { 
                contador[palabra] = (contador[palabra] || 0) + 1;
            }
        }
        
        let masFrecuente = null;
        let maxFrecuencia = 0;
        
        for (const palabra in contador) {
            if (contador[palabra] > maxFrecuencia) {
                masFrecuente = palabra;
                maxFrecuencia = contador[palabra];
            }
        }
        
        return { palabra: masFrecuente, frecuencia: maxFrecuencia };
    }
    
    const resultado = encontrarPalabraMasFrecuente(frase);
    
    if (resultado.palabra) {
        console.log(`La palabra más frecuente es: '${resultado.palabra}' (aparece ${resultado.frecuencia} veces)`);
    } else {
        console.log("No se encontraron palabras en la frase.");
    }
    
    rl.close();
}); 