function adicionarTarefa() {
  const novaTarefa = document.getElementById('novaTarefa').value;
  if (novaTarefa !== '') {
    const listaTarefas = document.getElementById('listaTarefas');
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${novaTarefa}</span>
      <button onclick="removerTarefa(this)">Remover</button>
    `;
    listaTarefas.appendChild(li);
    document.getElementById('novaTarefa').value = '';
  }
}

function removerTarefa(botao) {
  const itemLista = botao.parentNode;
  itemLista.parentNode.removeChild(itemLista);
}