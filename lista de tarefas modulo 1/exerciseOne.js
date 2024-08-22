//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if

function verificaParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é par.");
    } else {
        console.log(numero + " é ímpar.");
    }
}

verificaParOuImpar(3);

//modelo 2 com operador ternário
function verificaParOuImpar2(numero) {
  console.log((numero % 2 === 0) ? (numero + ' é par.') : (numero + ' é impar')); 
}
verificaParOuImpar2(4);
