const estoque = [
    { produto: 'Laptop', quantidade: 5, minimo: 10 },
    { produto: 'Celular', quantidade: 15, minimo: 10 },
    { produto: 'Headphones', quantidade: 8, minimo: 10 },
    { produto: 'Teclado', quantidade: 12, minimo: 10 }
  ];
  
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2;
    }
  });
  
  console.log(estoque);
  