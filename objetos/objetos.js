// Objetos en javascript

let persona = {
    nombre: 'Ricardo',
    apellido: 'Morales',
    email: 'rmorales@mail.com',
    edad: 23
}

console.log(persona.nombre);
console.log(persona);

// Agregar metodos a nuestros objetos 

let persona2 = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 23,

    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }
}

console.log(persona2.nombreCompleto());