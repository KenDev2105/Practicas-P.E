// *-----CONDICIONALES-----* //
import { log } from "console";
import readline from "readline"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ? Ejercicio 1 -- Condicionales Basicas

function numero(num){
    if(num > 0){
        console.log("Es positivo")
    } else if(num < 0){
        log("Es negativo")
    } else if (isNaN(num)){
        log("Ingrese un valor de tipo numerico")
    } else{
        log("Es cero")
    }
}


const edad= años =>{
    if(años < 18){
        log("Es menor de edad")
    } else if(años >= 18 && años <= 64){
        log("Es adulto")
    } else if(años > 65){
        log("Es adulto mayor")
    } else {
        log("Ingrese un valor valido")
    }
}

function numMayor(a,b,c){
    if(a > b && a > c){
        log("El numero mayor es: ", a)
    } else if(b > a && b > c){
        log("El numero mayor es: ", b)
    } else if(c > a && c > b){
        log("El numero mayor es: ", c)
    } else if(a === b && a === c){
        log("Los 3 numeros son iguales", "\n", a," ", b," ", c)
    }
}

/* rl.question("Ingrese un numero para determinar si es positivo, negativo o cero: ", num =>{
    numero(num)
    rl.question("Ingrese su edad: ", años =>{
        edad(años)
        rl.question("Ingrese el primer numero: ", a =>{
            rl.question("Ingrese el segundo numero: ", b =>{
                rl.question("Ingrese el tercer numero: ", c =>{
                    numMayor(a,b,c)
                    rl.close()
                })
            })
        })
    })
}) */

//? Ejercicio 2 - Condicionales con operadores logicos

function bisiesto(año){
    if(año % 4 === 0 || (año % 400 === 0 && año % 4 === 0)){
        log("El año es bisiesto")
    } else{
        log("El año no es bisiesto")
    }
}

function calificacion(nota){
    if(nota >= 90 && nota <= 100){
        log("Ha obtenido una A")
    }else if(nota >= 80 && nota <= 89){
        log("Ha obtenido una B")
    }else if(nota >= 70 && nota <= 79){
        log("Ha obtenido una C")
    }else if(nota >= 60 && nota <= 69){
        log("Ha obtenido una D")
    }else if(nota < 60){
        log("Ha obtenido una F")
    }else if(nota > 100 || nota < 0){
        log("Ingrese una valor entre 0 y 100")
    }else{
        log("Ingrese un valor valido")
    }
}

/* rl.question("Ingrese un año para determinar si es bisiesto o no: ", año =>{
    bisiesto(año)
    rl.question("Ingrese la nota que obtuvo: ", nota =>{
        calificacion(nota)
        rl.close()
    })
}) */

//? Ejercicio 3 - Switch case

function weekday(dia){
    switch (dia) {
        case 1:
            log("Es Lunes")
            break;
        case 2:
            log("Es Martes")
            break;
        case 3:
            log("Es Miercoles")
            break;
        case 4:
            log("Es Jueves")
            break;
        case 5:
            log("Es Viernes")
            break;
        case 6:
            log("Es Sabado")
            break;
        case 7:
            log("Es Domingo")
            break;
        default:
            log("Ingrese un valor valido")
            break;
    }
}


function mes(numeroMes){
    switch (numeroMes) {
        case 1:
            log("Mes: Enero - Días: 31")
            break;
        case 2:
            log("Mes: Febrero - Días: 28")
            break;
        case 3:
            log("Mes: Marzo - Días: 31")
            break;
        case 4:
            log("Mes: Abril - Días: 30")
            break;
        case 5:
            log("Mes: Mayo - Días: 31")
            break;
        case 6:
            log("Mes: Junio - Días: 30")
            break;
        case 7:
            log("Mes: Julio - Días: 31")
            break;
        case 8:
            log("Mes: Agosto - Días: 31")
            break;
        case 9:
            log("Mes: Septiembre - Días: 30")
            break;
        case 10:
            log("Mes: Octubre - Días: 31")
            break;
        case 11:
            log("Mes: Noviembre - Días: 30")
            break;
        case 12:
            log("Mes: Diciembre - Días: 31")
            break;
        default:
            log("Ingrese un valor valido)")
            break;
    }
}


