const usuarios = [
  {
    nome: "Ana",
    telefone: "1111"
  },
  {
    nome: "Carlos"
  }
];

const resultado = usuarios.map(
  ({
    nome,
    telefone =
      "Não informado"
  }) => ({
    nome,
    telefone
  })
);

console.log(resultado);