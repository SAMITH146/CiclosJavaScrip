//Crea un diagrama de flujo que lea el nombre y la edad de 5 personas. Solo mostrará
//en pantalla aquellas personas que tengan 18 años o más.

//inicialización
let persona = 1;
//ciclo para 5 personas
while (persona <= 5) {
    //pedir nombre y edad
    let nombre = prompt(`Ingrese el nombre de la persona ${persona}: `);
    let edad = parseInt(prompt(`Ingrese la edad de ${nombre}: `));
    //condición para verificar si la persona es mayor de edad
    if (edad >= 18) {
        console.log(`${nombre} tiene ${edad} años y es mayor de edad.`);
    }
    //incremento
    persona++;
}



