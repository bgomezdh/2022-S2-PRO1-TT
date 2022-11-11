/* Recuperamos la queryString */
let qs = location.search; /* un string ?-> */
let qsObj = new URLSearchParams(qs);
let idPersonaje = qsObj.get('idPersonaje');
    /* 4 */
    
/* seleccionar todos los elementos del DOM */
let titulo      = document.querySelector('.titulo');
let estatus     = document.querySelector('.status');
let especie     = document.querySelector('.especie');
let imagen      = document.querySelector('.imagen');
let btn         = document.querySelector("#boton");

/* Para buscar info debemos utilizar un fetch, y al fetch debemos pasarle una URL */
let url =   `https://rickandmortyapi.com/api/character/${idPersonaje}`
/*          `https://rickandmortyapi.com/api/character/4` */


let id = idPersonaje;

/* Creamos el fetch que nos traera la DATA */
fetch(url)
.then(function(response) {
    /* Un dato en formato json -> objeto Literal */
    return response.json()
})
.then(function(data) {
    /* toda la info que busque en la API la tiene el parametro del segundo then, en este caso es DATA */
    console.log(data);

    titulo.innerText = data.name;
    estatus.innerText = data.status;
    especie.innerText = data.species;
    imagen.src = data.image;

    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});

/* Crear un array vacio para luego rellenarlo */
let favoritos = [];

/* recuperamos el storage */
let recuperoStorage = localStorage.getItem('favoritos');
    /* ["2"] */
/* Preguntamos si es distinto de nulo-  es verdarero quiero covertirlo de JSON a un array */
if(recuperoStorage != null){
    favoritos = JSON.parse(recuperoStorage);
    /* [2] */
};

/* Validar si este id existe en el favoritos (localsStorage) */
if (favoritos.includes(idPersonaje)) {
    btn.innerText="Quitar de Favorito";
}




/* Agregarle un evento al boton de agregar a favorito */
btn.addEventListener("click",function (e) {
    e.preventDefault()
    
    /* Si lo incluye, que lo elimine del array y al boton le ponga "Agregar Favorito" */
    if(favoritos.includes(id)){
        let indice = favoritos.indexOf(id);
        favoritos.splice(indice,1);
        btn.innerText="Agregar a Favorito";
    }else{
    /* Si NO lo incluye, que lo agregue al array y al boton le ponga "Quitar Favorito" */
        favoritos.push(id);
        btn.innerText="Quitar de Favorito";
    }

    /* Si lo incluye o no, quiero poder subir el array al localStorage ->
    Pero tengo que pasarlo a JSON primeramente*/
    let favToString = JSON.stringify(favoritos);
/*      ["2","4","5"]                [2,4,5]        */
    /* Cuando este en JSON ahora si puedo subirlo al localStorage */
    localStorage.setItem('favoritos',favToString)
    
});