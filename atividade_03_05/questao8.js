let array = [12, 25, -4, 738, 2023, 90, 17, 0];
let maior_numero = -9999;

for (var contador = 0; contador < array.length; contador++) {

    if (maior_numero < array[contador]) {
        maior_numero = array[contador];
    }
}

console.log(maior_numero);