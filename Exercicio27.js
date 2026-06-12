const usuarios = [
  {
    id: 1,
    nome: "Ana"
  },
  {
    id: 2,
    nome: "Carlos"
  }
];

const resultado = usuarios.map(
  ({
    id: codigo,
    nome: usuario
  }) => ({
    codigo,
    usuario
  })
);

console.log(resultado);