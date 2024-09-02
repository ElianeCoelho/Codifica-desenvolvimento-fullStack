//Crie um objeto carro com propriedades como marca, modelo,
//ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
//valores no console.

// Cria o objeto carro com propriedades
const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    cor: 'Azul'
  };
  
  // Itera sobre as propriedades do objeto usando for...in
  for (const propriedade in carro) {
    if (carro.hasOwnProperty(propriedade)) { // Verifica se a propriedade é do próprio objeto e não herdada
      console.log(`${propriedade}: ${carro[propriedade]}`);
    }
  }
  