let maisDias = function (dias) {
    var dataAtual = new Date();
    dataAtual.setDate(dataAtual.getDate() + dias);
    return dataAtual;
}

console.log(maisDias(100).toLocaleDateString('pt-BR', { timeZone: 'UTC' }));