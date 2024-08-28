//Fazer um algoritmo para receber números 
//decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

const prompt = require('prompt-sync')();

let soma = 0;
let contagem = 0;

while (true) {
  let numero = parseFloat(prompt("Digite um número decimal (ou 0 para terminar): "));
  
  // Verificando se o número é 0 para encerrar o loop
  if (numero === 0) {
    break;
  }
  
  // Adicionando o número à soma e incrementando a contagem
  soma += numero;
  contagem++;
}

// Calculando a média aritmética
let media = contagem > 0 ? soma / contagem : 0;

// Exibindo a média
console.log(`A média aritmética dos números fornecidos é: ${media.toFixed(2)}`);
