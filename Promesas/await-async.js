// Async indica que una funcion va a regresar una promesa 
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async'
}

// miFuncionConPromesa().then(valor => console.log(valor));

// Ejemplo de async con await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolved => {
        resolved('Promesa con await');
    });

    console.log(await miPromesa);
}
// La palabra reservada await nos indica que se va a procesar una promesa
funcionConPromesaYAwait();