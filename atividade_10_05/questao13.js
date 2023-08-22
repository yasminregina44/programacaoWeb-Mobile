let M;

function valorMontante(C, i, t) {
    M = C * (1 + i) * t;
    return M.toFixed(2);
}

console.log(valorMontante(126, 1.37, 24));