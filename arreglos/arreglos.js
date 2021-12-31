// Arreglos en javascript 
// Un arreglo puede contenedor datos de cualquier tipo

let autos = new Array("BMW", "Mercedes Benz", "Volvo"); //Sintaxis antigua. Ya no tan recomendada 

const autos2 = ["BMW", "Mercedes Benz", "Volvo"];
console.log(autos2);

// Recorrer elementos de un arreglo 

console.log(autos2[0]);
console.log(autos2[2]);

for (let contador = 0; contador < autos2.length; contador++){
    console.log(autos[contador]);
}


// Modificando los elementos de un arreglo 

autos2[0] = "Audi"; // De esta manera podemos cambiar el valor de una posición en nuestro arreglo 

console.log(autos2)


// Agregando nuevos valores a un arreglo 

autos2.push("BMW"); //La función push nos permite agregar elementos a un arreglo
//Push es la forma en que se manda a llamar una función 

console.log(autos2);

// Agregar elementos a un arreglo 
console.log(autos2.length);

autos2[autos2.length] = "Cadillac"; //De esta manera indicamos que se agregue el elemento en la última posición
console.log(autos2);


autos2[6] = "Porshe"; //Al agregar este valor a la posición 6 de nuestra lista estamos diciendo que el indice 5 quedará vació
console.log(autos2);


// preguntando si una variable es de tipo arreglo 
console.log(Array.isArray(autos2));
console.log(autos instanceof Array);