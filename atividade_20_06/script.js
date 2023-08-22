function salvarNome() {
    let nome = document.getElementById('nome').value;
    localStorage.setItem('nome', nome);
    document.getElementById('mensagem').textContent = "Nome salvo com Sucesso"
}

function recuperarNome() {
    let nome = localStorage.getItem('nome');
    if (nome) {
        document.getElementById('mensagem').textContent = "Nome recuperado: " + nome;
    }
    else {
        document.getElementById('mensagem').textContent = "Nenhum nome salvo";
    }
}

let botaoToggle = document.getElementById('toggle');

document.body.className = localStorage.getItem('modo') || 'modo claro';

botaoToggle.addEventListener('click', function () {
    if (document.body.className === 'modo-claro') {
        document.body.className = 'modo-escuro';
    } else {
        document.body.className = 'modo-claro'
    }

    localStorage.setItem('modo', document.body.className);
})

let listaCompras = document.getElementById('lista-compras');
let botaoAdicionar = document.getElementById('adicionar-btn');
let inputItem = document.getElementById('item-input');

let itensSalvos = JSON.parse(localStorage.getItem('itens')) || [];
itensSalvos.forEach(adicionarItemLista);

botaoAdicionar.addEventListener('click', function () {
    let nomeItem = inputItem.value;
    adicionarItemLista(nomeItem);

    itensSalvos.push(nomeItem);
    localStorage.setItem('item', JSON.stringify(itensSalvos));
    inputItem.value = '';
})

function adicionarItemLista(nomeItem) {
    let itemLista = document.createElement('li');
    itemLista.innerText = nomeItem;
    listaCompras.appendChild(itemLista);
}