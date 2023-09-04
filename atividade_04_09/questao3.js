function celsiusFahrenheit(a) {
    return ((a * 9 / 5) + 32);
}

module.exports.celsiusFahrenheit = celsiusFahrenheit;

function fahrenheitKelvin(a) {
    return ((a - 32) * 5 / 9 + 273.15);
}

module.exports.fahrenheitKelvin = fahrenheitKelvin;

function kelvinCelsius(a) {
    return (a - 273.15);
}

module.exports.kelvinCelsius = kelvinCelsius;