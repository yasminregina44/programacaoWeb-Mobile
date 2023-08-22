function calcularMedia(array) {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i];
    }

    return (soma / array.length);
}

console.log(calcularMedia([4, 5, 8, 9, 10]))