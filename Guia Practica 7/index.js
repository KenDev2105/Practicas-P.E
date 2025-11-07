// Solicita al usuario la cantidad de elementos y luego los valores uno por uno. Al final muestra el array completo por consola.
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* const elementos = []

rl.question("Ingresa la cantidad de elementos: ", (cantidad) => {
    cantidad = parseInt(cantidad)
    let i = 0

    function pedirElemento(){
        if (i < cantidad){
            rl.question(`Ingrese el valor ${i+1} `, (valor)=>{
                elementos.push(valor)
                i++
                pedirElemento()
            })
        } else{
            console.log(`Elementos ingresados (${elementos.length}): ${elementos}`)
            rl.close()
        }
    }

    pedirElemento()
}) */
// Pregunta al usuario los números a guardar en un array. Calcula y muestra la suma total usando reduce.

const numeros = []

rl.question("Ingresa la cantidad de numeros que piensas almacenar: ", (q)=>{
    q = parseInt(q)
    let i = 0

    function numerosGuardar(){
        if (i < q){
            rl.question("Ingresa los numeros que quieras guardar: ", (numero) => {
                numeros.push(parseInt(numero))
                i++
                numerosGuardar()
            })
        } else{
            function sumar(total, numero){
                return total + numero;
            }
            
            const sumaTotal = numeros.reduce(sumar, 0)
            
            console.log(`Números ingresados: ${numeros}`)
            console.log(`Suma total: ${sumaTotal}`)
            rl.close()
        } 
       
    }
    numerosGuardar()
 })




