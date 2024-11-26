let jsonString = `{
    "Personagens": {
      "Jogador": {
        "Nome": "Player",
        "Dano": 10,
        "Vida": 100,
        "Posicao": { "x": 400, "y": 300 }
      },
      "Bosses": {
        "boss1": {
          "Nome": "Cultista",
          "Dano": 2,
          "Vida": 50,
          "Posicao": { "x": 100, "y": 100 }
        }
      }
    }
  }`;
  
  let acesso = JSON.parse(jsonString);
  let Player = acesso.Personagens.Jogador;
  let boss1 = acesso.Personagens.Bosses.boss1;
  
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  
  function drawCharacter(character, color) {
      ctx.fillStyle = color;
      ctx.fillRect(character.Posicao.x, character.Posicao.y, 30, 30);
  }
  
  function updateStatus() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCharacter(Player, "blue");
      drawCharacter(boss1, "red");
      ctx.fillStyle = "black";
      ctx.fillText(`Vida do Player: ${Player.Vida}`, 10, 20);
      ctx.fillText(`Vida do Boss: ${boss1.Vida}`, 10, 40);
  }
  
  function moveBoss() {
      if (boss1.Posicao.x < Player.Posicao.x) {
          boss1.Posicao.x += 1; // Move boss para a direita
      } else if (boss1.Posicao.x > Player.Posicao.x) {
          boss1.Posicao.x -= 1; // Move boss para a esquerda
      }
  
      if (boss1.Posicao.y < Player.Posicao.y) {
          boss1.Posicao.y += 1; // Move boss para baixo
      } else if (boss1.Posicao.y > Player.Posicao.y) {
          boss1.Posicao.y -= 1; // Move boss para cima
      }
  }
  
  document.addEventListener("keydown", function(event) {
      const speed = 5;
  
      switch (event.key) {
          case "w":
              Player.Posicao.y -= speed; // Move para cima
              break;
          case "s":
              Player.Posicao.y += speed; // Move para baixo
              break;
          case "a":
              Player.Posicao.x -= speed; // Move para a esquerda
              break;
          case "d":
              Player.Posicao.x += speed; // Move para a direita
              break;
          case "Enter":
              attack();
              break;
      }
  
      updateStatus();
  });
  
  function attack() {
      // Verifica se o boss está perto do jogador
      const attackRange = 50; // Distância do ataque
      const dx = Player.Posicao.x - boss1.Posicao.x;
      const dy = Player.Posicao.y - boss1.Posicao.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
  
      if (distance <= attackRange) {
          boss1.Vida -= Player.Dano;
          if (boss1.Vida <= 0) {
              alert(`Você derrotou o ${boss1.Nome}!`);
              boss1.Vida = 0; // Para não mostrar vida negativa
          }
      } else {
          alert("O ataque errou!");
      }
  }

  function gameLoop() {
      moveBoss();
      updateStatus();
      requestAnimationFrame(gameLoop);
  }
  
  gameLoop();