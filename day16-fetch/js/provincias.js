/* API's */
let urlProv =
  "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre";

/* Seleccionar un elemento del DOM */
let listaDOM = document.querySelector(".listaProvincias");

/* Crear fetch */

fetch(urlProv)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let prov = data.provincias;
    console.log(prov)
    let resultado = "";
    for (let i = 0; i < prov.length; i++) {
        resultado += `<li><a href="./index.html">${prov[i].nombre} </a></li>`
        
    }

    listaDOM.innerHTML = resultado;
    return data;
  })
  .catch(function (error) {
    return error;
  });
