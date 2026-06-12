const ids = [1,2,3];

const nomes = [
  "Ana",
  "Carlos",
  "Gregory"
];

const usuarios = ids.map(
  (id, index) => ({
    id,
    nome: nomes[index]
  })
);

console.log(usuarios);