document.addEventListener('DOMContentLoaded', function () {
  const studyGuide = [
    { nome: 'W3Schools', link: 'https://www.w3schools.com/' },
    { nome: 'MDN Web Docs', link: 'https://developer.mozilla.org/' },
    { nome: 'GitHub', link: 'https://github.com/' },
    { nome: 'Stack Overflow', link: 'https://stackoverflow.com/' },
    { nome: 'CSS Tricks', link: 'https://css-tricks.com/' },
    { nome: 'CodePen', link: 'https://codepen.io/' },
    { nome: 'freeCodeCamp', link: 'https://www.freecodecamp.org/' },
    { nome: 'Google Developers', link: 'https://developers.google.com/' },
  ];

  const studyGuideList = document.getElementById('study-guide');

  studyGuide.forEach(function (resource) {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = resource.link;
    anchor.target = '_blank';
    anchor.textContent = resource.nome;
    listItem.appendChild(anchor);
    studyGuideList.appendChild(listItem);
  });
});
