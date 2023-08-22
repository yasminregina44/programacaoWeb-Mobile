function criarMatriz(linhas, colunas) {
    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        const linha = [];
        for (let j = 0; j < colunas; j++) {
            const numAleatorio = Math.floor(Math.random() * 100);
            linha.push(numAleatorio);
        }
        matriz.push(linha);
    }
    return matriz;
}

console.log(criarMatriz(5, 4));