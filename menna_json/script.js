document.getElementById('hp-form').addEventListener('submit', function(e) {
   e.preventDefault(); // Impede o recarregamento da página
   // Obter valores do formulário
   const name = document.getElementById('name').value;
   const hp = document.getElementById('hp').value;
   // Criar um objeto para os dados
   const characterData = {
       name: name,
       hp: parseInt(hp)
   };
   // Salvar o objeto como JSON no localStorage
   localStorage.setItem('characterData', JSON.stringify(characterData));
   // Exibir os dados salvos
   document.getElementById('output').innerText = `Nome: ${characterData.name}, HP: ${characterData.hp}`;
});