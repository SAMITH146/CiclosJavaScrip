//Construye un diagrama de flujo que permita registrar el ingreso de 5 estudiantes a
//un salón. Si un estudiante no trae su carné, no debe ingresar y el ciclo debe continuar
//con el siguiente.

//inicialización
i = 1;
let tieneCarne;
//ciclo para 5 estudiantes
while (i <= 5) {
    //preguntar si el estudiante tiene carné con condicional ternario
    let pregunta = prompt(`El estudiante ${i} tiene carnet SI | NO ?`).toUpperCase();
    //evaluar la respuesta
    let bandera = (pregunta == "SI") ? `El estudiante ${i} puede ingresar ` : `El estudiante ${i} puede ingresar`;
    //mostrar el resultado
    console.log(bandera);
    //incremento
    i++;
}
