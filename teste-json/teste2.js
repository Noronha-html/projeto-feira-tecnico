// Recuperar o objeto do localStorage
const objetoRecuperado = JSON.parse(localStorage.getItem("meuObjeto"));

// Verificar se o objeto foi recuperado com sucesso
if (objetoRecuperado && objetoRecuperado.nome) {
    // Selecionar o elemento <p>
    const pElement = document.getElementById("info");
    
    // Atualizar o conteúdo do <p> com o nome
    pElement.textContent = `Nome: ${objetoRecuperado.nome}`;
}