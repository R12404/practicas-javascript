// Integramos la palabra break para la ejecucion de los ciclos 

//Imprimir solo los números pares de 0 a 10

for (let contador = 0; contador <= 10; contador++){
    if (contador %2 === 0) {
        console.log(contador);
        break; //En cuanto se encuentre el primer número par entonces que e rompa el ciclo
    }
}

console.log("Fin del ciclo for")