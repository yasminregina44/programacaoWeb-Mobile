function quadrado(a) {
    return (a * a);
}

module.exports.quadrado = quadrado;

function circulo(r) {
    return ((r * r) * Math.PI);
}

module.exports.circulo = circulo;

function triangulo(l) {
    return ((l * l) / 2);
}

module.exports.triangulo = triangulo;
