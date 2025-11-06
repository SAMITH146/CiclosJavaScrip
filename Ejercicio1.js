//Diseña un diagrama de flujo que muestre los números del 1 al 20, pero solo imprima
//los múltiplos de 3.

// Inicialización
let i = 1;
// Ciclo para números del 1 al 20
while (i <= 20) {
    // Condición para verificar si el número es múltiplo de 3
    if (i % 3 === 0) {
        // Mostrar el número
        console.log(i);
    }
    // Incremento
    i++;
}