// Objeto empresa com a propriedade departamentos
const empresa = {
    departamentos: [
      {
        nome: 'Recursos Humanos',
        funcionarios: [
          { nome: 'Ana', cargo: 'Gerente de RH' },
          { nome: 'Carlos', cargo: 'Analista de RH' }
        ]
      },
      {
        nome: 'TI',
        funcionarios: [
          { nome: 'Beatriz', cargo: 'Desenvolvedora' },
          { nome: 'Diego', cargo: 'Analista de Sistemas' }
        ]
      },
      {
        nome: 'Financeiro',
        funcionarios: [
          { nome: 'Elena', cargo: 'Contadora' },
          { nome: 'Fabio', cargo: 'Assistente Financeiro' }
        ]
      }
    ]
  };
  
  // Usando for...in para iterar sobre os departamentos
  for (const index in empresa.departamentos) {
    const departamento = empresa.departamentos[index];
    
    // Usando for...of para iterar sobre os funcionários do departamento
    for (const funcionario of departamento.funcionarios) {
      console.log(`Departamento: ${departamento.nome}, Funcionário: ${funcionario.nome}`);
    }
  }
  