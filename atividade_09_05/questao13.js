const dataInicial = '2023-06-27';
const dataFinal = '2023-10-14';
const resultado = new Date(dataFinal) - new Date(dataInicial);

function calcularDias() {
    return resultado / (1000 * 60 * 60 * 24);
}

console.log(calcularDias())