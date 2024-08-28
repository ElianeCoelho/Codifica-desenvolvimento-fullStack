//Escreva um programa que gera e imprime os primeiros 
//10 números da sequência de
//Fibonacci utilizando um loop for.

function imprimirFibonacci(n) {
    let a = 0;
    let b = 1;
  
    console.log("Sequência de Fibonacci:");
  
    for (let i = 0; i < n; i++) {
      console.log(a);
      let proximo = a + b;
      a = b;
      b = proximo;
    }
  }
  
  // Gerando e imprimindo os primeiros 10 números da sequência de Fibonacci
  imprimirFibonacci(10);
  