//personagem
let dx; //direção do eixo x
let dy; //direção do eixo y
let px; //posição final do eixo x
let py; //posição final do eixo y
let vel; //velocidade
let playerDano;
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
let attackingLeftWrapper;
let attackingRightWrapper;
let attackingUpWrapper;
let attackingDownWrapper;
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
let lifeBoss; //vida do boss
let boss_cultista_wrapper; //wrapper do boss
let boss_cultista_Left; //esquerda do boss cultista
let boss_cultista_Right; //direita do boss cultista
let boss_cultista_Top; //em cima do boss cultista
let boss_cultista_Bottom; //em baixo do boss cultista

//inicia as variáveis
function inicia () {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 1;
    lifeBoss = 10;
    playerDano = 1;

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

    attackingLeftWrapper = document.getElementById('attackingLeftWrapper');
    attackingRightWrapper = document.getElementById('attackingRightWrapper');
    attackingUpWrapper = document.getElementById('attackingUpWrapper');
    attackingDownWrapper = document.getElementById('attackingDownWrapper');
    
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

    portaTop = document.getElementById('portaTop');

    boss_cultista_wrapper = document.getElementById('boss_cultista-wrapper');
    boss_cultista_Left = document.getElementById('boss_cultista-left');
    boss_cultista_Right = document.getElementById('boss_cultista-right');
    boss_cultista_Top = document.getElementById('boss_cultista-top');
    boss_cultista_Bottom = document.getElementById('boss_cultista-bottom');
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

    (detectarColisaoParedeE__quadRight__bossRight('player', 'paredeE', 'quadRight', 'boss_cultista-right') == true)?console.log('colidiu') : console.log('ainda não colidiu');
    (detectarColisaoParedeD__quadLeft__bossLeft('player', 'paredeD', 'quadLeft', 'boss_cultista-left') == true)?console.log('colidiu') : console.log('ainda não colidiu');
    (detectarColisaoParedeC__quadBottom__bossBottom('player', 'paredeC', 'quadBottom', 'boss_cultista-bottom') == true)?console.log('colidiu') : console.log('ainda não colidiu');
    (detectarColisaoParedeB__quadTop__bossTop('player', 'paredeB', 'quadTop', 'boss_cultista-top') == true)?console.log('colidiu') : console.log('ainda não colidiu');

    (detectarColisaoPortaTop('player', 'portaTop') == true)?console.log('colidiu') : console.log('ainda não colidiu');

    (playerAttackLeft('player') == true)?console.log('atacou') : console.log('não atacou');
    (playerAttackRight('player') == true)?console.log('atacou') : console.log('não atacou');
    (playerAttackUp('player') == true)?console.log('atacou') : console.log('não atacou');
    (playerAttackDown('player') == true)?console.log('atacou') : console.log('não atacou');

    (detectarColisãoAtaqueLeft('attackingLeftWrapper', 'boss_cultista-right') == true)?console.log('deu dano') : console.log('não deu dano');
    (detectarColisãoAtaqueRight('attackingRightWrapper', 'boss_cultista-left') == true)?console.log('deu dano') : console.log('não deu dano');
    (detectarColisãoAtaqueUp('attackingUpWrapper', 'boss_cultista-bottom') == true)?console.log('deu dano') : console.log('não deu dano');
    (detectarColisãoAtaqueDown('attackingDownWrapper', 'boss_cultista-top') == true)?console.log('deu dano') : console.log('não deu dano');
};

