//Crea un diagrama de flujo para repartir dulces a 10 niños. Si un niño ya tiene un dulce,
//sáltalo y continúa con el siguiente hasta terminar.
//(Pista: el ciclo representa la entrega y la condición verifica si el niño ya tiene dulce).

let nino= 1 
while (nino <= 10) {
    tieneDulce = prompt(`¿El niño ${nino} ya tiene un dulce? (si/no)`).toLowerCase()
    if (tieneDlce === 'no') {
        console.log(`Se le entrega un dulce al niño ${nino}.`)
    } else {
        console.log(`El niño ${nino} ya tiene un dulce, se salta.`)
    }
    nino++
}

