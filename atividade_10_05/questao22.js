let frutas = ["maçã", "banana", "laranja"];

console.log(frutas);

console.log(frutas[1]);

frutas.push("morango");

console.log(frutas);

frutas.shift();

console.log(frutas);

let numeros = [1, 2, 3, 4, 5, 6];

numeros.push(7);

console.log(numeros);

numeros.pop();

console.log(numeros);

numeros.unshift(0);

console.log(numeros);

numeros.shift();

console.log(numeros);

let frutas2 = ["manga", "abacaxi", "melancia"];

let todasFrutas = frutas.concat(frutas2);

console.log(todasFrutas);

console.log(todasFrutas.slice(0, 2));

todasFrutas.splice(1, 1);

console.log(todasFrutas);

console.log(todasFrutas.indexOf("banana"));

console.log(todasFrutas.filter(fruta => fruta.startsWith("m")));

console.log(numeros.map(numeros => numeros * 2));

todasFrutas.forEach(numero => console.log(numero));