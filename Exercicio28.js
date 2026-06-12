const matriz = [
  [1,2],
  [3,4]
];

const primeiraColuna =
  matriz.map(
    linha => linha[0]
  );

console.log(primeiraColuna);