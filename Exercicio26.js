const produtos = [
  {
    nome: "Notebook",
    preco: 3000,
    quantidade: 2
  },
  {
    nome: "Mouse",
    preco: 100,
    quantidade: 3
  }
];

const resultado = produtos.map(
  produto => ({
    ...produto,
    totalItem:
      produto.preco *
      produto.quantidade
  })
);

console.log(resultado);