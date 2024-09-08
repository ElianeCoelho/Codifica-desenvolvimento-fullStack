const produtos = [
    { nome: 'Notebook', preco: 3000, desconto: 0 },
    { nome: 'Smartphone', preco: 1500, desconto: 0 },
    { nome: 'Tablet', preco: 1200, desconto: 0 },
    { nome: 'Monitor', preco: 800, desconto: 0 }
  ];
  
  produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.10;  
    const novoPreco = produto.preco - produto.desconto;  
    console.log(`Produto: ${produto.nome}, Preço Original: R$${produto.preco}, Novo Preço: R$${novoPreco.toFixed(2)}`);
  });
  