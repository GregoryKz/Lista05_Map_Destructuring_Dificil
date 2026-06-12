const alunos = [
  {
    nome: "Ana",
    notas: [8,9,10]
  },
  {
    nome: "Carlos",
    notas: [5,6,7]
  }
];

const resultado = alunos.map(
  ({ nome, notas }) => {

    const media =
      notas.reduce(
        (s,n) => s+n,
        0
      ) / notas.length;

    return {
      nome,
      media
    };

  }
);

console.log(resultado);