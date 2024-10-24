const nomeInput = document.getElementById("nomeInput");

        // Salva o nome como um objeto no localStorage ao digitar
        nomeInput.addEventListener("input", () => {
            const nome = nomeInput.value;
            const objeto = { nome: nome }; // Cria um objeto
            localStorage.setItem("Nomes", JSON.stringify(objeto)); // Salva como JSON
        });
 