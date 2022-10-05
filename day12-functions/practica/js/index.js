function rectangulo(largo, ancho) {
    return largo * ancho;
}

function triangulo(base, altura) {
    return base * altura / 2; 
}

function largoDeArray(miArray) {
    let largo =  miArray.length;
    return  "El largo de tu arrray es de " + largo;
}

function cantidadDeLetras(miPalabra) {
     let cantidad = miPalabra.length; 
     return `La palabra ${miPalabra} tiene ${cantidad} de letras`;  
}

function dolarHoy(cantidadPesos) {
    let conversion = cantidadPesos / 300;
    return cantidadPesos + " pesos son " + conversion + "$";
}


/* ----------------------- llamar a la funcion ------------------ */



let resultado = dolarHoy(30000);

console.log(resultado);