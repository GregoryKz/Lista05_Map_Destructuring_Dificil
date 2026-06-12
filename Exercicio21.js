const links = [
  {
    texto: "Google",
    url: "https://google.com"
  },
  {
    texto: "GitHub",
    url: "https://github.com"
  }
];

const html = links.map(
  ({ texto, url }) =>
    `<a href="${url}">${texto}</a>`
);

console.log(html);