let conta = {
    saldo: 0,
    titular: "yasmin",

    getDepositar: function (a) {
        return this.saldo += a;
    },

    getSacar: function (b) {
        return this.saldo -= b;
    },

    getVerSaldo: function () {
        return this.saldo;
    }
}

console.log(conta.getDepositar(300), conta.getSacar(150), conta.getVerSaldo());