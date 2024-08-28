// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
  }
  
  function categoriaIMC(imc) {
    if (imc < 18.5) {
      return "Baixo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      return "Sobrepeso";
    } else {
      return "Obesidade";
    }
  }
  
  // Entrada de dados
  let peso = 75; 
  let altura = 1.75; 
  
  // Cálculo do IMC
  let imc = calcularIMC(peso, altura);
  
  // Exibição do resultado
  console.log(`Seu IMC é: ${imc.toFixed(2)}`);
  console.log(`Categoria: ${categoriaIMC(imc)}`);
  