//Implemente um programa que recebe uma nota de 0 
//a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" 
//utilizando if-else if.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classificarNota(nota) {
    if (nota < 0 || nota > 10) {
        console.log("Nota inválida. A nota deve estar entre 0 e 10.");
    } else if (nota >= 7) {
        console.log("Aprovado");
    } else if (nota >= 4) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}

rl.question('Digite a nota (0 a 10): ', (input) => {
    const nota = parseFloat(input);

    classificarNota(nota);
    rl.close();
});
