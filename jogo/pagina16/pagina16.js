//personagem
let dx; //direção do eixo x
let dy; //direção do eixo y
let px; //posição final do eixo x
let py; //posição final do eixo y
let vel; //velocidade
let playerVida; //vida do player
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
let itemVida; //item de vida
let corItemVida;
let portaRightClass;
let hp;

//boss
var lifeBoss; //vida do boss
let boss_cultista_wrapper; //div que envolve o boss cultista para facilitar o movimento
let boss_cultista; //boss cultista
let boss_cultistaClass;
let boss_cultista_Left; //esquerda do boss cultista
let boss_cultista_Right; //direita do boss cultista
let boss_cultista_Top; //em cima do boss cultista
let boss_cultista_Bottom; //em baixo do boss cultista
let velBossCultista; //velocidade do boss cultista
let dxBossCultista;
let dyBossCultista;
let pxBossCultista; //posição do boss no eixo x
let pyBossCultista; //posição do boss no eixo y
let bossMovimentando; //verifica se o boss está se movimentando
let bossMovimentandoLeft;
let bossMovimentandoRight;
let bossMovimentandoUp;
let bossMovimentandoDown;
let bossAttackingLeft;
let bossAttackingRight;
let bossAttackingUp;
let bossAttackingDown;
let bossAtacouLeft; //declara se o boss atacou para a esquerda
let bossAtacouRight; //declara se o boss atacou para a direita
let bossAtacouUp; //declara se o boss atacou para cima
let bossAtacouDown; //declara se o boss atacou para baixo
let danoBoss;

//inicia as variáveis
function inicia () {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 1;
    lifeBoss = 5;
    playerVida = 7;
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

    tmpAtualizarSprite = setInterval(atualizarSprite, 1);

    setInterval(danoAoPlayer, 1000)

    objetoPlayer = document.getElementById('player');

    hp = document.querySelector('.hp7');

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

    portaRight = document.getElementById('portaRight');
    //portaLeft = document.getElementById('portaLeft');
    portaRightClass = document.querySelector('.portaRight');

    itemVida = document.getElementById('itemVida');
    corItemVida = document.querySelector('.corItemVida');

    boss_cultista_wrapper = document.getElementById('boss_cultista-wrapper');
    boss_cultista = document.querySelector('.boss_cultista-turned-left');
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

    bossAttackingLeft = document.querySelector('.boss-not_attacking-left');
    bossAttackingRight = document.querySelector('.boss-not_attacking-right');
    bossAttackingUp = document.querySelector('.boss-not_attacking-up');
    bossAttackingDown = document.querySelector('.boss-not_attacking-down');

    bossAtacouLeft = false;
    bossAtacouRight = false;
    bossAtacouUp = false;
    bossAtacouDown = false;

    danoBoss = 1;
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

    (detectarColisaoBossLeft('player', 'boss_cultista-left') == true)? bossMovimentando = false : bossMovimentando = true;
    (detectarColisaoBossRight('player', 'boss_cultista-right') == true)? bossMovimentando = false : bossMovimentando = true;
    (detectarColisaoBossTop('player', 'boss_cultista-top') == true)? bossMovimentando = false : bossMovimentando = true;
    (detectarColisaoBossBottom('player', 'boss_cultista-bottom') == true)? bossMovimentando = false : bossMovimentando = true;

    //(detectarColisaoBossLeft__ParedeE__quadRight('boss_cultista-left', 'paredeE', 'quadRight') == true)? bossMovimentandoLeft = false : bossMovimentandoLeft = true;
    //(detectarColisaoBossRight__ParedeD__quadLeft('boss_cultista-right', 'paredeD', 'quadLeft') == true)? bossMovimentandoRight = false : bossMovimentandoRight = true;
    /*detectarColisaoBossTop__ParedeC__quadBottom('boss_cultista-top', 'paredeC', 'quadBottom');
    detectarColisaoBossBottom__ParedeB__quadTop('boss_cultista-bottom', 'paredeB', 'quadTop');*/

    //detectarColisaoPortaTop('player', 'portaTop');
    //detectarColisaoPortaRight('player', 'portaRight');

    //detectarColisaoItemVida('player', 'itemVida');

    playerAttackLeft('player');
    playerAttackRight('player');
    playerAttackUp('player');
    playerAttackDown('player');
 
    detectarColisaoAtaqueLeft('attackingLeft', 'boss_cultista-right');
    detectarColisaoAtaqueRight('attackingRight', 'boss_cultista-left');
    detectarColisaoAtaqueUp('attackingUp', 'boss_cultista-bottom');
    detectarColisaoAtaqueDown('attackingDown', 'boss_cultista-top');

    danoAoBoss('player', 'portaRight');

    //danoAoPlayer('player', 'boss_cultista-wrapper');

    movimentarBoss('player', 'boss_cultista-wrapper');
    
    //movimentarBoss('player', 'boss_cultista-wrapper');
};

