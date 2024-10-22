const nomeSalvo = localStorage.getItem('nome'); // Recupera o nome do localStorage
        if (nomeSalvo) {
            document.getElementById('nomeSalvo').textContent = `Nome: ${nomeSalvo}`; // Exibe o nome
        } else {
            document.getElementById('nomeSalvo').textContent = 'Nenhum nome salvo.';
        }