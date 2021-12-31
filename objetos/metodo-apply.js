// Apply nos permite llamar el metodo de un objeto en otro objeto que no lo tiene definido 

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

//Usando de apply
console.log(persona1.nombreCompleto.apply( persona2 ));