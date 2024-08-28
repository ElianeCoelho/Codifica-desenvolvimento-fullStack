//Escreva um programa que solicita ao 
//usuário 5 números e calcula a soma total
//utilizando um loop for.

const prompt = require('prompt-sync')();

let somaTotal = 0;

// Loop para solicitar 5 números e calcular a soma
for (let i = 1; i <= 5; i++) {
  // Solicitando o número ao usuário
  let numero = parseFloat(prompt(`Digite o número ${i}: `));
  
  // Adicionando o número à soma total
  somaTotal += numero;
}

console.log(`A soma total dos números é: ${somaTotal}`);
