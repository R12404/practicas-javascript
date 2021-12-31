// Sumar todos los argumentos que recibe una función

let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);

function sumarTodo(){
    let suma  = 0;
    for (let i = 0; i < arguments.length; i++){
       suma += arguments[i];
    }
    return suma;
}

// Por cada elemento que reciba nuestra función se ira almacenando en una variable que los sumará a medida que se agreguen 