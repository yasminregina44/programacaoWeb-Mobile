const frutas = ["maça", "banana", "laranja"];

console.log(frutas[2]);

frutas.push("manga");

frutas.shift();

console.log(frutas.length);

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

frutas.forEach(fruta => {
    console.log(fruta);
});

frutas.map((fruta) => {
    return console.log(fruta.length);
})

const filtro = frutas.filter((frutas) => {
    return (frutas.length > 5);
});
console.log(filtro);

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const soma = numeros.reduce((acumulador, numeros) => {
    return acumulador + numeros;
});
console.log(soma);