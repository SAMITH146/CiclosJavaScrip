//Diseña un diagrama de flujo que simule un cajero automático: repite el proceso de
//retirar dinero hasta que el saldo sea insuficiente.


// Saldo inicial del cajero automático
let saldo = (prompt("Ingrese su saldo inicial:"))
let retiro;
// Mientras haya saldo, permitir retiros
while (saldo > 0) {
    // Solicitar monto a retirar
    retiro = parseInt(prompt(`Su saldo es de ${saldo}. ¿Cuánto desea retirar?`));
    // Verificar si el saldo es suficiente para el retiro
    if (retiro <= saldo) {
        saldo -= retiro;
        console.log(`Retiro exitoso de ${retiro}. Saldo restante: ${saldo}.`);
        // Si el saldo llega a cero, informar al usuario
    } else {
        console.log("Saldo insuficiente para este retiro.");
        break;
    }     
    
    
}


