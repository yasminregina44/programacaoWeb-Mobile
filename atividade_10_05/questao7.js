let valorVenda;

function calculoVenda(valorCompra) {
    if (valorCompra < 20) {
        valorVenda = valorCompra * 1.45;
    } else {
        valorVenda = valorCompra * 1.3;
    }
    return valorVenda;
}

console.log(calculoVenda(10));