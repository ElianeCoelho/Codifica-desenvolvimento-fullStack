const vendas = [
    { produto: 'Laptop', quantidade: 5, valor: 2500 },
    { produto: 'Celular', quantidade: 10, valor: 1200 },
    { produto: 'Headphones', quantidade: 8, valor: 300 },
    { produto: 'Teclado', quantidade: 15, valor: 150 }
  ];
  
  let valorTotal = 0;
  
  vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor;
  });
  
  console.log(`Valor total das vendas: R$${valorTotal.toFixed(2)}`);
  