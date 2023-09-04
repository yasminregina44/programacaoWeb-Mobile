// Calculadora de Área:Crie três módulos separados, cada um exportando uma função para calcular a área de uma forma geométrica
//  diferente (por exemplo, quadrado, círculo, triângulo). Em um arquivo separado, importe todos os módulos e calcule a área de algumas
//   formas geométricas.

function quadrado (a){
    return (a*a);
}

module.exports.quadrado=quadrado;

function circulo(r){
    return ((r*r)*Math.PI);
}

module.exports.circulo=circulo;

function triangulo(l){
    return ((l*l)/2);
}

module.exports.triangulo=triangulo;
