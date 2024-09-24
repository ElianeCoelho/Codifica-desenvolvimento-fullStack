let serie = {
    nome: "The Boys",
    genero: ["Ação", "Paródia", "Heróis"],
    numeroTemporadas: 4,
    status: "Em andamento",
    classificacao: 18,
    numeroEpsodios: {
        temp1: 10,
        temp2:10,
        temp3: 50
    },
    mostrarCaracteristicas: function(){
        return(`O nome da serie é: ${this.nome} e sua classificação é: ${this.classificacao}`);
    }
}

console.log(serie.mostrarCaracteristicas());

let atleta = {
    nome: "Lucas",
    esporte: "Voleybol",
    idade: 12,
}
atleta.nacionalidade = "Brasil";
atleta.celebrarVitoria = () => {console.log("GANHEI")}
console.log(atleta);
atleta.celebrarVitoria();

let obj1 = {
    nome : "Batom",
    qtd: 2,
}
let obj2 = obj1;
obj2.valor = 3.00;
//referência de memória. 
console.log(obj1);
console.log(obj2);