//detecta colisão na parede esquerda
function detectarColisaoParedeE__quadRight__bossRight(idObjeto1, idObjeto2, idObjeto3, idObjeto4) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeE = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadRight = document.getElementById(idObjeto3).getBoundingClientRect();
    let boss_cultista_Right = document.getElementById(idObjeto4).getBoundingClientRect();

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

    let pontos_boss_cultista_Right = [{x : boss_cultista_Right.left, y : boss_cultista_Right.top}, 
                                      {x : boss_cultista_Right.left + boss_cultista_Right.width, y : boss_cultista_Right.top},
                                      {x : boss_cultista_Right.left + boss_cultista_Right.width, y : boss_cultista_Right.top + boss_cultista_Right.height},
                                      {x : boss_cultista_Right.left, y : boss_cultista_Right.top + boss_cultista_Right.height}];
 

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
    pontos_quad_Right[indice].y >= objetoPlayer.top && pontos_quad_Right[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= boss_cultista_Right.left && pontos_Player[indice].x <= boss_cultista_Right.left + boss_cultista_Right.width && 
    pontos_Player[indice].y >= boss_cultista_Right.top && pontos_Player[indice].y <= boss_cultista_Right.top + boss_cultista_Right.height)) ||

    ((pontos_boss_cultista_Right[indice].x >= objetoPlayer.left && pontos_boss_cultista_Right[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_boss_cultista_Right[indice].y >= objetoPlayer.top && pontos_boss_cultista_Right[indice].y <= objetoPlayer.top + objetoPlayer.height))
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
function detectarColisaoParedeD__quadLeft__bossLeft(idObjeto1, idObjeto2, idObjeto3, idObjeto4) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeD = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadLeft = document.getElementById(idObjeto3).getBoundingClientRect();
    let boss_cultista_Left = document.getElementById(idObjeto4).getBoundingClientRect();

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

    let pontos_boss_cultista_Left = [{x : boss_cultista_Left.left, y : boss_cultista_Left.top}, 
                                     {x : boss_cultista_Left.left + boss_cultista_Left.width, y : boss_cultista_Left.top},
                                     {x : boss_cultista_Left.left + boss_cultista_Left.width, y : boss_cultista_Left.top + boss_cultista_Left.height},
                                     {x : boss_cultista_Left.left, y : boss_cultista_Left.top + boss_cultista_Left.height}];

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
        pontos_quad_Left[indice].y >= objetoPlayer.top && pontos_quad_Left[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= boss_cultista_Left.left && pontos_Player[indice].x <= boss_cultista_Left.left + boss_cultista_Left.width && 
        pontos_Player[indice].y >= boss_cultista_Left.top && pontos_Player[indice].y <= boss_cultista_Left.top + boss_cultista_Left.height)) ||
    
        ((pontos_boss_cultista_Left[indice].x >= objetoPlayer.left && pontos_boss_cultista_Left[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_boss_cultista_Left[indice].y >= objetoPlayer.top && pontos_boss_cultista_Left[indice].y <= objetoPlayer.top + objetoPlayer.height))
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
function detectarColisaoParedeC__quadBottom__bossBottom(idObjeto1, idObjeto2, idObjeto3, idObjeto4) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeC = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadBottom = document.getElementById(idObjeto3).getBoundingClientRect();
    let boss_cultista_Bottom = document.getElementById(idObjeto4).getBoundingClientRect();

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

    let pontos_boss_cultista_Bottom  = [{x : boss_cultista_Bottom.left, y : boss_cultista_Bottom.top}, 
                                        {x : boss_cultista_Bottom.left + boss_cultista_Bottom.width, y : boss_cultista_Bottom.top},
                                        {x : boss_cultista_Bottom.left + boss_cultista_Bottom.width, y : boss_cultista_Bottom.top + boss_cultista_Bottom.height},
                                        {x : boss_cultista_Bottom.left, y : boss_cultista_Bottom.top + boss_cultista_Bottom.height}];

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
        pontos_quad_Bottom[indice].y >= objetoPlayer.top && pontos_quad_Bottom[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= boss_cultista_Bottom.left && pontos_Player[indice].x <= boss_cultista_Bottom.left + boss_cultista_Bottom.width && 
        pontos_Player[indice].y >= boss_cultista_Bottom.top && pontos_Player[indice].y <= boss_cultista_Bottom.top + boss_cultista_Bottom.height)) ||
    
        ((pontos_boss_cultista_Bottom[indice].x >= objetoPlayer.left && pontos_boss_cultista_Bottom[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_boss_cultista_Bottom[indice].y >= objetoPlayer.top && pontos_boss_cultista_Bottom[indice].y <= objetoPlayer.top + objetoPlayer.height))
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
function detectarColisaoParedeB__quadTop__bossTop(idObjeto1, idObjeto2, idObjeto3, idObjeto4) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeB = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadTop = document.getElementById(idObjeto3).getBoundingClientRect();
    let boss_cultista_Top = document.getElementById(idObjeto4).getBoundingClientRect();

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
 
    let pontos_boss_cultista_Top  = [{x : boss_cultista_Top.left, y : boss_cultista_Top.top}, 
                                     {x : boss_cultista_Top.left + boss_cultista_Top.width, y : boss_cultista_Top.top},
                                     {x : boss_cultista_Top.left + boss_cultista_Top.width, y : boss_cultista_Top.top + boss_cultista_Top.height},
                                     {x : boss_cultista_Top.left, y : boss_cultista_Top.top + boss_cultista_Top.height}];

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
        pontos_quad_Top[indice].y >= objetoPlayer.top && pontos_quad_Top[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= boss_cultista_Top.left && pontos_Player[indice].x <= boss_cultista_Top.left + boss_cultista_Top.width && 
        pontos_Player[indice].y >= boss_cultista_Top.top && pontos_Player[indice].y <= boss_cultista_Top.top + boss_cultista_Top.height)) ||
    
        ((pontos_boss_cultista_Top[indice].x >= objetoPlayer.left && pontos_boss_cultista_Top[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_boss_cultista_Top[indice].y >= objetoPlayer.top && pontos_boss_cultista_Top[indice].y <= objetoPlayer.top + objetoPlayer.height))

        ? colidiu = true : indice ++;
    tecS = false;

    if (colidiu == true && tecS == false) {
        dy = 0;
    } else {
        tecS = true;
    };

    return colidiu;
};

