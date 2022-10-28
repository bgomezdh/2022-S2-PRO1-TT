let qs = location.search; /* un string */
let qsObj = new URLSearchParams(qs);
let idPersonaje = qsObj.get('idPersonaje');

/* seleccionar todos los elementos del DOM */
let titulo  = document.querySelector('.titulo');
let estatus  = document.querySelector('.status');
let especie = document.querySelector('.especie');
let imagen  = document.querySelector('.imagen');

let url = `https://rickandmortyapi.com/api/character/${idPersonaje}`

fetch(url)
.then(function(response) {
    /* Un dato en formato json -> objeto Literal */
    return response.json()
})
.then(function(data) {
    console.log(data);

    titulo.innerText = data.name;
    estatus.innerText = data.status;
    especie.innerText = data.species;
    imagen.src = data.image;

    return data;
}).catch(function(error) {
    return error;
});