//detecta colisão na parede esquerda
function detectarColisaoParedeE__quadRight(idObjeto1, idObjeto2, idObjeto3) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeE = document.getElementById(idObjeto2).getBoundingClientRect();
    //let quadRight = document.getElementById(idObjeto3).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_parede_E = [{x : paredeE.left, y : paredeE.top}, 
                           {x : paredeE.left + paredeE.width, y : paredeE.top},
                           {x : paredeE.left + paredeE.width, y : paredeE.top + paredeE.height},
                           {x : paredeE.left, y : paredeE.top + paredeE.height}];

    /*let pontos_quad_Right = [{x : quadRight.left, y : quadRight.top}, 
                             {x : quadRight.left + quadRight.width, y : quadRight.top},
                             {x : quadRight.left + quadRight.width, y : quadRight.top + quadRight.height},
                             {x : quadRight.left, y : quadRight.top + quadRight.height}];*/

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
    ((pontos_Player[indice].x >= paredeE.left && pontos_Player[indice].x <= paredeE.left + paredeE.width && 
        pontos_Player[indice].y >= paredeE.top && pontos_Player[indice].y <= paredeE.top + paredeE.height)) ||

    ((pontos_parede_E[indice].x >= objetoPlayer.left && pontos_parede_E[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_parede_E[indice].y >= objetoPlayer.top && pontos_parede_E[indice].y <= objetoPlayer.top + objetoPlayer.height))
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
    //let quadLeft = document.getElementById(idObjeto3).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_parede_D = [{x : paredeD.left, y : paredeD.top}, 
                           {x : paredeD.left + paredeD.width, y : paredeD.top},
                           {x : paredeD.left + paredeD.width, y : paredeD.top + paredeD.height},
                           {x : paredeD.left, y : paredeD.top + paredeD.height}];

    /*let pontos_quad_Left = [{x : quadLeft.left, y : quadLeft.top}, 
                            {x : quadLeft.left + quadLeft.width, y : quadLeft.top},
                            {x : quadLeft.left + quadLeft.width, y : quadLeft.top + quadLeft.height},
                            {x : quadLeft.left, y : quadLeft.top + quadLeft.height}];*/


    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= paredeD.left && pontos_Player[indice].x <= paredeD.left + paredeD.width && 
        pontos_Player[indice].y >= paredeD.top && pontos_Player[indice].y <= paredeD.top + paredeD.height)) ||

        ((pontos_parede_D[indice].x >= objetoPlayer.left && pontos_parede_D[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_parede_D[indice].y >= objetoPlayer.top && pontos_parede_D[indice].y <= objetoPlayer.top + objetoPlayer.height)) /*||

        ((pontos_Player[indice].x >= quadLeft.left && pontos_Player[indice].x <= quadLeft.left + quadLeft.width && 
        pontos_Player[indice].y >= quadLeft.top && pontos_Player[indice].y <= quadLeft.top + quadLeft.height)) ||
    
        ((pontos_quad_Left[indice].x >= objetoPlayer.left && pontos_quad_Left[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_quad_Left[indice].y >= objetoPlayer.top && pontos_quad_Left[indice].y <= objetoPlayer.top + objetoPlayer.height))*/
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
    //let quadBottom = document.getElementById(idObjeto3).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_parede_C = [{x : paredeC.left, y : paredeC.top}, 
                           {x : paredeC.left + paredeC.width, y : paredeC.top},
                           {x : paredeC.left + paredeC.width, y : paredeC.top + paredeC.height},
                           {x : paredeC.left, y : paredeC.top + paredeC.height}];

    /*let pontos_quad_Bottom = [{x : quadBottom.left, y : quadBottom.top}, 
                              {x : quadBottom.left + quadBottom.width, y : quadBottom.top},
                              {x : quadBottom.left + quadBottom.width, y : quadBottom.top + quadBottom.height},
                              {x : quadBottom.left, y : quadBottom.top + quadBottom.height}];*/

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= paredeC.left && pontos_Player[indice].x <= paredeC.left + paredeC.width && 
        pontos_Player[indice].y >= paredeC.top && pontos_Player[indice].y <= paredeC.top + paredeC.height)) ||

        ((pontos_parede_C[indice].x >= objetoPlayer.left && pontos_parede_C[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_parede_C[indice].y >= objetoPlayer.top && pontos_parede_C[indice].y <= objetoPlayer.top + objetoPlayer.height)) /*||

        ((pontos_Player[indice].x >= quadBottom.left && pontos_Player[indice].x <= quadBottom.left + quadBottom.width && 
            pontos_Player[indice].y >= quadBottom.top && pontos_Player[indice].y <= quadBottom.top + quadBottom.height)) ||
    
        ((pontos_quad_Bottom[indice].x >= objetoPlayer.left && pontos_quad_Bottom[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_quad_Bottom[indice].y >= objetoPlayer.top && pontos_quad_Bottom[indice].y <= objetoPlayer.top + objetoPlayer.height))*/
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
    //let quadTop = document.getElementById(idObjeto3).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_parede_B = [{x : paredeB.left, y : paredeB.top}, 
                           {x : paredeB.left + paredeB.width, y : paredeB.top},
                           {x : paredeB.left + paredeB.width, y : paredeB.top + paredeB.height},
                           {x : paredeB.left, y : paredeB.top + paredeB.height}];

    /*let pontos_quad_Top = [{x : quadTop.left, y : quadTop.top}, 
                           {x : quadTop.left + quadTop.width, y : quadTop.top},
                           {x : quadTop.left + quadTop.width, y : quadTop.top + quadTop.height},
                           {x : quadTop.left, y : quadTop.top + quadTop.height}];*/

    let indice = 0;
    let colidiu = false

    while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= paredeB.left && pontos_Player[indice].x <= paredeB.left + paredeB.width && 
        pontos_Player[indice].y >= paredeB.top && pontos_Player[indice].y <= paredeB.top + paredeB.height)) ||

        ((pontos_parede_B[indice].x >= objetoPlayer.left && pontos_parede_B[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_parede_B[indice].y >= objetoPlayer.top && pontos_parede_B[indice].y <= objetoPlayer.top + objetoPlayer.height)) /*||

        ((pontos_Player[indice].x >= quadTop.left && pontos_Player[indice].x <= quadTop.left + quadTop.width && 
            pontos_Player[indice].y >= quadTop.top && pontos_Player[indice].y <= quadTop.top + quadTop.height)) ||
    
        ((pontos_quad_Top[indice].x >= objetoPlayer.left && pontos_quad_Top[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_quad_Top[indice].y >= objetoPlayer.top && pontos_quad_Top[indice].y <= objetoPlayer.top + objetoPlayer.height))*/
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
        //bossMovimentando = false;
    } else if (colidiuBossLeft == false && detectarColisaoParedeD__quadLeft('player', 'paredeD', 'quadLeft') == false) {
        tecD = true;
        //bossMovimentando = true;
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
        //bossMovimentando = false;
    } else if (colidiuBossRight == false && detectarColisaoParedeE__quadRight('player', 'paredeE', 'quadRight') == false) {
        tecA = true;
        //bossMovimentando = true;
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
        //bossMovimentando = false;
    } else if (colidiuBossTop == false && detectarColisaoParedeB__quadTop('player', 'paredeB', 'quadTop') == false) {
        tecS = true;
        //bossMovimentando = true;
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
        //bossMovimentando = false;
    } else if (colidiuBossBottom == false && detectarColisaoParedeC__quadBottom('player', 'paredeC', 'quadBottom') == false) {
        tecW = true;
        //bossMovimentando = true;
    }

    return colidiuBossBottom;
}

