let palindromo = 'reviver';
let verificacao = '';

for (var contador = palindromo.length - 1; contador >= 0; contador--) {
    verificacao += palindromo[contador]
}

if (palindromo == verificacao) {
    console.log('A palavra ' + palindromo + ' é um palíndromo!')
} else {
    console.log('A palavra ' + palindromo + ' não é um palíndromo!')
}