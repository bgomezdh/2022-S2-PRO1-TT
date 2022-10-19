/* alert("saludos desde VSC");
 */
/* PROMPT */

/* let respuesta = prompt("Que edad tienes?"); */

/* CONFIRM */

/* let respuesta = confirm("Eres mayor de edad?");

alert("La respuesta es " + respuesta); */


/* condicionales y operadores ------------------- */

let edad = prompt('Que edad tienes?');

if (edad < 13) {
    alert("Prohibido el ingreso");
} else if(edad >= 13 && edad <=16){
    alert("Puedes ingresar con un adulto");
}else{
    alert("Puedes ingresar")
}

