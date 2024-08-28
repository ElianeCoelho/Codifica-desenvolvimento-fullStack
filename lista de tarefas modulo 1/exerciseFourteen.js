//Crie um programa que calcula o fatorial de um número 
//fornecido pelo usuário
//utilizando um loop for ou while.

const prompt = require('prompt-sync')();

function calcularFatorial(numero) {
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}

let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial: "), 10);

if (numero < 0) {
  console.log("O fatorial não é definido para números negativos.");
} else {
  // Calculando o fatorial e exibindo o resultado
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}.`);
}
