// Uso de call en Javascript

let persona1 = {
    nombre: "Ricardo",
    apellido: "Morales",

    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

let persona2 = {
    nombre: "Juan",
    apellido: "Perez"
}

console.log(persona1.nombreCompleto());

//Usando call
console.log(persona1.nombreCompleto.call( persona2 ));