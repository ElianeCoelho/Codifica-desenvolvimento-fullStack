//precisa da lib prompt Sync
//npm install prompt-sync

const prompt = require('prompt-sync')()
let num1 = Number(prompt('insira o primeiro valor: '));
let num2 = Number(prompt('insira o segundo valor: '));
let operation = prompt('informe a operação desejada (+, -, *, /)');