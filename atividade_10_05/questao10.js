function exibir(array) {
    console.log("Números digitados: ", array);
    let arrayNova = array.reverse();
    return arrayNova;
}

console.log("Números ao contrário: ", exibir([5, 7, 9]));