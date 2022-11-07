let qs = location.search; /* un string */
let qsObj = new URLSearchParams(qs);
let idPersonaje = qsObj.get('idPersonaje');

/* seleccionar todos los elementos del DOM */
let titulo  = document.querySelector('.titulo');
let estatus  = document.querySelector('.status');
let especie = document.querySelector('.especie');
let imagen  = document.querySelector('.imagen');

let url = `https://rickandmortyapi.com/api/character/${idPersonaje}`
let id = idPersonaje;
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
let btn = document.querySelector("#boton");
btn.addEventListener("click",function (e) {
    e.preventDefault()
    let favoritos = [];

    let recupeStorage= localStorage.getItem('favoritos');

    if(recupeStorage != null){
        favoritos = JSON.parse(recupeStorage);
        console.log(favoritos);
    }
    // let fav = document.querySelector('.fav');

    if(favoritos.includes(id)){
        let indice = favoritos.indexOf(id);
        favoritos.splice(indice,1);
        btn.innerText="Agregar Favorito"
    }else{
        favoritos.push(id);
        btn.innerText="Quitar Favorito"
    }
    let favToString = JSON.stringify(favoritos);
    localStorage.setItem('favoritos',favToString)
    
})