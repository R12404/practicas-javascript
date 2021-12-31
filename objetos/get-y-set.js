// Metodos get y set cuando trabajamos con objetos
// Estas son las mejores practicas para acceder y modificar las propiedades de nuestros objetos

let persona = {
    nombre: "Ricardo",
    apellido: "Morales",

    nombreCompleto1: function(){
        return this.nombre + " " + this.apellido;
    },

    get nombreCompleto(){ return this.nombre + " " + this.apellido;} //Metodo get Para acceder a la informacion de nuestro objeto
}

console.log(persona.nombreCompleto1());
console.log(persona.nombreCompleto); //Cuando usamos el metodo get ya no es necesario poner parentesis


// Metodo get y set 
let persona2 = {
    nombre: "Ricardo",
    apellido: "Morales",
    idioma: "es", //Por buenas practicas las letras cuando trabajamos con idiomas se trabajan con mayusculas

    get language(){return this.idioma.toUpperCase()},//El metodo toUpperCase convierte minusculas a mayusculas 

    set language(language){
        this.idioma = language.toUpperCase(); 
    },//De esta manera estamos cambiando el valor de nuestra propiedad idioma recibiendo uno nuevo y a la vez transformandolo a mayusculas

    nombreCompleto1: function(){
        return this.nombre + " " + this.apellido;
    },

    get nombreCompleto(){ return this.nombre + " " + this.apellido;} //Metodo get Para acceder a la informacion de nuestro objeto
}

// Verificando si el metodo get lang transforma las minusculas a mayusculas
console.log( persona2.language );

// utilizando el metodo set 
persona2.language = 'en';
console.log( persona2.language );