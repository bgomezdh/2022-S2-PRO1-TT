function sacarPorcentaje(porciento, cantidadTotal) {
    let resultado = porciento * cantidadTotal / 100;
    return "El " + porciento + "% de " + cantidadTotal + " es " + resultado;
}

/*  la invocacion de la function */

let mensaje = sacarPorcentaje(10, 3000);

console.log(mensaje);


/*  Func expresadas */

let restar = function(a, b) {
    return a - b;
}

console.log(restar(4, 2));




















