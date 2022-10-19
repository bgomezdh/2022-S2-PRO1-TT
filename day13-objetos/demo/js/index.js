let persona = {
  nombre: "Carlos",
  apellido: "Andrade",
  edad: 35,
  saludar: function (otroNombre) {
    /* return "Hola " + otroNombre + ", Mi nombre es brian gomez y tengo 29 años";  */
    return (
      "Hola " +
      otroNombre +
      ", Mi nombre es " +
      this.nombre +
      " " +
      persona.apellido +
      " y tengo " +
      this.edad +
      " años"
    );
  },
  cumplirAnios: function () {
    this.edad = this.edad + 1;
    return "La edad de " + this.nombre + " es de " + this.edad;
  },
};

let respuesta = persona.cumplirAnios();

console.log(respuesta);

/* ----------------------- un array de objetos literales --------------------------------*/

let profesores = [
  {
    nombre: "Brian",
    apellido: "Gomez",
    edad: 29,
  },
  {
    nombre: "Luis",
    apellido: "Navas",
    edad: 45,
  },
  {
    nombre: "Eve",
    apellido: "Guevara",
    edad: 21,
  }
];

let profesor = profesores[1].nombre;

console.log(profesor);
