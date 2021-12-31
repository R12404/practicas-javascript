'use strict';

// El bloque try-catch(error) nos permite seguir ejecutando nuestro programa aunque haya ocurrido un error 
try{
   let x =10; 
}

catch(error) {
    console.log(error);
}

finally{
    console.log('Termina la revisión de errores')
}