function calculadora(a, b, operacion){
    switch (operacion) {
        case '+':
            log("Resultado: ", a + b)
            break;
        case '-':
            log("Resultado: ", a - b)
            break;
        case '*':
            log("Resultado: ", a * b)
            break;
        case '/':
            if(b === 0){
                log("No se puede dividir entre 0")
            } else {
                log("Resultado: ", a / b)
            }
            break;
        case '%':
            if(b === 0){
                log("No se puede sacar modulo con 0")
            } else {
                log("Resultado: ", a % b)
            }
            break;
        default:
            log("Ingrese un valor valido")
            break;
    }
}

/* rl.question("Ingrese un numero entre 1 y 7: ", num =>{
    num = parseInt(num)
    weekday(num)
    rl.question("Ingrese un numero entre 1 y 12: ", numeroMes =>{
        numeroMes = parseInt(numeroMes)
        mes(numeroMes)
        rl.question("Ingresa el primer numero: ", a =>{
            rl.question("Ingresa el segundo numero: ", b =>{
                rl.question("Ingresa el simbolo de la operacion que deseas realizar (+, -, *, /, %): ", operador =>{
                    a = parseInt(a)
                    b = parseInt(b)
                    calculadora(a,b,operador)
                    rl.close()
                })
            })
        })
    })
})  */

//? Ejercicio 4 - Operador Ternario

const parImparTernario = num => (num % 2 == 0) ? log("Es par"): log("Es impar");

const puedeVotar = edad => (edad >= 18) ? log("Puedes votar"): log("Aun eres menor de edad, no puedes votar")

const priceSmart = (esMiembro, precio) =>{
    (esMiembro == 1) ? (precio *= 1.20,  log("Tu total es de: ", precio)) : log("Tu total es de: ", precio);
}

/* rl.question("Ingresa un numero: ", num =>{
    num = parseInt(num)
    parImparTernario(num)
    rl.question("Ingresa tu edad: ", edad =>{
        edad = parseInt(edad)
        puedeVotar(edad)
        rl.question("Ingresa el precio de tu compra: ", precio =>{
            rl.question("¿Eres miembro de nuestra compañia?(1 = Si/ 0 = No): ", esMiembro =>{
                precio = parseFloat(precio)
                priceSmart(esMiembro, precio)
                rl.close()
            })
        })
    })
}) */

//? Ejercicio 5 - Condicionales Anidadas

function numMayorAnidado(a,b,c){
    if(a > b){
        if(a > c){
            log("El numero mayor es ", a)
        } else {
            log("El numero mayor es ", c)
        }
    } else {
        if(b > c){
            log("El numero mayor es ", b)
        } else {
            log("El numero mayor es ", c)
        }
    }
}

function validacion(usuario, contraseña){
    if(usuario == "admin"){
        contraseña = parseInt(contraseña)
        if(contraseña == 1234){
            log("Acceso concedido")
            return true
        } else {
            return false
        }
    } else {
        log("Usuario no encontrado")
        return false
    }
}

function solicitarContraseña(usuario, intentos = 3){
    if(intentos > 0){
        rl.question(`Ingrese su contraseña (${intentos} intentos restantes): `, contraseña =>{
            if(validacion(usuario, contraseña)){
                rl.close()
            } else {
                intentos--
                if(intentos > 0){
                    log(`Contraseña Incorrecta. Te quedan ${intentos} intentos`)
                    solicitarContraseña(usuario, intentos)
                } else {
                    log("Has excedido el número máximo de intentos. Acceso denegado")
                    rl.close()
                }
            }
        })
    } else {
        log("Has excedido el número máximo de intentos. Acceso denegado")
        rl.close()
    }
}

