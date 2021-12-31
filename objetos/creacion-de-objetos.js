// Creación de objetos
let persona = new Object()

persona.nombre = 'Carlos';
persona.direccion = 'Saturno12';
persona.telefono = '12313131';

console.log(persona);

// Accediendo a las propiedades de los objetos
// Tambien podemos acceder a las propiedades de nuestros objetos de la forma en que se accede a los datos de una lista 

console.log( persona.nombre );
// Para acceder como accedemos a los valores de una lista se pasa la propiedad a la que queremos acceder como tipo cadena
console.log(persona['direccion']);

// también podemos iterar sobre cada uno de los elementos de nuestro objeto con un ciclo for
// Para los objetos el ciclo for cambia su sintaxis 

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}