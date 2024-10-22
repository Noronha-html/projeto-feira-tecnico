document.getElementById('salvar').onclick = function() {
    const nome = document.getElementById('nome').value;
    localStorage.setItem('nome', nome); // Salva o nome no localStorage
    alert('Nome salvo!');
}