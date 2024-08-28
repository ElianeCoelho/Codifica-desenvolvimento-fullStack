const prompt = require('prompt-sync')();

function eTriangulo(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function tipoTriangulo(a, b, c) {
  if (a === b && b === c) {
    return "Equilátero";
  } else if (a === b || a === c || b === c) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

let a = parseFloat(prompt("Digite o valor do lado A: "));
let b = parseFloat(prompt("Digite o valor do lado B: "));
let c = parseFloat(prompt("Digite o valor do lado C: "));

if (eTriangulo(a, b, c)) {
  console.log(`Os lados fornecidos formam um triângulo ${tipoTriangulo(a, b, c)}.`);
} else {
  console.log("Os lados fornecidos não formam um triângulo.");
}
