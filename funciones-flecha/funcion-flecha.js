// Esta es la manera clasica de trabajar con funciones 
function miFuncion(){
    console.log('Esta es una función');
}

// Llamado de la funcion
miFuncion();

// Convirtiendo la funcion a funcion flecha (En una función flecha no se aplica el concepto de hoisting)
let miFuncionFlecha = () => {
    console.log('Esta es una función flecha')
}

// Si es una funcion que tiene en su cuerpo una sola linea no es necesario poner llaves. Ejemplo:
const miFuncionFlecha2 = () => console.log('esta es mi funcion flecha dos');
miFuncionFlecha2();

const saludar = () => {
    return 'Saudos desde mi funcion flecha'
}
console.log(saludar());

const saludar2  = () => '¡Hohoho Feliz navidad!';
console.log(saludar2());

// De esta manera creamos funciones flecha para retornar objetos
const regresaObjeto = () => ({
    nombre: 'Juan',
    apellido: 'Perez'
});
console.log(regresaObjeto());


// Función con parametros
const miFuncionConParametros = (mensaje) => console.log(mensaje);
miFuncionConParametros('Saludos con parametros');

// Cuando usamos una funcion flecha y esta solo recibe un parametro entonces no será necesario el uso de parentensis. Ejemplo
const miFuncionConParametros2 = mensaje => console.log(mensaje);
miFuncionConParametros2('Saludos con parametros2');

// Recibiendo más de un parametro en función flecha
const miNuevaFuncionFlecha = (op1, op2, op3) => console.log(op1 + op2 + op3);

miNuevaFuncionFlecha(2, 3);