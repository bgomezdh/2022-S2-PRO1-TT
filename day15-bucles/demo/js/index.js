/*   inicio ; operacion ; modificador   */
for (let i = 0; i < 10; i++) {
  /* console.log( `Vuelta numero ${i}` ); */
}

let profesores = [
  {
    id: 1,
    nombre: "Brian",
    materia: "Pro1",
  },
  {
    id: 2,
    nombre: "Luis",
    materia: "Pro2",
  },
  {
    id: 3,
    nombre: "Eve",
    materia: "Pro3",
  }
];

/* for (let i = 0; i < profesores.length; i++) {
    console.log(profesores[i].materia);
}; */

let listaProfes = document.querySelector('#listaProfes');

for (let i = 0; i < profesores.length; i++) {
    listaProfes.innerHTML += `<li>
                                <a href="./detalleProfesor.html?id=${profesores[i].id}">
                                    Profe ${profesores[i].nombre}
                                </a>
                              </li>`;
}


