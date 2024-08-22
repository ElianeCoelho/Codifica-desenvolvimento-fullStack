console.log(10 < 5) && (10 > 2);
console.log(10 < 5) || (10 > 2);
//negação
console.log(10 < 5) && !(10 > 2);


let user = 'Maria';
let pwd = 123;

let autentication = user === 'Maria' && pwd ===123;
console.log(autentication);

const grade = 4;
if(grade >= 60){
    console.log('APROVADO');
}else {
    console.log('REPROVADO');
}

let age = 50
if((age >= 18) && (age <= 32)){
    console.log('Pode se inscrever no concurso.');
}else{
    console.log('Não pode se inscrever no concurso.');
}
//operador ternário
//,condicao> ? <se for verdade> : <se for falso>
//só para condições pequenas
let ternaryResult = (10 < 100) ? 'Verdadeira' : 'Falsa';
