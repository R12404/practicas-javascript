// Tipos primitivos 
// No es posible cambiar el valor de un tipo primitivo
let x = 10;

function cambiarValor(a){
    a = 20;
    return;
}

// Paso por valor 
cambiarValor(x);
console.log(x);
// console.log(a);


const persona = {
    nombre: 'Ricardo',
    apellido: 'Morales' 
}

console.log(persona); 

function cambiarValorObjeto (p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Roncallo';
}

// Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);
