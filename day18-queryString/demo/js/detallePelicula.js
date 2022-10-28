let qs = location.search;               /*  '?id=5' */
let qsObj = new URLSearchParams(qs);    /* es un objeto */
let idPersonaje = qsObj.get('buscador');      /* 5 */

alert(idPersonaje)


