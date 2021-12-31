// El uso del modo strict es recomendable cuando queremos revisar nuestro codigo.
// Este uso nos mandara un error si declaramos mal una variable, entre muchas cosas más.

"use strict"; //De esta manera ya estamos usando el modo strict

let x = 10; //El modo strict nos lanza este error diciendonos que no se ha identificado un let, const o var
console.log(x);

mifuncion();

function mifuncion(){
    y = 15;
    console.log(y);
}