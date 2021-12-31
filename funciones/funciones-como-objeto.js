// Funciones como objetos 

// Saber cuántos argumentos ha recibido o recibe nuestra función

function miFuncion(a, b){
    console.log(arguments.length); //Esta propiedad de arguments.length solo la podemos utilizar dentro de la funcion
    return a + b;
}

miFuncion(2,3);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto)