// Aqui se crea la clase padre de DispositivoEntrada
class DispositivoEntrada {

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada = this.tipoEntrada;
    }

    set tipoEntrada( tipoEntrada ){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca( marca ){
        this._marca = marca;
    }
}

// Aqui creamos la clase hija de DispositioEntrada llamada Teclado
class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclados = ++Teclado.contadorTeclados;
    }

    toString(){
        return ` ${this._idTeclados}:
        Tipo de entrada: ${this._tipoEntrada}, marca: ${this._marca}`;
    }
}

// Aqui creamos la clase hija de DispositioEntrada llamada Raton
class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString(){
        return ` ${this._idRaton}:
        Tipo de entrada: ${this._tipoEntrada}, marca: ${this._marca}`;
    }
}

// Aqui se crea la clase monitor
class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca( marca ){
        this._marca = marca;
    }

    get tamanio(){
        return this._tamanio = this.tamanio;
    }

    set tamanio( tamanio ){
        this._tamanio = tamanio;
    }

    toString(){
        return `${this._idMonitor}
        marca: ${this._marca}
        tamaño: ${this._tamanio}`;
    }
}

//Aqui creamos la clase computadora 
class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre( nombre ){
        this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }

    set monitor( monitor ){
        this._monitor = monitor;
    }

    get teclado(){
        return this._teclado;
    }

    set teclado( teclado ){
        this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }

    set raton( raton ){
        this._raton = raton;
    }

    toString(){
        return ` Id Computadora: ${this._idComputadora}
        nombre: ${this._nombre}
        monitor: ${this._monitor}
        teclado: ${this._teclado}
        raton: ${this._raton}`;
    }

}

// Aqui creamos la clase de Orden
class Orden {
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }

    mostrarOrden(){
        let computadores = '';
        for( let computadora of this._computadoras){
            computadores += `\n${computadora}`;
        }

        console.log(`Orden ${this._idOrden} \n ${computadores}`);
    }
}

// Prueba creacion de objeto Tipo Teclado
let teclado1 = new Teclado('Bluetooth', 'HP');
console.log(teclado1);

// Prueba creacion de objeto tipo Rato
let raton1 = new Raton('Cable', 'Logitech');
console.log(raton1);

// Prueba creacion de objeto tipo Monitor
let monitor1 = new Monitor('Asus', 13);
console.log(monitor1);

// Prueba creacion de objeto tipo Computadora
let computadora1 = new Computadora('PC gamer', monitor1, teclado1, raton1);
console.log(computadora1);

// Prueba2 creacion de objeto Tipo Teclado
let teclado2 = new Teclado('Bluetooth', 'HP');
console.log(teclado1);

// Prueba2 creacion de objeto tipo Rato
let raton2 = new Raton('Cable', 'Logitech');
console.log(raton1);

// Prueba2 creacion de objeto tipo Monitor
let monitor2 = new Monitor('Asus', 13);
console.log(monitor1);

// Prueba2 creacion de objeto tipo Computadora
let computadora2 = new Computadora('PC gamer', monitor1, teclado1, raton1);
console.log(computadora1);

// Prueba creacion de una orden 
let orden1 = new Orden();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();