async function buscaEndereco(cep) {
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPCovertida = await consultaCEP.json();
        if (consultaCEPCovertida.erro) {
            throw Error('Cep não existe!');
        }
        console.log(consultaCEPCovertida);
        const cidade = document.getElementById('cidade');
        cidade.value = consultaCEPCovertida.localidade;
        const estado = document.getElementById('estado');
        estado.value = consultaCEPCovertida.uf;
        const bairro = document.getElementById('bairro');
        bairro.value = consultaCEPCovertida.bairro;
        const endereco = document.getElementById('endereco');
        endereco.value = consultaCEPCovkertida.logradouro;
        console.log(consultaCEPCovertida);
    }
    catch (erro) {
        mensagemErro.innerHTML = "<p>Cep inválido. Tente novamente!</p>"
        console.log(erro);
    }
}

const cep = document.getElementById(`cep`);
cep.addEventListener("focusout", () => buscaEndereco(cep.value));