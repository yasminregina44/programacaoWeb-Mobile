//Selecionando elemento
let campoTarefa = document.querySelector('#campo-tarefa');
let adicionar = document.querySelector('#botao-adicionar');
let listaTarefas = document.querySelector('#lista-tarefas');
let nomeTarefa = [];
//Adicionando o Evento
adicionar.addEventListener('click', adicionarTarefa);

//Adiconando tarefa com a tecla enter
campoTarefa.addEventListener('keyup', function (enter) {
    if (enter.key === 'Enter') {
        adicionarTarefa();
    }
})
window.onload = ()=>{
    let novaTarefa;
    let nomeStorage = JSON.parse(localStorage.getItem('nomeTarefa'));
    let botaoExcluir;
    nomeTarefa = nomeStorage;
    for(let i = 0; i<nomeStorage.length; i++){
        console.log(nomeStorage)
        novaTarefa = document.createElement('li');
        novaTarefa.innerText = nomeStorage[i];
        novaTarefa.className = "tarefa"
        listaTarefas.appendChild(novaTarefa);
        botaoExcluir = document.createElement('button');
        botaoExcluir.innerText = "Remover";
        novaTarefa.appendChild(botaoExcluir);
        botaoExcluir.className = "botaoExcluir";
        
    }
    botaoExcluir.addEventListener('click', function () {
        listaTarefas.removeChild(novaTarefa);
        localStorage.removeItem('')
    })
    

    //Definir o texto do botão excluir
    

    //Adicionar um ouvinte ao botão excluir
    

    //Adicionar o botão excluir
    
    

}

//Criando e Adicionando elementos
function adicionarTarefa() {
    //Pegar o valor do campo de texto
    nomeTarefa.push(campoTarefa.value);
    let novaTarefa;
    for(let i =0; i<nomeTarefa.length;i++){
        //Criando um elemento li
        novaTarefa = document.createElement('li');
        //Definindo o conteúdo do elemento li
        novaTarefa.innerText = nomeTarefa[i];
        //Adicionar o item da lista ao final da lista
        novaTarefa.className = "tarefa"
    }
    listaTarefas.appendChild(novaTarefa);
    //Adicionar um ouvinte ao item da lista
    novaTarefa.addEventListener('click', function () {
        novaTarefa.classList.toggle('concluida')
    })
    novaTarefa.className = "tarefa"
    localStorage.setItem("nomeTarefa", JSON.stringify(nomeTarefa));
    //Removendo Elementos
    //Criar botão excluir
    let botaoExcluir = document.createElement('button');

    //Definir o texto do botão excluir
    botaoExcluir.innerText = "Remover";

    //Adicionar um ouvinte ao botão excluir
    botaoExcluir.addEventListener('click', function () {
        listaTarefas.removeChild(novaTarefa);
        localStorage.removeItem('')
    })

    //Adicionar o botão excluir
    novaTarefa.appendChild(botaoExcluir);
    campoTarefa.value = null;
    botaoExcluir.className = "botaoExcluir";
}



document.body.className = localStorage.getItem('modo') || 'modo-claro';
document.body.className