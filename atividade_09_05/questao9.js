function contagemVogais(qualquerCoisa) {
    let contador = 0;
    for (let i = 0; i < qualquerCoisa.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(qualquerCoisa.charAt(i))) {
            contador++;
        }
    }
    return contador;
}

console.log(contagemVogais("eu"));