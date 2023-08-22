function aparece(array, a) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == a) {
            contador++;
        }
    }
    return contador;
}

console.log(aparece([1, 2, 3, 4, 5, 6, 7, 7, 8, 10], 7))