function addEntry() {
  var entryInput = document.getElementById('entryInput');
  var entryList = document.getElementById('entryList');

  if (entryInput.value !== '') {
    var entry = document.createElement('div');
    entry.className = 'entry';
    entry.textContent = entryInput.value;
    entryList.appendChild(entry);
    entryInput.value = ''; // Limpa o campo de entrada após adicionar a entrada
  }
}