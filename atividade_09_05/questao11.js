let carro = {
    marca: "Porsche",
    modelo: "Cayenne",
    ano: 2020,

    getIdade: function (anoAtual) {
        return anoAtual - this.ano;
    },

    getDescricao: function () {
        return this.marca + " " + this.modelo + " " + this.ano + " ";
    }
}

carro.ano = 2025;

console.log(carro.getIdade(2027), carro.getDescricao());