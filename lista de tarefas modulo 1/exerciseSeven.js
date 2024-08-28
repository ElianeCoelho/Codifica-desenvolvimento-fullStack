//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let numeroMacas = parseInt(prompt("Digite o número de maçãs compradas: "));

let precoTotal;

if (numeroMacas < 12) {
  precoTotal = numeroMacas * 0.30;
} else {
  precoTotal = numeroMacas * 0.25;
}

console.log(`O valor total da compra é: R$ ${precoTotal.toFixed(2)}`);
