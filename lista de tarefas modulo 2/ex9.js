const clientes = [
    { nome: 'Ana', idade: 28, cidade: 'São Paulo' },
    { nome: 'Carlos', idade: 35, cidade: 'Rio de Janeiro' },
    { nome: 'Beatriz', idade: 40, cidade: 'Curitiba' },
    { nome: 'Daniel', idade: 25, cidade: 'Belo Horizonte' },
    { nome: 'Eduarda', idade: 32, cidade: 'Fortaleza' }
  ];
  
  let contador = 0;
  
  clientes.forEach(cliente => {
    if (cliente.idade > 30) {
      contador++;
    }
  });
  
  console.log(`Número de clientes com mais de 30 anos: ${contador}`);
  