//detecta colisão dos bosses com as paredes e objetos
/*function detectarColisaoBossLeft__ParedeE__quadRight(idObjeto1, idObjeto2, idObjeto3) {
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
}*/

/*function detectarColisaoBossRight__ParedeD__quadLeft(idObjeto1, idObjeto2, idObjeto3) {
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
        ? colidiu = true : indice ++;*/
        
        /*if (colidiu == true) {
            bossMovimentandoLeft = false;
        } else if (colidiu == false) {
            bossMovimentandoLeft = true;
        }*/

    /*return colidiu;
}*/

//detectar colisões nas portas
/*function detectarColisaoPortaTop (idObjeto1, idObjeto2) {
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
        window.location.href = '/jogo/pagina21/pagina21.html';
    }

    return colidiu;
}*/



/*function detectarColisaoPortaRight (idObjeto1, idObjeto2) {
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
        window.location.href = '/jogo/pagina2/pagina2.html';
    }

    return colidiu;
}*/

//detecta colisão com o item de vida
/*function detectarColisaoItemVida(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let itemVida = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_Item_Vida = [{x : itemVida.left, y : itemVida.top},
                            {x : itemVida.left + itemVida.width, y : itemVida},
                            {x : itemVida.left + itemVida.width, y : itemVida.top + itemVida.height},
                            {x : itemVida.left, y : itemVida.top + itemVida.height}];

    let colidiuItemVida = false;
    let indice = 0;

    while ((colidiuItemVida == false) && (indice < 3))
    ((pontos_Player[indice].x >= itemVida.left && pontos_Player[indice].x <= itemVida.left + itemVida.width && 
    pontos_Player[indice].y >= itemVida.top && pontos_Player[indice].y <= itemVida.top + itemVida.height)) ||

    ((pontos_Item_Vida[indice].x >= objetoPlayer.left && pontos_Item_Vida[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_Item_Vida[indice].y >= objetoPlayer.top && pontos_Item_Vida[indice].y <= objetoPlayer.top + objetoPlayer.height))
    ? colidiuItemVida = true : indice ++;

    if (colidiuItemVida) {
        corItemVida.style.display = 'none';
        playerVida = 6;
    }

    return colidiu;
}*/

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
        objetoPlayer.classList.remove('staticLeft');
        objetoPlayer.classList.remove('movingLeft');
        objetoPlayer.classList.add('playerAttackingLeft')

        attackingLeft.classList.remove('not_attacking-left');
        attackingLeft.classList.add('attackingLeft');

        attackLeft.released = false;
        atacou = false
        setTimeout(() => {
            objetoPlayer.classList.remove('playerAttackingLeft')

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
        objetoPlayer.classList.remove('staticRight');
        objetoPlayer.classList.remove('movingRight');
        objetoPlayer.classList.add('playerAttackingRight');

        attackingRight.classList.remove('not_attacking-right');
        attackingRight.classList.add('attackingRight');

        attackRight.released = false;
        atacou = false
        setTimeout(() => {
            objetoPlayer.classList.remove('playerAttackingRight');

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
        objetoPlayer.classList.remove('staticUp');
        objetoPlayer.classList.remove('movingUp');
        objetoPlayer.classList.add('playerAttackingUp');

        setTimeout(() => {
            attackingUp.classList.remove('not_attacking-up');
            attackingUp.classList.add('attackingUp');
        }, 170);

        attackUp.released = false;
        atacou = false
        setTimeout(() => {
            objetoPlayer.classList.remove('playerAttackingUp');

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
        objetoPlayer.classList.remove('staticDown');
        objetoPlayer.classList.remove('movingDown');
        objetoPlayer.classList.add('playerAttackingDown')

        setTimeout(() => {
            attackingDown.classList.remove('not_attacking-down');
            attackingDown.classList.add('attackingDown');
        }, 200);

        attackDown.released = false;
        atacou = false
        setTimeout(() => {
            objetoPlayer.classList.remove('playerAttackingDown')

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

    console.log(PlayerAcertou);
}

function danoAoBoss(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let portaRight = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_portaRight = [{x : portaRight.left, y : portaRight.top}, 
                            {x : portaRight.left + portaRight.width, y : portaRight.top},
                            {x : portaRight.left + portaRight.width, y : portaRight.top + portaRight.height},
                            {x : portaRight.left, y : portaRight.top + portaRight.height}];

    let colidiu = false;
    let indice = 0;

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

        portaRightClass.classList.remove('portaRight');
        portaRightClass.classList.add('portaRightOpen');

        while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= portaRight.left && pontos_Player[indice].x <= portaRight.left + portaRight.width && 
        pontos_Player[indice].y >= portaRight.top && pontos_Player[indice].y <= portaRight.top + portaRight.height)) ||
    
        ((pontos_portaRight[indice].x >= objetoPlayer.left && pontos_portaRight[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_portaRight[indice].y >= objetoPlayer.top && pontos_portaRight[indice].y <= objetoPlayer.top + objetoPlayer.height))
        ? colidiu = true : indice ++;
        
        if(colidiu == true) {
            window.location.href = '/jogo/pagina17/pagina17.html';
        }

        return colidiu;
    }
}

function movimentarBoss(/*idObjeto1, idObjeto2*/) {
    let objetoPlayer = document.getElementById('player').getBoundingClientRect();
    let boss_cultista_wrapper = document.getElementById('boss_cultista-wrapper').getBoundingClientRect();
    let paredeE = document.getElementById('paredeE').getBoundingClientRect();
    let paredeD = document.getElementById('paredeD').getBoundingClientRect();
    let paredeC = document.getElementById('paredeC').getBoundingClientRect();
    let paredeB = document.getElementById('paredeB').getBoundingClientRect();

    //checando as colisões
    if (boss_cultista_wrapper.left >= paredeE.left + paredeE.width && boss_cultista_wrapper.left >= objetoPlayer.left + objetoPlayer.width) {
        bossMovimentandoLeft = true;
        boss_cultista.classList.remove('boss_cultista-turned-right');
        boss_cultista.classList.add('boss_cultista-turned-left');
    } else {
        bossMovimentandoLeft = false;
    }

    if (boss_cultista_wrapper.left + boss_cultista_wrapper.width <= paredeD.left && bossMovimentando && boss_cultista_wrapper.left + boss_cultista_wrapper.width <= objetoPlayer.left) {
        bossMovimentandoRight = true;
        boss_cultista.classList.remove('boss_cultista-turned-left');
        boss_cultista.classList.add('boss_cultista-turned-right');
    } else {
        bossMovimentandoRight = false;
    }

    if (boss_cultista_wrapper.top >= paredeC.top + paredeC.height && boss_cultista_wrapper.top >= objetoPlayer.top + objetoPlayer.height) {
        bossMovimentandoUp = true;
    } else {
        bossMovimentandoUp = false;
    }

    if (boss_cultista_wrapper.top + boss_cultista_wrapper.height <= paredeB.top && boss_cultista_wrapper.top + boss_cultista_wrapper.height <= objetoPlayer.top) {
        bossMovimentandoDown = true;
    } else {
        bossMovimentandoDown = false;
    }


    //fazendo o boss movimentar
    if (bossMovimentandoLeft == true) {
        if (objetoPlayer.left + objetoPlayer.width < boss_cultista_wrapper.left ) {
            dxBossCultista = -1;
        }
    } else if (bossMovimentandoLeft == false) {
        dxBossCultista = 0;
    }

    if (bossMovimentandoRight == true) {
        if (objetoPlayer.left > boss_cultista_wrapper.left + boss_cultista_wrapper.width) {
            dxBossCultista = 1;
        }
    } else if (bossMovimentandoRight == false && boss_cultista_wrapper.left <= objetoPlayer.left + objetoPlayer.width) {
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
    } else if (bossMovimentandoDown == false && boss_cultista_wrapper.top <= objetoPlayer.top + objetoPlayer.height) {
        dyBossCultista = 0;
    }
}

function danoAoPlayer (/*idObjeto1, idObjeto2*/) {
    let objetoPlayer = document.getElementById('player').getBoundingClientRect();
    let boss_cultista_wrapper = document.getElementById('boss_cultista-wrapper').getBoundingClientRect();

    let alcanceBoss = 0;

    //checando se o player está no alcance
    if (boss_cultista_wrapper.left + 60 >= objetoPlayer.left + objetoPlayer.width && boss_cultista_wrapper.left <= objetoPlayer.left + objetoPlayer.width + alcanceBoss && 
        boss_cultista_wrapper.top + boss_cultista_wrapper.height >= objetoPlayer.top && boss_cultista_wrapper.top <= objetoPlayer.top + objetoPlayer.height) {
        bossAtacouLeft = true;

        boss_cultista.classList.remove('boss_cultista-turned-left');
        boss_cultista.classList.add('boss-atacando-left');

        setTimeout(() => {
            boss_cultista.classList.remove('boss-atacando-left');
            boss_cultista.classList.add('boss_cultista-turned-left');
        }, 700);
    } else {
        bossAtacouLeft = false;
    }

    if (boss_cultista_wrapper.left + boss_cultista_wrapper.width - 80 <= objetoPlayer.left && boss_cultista_wrapper.left + boss_cultista_wrapper.width >= objetoPlayer.left - alcanceBoss && 
        boss_cultista_wrapper.top + boss_cultista_wrapper.height >= objetoPlayer.top && boss_cultista_wrapper.top <= objetoPlayer.top + objetoPlayer.height) {
        bossAtacouRight = true;

        boss_cultista.classList.remove('boss_cultista-turned-right');
        boss_cultista.classList.add('boss-atacando-right');

        setTimeout(() => {
            boss_cultista.classList.remove('boss-atacando-right');
            boss_cultista.classList.add('boss_cultista-turned-right');
        }, 700);
    } else {
        bossAtacouRight = false;
    }

    if (boss_cultista_wrapper.top + 80 >= objetoPlayer.top + objetoPlayer.height && boss_cultista_wrapper.top <= objetoPlayer.top + objetoPlayer.height + alcanceBoss && 
        boss_cultista_wrapper.left + boss_cultista_wrapper.width >= objetoPlayer.left && boss_cultista_wrapper.left <= objetoPlayer.left + objetoPlayer.width) {
        bossAtacouUp = true;

        boss_cultista.classList.remove('boss_cultista-turned-left');
        boss_cultista.classList.remove('boss_cultista-turned-right');
        boss_cultista.classList.add('boss-atacando-left');

        setTimeout(() => {
            boss_cultista.classList.remove('boss-atacando-left');
            boss_cultista.classList.add('boss_cultista-turned-left');
        }, 700);
    } else {
        bossAtacouUp = false;
    }

    if (boss_cultista_wrapper.top + boss_cultista_wrapper.height - 20 <= objetoPlayer.top && boss_cultista_wrapper.top + boss_cultista_wrapper.height >= objetoPlayer.top - alcanceBoss && 
        boss_cultista_wrapper.left + boss_cultista_wrapper.width >= objetoPlayer.left && boss_cultista_wrapper.left <= objetoPlayer.left + objetoPlayer.width) {
        bossAtacouDown = true;

        boss_cultista.classList.remove('boss_cultista-turned-left');
        boss_cultista.classList.remove('boss_cultista-turned-right');
        boss_cultista.classList.add('boss-atacando-left');

        setTimeout(() => {
            boss_cultista.classList.remove('boss-atacando-left');
            boss_cultista.classList.add('boss_cultista-turned-left');
        }, 700);
    } else {
        bossAtacouDown = false;
    }


    //fazendo o ataque aparecer
    /*if (bossAtacouLeft == true) {
        bossAttackingLeft.classList.remove('boss-not_attacking-left');
        bossAttackingLeft.classList.add('boss-attacking-left');

        setTimeout(() => {
            bossAttackingLeft.classList.remove('boss-attacking-left');
        }, 300);

        bossAttackingLeft.style.left = boss_cultista_wrapper.left - boss_cultista_wrapper.width + 20 + 'px';
        bossAttackingLeft.style.top = boss_cultista_wrapper.top + 'px';
    }

    if (bossAtacouRight == true) {
        bossAttackingRight.classList.remove('boss-not_attacking-right');
        bossAttackingRight.classList.add('boss-attacking-right');

        setTimeout(() => {
            bossAttackingRight.classList.remove('boss-attacking-right');
        }, 300);

        bossAttackingRight.style.left = boss_cultista_wrapper.left + boss_cultista_wrapper.width + 'px';
        bossAttackingRight.style.top = boss_cultista_wrapper.top + 'px';
    }

    if (bossAtacouUp == true) {
        bossAttackingUp.classList.remove('boss-not_attacking-up');
        bossAttackingUp.classList.add('boss-attacking-up');

        setTimeout(() => {
            bossAttackingUp.classList.remove('boss-attacking-up');
        }, 300);

        bossAttackingUp.style.left = boss_cultista_wrapper.left + 'px';
        bossAttackingUp.style.top = boss_cultista_wrapper.top - boss_cultista_wrapper.height + 20 + 'px';
    }

    if (bossAtacouDown == true) {
        bossAttackingDown.classList.remove('boss-not_attacking-down');
        bossAttackingDown.classList.add('boss-attacking-down');

        setTimeout(() => {
            bossAttackingDown.classList.remove('boss-attacking-down');
        }, 300);

        bossAttackingDown.style.left = boss_cultista_wrapper.left + 'px';
        bossAttackingDown.style.top = boss_cultista_wrapper.top + boss_cultista_wrapper.height + 'px';
    }*/


    //fazendo o player tomar dano na esquerda do boss
    if (playerVida == 7 && bossAtacouLeft == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h7');
        hp.classList.add('hp6');
    } else if (playerVida == 6 && bossAtacouLeft == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h6');
        hp.classList.add('hp5');
    } else if (playerVida == 5 && bossAtacouLeft == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h5');
        hp.classList.add('hp4');
    } else if (playerVida == 4 && bossAtacouLeft == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h4');
        hp.classList.add('hp3');
    } else if (playerVida == 3 && bossAtacouLeft == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h3');
        hp.classList.add('hp2');
    } else if (playerVida == 2 && bossAtacouLeft == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h2');
        hp.classList.add('hp1');
    } else if (playerVida == 1 && bossAtacouLeft == true) {
        playerVida = playerVida - 1;
    } else if (playerVida == 0) {
        //window.location.href = '/jogo/pagina2/pagina2.html';
    }

    //fazendo o player tomar dano na direita do boss
    if (playerVida == 7 && bossAtacouRight == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h7');
        hp.classList.add('hp6');
    } else if (playerVida == 6 && bossAtacouRight == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h6');
        hp.classList.add('hp5');
    } else if (playerVida == 5 && bossAtacouRight == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h5');
        hp.classList.add('hp4');
    } else if (playerVida == 4 && bossAtacouRight == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h4');
        hp.classList.add('hp3');
    } else if (playerVida == 3 && bossAtacouRight == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h3');
        hp.classList.add('hp2');
    } else if (playerVida == 2 && bossAtacouRight == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h2');
        hp.classList.add('hp1');
    } else if (playerVida == 1 && bossAtacouRight == true) {
        playerVida = playerVida - 1;
    } else if (playerVida == 0) {
        //window.location.href = '/jogo/pagina2/pagina2.html';
    }

    //fazendo o player tomar dano no topo do boss
    if (playerVida == 7 && bossAtacouUp == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h7');
        hp.classList.add('hp6');
    } else if (playerVida == 6 && bossAtacouUp == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h6');
        hp.classList.add('hp5');
    } else if (playerVida == 5 && bossAtacouUp == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h5');
        hp.classList.add('hp4');
    } else if (playerVida == 4 && bossAtacouUp == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h4');
        hp.classList.add('hp3');
    } else if (playerVida == 3 && bossAtacouUp == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h3');
        hp.classList.add('hp2');
    } else if (playerVida == 2 && bossAtacouUp == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h2');
        hp.classList.add('hp1');
    } else if (playerVida == 1 && bossAtacouUp == true) {
        playerVida = playerVida - 1;
    } else if (playerVida == 0) {
        //window.location.href = '/jogo/pagina2/pagina2.html';
    }

    //fazendo o player tomar dano em baixo do boss
    if (playerVida == 7 && bossAtacouDown == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h7');
        hp.classList.add('hp6');
    } else if (playerVida == 6 && bossAtacouDown == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h6');
        hp.classList.add('hp5');
    } else if (playerVida == 5 && bossAtacouDown == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h5');
        hp.classList.add('hp4');
    } else if (playerVida == 4 && bossAtacouDown == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h4');
        hp.classList.add('hp3');
    } else if (playerVida == 3 && bossAtacouDown == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h3');
        hp.classList.add('hp2');
    } else if (playerVida == 2 && bossAtacouDown == true) {
        playerVida = playerVida - 1;
        hp.classList.remove('h2');
        hp.classList.add('hp1');
    } else if (playerVida == 1 && bossAtacouDown == true) {
        playerVida = playerVida - 1;
    } else if (playerVida == 0) {
        //window.location.href = '/jogo/pagina2/pagina2.html';
    }
}

window.addEventListener('load', inicia)