const recursos = [
  { nome: 'W3Schools', link: 'https://www.w3schools.com/' },
  { nome: 'MDN Web Docs', link: 'https://developer.mozilla.org/' },
  { nome: 'GitHub', link: 'https://github.com/' },
  { nome: 'Stack Overflow', link: 'https://stackoverflow.com/' },
  { nome: 'CSS Tricks', link: 'https://css-tricks.com/' },
  { nome: 'CodePen', link: 'https://codepen.io/' },
  { nome: 'freeCodeCamp', link: 'https://www.freecodecamp.org/' },
  { nome: 'Google Developers', link: 'https://developers.google.com/' },
];

document.addEventListener('DOMContentLoaded', () => {
  const listaRecursos = document.getElementById('listaRecursos');

  recursos.forEach(recurso => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = recurso.link;
    link.textContent = recurso.nome;
    link.target = '_blank'; // Abre o link em uma nova guia/janela
    li.appendChild(link);
    listaRecursos.appendChild(li);
  });
});