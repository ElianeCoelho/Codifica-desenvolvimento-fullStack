//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.
// Importando a biblioteca prompt-sync para leitura de entrada
// Importando a biblioteca prompt-sync para leitura de entrada
const prompt = require('prompt-sync')();

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor (diferente do primeiro): "));

while (valor1 === valor2) {
  console.log("Os valores não podem ser iguais. Tente novamente.");
  valor2 = parseFloat(prompt("Digite o segundo valor (diferente do primeiro): "));
}

if (valor1 < valor2) {
  console.log(`Os valores em ordem crescente são: ${valor1} e ${valor2}`);
} else {
  console.log(`Os valores em ordem crescente são: ${valor2} e ${valor1}`);
}
