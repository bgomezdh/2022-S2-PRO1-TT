let api_key = '81faef6942a31915ed87b416fbba64ba'
let url  = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

let listaPopulares = document.querySelector('#listaPopulares');

fetch(url)
.then(function(respuesta) {
    return respuesta.json();
}).then(function(data) {

    console.log(data.results);
    for (let i = 0; i < 5; i++) {
        
        let pelicula = data.results[i];
        listaPopulares.innerHTML += `<article>
                                        <img class="imgPoster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="">
                                        <h1>${pelicula.title}</h1>
                                        <p>${pelicula.release_date}</p>
                                        <a href="./detallePeliculas.html?idPelicula=${pelicula.id}">Ver mas</a>
                                    </article>` 
    }



    return data;
}).catch(function(error) {
    console.log(error);
    return error;
});




