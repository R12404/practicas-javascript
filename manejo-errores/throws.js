// La clausula throw es usada cuando nosotros queremos lanzar un error
'use strict';

// El bloque try-catch(error) nos permite seguir ejecutando nuestro programa aunque haya ocurrido un error 
try{
   let x =10;
   throw 'Mi error';x 
}

catch(error) {
    console.log(error);
}

finally{
    console.log('Termina la revisión de errores')
}

// Uso del throw ejemplo
'use strict';
let resultado = -2;

try {
    // x = 10;
    if (isNaN(resultado)) throw 'No es un número';//Si la variable resultado no es un número, entonces arrojamos el error 'No es un número'
    if (resultado === '') throw 'Es una cadena vacia';
    if (resultado >= 0) throw 'Es un número positivo';
    if (resultado < 0) throw 'Es un número negativo'
}

catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}