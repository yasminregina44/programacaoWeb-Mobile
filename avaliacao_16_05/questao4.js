// a)
const frutas = ["maçã", "banana", "laranja"];
console.log (frutas);
// b)
frutas.push ("manga");
frutas.push ("abacaxi");
console.log (frutas);
// c)
frutas.shift();
console.log (frutas);
// d)
frutas.splice(1, 0, "tangerina", "abacate");
// e)
frutas.unshift("abacaxi");
// f)
console.log(frutas.length);
// g)
const tamanho = frutas.map ((fruta) => {
    return fruta.length;
});
console.log(tamanho);
// h)
const maiores = tamanho.filter((tamanhoFruta) => {
    return tamanhoFruta > 5;
});
console.log(maiores);
// i)
console.log(frutas);