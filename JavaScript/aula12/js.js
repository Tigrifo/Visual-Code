// Pega os elementos
const modal = document.getElementById('meuModal');
const btn = document.getElementById('abrirModal');
const span = document.getElementsByClassName('fechar')[0];

// Abre o modal
btn.onclick = function() {
  modal.style.display = 'block';
}

// Fecha ao clicar no X
span.onclick = function() {
  modal.style.display = 'none';
}

// Fecha ao clicar fora do conteúdo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
