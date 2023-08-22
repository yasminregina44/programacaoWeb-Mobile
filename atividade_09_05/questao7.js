function arrayMaiores(array, a) {
    let arrayNova = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > a) {
            arrayNova.push(array[i]);
        }
    }
    return arrayNova;
}

console.log(arrayMaiores([1, 3, 4, 5, 6, 7, 8, 11, 23], 7));