//soma dos Elementos array

let soma =0;
let arr = [10, 20, 30, 40];

for(let i=0; i < arr.length; i++){
   soma += arr[i]; 
}
console.log(soma);

//Encontre o Maior Número em um array
let max = [0];
for(let j =0; j < arr.length; j++){
    if(arr[j] > max){
        max = arr[j];
    }
}
console.log(`o maior valor do array é: ${max}`);


// Reverter um Array
let reversed = [];
for(let k = arr.length -1; k >= 0; k--){
    reversed.push(arr[k]);
}
console.log(reversed);

//crie um novo array contendo apenas os números pares
let evens = [];

for (let m = 0; m < arr.length; m++){
    if(arr[m] % 2 === 0){
        evens.push(arr[m])
    }
}
console.log(evens);

//Contar Ocorrencias de um Valor
const prompt = require('prompt-sync')()
let vet = [10, 10, 7, 5, 10];
let value = Number(prompt('Insira o valor a ser pesquisado: '));
let count = 0;

for(let l = 0; l < vet.length; l++){
    if(vet[l] === value){
        count++;
    }
}
console.log(`Quantidade de vezes que aparece o valor ${value} é: ${count}`);

//arrays/vetores multidimensionais
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matriz[0][2]);

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        console.log(`${matriz[i][j]}`);

    }
}