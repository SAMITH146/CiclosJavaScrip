//Realiza un diagrama de flujo que pida al usuario ingresar 10 números y muestre únicamente los que sean mayores que 50.

//inicialización
i=1;
//ciclo para pedir 10 números
while (i <= 10) {
    let numero = parseInt(prompt(`Ingresa el número ${i}: `));
    //condición para verificar si el número es mayor que 50
    if (numero > 50) {
        console.log(`El número ${numero} es mayor que 50.`);
    }
    //incremento
    i++;
}