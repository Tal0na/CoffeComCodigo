let tempo = 0;
let cronometro;

function iniciarCronometro() {
  cronometro = setInterval(() => {
    tempo++;
    atualizarCronometro();
  }, 1000);
}

function pausarCronometro() {
  clearInterval(cronometro);
}

function zerarCronometro() {
  tempo = 0;
  atualizarCronometro();
  pausarCronometro();
}

function atualizarCronometro() {
  const horas = Math.floor(tempo / 3600);
  const minutos = Math.floor((tempo % 3600) / 60);
  const segundos = tempo % 60;

  const formatoTempo = `${zeroEsquerda(horas)}:${zeroEsquerda(minutos)}:${zeroEsquerda(segundos)}`;
  document.getElementById('cronometro').innerText = formatoTempo;
}

function zeroEsquerda(numero) {
  return numero < 10 ? `0${numero}` : numero;
}