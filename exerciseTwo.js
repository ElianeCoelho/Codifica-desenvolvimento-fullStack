/**
 Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else. 
 */

function classificaIdade(idade) {
    if (idade >= 0 && idade <= 12) {
        console.log("Criança");
    } else if (idade >= 13 && idade <= 17) {
        console.log("Adolescente");
    } else if (idade >= 18 && idade <= 64) {
        console.log("Adulto");
    } else if (idade >= 65) {
        console.log("Idoso");
    } else {
        console.log("Idade inválida");
    }
}

classificaIdade(10);
classificaIdade(57);
classificaIdade(72);

