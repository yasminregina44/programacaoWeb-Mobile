// Calculadora Avançada:Crie quatro módulos separados, cada um exportando uma operação matemática diferente (adição, subtração,
//  multiplicação, divisão). Em um quinto arquivo, importe todos os módulos e crie uma função que realize uma operação matemática baseada
//   em uma string de entrada, por exemplo, "2 + 2" deve retornar 4.

function adicao (a, b){
    return (a+b);
}

module.exports.adicao=adicao;

function subtracao(a,b){
    return (a-b);
}

module.exports.subtracao=subtracao;

function multiplicação(a,b){
    return (a*b);
}

module.exports.multiplicação=multiplicação;

function divisao(a,b){
    return (a/b);
}

module.exports.divisao=divisao;

function calcularString(a) {
    try {
      const resultado = eval(a);
  
      if (isNaN(resultado)) {
        return "A entrada não é uma expressão matemática válida.";
      }
  
      return resultado;
    } catch (error) {
      return "Ocorreu um erro ao calcular a expressão.";
    }
  }

  module.exports.calcularString=calcularString;