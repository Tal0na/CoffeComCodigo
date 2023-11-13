const citaçõesMotivacionais = [
  "Acredite em você mesmo e tudo será possível.",
  "O sucesso normalmente vem para quem está ocupado demais para procurar por ele.",
  "Se você não está disposto a arriscar, esteja disposto a uma vida comum.",
  "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
  "Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.",
  "Você é capaz de mais do que imagina.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
];

function gerarCitação() {
  const indice = Math.floor(Math.random() * citaçõesMotivacionais.length);
  const citaçãoElement = document.getElementById('citação');
  citaçãoElement.textContent = `"${citaçõesMotivacionais[indice]}"`;
}