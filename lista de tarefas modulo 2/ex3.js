function filtrarPropriedadesPorValor(produto, valorMinimo) {
    let resultado = {};
  
    for (let propriedade in produto) {
      if (produto.hasOwnProperty(propriedade) && typeof produto[propriedade] === 'number') {
        if (produto[propriedade] > valorMinimo) {
          resultado[propriedade] = produto[propriedade];
        }
      }
    }
  
    return resultado;
  }
  
  const produto = {
    preco: 120,
    peso: 50,
    quantidade: 10,
    desconto: 5,
    nome: "Produto A",
    ativo: true
  };
  
  const valorMinimo = 20;
  const resultado = filtrarPropriedadesPorValor(produto, valorMinimo);
  
  console.log(resultado); 