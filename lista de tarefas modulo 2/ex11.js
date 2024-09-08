const pedidos = [
    { cliente: 'Ana', produto: 'Laptop', quantidade: 2 },
    { cliente: 'Carlos', produto: 'Celular', quantidade: 5 },
    { cliente: 'Ana', produto: 'Headphones', quantidade: 1 },
    { cliente: 'Beatriz', produto: 'Teclado', quantidade: 3 },
    { cliente: 'Carlos', produto: 'Laptop', quantidade: 1 },
    { cliente: 'Ana', produto: 'Celular', quantidade: 3 }
  ];
  
  const quantidadePorCliente = {};
  
  pedidos.forEach(pedido => {
    if (quantidadePorCliente[pedido.cliente]) {
      quantidadePorCliente[pedido.cliente] += pedido.quantidade;
    } else {
      quantidadePorCliente[pedido.cliente] = pedido.quantidade;
    }
  });
  console.log('**Abaixo cada Cliente com quantidade de itens comprados');
  console.log(quantidadePorCliente);
  