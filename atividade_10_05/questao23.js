function gerarSenha(num) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let senha = "";
    for (let i = 0; i < num; i++) {
        const aleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(aleatorio);
    }

    return senha;
}

console.log(gerarSenha(8));