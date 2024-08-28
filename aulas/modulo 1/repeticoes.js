
const prompt = require('prompt-sync')()

let multiplier = Number(prompt('Informe o número que você quer saber tabuada: '));
for ( count =0; count <= 10; count++){
    console.log(`${multiplier} * ${count} =`, multiplier*count);
}

console.log("calcule numeros de 1 a 100");
for(let j= 1; j <=100; j++){
    console.log(j);
}

console.log("calcule numeros de 1 a 100 em ordem decrescente");

for(let j = 100; j >= 1; j--){
    console.log(j);
}