const alunos = [
    { nome: 'Ana', nota1: 8, nota2: 7 },
    { nome: 'Carlos', nota1: 6, nota2: 9 },
    { nome: 'Mariana', nota1: 7.5, nota2: 8.5 },
    { nome: 'Pedro', nota1: 10, nota2: 9.5 }
  ];
  
  for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}`);
  }
  