// La palabra continue pasa a la siguiente iteración si la condición se cumple

for (contador = 0; contador <=10; contador++){
    if (contador % 2 !== 0){
        continue; //Ir a la siguiente iteración del ciclo for
    }
    else {
        console.log(contador);
    }
}