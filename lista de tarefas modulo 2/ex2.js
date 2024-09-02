//Crie um objeto livro com propriedades titulo, autor,
//anoPublicacao e genero. Verifique se a propriedade 
// editora existe no objeto usando for in. 
//Se não existir, adicione essa propriedade ao objeto.

const livro = {
    titulo: '1984',
    autor: 'George Orwell',
    anoPublicacao: 1949,
    genero: 'Distopia'
  };
  
  let propriedadeExiste = false;
  
  for (const propriedade in livro) {
    if (livro.hasOwnProperty(propriedade)) { // Verifica se a propriedade é do próprio objeto e não herdada
      if (propriedade === 'editora') {
        propriedadeExiste = true;
        break; 
      }
    }
  }
  
  if (!propriedadeExiste) {
    livro.editora = 'Companhia das Letras'; // Adiciona a propriedade 'editora' ao objeto
    console.log('Propriedade "editora" não encontrada. Adicionada ao objeto.');
  }
  
  console.log(livro);
  