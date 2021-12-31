// La palabra async simplifica el uso de promesas 


// Llamar a la función setTimeOut utilizando promesas
let promesa = new Promise(resolved => {
    setTimeout(() => resolved('Saludos con promesa y timeout'), 3000);
});


// Async indica que una funcion va a regresar una promesa 
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async'
}

miFuncionConPromesa().then(valor => console.log(valor));