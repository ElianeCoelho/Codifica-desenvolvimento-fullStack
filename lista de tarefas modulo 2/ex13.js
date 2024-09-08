// Objeto carrinho com uma propriedade itens
const carrinho = {
    itens: [
      { nome: 'Laptop', quantidade: 2, precoUnitario: 2500 },
      { nome: 'Celular', quantidade: 1, precoUnitario: 1200 },
      { nome: 'Headphones', quantidade: 4, precoUnitario: 300 },
      { nome: 'Teclado', quantidade: 1, precoUnitario: 150 }
    ]
  };
  
  let valorTotal = 0;
  
  carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
  });
  
  console.log(`Valor total do carrinho: R$${valorTotal.toFixed(2)}`);
  