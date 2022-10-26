/* Creacion de info para guardar */
let peliculasFav = [
    {id:1, titulo: "cars"},
    {id:2, titulo: "titanic"}
];

/* Transformar en JSON - STRING*/
let peliculasFavToJSON = JSON.stringify(peliculasFav);

/* Subir la info a localStorage */
localStorage.setItem('peliculas', peliculasFavToJSON);

console.log(localStorage);

/* Subir la info a sessionStorage */
sessionStorage.setItem('peliculas', peliculasFavToJSON);

console.log(sessionStorage);