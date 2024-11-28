//personagem
let dx; //direção do eixo x
let dy; //direção do eixo y
let px; //posição final do eixo x
let py; //posição final do eixo y
let vel; //velocidade
let playerDano; //dano do player
let PlayerAcertou; //declara se o player acertou ou não o ataque
let atacou;
let ultimaDirecao; //define a última direção que o personagem foi movimentado
let objetoPlayer; //personagem
let attackLeft; //ataque do personagem para a esquerda
let attackRight; //ataque do personagem para a direita
let attackUp; //ataque do personagem para cima
let attackDown; //ataque do personagem para 
let attackingLeft; //ataca para a esquerda
let attackingRight; //ataca para a direita
let attackingUp; //ataca para cima
let attackingDown; //ataca para baixo
let attackingLeftId;
let attackingRightId;
let attackingUpId;
let attackingDownId;
let tmpAtaque; //atualiza os frames do ataque constantemente

//objetos e funcionalidades
let tmpFuncionalidades; //intervalo de tempo até executar de novo a função
let tmpAtualizarSprite; //intervalo de tempo até executar de novo a função
let paredeD; //parede da direita
let paredeE; //parede da esquerda
let paredeC; //parede de cima
let paredeB; //parede de baixo
let tecA = true; //declara a tecla A como verdadeira
let tecD = true; //declara a tecla D como verdadeira
let tecW = true; //declara a tecla W como verdadeira
let tecS = true; //declara a tecla S como verdadeira
let quadTop; //parte de cima do quadrado
let quadBottom; //parte de baixo do quadrado
let quadLeft; //parte da esquerda do quadrado
let quadRight; //parte da direita do quadrado
let portaLeft; //porta da esquerda
let portaRight; //porta da direita
let portaTop; //porta de cima
let portaDown; //porta de baixo

//boss
var lifeBoss; //vida do boss
let boss_cultista_wrapper; //div que envolve o boss cultista para facilitar o movimento
let boss_cultista; //boss cultista
let boss_cultista_Left; //esquerda do boss cultista
let boss_cultista_Right; //direita do boss cultista
let boss_cultista_Top; //em cima do boss cultista
let boss_cultista_Bottom; //em baixo do boss cultista
let velBossCultista; //velocidade do boss cultista
let dxBossCultista; //direção do boss no eixo x
let dyBossCultista; //direção do boss no eixo y
let pxBossCultista; //posição do boss no eixo x
let pyBossCultista; //posição do boss no eixo y
let bossMovimentando; //verifica se o boss está se movimentando
let bossMovimentandoLeft;
let bossMovimentandoRight;
let bossMovimentandoUp;
let bossMovimentandoDown;

//inicia as variáveis
function inicia () {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 1;
    lifeBoss = 10;
    playerDano = 1;
    PlayerAcertou = false;
    atacou = false;

    ultimaDirecao = null;

    attackLeft = {
        pressed : false,
        released : true,
    }
    attackRight = {
        pressed : false,
        released : true,
    }
    attackUp = {
        pressed : false,
        released : true,
    }
    attackDown = {
        pressed : false,
        released : true,
    }

    attackingLeft = document.querySelector('.not_attacking-left');
    attackingRight = document.querySelector('.not_attacking-right');
    attackingUp = document.querySelector('.not_attacking-up');
    attackingDown = document.querySelector('.not_attacking-down');

    attackingLeftId = document.getElementById('attackingLeft');
    attackingRightId = document.getElementById('attackingRight');
    attackingUpId = document.getElementById('attackingUp');
    attackingDownId = document.getElementById('attackingDown');
    
    tmpFuncionalidades = setInterval(funcionalidades, 1);

    tmpAtualizarSprite = setInterval(atualizarSprite, 1)

    objetoPlayer = document.getElementById('player');

    document.addEventListener('keydown', teclaBaixo);
    document.addEventListener('keyup', teclaCima);

    document.addEventListener('keydown', atacar);
    document.addEventListener('keyup', pararAtacar);

    paredeE = document.getElementById('paredeE');
    paredeD = document.getElementById('paredeD');
    paredeC = document.getElementById('paredeC');
    paredeB = document.getElementById('paredeB');

    quadTop = document.getElementById('quadTop');
    quadBottom = document.getElementById('quadBottom');
    quadLeft = document.getElementById('quadLeft');
    quadRight = document.getElementById('quadRight');

    portaDown = document.getElementById('portaDown');
    portaTop = document.getElementById('portaTop');
    portaRight = document.getElementById('portaRight');

    boss_cultista_wrapper = document.getElementById('boss_cultista-wrapper')
    boss_cultista = document.getElementById('boss_cultista');
    boss_cultista_Left = document.getElementById('boss_cultista-left');
    boss_cultista_Right = document.getElementById('boss_cultista-right');
    boss_cultista_Top = document.getElementById('boss_cultista-top');
    boss_cultista_Bottom = document.getElementById('boss_cultista-bottom');

    velBossCultista = 0.5;

    dxBossCultista = 0;
    dyBossCultista = 0;
    pxBossCultista = 0;
    pyBossCultista = 0;

    bossMovimentando = true;
    bossMovimentandoLeft = false;
    bossMovimentandoRight = false;
    bossMovimentandoUp = false;
    bossMovimentandoDown = false;
};

//movimenta o personagem
function teclaBaixo (event) {
    let tecla = event.keyCode;
    if (tecla == 65 && tecA) {
        dx = -1;
        ultimaDirecao = 'left';
    } else if (tecla == 68 && tecD) {
        dx = 1;
        ultimaDirecao = 'right';
    } else if (tecla == 87 && tecW) {
        dy = -1;
        ultimaDirecao = 'up';
    } else if (tecla == 83 && tecS) {
        dy = 1;
        ultimaDirecao = 'down';
    }
};

//para de movimentar
function teclaCima (event) {
    let tecla = event.keyCode;
    if (tecla == 65) {
        dx = 0;
        ultimaDirecao = 'leftStatic';
    } else if (tecla == 68) {
        dx = 0;
        ultimaDirecao = 'rightStatic';
    } else if (tecla == 87) {
        dy = 0;
        ultimaDirecao = 'upStatic';
    } else if (tecla == 83) {
        dy = 0;
        ultimaDirecao = 'downStatic';
    }
};

