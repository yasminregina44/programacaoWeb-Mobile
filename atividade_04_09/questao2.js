//2- Calculadora de Média:Crie um módulo que exporta uma função que calcula a média de um array de números. Em um arquivo separado,
//importe este módulo e calcule a média de alguns arrays de números.

function media (array){    
        if (array.length === 0) {
          return 0;
        }
             
        const soma = array.reduce((acumulador, numero) => acumulador + numero, 0);
        const media = soma / array.length;
        
        return media;
      
};

module.exports.media=media;