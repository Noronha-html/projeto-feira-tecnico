document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('dataForm');
    const dataDisplay = document.getElementById('dataDisplay');
    // Função para carregar dados armazenados
    function loadData() {
      const storedData = JSON.parse(localStorage.getItem('userData')) || [];
      displayData(storedData);
    }
    // Função para exibir os dados na tela
    function displayData(data) {
      dataDisplay.innerHTML = ''; // Limpa o conteúdo
      data.forEach((item, index) => {
        dataDisplay.innerHTML += `
   <div>
   <p><strong>Nome:</strong> ${item.name}</p>
   <p><strong>Email:</strong> ${item.email}</p>
   <p><strong>Idade:</strong> ${item.age}</p>
   <button onclick="deleteData(${index})">Deletar</button>
   </div>
   <hr>`;
      });
    }
    // Função para salvar os dados no localStorage
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value
      };
      let storedData = JSON.parse(localStorage.getItem('userData')) || [];
      storedData.push(formData);
      localStorage.setItem('userData', JSON.stringify(storedData));
      loadData();  // Atualiza os dados na tela
      form.reset(); // Limpa o formulário
    });
    // Função para deletar dados
    window.deleteData = function (index) {
      let storedData = JSON.parse(localStorage.getItem('userData')) || [];
      storedData.splice(index, 1);  // Remove o item do array
      localStorage.setItem('userData', JSON.stringify(storedData));
      loadData();  // Atualiza os dados na tela
    };
    // Carregar dados ao iniciar
    loadData();
   });

     // Configurando a atualização automática
     setInterval(() => {
      incrementarValor();
  }, 2000); // Atualiza a cada 2 segundos