// Função para salvar o nome
document.getElementById('salvar').onclick = function() {
    const nome = document.getElementById('nome').value;
    localStorage.setItem('nome', nome); // Salva o nome no localStorage
    exibirNomeSalvo(); // Atualiza a exibição do nome salvo
}

// Função para exibir o nome salvo
function exibirNomeSalvo() {
    const nomeSalvo = localStorage.getItem('nome');
    if (nomeSalvo) {
        document.getElementById('nomeSalvo').textContent = `Nome: ${nomeSalvo}`;
    } else {
        document.getElementById('nomeSalvo').textContent = 'Nenhum nome salvo.';
    }
}

// Função para exibir informações de funcionários
function exibirFuncionarios() {
    let text = '{"employees":[' +
    '{"firstName":"Luz","lastName":"Estrela"},' +
    '{"firstName":"Billi","lastName":"bruto"},' +
    '{"firstName":"Trem","lastName":"Bala"}]}';

    const obj = JSON.parse(text);
    document.getElementById("demo").innerHTML =
        obj.employees.map(emp => `${emp.firstName} ${emp.lastName}`).join('<br>');
}

// Inicializa a exibição do nome salvo e os funcionários
exibirNomeSalvo();
exibirFuncionarios();