//atualiza o sprite
function atualizarSprite () {
    switch (ultimaDirecao) {
        case 'left':
            objetoPlayer.classList.remove('player');
            objetoPlayer.classList.remove('movingLeft');
            objetoPlayer.classList.remove('movingRight');
            objetoPlayer.classList.remove('movingUp');
            objetoPlayer.classList.remove('movingDown');
            objetoPlayer.classList.remove('staticLeft');
            objetoPlayer.classList.remove('staticRight');
            objetoPlayer.classList.remove('staticUp');
            objetoPlayer.classList.remove('staticDown');
            objetoPlayer.classList.add('movingLeft');
            break;
        case 'right':
            objetoPlayer.classList.remove('player');
            objetoPlayer.classList.remove('movingLeft');
            objetoPlayer.classList.remove('movingRight');
            objetoPlayer.classList.remove('movingUp');
            objetoPlayer.classList.remove('movingDown');
            objetoPlayer.classList.remove('staticLeft');
            objetoPlayer.classList.remove('staticRight');
            objetoPlayer.classList.remove('staticUp');
            objetoPlayer.classList.remove('staticDown');
            objetoPlayer.classList.add('movingRight');
            break;
        case 'up':
            objetoPlayer.classList.remove('player');
            objetoPlayer.classList.remove('movingLeft');
            objetoPlayer.classList.remove('movingRight');
            objetoPlayer.classList.remove('movingUp');
            objetoPlayer.classList.remove('movingDown');
            objetoPlayer.classList.remove('staticLeft');
            objetoPlayer.classList.remove('staticRight');
            objetoPlayer.classList.remove('staticUp');
            objetoPlayer.classList.remove('staticDown');
            objetoPlayer.classList.add('movingUp');
            break;
        case 'down':
            objetoPlayer.classList.remove('player');
            objetoPlayer.classList.remove('movingLeft');
            objetoPlayer.classList.remove('movingRight');
            objetoPlayer.classList.remove('movingUp');
            objetoPlayer.classList.remove('movingDown');
            objetoPlayer.classList.remove('staticLeft');
            objetoPlayer.classList.remove('staticRight');
            objetoPlayer.classList.remove('staticUp');
            objetoPlayer.classList.remove('staticDown');
            objetoPlayer.classList.add('movingDown');
            break;
        case 'leftStatic':
            objetoPlayer.classList.remove('player');
            objetoPlayer.classList.remove('movingLeft');
            objetoPlayer.classList.remove('movingRight');
            objetoPlayer.classList.remove('movingUp');
            objetoPlayer.classList.remove('movingDown');
            objetoPlayer.classList.remove('staticLeft');
            objetoPlayer.classList.remove('staticRight');
            objetoPlayer.classList.remove('staticUp');
            objetoPlayer.classList.remove('staticDown');
            objetoPlayer.classList.add('staticLeft');
            break;
        case 'rightStatic':
            objetoPlayer.classList.remove('player');
            objetoPlayer.classList.remove('movingLeft');
            objetoPlayer.classList.remove('movingRight');
            objetoPlayer.classList.remove('movingUp');
            objetoPlayer.classList.remove('movingDown');
            objetoPlayer.classList.remove('staticLeft');
            objetoPlayer.classList.remove('staticRight');
            objetoPlayer.classList.remove('staticUp');
            objetoPlayer.classList.remove('staticDown');
            objetoPlayer.classList.add('staticRight');
            break;
        case 'upStatic':
            objetoPlayer.classList.remove('player');
            objetoPlayer.classList.remove('movingLeft');
            objetoPlayer.classList.remove('movingRight');
            objetoPlayer.classList.remove('movingUp');
            objetoPlayer.classList.remove('movingDown');
            objetoPlayer.classList.remove('staticLeft');
            objetoPlayer.classList.remove('staticRight');
            objetoPlayer.classList.remove('staticUp');
            objetoPlayer.classList.remove('staticDown');
            objetoPlayer.classList.add('staticUp');
            break;
        case 'downStatic':
            objetoPlayer.classList.remove('player');
            objetoPlayer.classList.remove('movingLeft');
            objetoPlayer.classList.remove('movingRight');
            objetoPlayer.classList.remove('movingUp');
            objetoPlayer.classList.remove('movingDown');
            objetoPlayer.classList.remove('staticLeft');
            objetoPlayer.classList.remove('staticRight');
            objetoPlayer.classList.remove('staticUp');
            objetoPlayer.classList.remove('staticDown');
            objetoPlayer.classList.add('staticDown');
            break;
    };
};

//declara a velocidade do personagem e outras funionalidades
function funcionalidades () {
    px += dx * vel;
    py += dy * vel;

    objetoPlayer.style.left = px + 'px';
    objetoPlayer.style.top = py + 'px';

    pxBossCultista += dxBossCultista * velBossCultista;
    pyBossCultista += dyBossCultista * velBossCultista;

    boss_cultista_wrapper.style.left = pxBossCultista + 'px';
    boss_cultista_wrapper.style.top = pyBossCultista + 'px';

    detectarColisaoParedeE__quadRight('player', 'paredeE', 'quadRight');
    detectarColisaoParedeD__quadLeft('player', 'paredeD', 'quadLeft');
    detectarColisaoParedeC__quadBottom('player', 'paredeC', 'quadBottom');
    detectarColisaoParedeB__quadTop('player', 'paredeB', 'quadTop');

    detectarColisaoBossLeft('player', 'boss_cultista-left');
    detectarColisaoBossRight('player', 'boss_cultista-right');
    detectarColisaoBossTop('player', 'boss_cultista-top');
    detectarColisaoBossBottom('player', 'boss_cultista-bottom');

    (detectarColisaoBossLeft__ParedeE__quadRight('boss_cultista-left', 'paredeE', 'quadRight') == true)? bossMovimentandoLeft = false : bossMovimentandoLeft = true;
    (detectarColisaoBossRight__ParedeD__quadLeft('boss_cultista-right', 'paredeD', 'quadLeft') == true)? bossMovimentandoRight = false : bossMovimentandoRight = true;
    /*detectarColisaoBossTop__ParedeC__quadBottom('boss_cultista-top', 'paredeC', 'quadBottom');
    detectarColisaoBossBottom__ParedeB__quadTop('boss_cultista-bottom', 'paredeB', 'quadTop');*/

    detectarColisaoPortaTop('player', 'portaTop');
    detectarColisaoPortaDown('player', 'portaDown');
    detectarColisaoPortaRight('player', 'portaRight');

    playerAttackLeft('player');
    playerAttackRight('player');
    playerAttackUp('player');
    playerAttackDown('player');
 
    detectarColisaoAtaqueLeft('attackingLeft', 'boss_cultista-right');
    detectarColisaoAtaqueRight('attackingRight', 'boss_cultista-left');
    detectarColisaoAtaqueUp('attackingUp', 'boss_cultista-bottom');
    detectarColisaoAtaqueDown('attackingDown', 'boss_cultista-top');

    danoAoBoss();
    
    //movimentarBoss('player', 'boss_cultista-wrapper');

   // console.log(detectarColisaoParedeE__quadRight__bossRight('player', 'paredeE', 'quadRight', 'boss_cultista-right'));
};

