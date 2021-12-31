class Empleado {

    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){ //Aui estamos sobreescribiendo (mejorando) el metodo obtener detalles de la clase padre Empleado
        return `Gerente: ${super.obtenerDetalles()}, encargado del area: ${this._departamento}`;
    }
}

function determinarTipo(tipo){ //Esto es polimorfismo, aqui segun el tipo de objeto (clase padre o clase hijo) la funcion va a determinar que metodo(obtener llamará) si recibe un tipo padre, entonces llama el metodo obtener detalles del tipo padre, en cmabio si recibe un tipo hijo llamará al metodo obtener detalles del tipo hijo
    console.log(tipo.obtenerDetalles());

    if (tipo instanceof Empleado){ //De esta manera preguntamos de que instancia es el objeto que recibimos
        console.log('Es un empleado');
    }
    else {
        console.log('Es un Gerente')
    }
}

let gerenteSistemas = new Gerente('Carlos', 2000, 'Sistemas');
let empleado1 = new Empleado('Ricardo', 10000);

determinarTipo(empleado1);
determinarTipo(gerenteSistemas); 
console.log(gerenteSistemas.obtenerDetalles());