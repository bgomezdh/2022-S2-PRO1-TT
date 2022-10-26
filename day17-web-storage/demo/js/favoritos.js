/* Bajar la info a localStorage */
let peliculasFavLocal = localStorage.getItem('peliculas');
/* Bajar la info a sessionStorage */
let peliculasFavSession = sessionStorage.getItem('peliculas');

/* convertir las variables en tipos de datos manipulables en JS */
let resultadoLocal = JSON.parse(peliculasFavLocal);
let resultadoSession = JSON.parse(peliculasFavSession);

console.log(resultadoSession);