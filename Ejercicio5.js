//Elabora un diagrama de flujo que represente una competencia de atletismo con 8 corredores. Cada corredor da 4 vueltas, 
//pero si alguno se cansa antes de terminar, se detiene y el ciclo continúa con los demás.



//se inicializan las variables 
corredor=1;
//ciclo para los 8 corredores
while (corredor <= 8) {
    //inicialización de la vuelta
    vuelta=1;
    console.log(`Corredor ${corredor} comienza la carrera.`);
    //ciclo para las 4 vueltas de cada corredor
    while (vuelta <= 4) {
        //preguntar si el corredor está cansado con condicional ternario
        let pregunta = prompt(`¿El corredor ${corredor} está cansado en la vuelta ${vuelta}? (SI/NO)`).toUpperCase();
        //evaluar la respuesta
        let bandera = (pregunta ==  "SI") ? `El corredor ${corredor} se detiene en la vuelta ${vuelta}.` : `El corredor ${corredor} completa la vuelta ${vuelta}.`;
        console.log(bandera);
    }
    //incremento de la vuelta
        vuelta++;
}
    console.log(`El corredor ${corredor} ha terminado la carrera.`);
    //incremento del corredor
    corredor++;


    




      