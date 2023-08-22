function ordemCrescente(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}

console.log(ordemCrescente([9, 6, 7, 9, 5, 91, 52, 74, 63, 73, 52, 638, 256, 5236]));