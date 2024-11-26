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