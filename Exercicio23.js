const propriedade = "nome";

const usuario = {
  nome: "Gregory",
  idade: 25
};

const {
  [propriedade]: valor
} = usuario;

console.log(valor);