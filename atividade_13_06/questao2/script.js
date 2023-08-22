function corAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function fonteAleatoria() {
    const fontes = [
        "Arial",
        "Helvetica",
        "Verdana",
        "Times New Roman",
        "Courier New",
        "Georgia",
        "Palatino",
        "Garamond",
        "Bookman",
        "Comic Sans MS",
        "Trebuchet MS",
        "Arial Black",
        "Impact",
        "Lucida Sans Unicode",
        "Tahoma"
    ];

    const i = Math.floor(Math.random() * fontes.length);
    return fontes[i];
}

function mudar_fundo() {
    const cor = corAleatoria();
    body.style.backgroundColor = cor;
}

function mudar_cor_titulo() {
    const cor = corAleatoria();
    titulo.style.color = cor;
}

function mudar_cor_paragrafo() {
    const cor = corAleatoria();
    texto.style.color = cor;
}

function mudar_fonte_titulo() {
    const fontes = fonteAleatoria();
    titulo.style.fontFamily = fontes;
}

function mudar_fonte_paragrafo() {
    const fontes = fonteAleatoria();
    texto.style.fontFamily = fontes;
}

function mudar_tudo() {
    mudar_fundo();
    mudar_cor_titulo();
    mudar_cor_paragrafo();
    mudar_fonte_titulo();
    mudar_fonte_paragrafo();
}

fundo.addEventListener("click", function () {
    mudar_fundo();
})

cor_titulo.addEventListener("click", function () {
    mudar_cor_titulo();
})

cor_paragrafo.addEventListener("click", function(){
    mudar_cor_paragrafo();
})

fonte_titulo.addEventListener("click", function(){
    mudar_fonte_titulo();
})

fonte_paragrafo.addEventListener("click", function(){
    mudar_fonte_paragrafo();
})

tudo.addEventListener("click", function(){
    mudar_tudo();
})