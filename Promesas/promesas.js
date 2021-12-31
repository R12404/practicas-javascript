// Sintaxis basica para crear una promesa

let miPromesa = new Promise((resolved, rejected) => {
    let expresion = false;

    if(expresion){
        resolved('Resolvió correcto');
    }
    else{
        rejected('Se profujo un error');
    }
}); //Hasta este punto ya se ha declarado nuestra promesa 

// Llamado de la promesa
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);

// Otra forma de llamar a la promesa
miPromesa.then(valor => console.log(valor)).catch( error => console.log(error));

// Llamar a la función setTimeOut utilizando promesas
let promesa = new Promise(resolved => {
    setTimeout(() => resolved('Saludos con promesa y timeout'), 3000);
});

promesa.then(valor => console.log(valor));