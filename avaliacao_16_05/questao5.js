const data = new Date();
dataAno = data.getFullYear();

const livro = {
    titulo: "O Alquimista",
    autor: "Paulo Coelho",
    anoPublicacao: 1988,
     getIdade: function() {
         return dataAno - this.anoPublicacao;
     },
    getDescricao: function() {
        return(`O livro "${this.titulo}" foi escrito por "${this.autor}" e publicado em ${livro.anoPublicacao}.`)
    }
}

console.log(livro.titulo);

livro.anoPublicacao = 1992;
livro.editora = "Rocco";

console.log(livro.getDescricao());