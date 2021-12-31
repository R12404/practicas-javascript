// Parametros y argumentos en javascript 

//Saber que valores fueron pasados a nuestros parametros

function miFuncion( a , b ){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
}

miFuncion(2, 3);