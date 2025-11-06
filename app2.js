//Dibuja un diagrama que represente a un estudiante que repasa una tabala de muliplicar 5
//veces, pero que puede detenerse antes si optiene un resultado incorrecto .
//(Pista: incluye un siclo dentro de el una decicion qu8e valide la respuesta )

let multiplicacion =1
let bandera = false
for (let i = 1; i <=10; i++) {
    let resultado = parseInt(prompt(`¿Cuánto es ${i} x 5?`))
    if (resultado === i * 5) {
        console.log(`Respuesta correcta: ${i} x 5 = ${resultado}`)
        multiplicacion++
    } else {
        console.log(`Respuesta incorrecta: ${i} x 5 no es ${resultado}. Se detiene el repaso.`)
        bandera = true
        break
    }       
    if (multiplicacion > 5) {
        break
    }
}
if (!bandera) {
    console.log("¡Has completado el repaso de la tabla de multiplicar del 5!")
}