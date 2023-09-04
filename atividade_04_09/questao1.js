function numerosPrimos(a) {
    if (a <= 1) {
        return (a, ' não é primo');
    }

    if (a <= 3) {
        return (a, ' é primo');
    }

    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return (a, ' não é primo');
        }
    }
    return (a, ' é primo');
}

module.exports.numerosPrimos = numerosPrimos;