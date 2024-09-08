const funcionarios = [
    { nome: 'João', cargo: 'Analista de Sistemas', salario: 5000 },
    { nome: 'Maria', cargo: 'Desenvolvedora Frontend', salario: 7000 },
    { nome: 'Pedro', cargo: 'Gerente de Projetos', salario: 9000 },
    { nome: 'Ana', cargo: 'Desenvolvedora Backend', salario: 6500 }
  ];
  
  const salarioMinimo = 1412;
  
  for (const funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
      console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$${funcionario.salario}`);
    }
  }
  