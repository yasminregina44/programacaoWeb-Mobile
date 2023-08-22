let botaoAumentar = document.querySelector('#botao-aumentar');
let botaoDiminuir = document.querySelector('#botao-diminuir');
let numero = document.querySelector('#numero');

let contador = 0;

function contadorAtual() {
    numero.textContent = contador;
}

function aumentarContador() {
    contador += 1;
    contadorAtual();
}

function diminuirContador() {
    contador -= 1;
    contadorAtual();
}

function zerarContador() {
    contador = 0;
    contadorAtual();
}

botaoAumentar.addEventListener("click", function () {
    aumentarContador()
})

document.body.addEventListener('keyup', function (ArrowRight) {
    if (ArrowRight.key === 'ArrowRight') {
        aumentarContador()
    }
})

botaoDiminuir.addEventListener("click", function () {
    diminuirContador()
})

document.body.addEventListener('keyup', function (ArrowLeft) {
    if (ArrowLeft.key === 'ArrowLeft') {
        diminuirContador()
    }
})

document.body.addEventListener('keyup', function (enter) {
    if (enter.key === 'Enter') {
        zerarContador();
    }
})