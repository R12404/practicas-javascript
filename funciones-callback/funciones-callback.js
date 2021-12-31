// una funcion de tipo callback es una funcion que se pasa como parametro de otra funcion 

miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

//Función de tipo callback
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,3, imp);