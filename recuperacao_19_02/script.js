function validarNome(){
 
    var nome = document.getElementById("nome").value;
    var padrao = /[^a-zà-ú]/gi;
    var valida_nome = nome.match(padrao);
 
    if( valida_nome || !nome ){
       alert("teste")
    }else{
       console.log("Nome Ok!")
    }
 }
 