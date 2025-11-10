//Diseña un diagrama de flujo que sume los números del 1 al 100, pero interrumpa el
//ciclo si encuentra un número mayor a 90 que sea par.

//inicialización
let suma = 0;
let numero = 1;     
//ciclo para sumar del 1 al 100
while (numero <= 100) {
    //condición para verificar si el número es mayor a 90 y par
    if (numero > 90 && numero % 2 === 0) {
        console.log(`Se encontró el número ${numero}, que es mayor a 90 y par. Interrumpiendo el ciclo.`);
        break;
    }
    suma += numero;
    numero++;
}
console.log(`La suma de los números del 1 al ${numero - 1} es: ${suma}.`);
