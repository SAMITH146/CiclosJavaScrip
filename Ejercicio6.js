//Construye un diagrama de flujo que simule la venta de 15 boletos de cine. Si el
//comprador es menor de edad y la película es para adultos, se debe rechazar la venta
//y continuar con el siguiente comprador.

//inicialización
 let comprador = 1;
 //ciclo para 15 compradores
    while (comprador <= 15) {
        //pedir edad y si la película es para adultos
        let edad = parseInt(prompt(`Ingrese la edad del comprador ${comprador}: `));
        //preguntar si la película es para adultos
        let esParaAdultos = prompt(`¿La película es para adultos? (si/no): `).toLowerCase();
        //condición ternaria para saber si es mayor o no Y si la película es para adultos 
        let resultado = (edad < 18 && esParaAdultos === 'si') ? `Venta rechazada para el comprador ${comprador} (menor de edad tiene ${edad}.` : `Venta aceptada para el comprador ${comprador} .`;
        console.log(resultado);
        //incremento
        comprador++;    
    }
