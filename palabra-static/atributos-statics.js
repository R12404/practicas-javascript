class Persona{

    static contadorObjetosPersonas = 0; //Asi se crean los atributos statics. Este es un atributo de nuestra clase

    static get MAX_OBJ(){
        return 4;
    }

    email = 'Valor default email'; //Este es un atributo de nuestros objetos 

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if( Persona.contadorObjetosPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorObjetosPersonas; //Cada vezz que se cree un nuevo objeto se incrementara en uno el contador de objetos de tipo persona. Asi asignamos un valor unico a cada objeto que se cree de tipo persona 
        }
        else {
            console.log("Se han superado el máximo de objetos permitidos")
        }
        console.log( "Se incrementa contador: " + Persona.contadorObjetosPersonas );
    }

    get nombre(){
        return this._nombre
    }

    set nombre( nombre ){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido
    }

    set apellido( apellido ){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + " " + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludos desde metodo static");
    }

    static saludar2(persona){
        console.log(persona.nombre)
    }
}

class Empleado extends Persona{ //A través de la palabra extends ya estamos heredando las propiedades de la clase padre
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); //Llamando al constructor de la clase padre, para ello tambien debemos proporcionar las propiedades de clase padre como parametros de la clase hija
        this._departamento = departamento;
    }

    get departamento(){
        return this._nombre;
    }

    set departamento( departamento ){
        this._departamento = departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1.toString() );

let empleado1 = new Empleado("Pedro", "Roncallo", "Sistemas");
console.log(empleado1);
console.log( empleado1.toString() );  

let persona2 = new Persona('Ricardo', 'Morales');
console.log( persona2.toString() );

let persona3 = new Persona('Leidy', 'Gaga');
console.log( persona3.toString());

let persona4 = new Persona('Rick', 'Perez');
console.log( persona4.toString() )

//Asi llamamos a nuestros atributos statics
console.log( Persona.contadorObjetosPersonas );
// Las clases hijas también heredan atributos statics
console.log (Empleado.contadorObjetosPersonas); 