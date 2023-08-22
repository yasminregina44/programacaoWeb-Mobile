let numero = 0, soma = 1, somaTotal = 0, somaPares = 0;

while ((numero + soma) < 50001) {
    somaTotal = numero + soma;
    numero = soma;
    soma = somaTotal;

    if (somaTotal % 2 === 0) {
        somaPares += somaTotal;
    }
}
console.log("Soma dos números pares:", somaPares)