let numeros = [1, 2, 3, 5, 4];

console.log(numeros);

console.log(numeros.join());

numeros.reverse();

console.log(numeros);

console.log(numeros.slice(0, 2));

let nomes = ["yasmin", "enzo", "gabriel", "joao"];

nomes.sort();

console.log(nomes);

console.log(numeros.filter(numeros => numeros % 2 == 0));

console.log(numeros.map(numeros => numeros * numeros));

console.log(numeros.reduce((soma, numeros) => soma + numeros));

nomes.forEach(numero => console.log(numero));