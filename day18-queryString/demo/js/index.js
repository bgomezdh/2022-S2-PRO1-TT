let section = document.querySelector('#section');

let img = "https://es.web.img3.acsta.net/c_310_420/pictures/22/10/07/16/48/1142280.jpg";
let nombrePelcula = "Black Adams";
let idPelicula = 47;


section.innerHTML = `<article>
                        <img src="${img}" alt="">
                        <h2><a href="./detallePelicula.html?id=${idPelicula}">${nombrePelcula}</a></h2>
                     </article>`