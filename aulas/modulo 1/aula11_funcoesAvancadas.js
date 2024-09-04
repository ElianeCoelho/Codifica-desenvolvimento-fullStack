function showFunction(sucessCallback, errorCallback) {
    if (false) {
        sucessCallback('Requisição bem sucedida');
    } else {
        errorCallback('Erro na requisição');
    }
}

let sucessCallback = function (message) {
    console.log(message);
}
let errorCallback = (message) => {
console.log(message);
}

showFunction(sucessCallback, errorCallback);

//
console.log('Eliane'.length);
console.log('Eliane'.charAt(2));
console.log('Eliane'.indexOf('a'));

//substring
console.log('Eliane'.substr(1,2))

let pais = "Brasil";
//tudo minúsculo
console.log(pais.toLowerCase());
//tudo maiúscula
console.log(pais.toUpperCase());
//remove espações em branco
console.log('-', pais.trim()+'-');

//arredondamento
console.log(Math.ceil(10.73));
console.log(Math.floor(10.73));
console.log(Math.round(10.73));
//raiz quadrada
console.log(Math.sqrt(100));
//potencia
console.log(Math.pow(100, 2));
// raiz cúbica
console.log(Math.cbrt(100));
//numero absoluto
console.log(Math.abs(100.20));

//numeros aleatórios
console.log((Math.random() * 10).toFixed(2));

//fixar em duas casas decimais
console.log((Math.random().toFixed(2)));

console.log("********* Datas ***************");
//datas
let date = new Date();
console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());

console.log(date.getDate()+ 720);
console.log(date.toString());








