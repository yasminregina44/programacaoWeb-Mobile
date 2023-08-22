function classeEleitoral(idade) {
    if (idade < 16) {
        return "Não eleitor"
    } else if (idade > 18 && idade < 65) {
        return "Eleitor obrigatório"
    } else if ((idade > 16 && idade < 18) || idade > 65) {
        return "Eleitor facultativo"
    }
};

console.log(classeEleitoral(5));