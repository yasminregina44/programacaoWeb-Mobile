function contaCaractere(string, caractere) {
    let vezes = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === caractere) {
            vezes++;
        }
    }
    return vezes;
}

console.log(contaCaractere('paredeamarela', 'a'));