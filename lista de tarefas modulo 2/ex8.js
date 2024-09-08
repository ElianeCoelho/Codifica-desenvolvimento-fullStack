const filmes = [
    { titulo: 'Homens de Preto', diretor: 'Barry Sonnenfeld', anoLancamento: 1997 },
    { titulo: 'À Procura da Felicidade', diretor: 'Gabriele Muccino', anoLancamento: 2006 },
    { titulo: 'Eu, Robô', diretor: 'Alex Proyas', anoLancamento: 2004 },
    { titulo: 'Independence Day', diretor: 'Roland Emmerich', anoLancamento: 1996 }
];

const titulos = [];

filmes.forEach(filme => {
    titulos.push(filme.titulo);
});

console.log(titulos);