//detecta colisão na parede esquerda
function detectarColisaoParedeE__quadRight(idObjeto1, idObjeto2, idObjeto3) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeE = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadRight = document.getElementById(idObjeto3).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_parede_E = [{x : paredeE.left, y : paredeE.top}, 
                           {x : paredeE.left + paredeE.width, y : paredeE.top},
                           {x : paredeE.left + paredeE.width, y : paredeE.top + paredeE.height},
                           {x : paredeE.left, y : paredeE.top + paredeE.height}];

    let pontos_quad_Right = [{x : quadRight.left, y : quadRight.top}, 
                             {x : quadRight.left + quadRight.width, y : quadRight.top},
                             {x : quadRight.left + quadRight.width, y : quadRight.top + quadRight.height},
                             {x : quadRight.left, y : quadRight.top + quadRight.height}];

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
    ((pontos_Player[indice].x >= paredeE.left && pontos_Player[indice].x <= paredeE.left + paredeE.width && 
        pontos_Player[indice].y >= paredeE.top && pontos_Player[indice].y <= paredeE.top + paredeE.height)) ||

    ((pontos_parede_E[indice].x >= objetoPlayer.left && pontos_parede_E[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_parede_E[indice].y >= objetoPlayer.top && pontos_parede_E[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= quadRight.left && pontos_Player[indice].x <= quadRight.left + quadRight.width && 
        pontos_Player[indice].y >= quadRight.top && pontos_Player[indice].y <= quadRight.top + quadRight.height)) ||

    ((pontos_quad_Right[indice].x >= objetoPlayer.left && pontos_quad_Right[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_quad_Right[indice].y >= objetoPlayer.top && pontos_quad_Right[indice].y <= objetoPlayer.top + objetoPlayer.height))
        ? colidiu = true : indice ++;
        tecA = false;

        if (colidiu == true && tecA == false) {
            dx = 0;
        } else {
            tecA = true;
        };

    return colidiu;
};

//detecta colisão na parede direita
function detectarColisaoParedeD__quadLeft(idObjeto1, idObjeto2, idObjeto3) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeD = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadLeft = document.getElementById(idObjeto3).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_parede_D = [{x : paredeD.left, y : paredeD.top}, 
                           {x : paredeD.left + paredeD.width, y : paredeD.top},
                           {x : paredeD.left + paredeD.width, y : paredeD.top + paredeD.height},
                           {x : paredeD.left, y : paredeD.top + paredeD.height}];

    let pontos_quad_Left = [{x : quadLeft.left, y : quadLeft.top}, 
                            {x : quadLeft.left + quadLeft.width, y : quadLeft.top},
                            {x : quadLeft.left + quadLeft.width, y : quadLeft.top + quadLeft.height},
                            {x : quadLeft.left, y : quadLeft.top + quadLeft.height}];


    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= paredeD.left && pontos_Player[indice].x <= paredeD.left + paredeD.width && 
        pontos_Player[indice].y >= paredeD.top && pontos_Player[indice].y <= paredeD.top + paredeD.height)) ||

        ((pontos_parede_D[indice].x >= objetoPlayer.left && pontos_parede_D[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_parede_D[indice].y >= objetoPlayer.top && pontos_parede_D[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= quadLeft.left && pontos_Player[indice].x <= quadLeft.left + quadLeft.width && 
        pontos_Player[indice].y >= quadLeft.top && pontos_Player[indice].y <= quadLeft.top + quadLeft.height)) ||
    
        ((pontos_quad_Left[indice].x >= objetoPlayer.left && pontos_quad_Left[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_quad_Left[indice].y >= objetoPlayer.top && pontos_quad_Left[indice].y <= objetoPlayer.top + objetoPlayer.height))
        ? colidiu = true : indice ++;
    tecD = false;

    if (colidiu == true && tecD == false) {
        dx = 0;
    } else {
        tecD = true;
    };

    return colidiu;
}

//detecta colisão na parede de cima
function detectarColisaoParedeC__quadBottom(idObjeto1, idObjeto2, idObjeto3) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeC = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadBottom = document.getElementById(idObjeto3).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_parede_C = [{x : paredeC.left, y : paredeC.top}, 
                           {x : paredeC.left + paredeC.width, y : paredeC.top},
                           {x : paredeC.left + paredeC.width, y : paredeC.top + paredeC.height},
                           {x : paredeC.left, y : paredeC.top + paredeC.height}];

    let pontos_quad_Bottom = [{x : quadBottom.left, y : quadBottom.top}, 
                              {x : quadBottom.left + quadBottom.width, y : quadBottom.top},
                              {x : quadBottom.left + quadBottom.width, y : quadBottom.top + quadBottom.height},
                              {x : quadBottom.left, y : quadBottom.top + quadBottom.height}];

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= paredeC.left && pontos_Player[indice].x <= paredeC.left + paredeC.width && 
        pontos_Player[indice].y >= paredeC.top && pontos_Player[indice].y <= paredeC.top + paredeC.height)) ||

        ((pontos_parede_C[indice].x >= objetoPlayer.left && pontos_parede_C[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_parede_C[indice].y >= objetoPlayer.top && pontos_parede_C[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= quadBottom.left && pontos_Player[indice].x <= quadBottom.left + quadBottom.width && 
            pontos_Player[indice].y >= quadBottom.top && pontos_Player[indice].y <= quadBottom.top + quadBottom.height)) ||
    
        ((pontos_quad_Bottom[indice].x >= objetoPlayer.left && pontos_quad_Bottom[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_quad_Bottom[indice].y >= objetoPlayer.top && pontos_quad_Bottom[indice].y <= objetoPlayer.top + objetoPlayer.height))
        ? colidiu = true : indice ++;
    tecW = false;

    if (colidiu == true && tecW == false) {
        dy = 0;
    } else {
        tecW = true;
    };

    return colidiu;
}

//detecta colisão na parede de baixo e na parte de cima de um objeto
function detectarColisaoParedeB__quadTop(idObjeto1, idObjeto2, idObjeto3) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeB = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadTop = document.getElementById(idObjeto3).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_parede_B = [{x : paredeB.left, y : paredeB.top}, 
                           {x : paredeB.left + paredeB.width, y : paredeB.top},
                           {x : paredeB.left + paredeB.width, y : paredeB.top + paredeB.height},
                           {x : paredeB.left, y : paredeB.top + paredeB.height}];

    let pontos_quad_Top = [{x : quadTop.left, y : quadTop.top}, 
                           {x : quadTop.left + quadTop.width, y : quadTop.top},
                           {x : quadTop.left + quadTop.width, y : quadTop.top + quadTop.height},
                           {x : quadTop.left, y : quadTop.top + quadTop.height}];

    let indice = 0;
    let colidiu = false

    while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= paredeB.left && pontos_Player[indice].x <= paredeB.left + paredeB.width && 
        pontos_Player[indice].y >= paredeB.top && pontos_Player[indice].y <= paredeB.top + paredeB.height)) ||

        ((pontos_parede_B[indice].x >= objetoPlayer.left && pontos_parede_B[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_parede_B[indice].y >= objetoPlayer.top && pontos_parede_B[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= quadTop.left && pontos_Player[indice].x <= quadTop.left + quadTop.width && 
            pontos_Player[indice].y >= quadTop.top && pontos_Player[indice].y <= quadTop.top + quadTop.height)) ||
    
        ((pontos_quad_Top[indice].x >= objetoPlayer.left && pontos_quad_Top[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_quad_Top[indice].y >= objetoPlayer.top && pontos_quad_Top[indice].y <= objetoPlayer.top + objetoPlayer.height))
        ? colidiu = true : indice ++;
    tecS = false;

    if (colidiu == true && tecS == false) {
        dy = 0;
    } else {
        tecS = true;
    };

    return colidiu;
};

//detecta colisão com os bosses
function detectarColisaoBossLeft(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let boss_cultista_Left = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_boss_cultista_Left = [{x : boss_cultista_Left.left, y : boss_cultista_Left.top}, 
                                     {x : boss_cultista_Left.left + boss_cultista_Left.width, y : boss_cultista_Left.top},
                                     {x : boss_cultista_Left.left + boss_cultista_Left.width, y : boss_cultista_Left.top + boss_cultista_Left.height},
                                     {x : boss_cultista_Left.left, y : boss_cultista_Left.top + boss_cultista_Left.height}];

    let colidiuBossLeft = false;
    let indice = 0;

    while (colidiuBossLeft == false && indice < 3)
        ((pontos_Player[indice].x >= boss_cultista_Left.left && pontos_Player[indice].x <= boss_cultista_Left.left + boss_cultista_Left.width && 
        pontos_Player[indice].y >= boss_cultista_Left.top && pontos_Player[indice].y <= boss_cultista_Left.top + boss_cultista_Left.height)) ||
        
        ((pontos_boss_cultista_Left[indice].x >= objetoPlayer.left && pontos_boss_cultista_Left[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_boss_cultista_Left[indice].y >= objetoPlayer.top && pontos_boss_cultista_Left[indice].y <= objetoPlayer.top + objetoPlayer.height))
        ? colidiuBossLeft = true : indice ++;
        tecD = false;

    if (tecD == false && colidiuBossLeft == true) {
        dx = 0;
        bossMovimentando = false;
    } else if (colidiuBossLeft == false && detectarColisaoParedeD__quadLeft('player', 'paredeD', 'quadLeft') == false) {
        tecD = true;
        bossMovimentando = true;
    }

    return colidiuBossLeft;
}

function detectarColisaoBossRight(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let boss_cultista_Right = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_boss_cultista_Right = [{x : boss_cultista_Right.left, y : boss_cultista_Right.top}, 
                                     {x : boss_cultista_Right.left + boss_cultista_Right.width, y : boss_cultista_Right.top},
                                     {x : boss_cultista_Right.left + boss_cultista_Right.width, y : boss_cultista_Right.top + boss_cultista_Right.height},
                                     {x : boss_cultista_Right.left, y : boss_cultista_Right.top + boss_cultista_Right.height}];

    let colidiuBossRight = false;
    let indice = 0;

    while (colidiuBossRight == false && indice < 3)
        ((pontos_Player[indice].x >= boss_cultista_Right.left && pontos_Player[indice].x <= boss_cultista_Right.left + boss_cultista_Right.width && 
        pontos_Player[indice].y >= boss_cultista_Right.top && pontos_Player[indice].y <= boss_cultista_Right.top + boss_cultista_Right.height)) ||
        
        ((pontos_boss_cultista_Right[indice].x >= objetoPlayer.left && pontos_boss_cultista_Right[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_boss_cultista_Right[indice].y >= objetoPlayer.top && pontos_boss_cultista_Right[indice].y <= objetoPlayer.top + objetoPlayer.height))
        ? colidiuBossRight = true : indice ++;
        tecA = false;

    if (tecA == false && colidiuBossRight == true) {
        dx = 0;
        bossMovimentando = false;
    } else if (colidiuBossRight == false && detectarColisaoParedeE__quadRight('player', 'paredeE', 'quadRight') == false) {
        tecA = true;
        bossMovimentando = true;
    }

    return colidiuBossRight;
}

function detectarColisaoBossTop(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let boss_cultista_Top = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_boss_cultista_Top = [{x : boss_cultista_Top.left, y : boss_cultista_Top.top}, 
                                     {x : boss_cultista_Top.left + boss_cultista_Top.width, y : boss_cultista_Top.top},
                                     {x : boss_cultista_Top.left + boss_cultista_Top.width, y : boss_cultista_Top.top + boss_cultista_Top.height},
                                     {x : boss_cultista_Top.left, y : boss_cultista_Top.top + boss_cultista_Top.height}];

    let colidiuBossTop = false;
    let indice = 0;

    while (colidiuBossTop == false && indice < 3)
        ((pontos_Player[indice].x >= boss_cultista_Top.left && pontos_Player[indice].x <= boss_cultista_Top.left + boss_cultista_Top.width && 
        pontos_Player[indice].y >= boss_cultista_Top.top && pontos_Player[indice].y <= boss_cultista_Top.top + boss_cultista_Top.height)) ||
        
        ((pontos_boss_cultista_Top[indice].x >= objetoPlayer.left && pontos_boss_cultista_Top[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_boss_cultista_Top[indice].y >= objetoPlayer.top && pontos_boss_cultista_Top[indice].y <= objetoPlayer.top + objetoPlayer.height))
        ? colidiuBossTop = true : indice ++;
        tecS = false;

    if (tecS == false && colidiuBossTop == true) {
        dy = 0;
        bossMovimentando = false;
    } else if (colidiuBossTop == false && detectarColisaoParedeB__quadTop('player', 'paredeB', 'quadTop') == false) {
        tecS = true;
        bossMovimentando = true;
    }

    return colidiuBossTop;
}

function detectarColisaoBossBottom(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let boss_cultista_Bottom = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_boss_cultista_Bottom = [{x : boss_cultista_Bottom.left, y : boss_cultista_Bottom.top}, 
                                     {x : boss_cultista_Bottom.left + boss_cultista_Bottom.width, y : boss_cultista_Bottom.top},
                                     {x : boss_cultista_Bottom.left + boss_cultista_Bottom.width, y : boss_cultista_Bottom.top + boss_cultista_Bottom.height},
                                     {x : boss_cultista_Bottom.left, y : boss_cultista_Bottom.top + boss_cultista_Bottom.height}];

    let colidiuBossBottom = false;
    let indice = 0;

    while (colidiuBossBottom == false && indice < 3)
        ((pontos_Player[indice].x >= boss_cultista_Bottom.left && pontos_Player[indice].x <= boss_cultista_Bottom.left + boss_cultista_Bottom.width && 
        pontos_Player[indice].y >= boss_cultista_Bottom.top && pontos_Player[indice].y <= boss_cultista_Bottom.top + boss_cultista_Bottom.height)) ||
        
        ((pontos_boss_cultista_Bottom[indice].x >= objetoPlayer.left && pontos_boss_cultista_Bottom[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_boss_cultista_Bottom[indice].y >= objetoPlayer.top && pontos_boss_cultista_Bottom[indice].y <= objetoPlayer.top + objetoPlayer.height))
        ? colidiuBossBottom = true : indice ++;
        tecW = false;

    if (tecW == false && colidiuBossBottom == true) {
        dy = 0;
        bossMovimentando = false;
    } else if (colidiuBossBottom == false && detectarColisaoParedeC__quadBottom('player', 'paredeC', 'quadBottom') == false) {
        tecW = true;
        bossMovimentando = true;
    }

    return colidiuBossBottom;
}

//detecta colisão dos bosses com as paredes e objetos
function detectarColisaoBossLeft__ParedeE__quadRight(idObjeto1, idObjeto2, idObjeto3) {
    let boss_cultista_Left = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeE = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadRight = document.getElementById(idObjeto3).getBoundingClientRect();

    let pontos_boss_cultista_Left = [{x : boss_cultista_Left.left, y : boss_cultista_Left.top}, 
                                     {x : boss_cultista_Left.left + boss_cultista_Left.width, y : boss_cultista_Left.top},
                                     {x : boss_cultista_Left.left + boss_cultista_Left.width, y : boss_cultista_Left.top + boss_cultista_Left.height},
                                     {x : boss_cultista_Left.left, y : boss_cultista_Left.top + boss_cultista_Left.height}];

    let pontos_parede_E = [{x : paredeE.left, y : paredeE.top}, 
                           {x : paredeE.left + paredeE.width, y : paredeE.top},
                           {x : paredeE.left + paredeE.width, y : paredeE.top + paredeE.height},
                           {x : paredeE.left, y : paredeE.top + paredeE.height}];

    let pontos_quadRight = [{x : quadRight.left, y : quadRight.top}, 
                            {x : quadRight.left + quadRight.width, y : quadRight.top},
                            {x : quadRight.left + quadRight.width, y : quadRight.top + quadRight.height},
                            {x : quadRight.left, y : quadRight.top + quadRight.height}];

    let colidiu = false;
    let indice = 0;

    while (colidiu == false && indice < 3)
        ((pontos_boss_cultista_Left[indice].x >= paredeE.left && pontos_boss_cultista_Left[indice].x <= paredeE.left + paredeE.width && 
        pontos_boss_cultista_Left[indice].y >= paredeE.top && pontos_boss_cultista_Left[indice].y <= paredeE.top + paredeE.height)) ||
        
        ((pontos_parede_E[indice].x >= boss_cultista_Left.left && pontos_parede_E[indice].x <= boss_cultista_Left.left + boss_cultista_Left.width && 
        pontos_parede_E[indice].y >= boss_cultista_Left.top && pontos_parede_E[indice].y <= boss_cultista_Left.top + boss_cultista_Left.height)) ||

        ((pontos_boss_cultista_Left[indice].x >= quadRight.left && pontos_boss_cultista_Left[indice].x <= quadRight.left + quadRight.width && 
        pontos_boss_cultista_Left[indice].y >= quadRight.top && pontos_boss_cultista_Left[indice].y <= quadRight.top + quadRight.height)) ||

        ((pontos_quadRight[indice].x >= boss_cultista_Left.left && pontos_quadRight[indice].x <= boss_cultista_Left.left + boss_cultista_Left.width && 
        pontos_quadRight[indice].y >= boss_cultista_Left.top && pontos_quadRight[indice].y <= boss_cultista_Left.top + boss_cultista_Left.height))
        ? colidiu = true : indice ++;

    return colidiu;
}

function detectarColisaoBossRight__ParedeD__quadLeft(idObjeto1, idObjeto2, idObjeto3) {
    let boss_cultista_Right = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeD = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadLeft = document.getElementById(idObjeto3).getBoundingClientRect();

    let pontos_boss_cultista_Right = [{x : boss_cultista_Right.left, y : boss_cultista_Right.top}, 
                                     {x : boss_cultista_Right.left + boss_cultista_Right.width, y : boss_cultista_Right.top},
                                     {x : boss_cultista_Right.left + boss_cultista_Right.width, y : boss_cultista_Right.top + boss_cultista_Right.height},
                                     {x : boss_cultista_Right.left, y : boss_cultista_Right.top + boss_cultista_Right.height}];

    let pontos_parede_D = [{x : paredeD.left, y : paredeD.top}, 
                           {x : paredeD.left + paredeD.width, y : paredeD.top},
                           {x : paredeD.left + paredeD.width, y : paredeD.top + paredeD.height},
                           {x : paredeD.left, y : paredeD.top + paredeD.height}];

    let pontos_quadLeft = [{x : quadLeft.left, y : quadLeft.top}, 
                            {x : quadLeft.left + quadLeft.width, y : quadLeft.top},
                            {x : quadLeft.left + quadLeft.width, y : quadLeft.top + quadLeft.height},
                            {x : quadLeft.left, y : quadLeft.top + quadLeft.height}];

    let colidiu = false;
    let indice = 0;

    while (colidiu == false && indice < 3)
        ((pontos_boss_cultista_Right[indice].x >= paredeD.left && pontos_boss_cultista_Right[indice].x <= paredeD.left + paredeD.width && 
        pontos_boss_cultista_Right[indice].y >= paredeD.top && pontos_boss_cultista_Right[indice].y <= paredeD.top + paredeD.height)) ||
        
        ((pontos_parede_D[indice].x >= boss_cultista_Right.left && pontos_parede_D[indice].x <= boss_cultista_Right.left + boss_cultista_Right.width && 
        pontos_parede_D[indice].y >= boss_cultista_Right.top && pontos_parede_D[indice].y <= boss_cultista_Right.top + boss_cultista_Right.height)) ||

        ((pontos_boss_cultista_Right[indice].x >= quadLeft.left && pontos_boss_cultista_Right[indice].x <= quadLeft.left + quadLeft.width && 
        pontos_boss_cultista_Right[indice].y >= quadLeft.top && pontos_boss_cultista_Right[indice].y <= quadLeft.top + quadLeft.height)) ||

        ((pontos_quadLeft[indice].x >= boss_cultista_Right.left && pontos_quadLeft[indice].x <= boss_cultista_Right.left + boss_cultista_Right.width && 
        pontos_quadLeft[indice].y >= boss_cultista_Right.top && pontos_quadLeft[indice].y <= boss_cultista_Right.top + boss_cultista_Right.height))
        ? colidiu = true : indice ++;
        
        /*if (colidiu == true) {
            bossMovimentandoLeft = false;
        } else if (colidiu == false) {
            bossMovimentandoLeft = true;
        }*/

    return colidiu;
}

//detectar colisões nas portas
function detectarColisaoPortaDown (idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let portaDown = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_porta_Down = [{x : portaDown.left, y : portaDown.top}, 
                           {x : portaDown.left + portaDown.width, y : portaDown.top},
                           {x : portaDown.left + portaDown.width, y : portaDown.top + portaDown.height},
                           {x : portaDown.left, y : portaDown.top + portaDown.height}];

    indice = 0;
    colidiu = false

    while ((colidiu == false) && (indice < 3))
    ((pontos_Player[indice].x >= portaDown.left && pontos_Player[indice].x <= portaDown.left + portaDown.width && 
    pontos_Player[indice].y >= portaDown.top && pontos_Player[indice].y <= portaDown.top + portaDown.height)) ||

    ((pontos_porta_Down[indice].x >= objetoPlayer.left && pontos_porta_Down[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_porta_Down[indice].y >= objetoPlayer.top && pontos_porta_Down[indice].y <= objetoPlayer.top + objetoPlayer.height))
    ? colidiu = true : indice ++;
    
    if (colidiu == true) {
        window.location.href = '/jogo/pagina12/pagina12.html';
    }

    return colidiu;
}

function detectarColisaoPortaRight (idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let portaRight = document.getElementById(idObjeto2).getBoundingClientRect();
    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_porta_Right = [{x : portaRight.left, y : portaRight.top}, 
                           {x : portaRight.left + portaRight.width, y : portaRight.top},
                           {x : portaRight.left + portaRight.width, y : portaRight.top + portaRight.height},
                           {x : portaRight.left, y : portaRight.top + portaRight.height}];

    indice = 0;
    colidiu = false

    while ((colidiu == false) && (indice < 3))
    ((pontos_Player[indice].x >= portaRight.left && pontos_Player[indice].x <= portaRight.left + portaRight.width && 
    pontos_Player[indice].y >= portaRight.top && pontos_Player[indice].y <= portaRight.top + portaRight.height)) ||

    ((pontos_porta_Right[indice].x >= objetoPlayer.left && pontos_porta_Right[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_porta_Right[indice].y >= objetoPlayer.top && pontos_porta_Right[indice].y <= objetoPlayer.top + objetoPlayer.height))
    ? colidiu = true : indice ++;
    
    if (colidiu == true) {
        window.location.href = '/jogo/pagina11/pagina11.html';
    }

    return colidiu;
}

function detectarColisaoPortaTop (idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let portaTop = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_porta_Top = [{x : portaTop.left, y : portaTop.top}, 
                           {x : portaTop.left + portaTop.width, y : portaTop.top},
                           {x : portaTop.left + portaTop.width, y : portaTop.top + portaTop.height},
                           {x : portaTop.left, y : portaTop.top + portaTop.height}];

    indice = 0;
    colidiu = false

    while ((colidiu == false) && (indice < 3))
    ((pontos_Player[indice].x >= portaTop.left && pontos_Player[indice].x <= portaTop.left + portaTop.width && 
    pontos_Player[indice].y >= portaTop.top && pontos_Player[indice].y <= portaTop.top + portaTop.height)) ||

    ((pontos_porta_Top[indice].x >= objetoPlayer.left && pontos_porta_Top[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_porta_Top[indice].y >= objetoPlayer.top && pontos_porta_Top[indice].y <= objetoPlayer.top + objetoPlayer.height))
    ? colidiu = true : indice ++;
    
    if (colidiu == true) {
        window.location.href = '/jogo/pagina8/pagina8.html';
    }

    return colidiu;
}

//ataque do personagem
function atacar(event) {
    let tecla = event.keyCode;
    
    if (tecla == 13 && objetoPlayer.classList.contains('staticLeft')) {
        attackLeft.pressed = true;
    }else if (tecla == 13 && objetoPlayer.classList.contains('movingLeft')) {
        attackLeft.pressed = true;
    }else if (tecla == 13 && objetoPlayer.classList.contains('staticRight')) {
        attackRight.pressed = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('movingRight')) {
        attackRight.pressed = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('staticUp')) {
        attackUp.pressed = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('movingUp')) {
        attackUp.pressed = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('staticDown')) {
        attackDown.pressed = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('movingDown')) {
        attackDown.pressed = true;
    }
}

function pararAtacar(event) {
    let tecla = event.keyCode;

    if (tecla == 13 && objetoPlayer.classList.contains('staticLeft')) {
        attackLeft.pressed = false;
        attackLeft.released = true;
        atacou = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('movingLeft')) {
        attackLeft.pressed = false;
        attackLeft.released = true;
        atacou = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('staticRight')) {
        attackRight.pressed = false;
        attackRight.released = true;
        atacou = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('movingRight')) {
        attackRight.pressed = false;
        attackRight.released = true;
        atacou = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('staticUp')) {
        attackUp.pressed = false;
        attackUp.released = true;
        atacou = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('movingUp')) {
        attackUp.pressed = false;
        attackUp.released = true;
        atacou = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('staticDown')) {
        attackDown.pressed = false;
        attackDown.released = true;
        atacou = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('movingDown')) {
        attackDown.pressed = false;
        attackDown.released = true;
        atacou = true;
    }
}

function playerAttackLeft(idObjeto1) {
    let objetoPlayer = document.getElementById(idObjeto1);
    let rect = objetoPlayer.getBoundingClientRect();

    if (attackLeft.pressed && attackLeft.released) {
        attackingLeft.classList.remove('not_attacking-left');
        attackingLeft.classList.add('attackingLeft');

        attackLeft.released = false;
        atacou = false
        setTimeout(() => {
            attackingLeft.classList.remove('attackingLeft');
        }, 300);       
    }
    attackingLeft.style.left = rect.left - rect.width + 10 + 'px';
    attackingLeft.style.top = rect.top + 'px';
}

function playerAttackRight(idObjeto1) {
    let objetoPlayer = document.getElementById(idObjeto1);
    let rect = objetoPlayer.getBoundingClientRect();

    if (attackRight.pressed && attackRight.released) {
        attackingRight.classList.remove('not_attacking-right');
        attackingRight.classList.add('attackingRight');

        attackRight.released = false;
        atacou = false
        setTimeout(() => {
            attackingRight.classList.remove('attackingRight');
        }, 300);       
    }
    attackingRight.style.left = rect.left + rect.width + 'px';
    attackingRight.style.top = rect.top + 'px';
}

function playerAttackUp(idObjeto1) {
    let objetoPlayer = document.getElementById(idObjeto1);
    let rect = objetoPlayer.getBoundingClientRect();

    if (attackUp.pressed && attackUp.released) {
        attackingUp.classList.remove('not_attacking-up');
        attackingUp.classList.add('attackingUp');

        attackUp.released = false;
        atacou = false
        setTimeout(() => {
            attackingUp.classList.remove('attackingUp');
        }, 300);       
    }
    attackingUp.style.left = rect.left + 'px';
    attackingUp.style.top = rect.top - rect.height + 20 + 'px';
}

function playerAttackDown(idObjeto1) {
    let objetoPlayer = document.getElementById(idObjeto1);
    let rect = objetoPlayer.getBoundingClientRect();

    if (attackDown.pressed && attackDown.released) {
        attackingDown.classList.remove('not_attacking-down');
        attackingDown.classList.add('attackingDown');

        attackDown.released = false;
        atacou = false
        setTimeout(() => {
            attackingDown.classList.remove('attackingDown');
        }, 300);       
    }

    attackingDown.style.left = rect.left + 'px';
    attackingDown.style.top = rect.top + rect.height + 'px';
}

//colisões de ataques com os bosses
function detectarColisaoAtaqueLeft(objeto1, objeto2) {
    let attackingLeft = document.getElementById(objeto1).getBoundingClientRect();
    let boss_cultista_Right = document.getElementById(objeto2).getBoundingClientRect();

    let pontos_ataque_Left = [{x : attackingLeft.left, y : attackingLeft.top}, 
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top},
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top + attackingLeft.height},
                              {x : attackingLeft.left, y : attackingLeft.top + attackingLeft.height}];

    let pontos_boss_cultista_Right = [{x : boss_cultista_Right.left, y : boss_cultista_Right.top}, 
                                      {x : boss_cultista_Right.left + boss_cultista_Right.width, y : boss_cultista_Right.top},
                                      {x : boss_cultista_Right.left + boss_cultista_Right.width, y : boss_cultista_Right.top + boss_cultista_Right.height},
                                      {x : boss_cultista_Right.left, y : boss_cultista_Right.top + boss_cultista_Right.height}];

    let indice = 0;
    let colidiuAtaqueLeft = false;

    while((colidiuAtaqueLeft == false) && (indice < 3)) {
    ((pontos_ataque_Left[indice].x >= boss_cultista_Right.left && pontos_ataque_Left[indice].x <= boss_cultista_Right.left + boss_cultista_Right.width && 
    pontos_ataque_Left[indice].y >= boss_cultista_Right.top && pontos_ataque_Left[indice].y <= boss_cultista_Right.top + boss_cultista_Right.height)) ||
    
    ((pontos_boss_cultista_Right[indice].x >= attackingLeft.left && pontos_boss_cultista_Right[indice].x <= attackingLeft.left + attackingLeft.width && 
    pontos_boss_cultista_Right[indice].y >= attackingLeft.top && pontos_boss_cultista_Right[indice].y <= attackingLeft.top + attackingLeft.height))
        ? colidiuAtaqueLeft = true : indice ++;
    }

    if (colidiuAtaqueLeft == true && lifeBoss > 0) {
        PlayerAcertou = true;
    }
}

function detectarColisaoAtaqueRight(objeto1, objeto2) {
    let attackingRight = document.getElementById(objeto1).getBoundingClientRect();
    let boss_cultista_Left = document.getElementById(objeto2).getBoundingClientRect();

    let pontos_ataque_Right = [{x : attackingRight.left, y : attackingRight.top}, 
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top},
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top + attackingRight.height},
                               {x : attackingRight.left, y : attackingRight.top + attackingRight.height}];

    let pontos_boss_cultista_Left = [{x : boss_cultista_Left.left, y : boss_cultista_Left.top}, 
                                     {x : boss_cultista_Left.left + boss_cultista_Left.width, y : boss_cultista_Left.top},
                                     {x : boss_cultista_Left.left + boss_cultista_Left.width, y : boss_cultista_Left.top + boss_cultista_Left.height},
                                     {x : boss_cultista_Left.left, y : boss_cultista_Left.top + boss_cultista_Left.height}];

    let indice = 0;
    let colidiuAtaqueRight = false;

    while((colidiuAtaqueRight == false) && (indice < 3)) {
    ((pontos_ataque_Right[indice].x >= boss_cultista_Left.left && pontos_ataque_Right[indice].x <= boss_cultista_Left.left + boss_cultista_Left.width && 
    pontos_ataque_Right[indice].y >= boss_cultista_Left.top && pontos_ataque_Right[indice].y <= boss_cultista_Left.top + boss_cultista_Left.height)) ||
    
    ((pontos_boss_cultista_Left[indice].x >= attackingRight.left && pontos_boss_cultista_Left[indice].x <= attackingRight.left + attackingRight.width && 
    pontos_boss_cultista_Left[indice].y >= attackingRight.top && pontos_boss_cultista_Left[indice].y <= attackingRight.top + attackingRight.height))
    ? colidiuAtaqueRight = true : indice ++;
    }

    if (colidiuAtaqueRight == true && lifeBoss > 0) {
        PlayerAcertou = true;
    }
}

function detectarColisaoAtaqueUp(objeto1, objeto2) {
    let attackingUp = document.getElementById(objeto1).getBoundingClientRect();
    let boss_cultista_Bottom = document.getElementById(objeto2).getBoundingClientRect();

    let pontos_ataque_Up = [{x : attackingUp.left, y : attackingUp.top}, 
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top},
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top + attackingUp.height},
                            {x : attackingUp.left, y : attackingUp.top + attackingUp.height}];

    let pontos_boss_cultista_Bottom = [{x : boss_cultista_Bottom.left, y : boss_cultista_Bottom.top}, 
                                       {x : boss_cultista_Bottom.left + boss_cultista_Bottom.width, y : boss_cultista_Bottom.top},
                                       {x : boss_cultista_Bottom.left + boss_cultista_Bottom.width, y : boss_cultista_Bottom.top + boss_cultista_Bottom.height},
                                       {x : boss_cultista_Bottom.left, y : boss_cultista_Bottom.top + boss_cultista_Bottom.height}];

    let indice = 0;
    let colidiuAtaqueUp = false;

    while((colidiuAtaqueUp == false) && (indice < 3)) {
    ((pontos_ataque_Up[indice].x >= boss_cultista_Bottom.left && pontos_ataque_Up[indice].x <= boss_cultista_Bottom.left + boss_cultista_Bottom.width && 
    pontos_ataque_Up[indice].y >= boss_cultista_Bottom.top && pontos_ataque_Up[indice].y <= boss_cultista_Bottom.top + boss_cultista_Bottom.height)) ||
    
    ((pontos_boss_cultista_Bottom[indice].x >= attackingUp.left && pontos_boss_cultista_Bottom[indice].x <= attackingUp.left + attackingUp.width && 
    pontos_boss_cultista_Bottom[indice].y >= attackingUp.top && pontos_boss_cultista_Bottom[indice].y <= attackingUp.top + attackingUp.height))
    ? colidiuAtaqueUp = true : indice ++;
    }

    if (colidiuAtaqueUp == true && lifeBoss > 0) {
        PlayerAcertou = true;
    }
}

function detectarColisaoAtaqueDown(objeto1, objeto2) {
    let attackingDown = document.getElementById(objeto1).getBoundingClientRect();
    let boss_cultista_Top = document.getElementById(objeto2).getBoundingClientRect();

    let pontos_ataque_Down = [{x : attackingDown.left, y : attackingDown.top}, 
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top},
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top + attackingDown.height},
                              {x : attackingDown.left, y : attackingDown.top + attackingDown.height}];

    let pontos_boss_cultista_Top = [{x : boss_cultista_Top.left, y : boss_cultista_Top.top}, 
                                    {x : boss_cultista_Top.left + boss_cultista_Top.width, y : boss_cultista_Top.top},
                                    {x : boss_cultista_Top.left + boss_cultista_Top.width, y : boss_cultista_Top.top + boss_cultista_Top.height},
                                    {x : boss_cultista_Top.left, y : boss_cultista_Top.top + boss_cultista_Top.height}];

    let indice = 0;
    let colidiuAtaqueDown = false;

    while((colidiuAtaqueDown == false) && (indice < 3)) {
    ((pontos_ataque_Down[indice].x >= boss_cultista_Top.left && pontos_ataque_Down[indice].x <= boss_cultista_Top.left + boss_cultista_Top.width && 
    pontos_ataque_Down[indice].y >= boss_cultista_Top.top && pontos_ataque_Down[indice].y <= boss_cultista_Top.top + boss_cultista_Top.height)) ||
    
    ((pontos_boss_cultista_Top[indice].x >= attackingDown.left && pontos_boss_cultista_Top[indice].x <= attackingDown.left + attackingDown.width && 
    pontos_boss_cultista_Top[indice].y >= attackingDown.top && pontos_boss_cultista_Top[indice].y <= attackingDown.top + attackingDown.height))
    ? colidiuAtaqueDown = true : indice ++;
    }

    if (colidiuAtaqueDown == true && lifeBoss > 0) {
        PlayerAcertou = true;
    }
}

function danoAoBoss() {
    if (PlayerAcertou == true && atacou == true && lifeBoss == 10) {
        lifeBoss = lifeBoss - 1;
        atacou = false;
        PlayerAcertou = false;
    } else if (PlayerAcertou == true && atacou == true && lifeBoss == 9) {
        lifeBoss = lifeBoss - 1;
        atacou = false;
        PlayerAcertou = false;
    } else if (PlayerAcertou == true && atacou == true && lifeBoss == 8) {
        lifeBoss = lifeBoss - 1;
        atacou = false;
        PlayerAcertou = false;
    } else if (PlayerAcertou == true && atacou == true && lifeBoss == 7) {
        lifeBoss = lifeBoss - 1;
        atacou = false;
        PlayerAcertou = false;
    } else if (PlayerAcertou == true && atacou == true && lifeBoss == 6) {
        lifeBoss = lifeBoss - 1;
        atacou = false;
        PlayerAcertou = false;
    } else if (PlayerAcertou == true && atacou == true && lifeBoss == 5) {
        lifeBoss = lifeBoss - 1;
        atacou = false;
        PlayerAcertou = false;
    } else if (PlayerAcertou == true && atacou == true && lifeBoss == 4) {
        lifeBoss = lifeBoss - 1;
        atacou = false;
        PlayerAcertou = false;
    } else if (PlayerAcertou == true && atacou == true && lifeBoss == 3) {
        lifeBoss = lifeBoss - 1;
        atacou = false;
        PlayerAcertou = false;
    } else if (PlayerAcertou == true && atacou == true && lifeBoss == 2) {
        lifeBoss = lifeBoss - 1;
        atacou = false;
        PlayerAcertou = false;
    } else if (PlayerAcertou == true && atacou == true && lifeBoss == 1) {
        lifeBoss = lifeBoss - 1;
        atacou = false;
        PlayerAcertou = false;
    } else if (lifeBoss == 0) {
        boss_cultista_wrapper.style.display = 'none';
        boss_cultista.style.display = 'none';
        boss_cultista_Left.style.display = 'none';
        boss_cultista_Right.style.display = 'none';
        boss_cultista_Top.style.display = 'none';
        boss_cultista_Bottom.style.display = 'none';
    }
}

/*function movimentarBoss(*//*idObjeto1, idObjeto2*//*) {
    let objetoPlayer = document.getElementById('player').getBoundingClientRect();
    let boss_cultista_wrapper = document.getElementById('boss_cultista-wrapper').getBoundingClientRect();
    let paredeE = document.getElementById('paredeE').getBoundingClientRect();
    let paredeD = document.getElementById('paredeD').getBoundingClientRect();
    let paredeC = document.getElementById('paredeC').getBoundingClientRect();
    let paredeB = document.getElementById('paredeB').getBoundingClientRect();


    if (boss_cultista_wrapper.left >= paredeE.left + paredeE.width) {
        bossMovimentandoLeft = true;
    } else if (bossMovimentandoLeft == false) {
        dxBossCultista = 0;
    }

    if (boss_cultista_wrapper.left + boss_cultista_wrapper.width <= paredeD.left && bossMovimentando) {
        bossMovimentandoRight = true;
    } else if (bossMovimentandoRight == false) {
        dxBossCultista = 0;
    }

    if (boss_cultista_wrapper.top >= paredeC.top + paredeC.height) {
        bossMovimentandoUp = true;
    } else if (bossMovimentandoUp == false) {
        dyBossCultista = 0;
    }

    if (boss_cultista_wrapper.top + boss_cultista_wrapper.height <= paredeB.top) {
        bossMovimentandoDown = true;
    } else if (bossMovimentandoDown == false) {
        dyBossCultista = 0;
    }


    //fazendo o boss movimentar
    if (bossMovimentando == true) {
        if (bossMovimentandoLeft == true) {
            if (objetoPlayer.left + objetoPlayer.width < boss_cultista_wrapper.left) {
                dxBossCultista = -1;
            }
        } else if (bossMovimentandoLeft == false) {
            dxBossCultista = 0;
        }

        if (bossMovimentandoRight == true) {
            if (objetoPlayer.left > boss_cultista_wrapper.left + boss_cultista_wrapper.width) {
                dxBossCultista = 1;
            }
        } else if (bossMovimentandoRight == false) {
            dxBossCultista = 0;
        }

        if (bossMovimentandoUp == true) {
            if (objetoPlayer.top + objetoPlayer.height < boss_cultista_wrapper.top) {
                dyBossCultista = -1;
            }
        } else if (bossMovimentandoUp == false) {
            dyBossCultista = 0;
        }

        if (bossMovimentandoDown == true) {
            if (objetoPlayer.top > boss_cultista_wrapper.top + boss_cultista_wrapper.height) {
                dyBossCultista = 1;
            }
        } else if (bossMovimentandoDown == false) {
            dyBossCultista = 0;
        }
    }
}*/

window.addEventListener('load', inicia)