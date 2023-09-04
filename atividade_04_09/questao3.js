// Conversor de Temperatura:Crie três módulos separados, cada um exportando uma função para converter a temperatura 
// (por exemplo, Celsius para Fahrenheit, Fahrenheit para Kelvin, Kelvin para Celsius). Em um arquivo separado, importe todos os módulos e
//  converta algumas temperaturas.

function celsiusFahrenheit (a){
    return ((a * 9/5) + 32);
}

module.exports.celsiusFahrenheit=celsiusFahrenheit;

function fahrenheitKelvin(a){
    return ((a - 32) * 5/9 + 273.15);
}

module.exports.fahrenheitKelvin=fahrenheitKelvin;

function kelvinCelsius(a){
    return (a - 273.15);
}

module.exports.kelvinCelsius=kelvinCelsius;