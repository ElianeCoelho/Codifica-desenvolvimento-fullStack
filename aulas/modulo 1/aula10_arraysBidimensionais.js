let fruitList = [];
let frutas = ['mamão', 'Laranja', 'Tomate'];

fruitList[0] = 'Maça';
fruitList[1] = 'Banana';
fruitList[2] = 'Melancia';
fruitList[3] = 'a';
fruitList[4] = 'Uva';

console.log(fruitList.indexOf('Morango'));
let index = fruitList.indexOf('Uva');

if(index == -1){
    console.log('Item não existe')
}else{
    console.log(`O index do item ${fruitList[index]} é ${index}`)
}

console.log(fruitList);

console.table(fruitList);

console.log(frutas[0]);