//detectar colisões nas portas
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
        window.location.href = '/jogo/pagina2/pagina2.html';
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
    } else if (tecla == 13 && objetoPlayer.classList.contains('movingLeft')) {
        attackLeft.pressed = false;
        attackLeft.released = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('staticRight')) {
        attackRight.pressed = false;
        attackRight.released = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('movingRight')) {
        attackRight.pressed = false;
        attackRight.released = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('staticUp')) {
        attackUp.pressed = false;
        attackUp.released = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('movingUp')) {
        attackUp.pressed = false;
        attackUp.released = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('staticDown')) {
        attackDown.pressed = false;
        attackDown.released = true;
    } else if (tecla == 13 && objetoPlayer.classList.contains('movingDown')) {
        attackDown.pressed = false;
        attackDown.released = true;
    }
}

function playerAttackLeft(idObjeto1) {
    let objetoPlayer = document.getElementById(idObjeto1);
    let rect = objetoPlayer.getBoundingClientRect();

    if (attackLeft.pressed && attackLeft.released) {
        attackingLeft.classList.remove('not_attacking-left');
        attackingLeft.classList.add('attackingLeft');

        attackLeft.released = false;
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
        setTimeout(() => {
            attackingDown.classList.remove('attackingDown');
        }, 300);       
    }

    attackingDown.style.left = rect.left + 'px';
    attackingDown.style.top = rect.top + rect.height + 'px';
}

//colisões de ataques com os bosses
function detectarColisãoAtaqueLeft(objeto1, objeto2) {
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
    let colidiu = false;

    while((colidiu == false) && (indice < 3))
    ((pontos_ataque_Left[indice].x >= boss_cultista_Right.left && pontos_ataque_Left[indice].x <= boss_cultista_Right.left + boss_cultista_Right.width && 
    pontos_ataque_Left[indice].y >= boss_cultista_Right.top && pontos_ataque_Left[indice].y <= boss_cultista_Right.top + boss_cultista_Right.height)) ||
    
    ((pontos_boss_cultista_Right[indice].x >= attackingLeft.left && pontos_boss_cultista_Right[indice].x <= attackingLeft.left + attackingLeft.width && 
    pontos_boss_cultista_Right[indice].y >= attackingLeft.top && pontos_boss_cultista_Right[indice].y <= attackingLeft.top + attackingLeft.height))
    ? colidiu = true : indice ++;

    if (colidiu == true) {
        lifeBoss -= playerDano;
    }

    console.log(lifeBoss);
}

window.addEventListener('load', inicia);