/* rl.question("Ingrese un primer numero: ", a =>{
    rl.question("Ingrese un segundo numero: ", b =>{
        rl.question("Ingrese un tercer numero: ", c=>{
            a = parseFloat(a)
            b = parseFloat(b)
            c = parseFloat(c)
            numMayorAnidado(a,b,c)
            rl.question("Ingrese el nombre de usuario: ", username =>{
                username = username.toLowerCase()
                solicitarContraseña(username, 3)
            })
        })
    })
}) */

//? Ejercicios 6 - Ejercicios combinados

let fondos = 1000

function banco(numCuenta, pin){
    numCuenta = parseInt(numCuenta)
    pin = parseInt(pin)
    if(numCuenta == 1805 || numCuenta == 2105 || numCuenta == 2023){
        if(pin == 1234){
            log("Has ingresado a tu cuenta")
            return true
        } else {
            log("PIN incorrecto")
            return false
        }
    } else {
        log("Datos invalidos, revise el numero de cuenta o pin")
        return false
    }
}


function retiroBanco(){
    log("---- Fondos en cuenta: $", fondos.toFixed(2), " ----")
    rl.question("Ingrese el monto a retirar: ", monto =>{
        monto = parseFloat(monto)
        if(monto <= fondos && monto > 0){
            fondos -= monto
            log(`Has retirado $${monto.toFixed(2)} \nFondo actual: $${fondos.toFixed(2)}`)
        } else if(monto > fondos){
            log("No cuenta con suficientes fondos para retirar")
        } else {
            log("Ingrese un monto válido mayor a 0")
        }
        rl.close()
    })
}


function calcularPrecioBoleto(edad, diaSemana){
    const precioBase = 10
    edad = parseInt(edad)
    diaSemana = parseInt(diaSemana)
    
    let descuentoEdad = 0
    let descuentoDia = 0
    
    if(edad < 12 || edad > 65){
        descuentoEdad = 40
    }
    
    if(diaSemana === 3){
        descuentoDia = 25
    }
    
    
    let descuentoAplicar = Math.max(descuentoEdad, descuentoDia)

    let precioFinal = precioBase - (precioBase * descuentoAplicar / 100)
    
    // Mostrar información
    log(`\n--- Información del Boleto ---`)
    log(`Precio base: $${precioBase}`)
    log(`Edad: ${edad} años`)
    
    switch(diaSemana){
        case 1: log(`Día: Lunes`); break;
        case 2: log(`Día: Martes`); break;
        case 3: log(`Día: Miércoles`); break;
        case 4: log(`Día: Jueves`); break;
        case 5: log(`Día: Viernes`); break;
        case 6: log(`Día: Sábado`); break;
        case 7: log(`Día: Domingo`); break;
        default: log(`Día: Inválido`); break;
    }
    
    if(descuentoAplicar > 0){
        log(`Descuento aplicado: ${descuentoAplicar}%`)
        if(descuentoEdad === 40 && descuentoDia === 25){
            log(`(Se aplicó el descuento por edad, que es mayor)`)
        } else if(descuentoEdad === 40){
            log(`(Descuento por edad: menores de 12 o mayores de 65)`)
        } else if(descuentoDia === 25){
            log(`(Descuento por día: miércoles)`)
        }
    } else {
        log(`Sin descuentos aplicables`)
    }
    
    log(`Precio final: $${precioFinal.toFixed(2)}`)
}

/* rl.question("Ingrese su numero de cuenta: ", numCuenta =>{
    rl.question("Ingrese su PIN: ", pin =>{
        if(banco(numCuenta, pin)){
            retiroBanco()
        } else{
            rl.close()
        }
    })
}) */

rl.question("Ingrese su edad: ", edad =>{
    rl.question("Ingrese el día de la semana (1=Lunes, 2=Martes, 3=Miércoles, 4=Jueves, 5=Viernes, 6=Sábado, 7=Domingo): ", diaSemana =>{
        calcularPrecioBoleto(edad, diaSemana)
        rl.close()
    })
})