/* API's - Nosotros nos encargaremos de darle estas URL a ustedes*/
let urlUser = "https://randomuser.me/api/";

/* Seleccionar un elemento del DOM */
let imagen = document.querySelector(".imagen");
let sexo = document.querySelector(".sexo");
let email = document.querySelector(".email");
let nombre = document.querySelector(".name");


/* Crear fetch */
fetch(urlUser)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    
    let usuario = data.results[0];

    console.log(usuario);

    imagen.src = usuario.picture.large;
    sexo.innerText = usuario.gender;
    email.innerText = usuario.email;
    nombre.innerText = `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`;

    return data;
  })
  .catch(function (error) {
    return error;
  });
