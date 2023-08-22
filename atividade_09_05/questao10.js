function array(num) {
    let array = [];
    for (let i = 0; i < num; i++) {
        array[i] = i + 1;
    }
    return array;
}

console.log(array(7));