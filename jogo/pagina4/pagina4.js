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
let pedra1;
let pedra1Left;
let pedra1Right;
let pedra1Top;
let pedra1Bottom;
let pedra2;
let pedra2Left;
let pedra2Right;
let pedra2Top;
let pedra2Bottom;
let estanteLeft;
let estanteRight;
let estanteTop;
let estanteBottom;
let estanteLeft2;
let estanteRight2;
let estanteTop2;
let estanteBottom2;
let estanteLeft3;
let estanteRight3;
let estanteTop3;
let estanteBottom3;
let estanteLeft4;
let estanteRight4;
let estanteTop4;
let estanteBottom4;
let mesaLeft;
let mesaRight;
let mesaTop;

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
    playerVida = 5;
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

    pedra1Left = document.getElementById('pedra1Left');
    pedra1Right = document.getElementById('pedra1Right');
    pedra1Top = document.getElementById('pedra1Top');
    pedra1Bottom = document.getElementById('pedra1Bottom');

    pedra2 = document.getElementById('pedra2');

    pedra2Left = document.getElementById('pedra2Left');
    pedra2Right = document.getElementById('pedra2Right');
    pedra2Top = document.getElementById('pedra2Top');
    pedra2Bottom = document.getElementById('pedra2Bottom');

    estanteLeft = document.getElementById('estanteLeft');
    estanteRight = document.getElementById('estanteRight');
    estanteTop = document.getElementById('estanteTop');
    estanteBottom = document.getElementById('estanteBottom');

    estanteLeft2 = document.getElementById('estanteLeft2');
    estanteRight2 = document.getElementById('estanteRight2');
    estanteTop2 = document.getElementById('estanteTop2');
    estanteBottom2 = document.getElementById('estanteBottom2');

    estanteLeft3 = document.getElementById('estanteLeft3');
    estanteRight3 = document.getElementById('estanteRight3');
    estanteTop3 = document.getElementById('estanteTop3');
    estanteBottom3 = document.getElementById('estanteBottom3');

    estanteLeft4 = document.getElementById('estanteLeft4');
    estanteRight4 = document.getElementById('estanteRight4');
    estanteTop4 = document.getElementById('estanteTop4');
    estanteBottom4 = document.getElementById('estanteBottom4');

    mesaLeft = document.getElementById('mesaLeft');
    mesaRight = document.getElementById('mesaRight');
    mesaTop = document.getElementById('mesaTop');

    portaTop = document.getElementById('portaTop');
    //portaLeft = document.getElementById('porLeft');
    portaDown = document.getElementById('portaDown');

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

    /*pxBossCultista += dxBossCultista * velBossCultista;
    pyBossCultista += dyBossCultista * velBossCultista;

    boss_cultista_wrapper.style.left = pxBossCultista + 'px';
    boss_cultista_wrapper.style.top = pyBossCultista + 'px';*/

    detectarColisaoParedeE__quadRight__pedra1Right__pedra2Right__estanteRight__mesaRight_estanteRight2_estanteRight3_estanteRight4('player', 'paredeE', 'quadRight', 'pedra1Right', 'pedra2Right', 'estanteRight', 'mesaRight', 'estanteRight2', 'estanteRight3', 'estanteRight4');
    detectarColisaoParedeD__quadLeft__pedra1Left__pedra2Left__estanteLeft__mesaLeft_estanteLeft2_estanteLeft3_estanteLeft4('player', 'paredeD', 'quadLeft', 'pedra1Left', 'pedra2Left', 'estanteLeft', 'mesaLeft', 'estanteLeft2', 'estanteLeft3', 'estanteLeft4');
    detectarColisaoParedeC__quadBottom__pedra1Bottom__pedra2Bottom__estanteBottom_estanteBottom2_estanteBottom3_estanteBottom4('player', 'paredeC', 'quadBottom', 'pedra1Bottom', 'pedra2Bottom', 'estanteBottom', 'estanteBottom2', 'estanteBottom3', 'estanteBottom4');
    detectarColisaoParedeB__quadTop__pedra1Top__pedra2Top__estanteTop__mesaTop_estanteBottom2_estanteTop3_estanteTop4('player', 'paredeB', 'quadTop', 'pedra1Top', 'pedra2Top', 'estanteTop', 'mesaTop', 'estanteTop2', 'estanteTop3', 'estanteTop4');

    //detectarColisaoBossLeft('player', 'boss_cultista-left');
    //detectarColisaoBossRight('player', 'boss_cultista-right');
    //detectarColisaoBossTop('player', 'boss_cultista-top');
    //detectarColisaoBossBottom('player', 'boss_cultista-bottom');

    //(detectarColisaoBossLeft__ParedeE__quadRight('boss_cultista-left', 'paredeE', 'quadRight') == true)? bossMovimentandoLeft = false : bossMovimentandoLeft = true;
    //(detectarColisaoBossRight__ParedeD__quadLeft('boss_cultista-right', 'paredeD', 'quadLeft') == true)? bossMovimentandoRight = false : bossMovimentandoRight = true;
    /*detectarColisaoBossTop__ParedeC__quadBottom('boss_cultista-top', 'paredeC', 'quadBottom');
    detectarColisaoBossBottom__ParedeB__quadTop('boss_cultista-bottom', 'paredeB', 'quadTop');*/

    detectarColisaoPortaTop('player', 'portaTop');
    //detectarColisaoPortaLeft('player', 'portaLeft');
    detectarColisaoPortaDown('player', 'portaDown');

    playerAttackLeft('player');
    playerAttackRight('player');
    playerAttackUp('player');
    playerAttackDown('player');
 
    //detectarColisaoAtaqueLeft('attackingLeft', 'boss_cultista-right');
    //detectarColisaoAtaqueRight('attackingRight', 'boss_cultista-left');
    //detectarColisaoAtaqueUp('attackingUp', 'boss_cultista-bottom');
    //detectarColisaoAtaqueDown('attackingDown', 'boss_cultista-top');

    danoAoBoss();
    
    //movimentarBoss('player', 'boss_cultista-wrapper');

   // console.log(detectarColisaoParedeE__quadRight__bossRight('player', 'paredeE', 'quadRight', 'boss_cultista-right'));
};

//detecta colisão na parede esquerda
function detectarColisaoParedeE__quadRight__pedra1Right__pedra2Right__estanteRight__mesaRight_estanteRight2_estanteRight3_estanteRight4(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5, idObjeto6, idObjeto7, idObjeto8, idObjeto9, idObjeto10) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeE = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadRight = document.getElementById(idObjeto3).getBoundingClientRect();
    let pedra1Right = document.getElementById(idObjeto4).getBoundingClientRect();
    let pedra2Right = document.getElementById(idObjeto5).getBoundingClientRect();
    let estanteRight = document.getElementById(idObjeto6).getBoundingClientRect();
    let mesaRight = document.getElementById(idObjeto7).getBoundingClientRect();
    let estanteRight2 = document.getElementById(idObjeto8).getBoundingClientRect();
    let estanteRight3 = document.getElementById(idObjeto9).getBoundingClientRect();
    let estanteRight4 = document.getElementById(idObjeto10).getBoundingClientRect();

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

    let pontos__pedra1Right = [{x : pedra1Right.left, y : pedra1Right.top}, 
                               {x : pedra1Right.left + pedra1Right.width, y : pedra1Right.top},
                               {x : pedra1Right.left + pedra1Right.width, y : pedra1Right.top + pedra1Right.height},
                               {x : pedra1Right.left, y : pedra1Right.top + pedra1Right.height}];
                               
    let pontos__pedra2Right = [{x : pedra2Right.left, y : pedra2Right.top}, 
                               {x : pedra2Right.left + pedra2Right.width, y : pedra2Right.top},
                               {x : pedra2Right.left + pedra2Right.width, y : pedra2Right.top + pedra2Right.height},
                               {x : pedra2Right.left, y : pedra2Right.top + pedra2Right.height}]; 

    let pontos__estanteRight = [{x : estanteRight.left, y : estanteRight.top}, 
                                {x : estanteRight.left + estanteRight.width, y : estanteRight.top},
                                {x : estanteRight.left + estanteRight.width, y : estanteRight.top + estanteRight.height},
                                {x : estanteRight.left, y : estanteRight.top + estanteRight.height}];

    let pontos__mesaRight = [{x : mesaRight.left, y : mesaRight.top}, 
                             {x : mesaRight.left + mesaRight.width, y : mesaRight.top},
                             {x : mesaRight.left + mesaRight.width, y : mesaRight.top + mesaRight.height},
                             {x : mesaRight.left, y : mesaRight.top + mesaRight.height}];

    let pontos__estanteRight2 = [{x : estanteRight2.left, y : estanteRight2.top}, 
                                {x : estanteRight2.left + estanteRight2.width, y : estanteRight2.top},
                                {x : estanteRight2.left + estanteRight2.width, y : estanteRight2.top + estanteRight2.height},
                                {x : estanteRight2.left, y : estanteRight2.top + estanteRight2.height}];

    let pontos__estanteRight3 = [{x : estanteRight3.left, y : estanteRight3.top}, 
                                    {x : estanteRight3.left + estanteRight3.width, y : estanteRight3.top},
                                    {x : estanteRight3.left + estanteRight3.width, y : estanteRight3.top + estanteRight3.height},
                                    {x : estanteRight3.left, y : estanteRight3.top + estanteRight3.height}];

    let pontos__estanteRight4 = [{x : estanteRight4.left, y : estanteRight4.top}, 
                                        {x : estanteRight4.left + estanteRight4.width, y : estanteRight4.top},
                                        {x : estanteRight4.left + estanteRight4.width, y : estanteRight4.top + estanteRight4.height},
                                        {x : estanteRight4.left, y : estanteRight4.top + estanteRight4.height}];4
    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
    ((pontos_Player[indice].x >= paredeE.left && pontos_Player[indice].x <= paredeE.left + paredeE.width & pontos_Player[indice].y >= paredeE.top && pontos_Player[indice].y <= paredeE.top + paredeE.height)) ||

    ((pontos_parede_E[indice].x >= objetoPlayer.left && pontos_parede_E[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_parede_E[indice].y >= objetoPlayer.top && pontos_parede_E[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= quadRight.left && pontos_Player[indice].x <= quadRight.left + quadRight.width && 
    pontos_Player[indice].y >= quadRight.top && pontos_Player[indice].y <= quadRight.top + quadRight.height)) ||

    ((pontos_quad_Right[indice].x >= objetoPlayer.left && pontos_quad_Right[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_quad_Right[indice].y >= objetoPlayer.top && pontos_quad_Right[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= pedra1Right.left && pontos_Player[indice].x <= pedra1Right.left + pedra1Right.width && 
    pontos_Player[indice].y >= pedra1Right.top && pontos_Player[indice].y <= pedra1Right.top + pedra1Right.height)) ||

    ((pontos__pedra1Right[indice].x >= objetoPlayer.left && pontos__pedra1Right[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos__pedra1Right[indice].y >= objetoPlayer.top && pontos__pedra1Right[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= pedra2Right.left && pontos_Player[indice].x <= pedra2Right.left + pedra2Right.width && 
    pontos_Player[indice].y >= pedra2Right.top && pontos_Player[indice].y <= pedra2Right.top + pedra2Right.height)) ||
    
    ((pontos__pedra2Right[indice].x >= objetoPlayer.left && pontos__pedra2Right[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos__pedra2Right[indice].y >= objetoPlayer.top && pontos__pedra2Right[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= estanteRight.left && pontos_Player[indice].x <= estanteRight.left + estanteRight.width && 
    pontos_Player[indice].y >= estanteRight.top && pontos_Player[indice].y <= estanteRight.top + estanteRight.height)) ||
        
    ((pontos__estanteRight[indice].x >= objetoPlayer.left && pontos__estanteRight[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos__estanteRight[indice].y >= objetoPlayer.top && pontos__estanteRight[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= mesaRight.left && pontos_Player[indice].x <= mesaRight.left + mesaRight.width && 
    pontos_Player[indice].y >= mesaRight.top && pontos_Player[indice].y <= mesaRight.top + mesaRight.height)) ||
            
    ((pontos__mesaRight[indice].x >= objetoPlayer.left && pontos__mesaRight[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos__mesaRight[indice].y >= objetoPlayer.top && pontos__mesaRight[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= estanteRight2.left && pontos_Player[indice].x <= estanteRight2.left + estanteRight2.width && 
    pontos_Player[indice].y >= estanteRight2.top && pontos_Player[indice].y <= estanteRight2.top + estanteRight2.height)) ||
            
    ((pontos__estanteRight2[indice].x >= objetoPlayer.left && pontos__estanteRight2[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos__estanteRight2[indice].y >= objetoPlayer.top && pontos__estanteRight2[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||
    
    ((pontos_Player[indice].x >= estanteRight3.left && pontos_Player[indice].x <= estanteRight3.left + estanteRight3.width && 
    pontos_Player[indice].y >= estanteRight3.top && pontos_Player[indice].y <= estanteRight3.top + estanteRight3.height)) ||
                
    ((pontos__estanteRight3[indice].x >= objetoPlayer.left && pontos__estanteRight3[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos__estanteRight3[indice].y >= objetoPlayer.top && pontos__estanteRight3[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||


    ((pontos_Player[indice].x >= estanteRight4.left && pontos_Player[indice].x <= estanteRight4.left + estanteRight4.width && 
    pontos_Player[indice].y >= estanteRight4.top && pontos_Player[indice].y <= estanteRight4.top + estanteRight4.height)) ||
                    
            ((pontos__estanteRight4[indice].x >= objetoPlayer.left && pontos__estanteRight4[indice].x <= objetoPlayer.left + objetoPlayer.width && 
                pontos__estanteRight4[indice].y >= objetoPlayer.top && pontos__estanteRight4[indice].y <= objetoPlayer.top + objetoPlayer.height))
       
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
function detectarColisaoParedeD__quadLeft__pedra1Left__pedra2Left__estanteLeft__mesaLeft_estanteLeft2_estanteLeft3_estanteLeft4(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5, idObjeto6, idObjeto7, idObjeto8, idObjeto9, idObjeto10) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeD = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadLeft = document.getElementById(idObjeto3).getBoundingClientRect();
    let pedra1Left = document.getElementById(idObjeto4).getBoundingClientRect();
    let pedra2Left = document.getElementById(idObjeto5).getBoundingClientRect();
    let estanteLeft = document.getElementById(idObjeto6).getBoundingClientRect();
    let mesaLeft = document.getElementById(idObjeto7).getBoundingClientRect();
    let estanteLeft2 = document.getElementById(idObjeto8).getBoundingClientRect();
    let estanteLeft3 = document.getElementById(idObjeto9).getBoundingClientRect();
    let estanteLeft4 = document.getElementById(idObjeto10).getBoundingClientRect();

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

    let pontos__pedra1Left = [{x : pedra1Left.left, y : pedra1Left.top}, 
                               {x : pedra1Left.left + pedra1Left.width, y : pedra1Left.top},
                               {x : pedra1Left.left + pedra1Left.width, y : pedra1Left.top + pedra1Left.height},
                               {x : pedra1Left.left, y : pedra1Left.top + pedra1Left.height}];
                               
    let pontos__pedra2Left = [{x : pedra2Left.left, y : pedra2Left.top}, 
                              {x : pedra2Left.left + pedra2Left.width, y : pedra2Left.top},
                              {x : pedra2Left.left + pedra2Left.width, y : pedra2Left.top + pedra2Left.height},
                              {x : pedra2Left.left, y : pedra2Left.top + pedra2Left.height}]; 

    let pontos__estanteLeft = [{x : estanteLeft.left, y : estanteLeft.top}, 
                               {x : estanteLeft.left + estanteLeft.width, y : estanteLeft.top},
                               {x : estanteLeft.left + estanteLeft.width, y : estanteLeft.top + estanteLeft.height},
                               {x : estanteLeft.left, y : estanteLeft.top + estanteLeft.height}];

    let pontos__mesaLeft = [{x : mesaLeft.left, y : mesaLeft.top}, 
                            {x : mesaLeft.left + mesaLeft.width, y : mesaLeft.top},
                            {x : mesaLeft.left + mesaLeft.width, y : mesaLeft.top + mesaLeft.height},
                            {x : mesaLeft.left, y : mesaLeft.top + mesaLeft.height}];

    let pontos__estanteLeft2 = [{x : estanteLeft2.left, y : estanteLeft2.top}, 
                                {x : estanteLeft2.left + estanteLeft2.width, y : estanteLeft2.top},
                                {x : estanteLeft2.left + estanteLeft2.width, y : estanteLeft2.top + estanteLeft2.height},
                                {x : estanteLeft2.left, y : estanteLeft2.top + estanteLeft2.height}];

    let pontos__estanteLeft3 = [{x : estanteLeft3.left, y : estanteLeft3.top}, 
                                {x : estanteLeft3.left + estanteLeft3.width, y : estanteLeft3.top},
                                {x : estanteLeft3.left + estanteLeft3.width, y : estanteLeft3.top + estanteLeft3.height},
                                {x : estanteLeft3.left, y : estanteLeft3.top + estanteLeft3.height}];

    let pontos__estanteLeft4 = [{x : estanteLeft4.left, y : estanteLeft4.top}, 
                                {x : estanteLeft4.left + estanteLeft4.width, y : estanteLeft4.top},
                                {x : estanteLeft4.left + estanteLeft4.width, y : estanteLeft4.top + estanteLeft4.height},
                                {x : estanteLeft4.left, y : estanteLeft4.top + estanteLeft4.height}];

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

        ((pontos_Player[indice].x >= pedra1Left.left && pontos_Player[indice].x <= pedra1Left.left + pedra1Left.width && 
        pontos_Player[indice].y >= pedra1Left.top && pontos_Player[indice].y <= pedra1Left.top + pedra1Left.height)) ||
        
        ((pontos__pedra1Left[indice].x >= objetoPlayer.left && pontos__pedra1Left[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos__pedra1Left[indice].y >= objetoPlayer.top && pontos__pedra1Left[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= pedra2Left.left && pontos_Player[indice].x <= pedra2Left.left + pedra2Left.width && 
        pontos_Player[indice].y >= pedra2Left.top && pontos_Player[indice].y <= pedra2Left.top + pedra2Left.height)) ||
            
        ((pontos__pedra2Left[indice].x >= objetoPlayer.left && pontos__pedra2Left[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos__pedra2Left[indice].y >= objetoPlayer.top && pontos__pedra2Left[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= estanteLeft.left && pontos_Player[indice].x <= estanteLeft.left + estanteLeft.width && 
        pontos_Player[indice].y >= estanteLeft.top && pontos_Player[indice].y <= estanteLeft.top + estanteLeft.height)) ||
                
        ((pontos__estanteLeft[indice].x >= objetoPlayer.left && pontos__estanteLeft[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos__estanteLeft[indice].y >= objetoPlayer.top && pontos__estanteLeft[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= mesaLeft.left && pontos_Player[indice].x <= mesaLeft.left + mesaLeft.width && 
        pontos_Player[indice].y >= mesaLeft.top && pontos_Player[indice].y <= mesaLeft.top + mesaLeft.height)) ||
                    
        ((pontos__mesaLeft[indice].x >= objetoPlayer.left && pontos__mesaLeft[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos__mesaLeft[indice].y >= objetoPlayer.top && pontos__mesaLeft[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= estanteLeft2.left && pontos_Player[indice].x <= estanteLeft2.left + estanteLeft2.width && 
        pontos_Player[indice].y >= estanteLeft2.top && pontos_Player[indice].y <= estanteLeft2.top + estanteLeft2.height)) ||
                    
        ((pontos__estanteLeft2[indice].x >= objetoPlayer.left && pontos__estanteLeft2[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos__estanteLeft2[indice].y >= objetoPlayer.top && pontos__estanteLeft2[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= estanteLeft3.left && pontos_Player[indice].x <= estanteLeft3.left + estanteLeft3.width && 
        pontos_Player[indice].y >= estanteLeft3.top && pontos_Player[indice].y <= estanteLeft3.top + estanteLeft3.height)) ||
                        
        ((pontos__estanteLeft3[indice].x >= objetoPlayer.left && pontos__estanteLeft3[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos__estanteLeft3[indice].y >= objetoPlayer.top && pontos__estanteLeft3[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= estanteLeft4.left && pontos_Player[indice].x <= estanteLeft4.left + estanteLeft4.width && 
        pontos_Player[indice].y >= estanteLeft4.top && pontos_Player[indice].y <= estanteLeft4.top + estanteLeft4.height)) ||
                            
        ((pontos__estanteLeft4[indice].x >= objetoPlayer.left && pontos__estanteLeft4[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos__estanteLeft4[indice].y >= objetoPlayer.top && pontos__estanteLeft4[indice].y <= objetoPlayer.top + objetoPlayer.height))

        ? colidiu = true : indice ++;
    tecD = false;

    if (colidiu == true && tecD == false) {
        dx = 0;
    } else {
        tecD = true;
    };

    return colidiu;
};

//detecta colisão na parede de cima
function detectarColisaoParedeC__quadBottom__pedra1Bottom__pedra2Bottom__estanteBottom_estanteBottom2_estanteBottom3_estanteBottom4(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5, idObjeto6, idObjeto7, idObjeto8, idObjeto9) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeC = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadBottom = document.getElementById(idObjeto3).getBoundingClientRect();
    let pedra1Bottom = document.getElementById(idObjeto4).getBoundingClientRect();
    let pedra2Bottom = document.getElementById(idObjeto5).getBoundingClientRect();
    let estanteBottom = document.getElementById(idObjeto6).getBoundingClientRect();
    let estanteBottom2 = document.getElementById(idObjeto7).getBoundingClientRect();
    let estanteBottom3 = document.getElementById(idObjeto8).getBoundingClientRect();
    let estanteBottom4 = document.getElementById(idObjeto9).getBoundingClientRect();

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

    let pontos__pedra1Bottom = [{x : pedra1Bottom.left, y : pedra1Bottom.top}, 
                              {x : pedra1Bottom.left + pedra1Bottom.width, y : pedra1Bottom.top},
                              {x : pedra1Bottom.left + pedra1Bottom.width, y : pedra1Bottom.top + pedra1Bottom.height},
                              {x : pedra1Bottom.left, y : pedra1Bottom.top + pedra1Bottom.height}];
                              
    let pontos__pedra2Bottom = [{x : pedra2Bottom.left, y : pedra2Bottom.top}, 
                                {x : pedra2Bottom.left + pedra2Bottom.width, y : pedra2Bottom.top},
                                {x : pedra2Bottom.left + pedra2Bottom.width, y : pedra2Bottom.top + pedra2Bottom.height},
                                {x : pedra2Bottom.left, y : pedra2Bottom.top + pedra2Bottom.height}];

    let pontos__estanteBottom = [{x : estanteBottom.left, y : estanteBottom.top}, 
                                 {x : estanteBottom.left + estanteBottom.width, y : estanteBottom.top},
                                 {x : estanteBottom.left + estanteBottom.width, y : estanteBottom.top + estanteBottom.height},
                                 {x : estanteBottom.left, y : estanteBottom.top + estanteBottom.height}];

    let pontos__estanteBottom2 = [{x : estanteBottom2.left, y : estanteBottom2.top}, 
                                    {x : estanteBottom2.left + estanteBottom2.width, y : estanteBottom2.top},
                                    {x : estanteBottom2.left + estanteBottom2.width, y : estanteBottom2.top + estanteBottom.height},
                                    {x : estanteBottom2.left, y : estanteBottom2.top + estanteBottom2.height}];

    let pontos__estanteBottom3 = [{x : estanteBottom3.left, y : estanteBottom3.top}, 
                                {x : estanteBottom3.left + estanteBottom3.width, y : estanteBottom3.top},
                                {x : estanteBottom3.left + estanteBottom3.width, y : estanteBottom3.top + estanteBottom3.height},
                                {x : estanteBottom3.left, y : estanteBottom3.top + estanteBottom3.height}];

    let pontos__estanteBottom4 = [{x : estanteBottom4.left, y : estanteBottom4.top}, 
                                {x : estanteBottom4.left + estanteBottom4.width, y : estanteBottom4.top},
                                {x : estanteBottom4.left + estanteBottom4.width, y : estanteBottom4.top + estanteBottom4.height},
                                {x : estanteBottom4.left, y : estanteBottom4.top + estanteBottom4.height}];

    let indice = 0;
    let colidiu = false;
2
    while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= paredeC.left && pontos_Player[indice].x <= paredeC.left + paredeC.width && 
        pontos_Player[indice].y >= paredeC.top && pontos_Player[indice].y <= paredeC.top + paredeC.height)) ||

        ((pontos_parede_C[indice].x >= objetoPlayer.left && pontos_parede_C[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_parede_C[indice].y >= objetoPlayer.top && pontos_parede_C[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= quadBottom.left && pontos_Player[indice].x <= quadBottom.left + quadBottom.width && 
            pontos_Player[indice].y >= quadBottom.top && pontos_Player[indice].y <= quadBottom.top + quadBottom.height)) ||
    
        ((pontos_quad_Bottom[indice].x >= objetoPlayer.left && pontos_quad_Bottom[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_quad_Bottom[indice].y >= objetoPlayer.top && pontos_quad_Bottom[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= pedra1Bottom.left && pontos_Player[indice].x <= pedra1Bottom.left + pedra1Bottom.width && 
        pontos_Player[indice].y >= pedra1Bottom.top && pontos_Player[indice].y <= pedra1Bottom.top + pedra1Bottom.height)) ||
            
        ((pontos__pedra1Bottom[indice].x >= objetoPlayer.left && pontos__pedra1Bottom[indice].x <= objetoPlayer.left + objetoPlayer.width &&
        pontos__pedra1Bottom[indice].y >= objetoPlayer.top && pontos__pedra1Bottom[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= pedra2Bottom.left && pontos_Player[indice].x <= pedra2Bottom.left + pedra2Bottom.width && 
        pontos_Player[indice].y >= pedra2Bottom.top && pontos_Player[indice].y <= pedra2Bottom.top + pedra2Bottom.height)) ||
                
        ((pontos__pedra2Bottom[indice].x >= objetoPlayer.left && pontos__pedra2Bottom[indice].x <= objetoPlayer.left + objetoPlayer.width &&
        pontos__pedra2Bottom[indice].y >= objetoPlayer.top && pontos__pedra2Bottom[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= estanteBottom.left && pontos_Player[indice].x <= estanteBottom.left + estanteBottom.width && 
        pontos_Player[indice].y >= estanteBottom.top && pontos_Player[indice].y <= estanteBottom.top + estanteBottom.height)) ||
                    
        ((pontos__estanteBottom[indice].x >= objetoPlayer.left && pontos__estanteBottom[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos__estanteBottom[indice].y >= objetoPlayer.top && pontos__estanteBottom[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= estanteBottom2.left && pontos_Player[indice].x <= estanteBottom2.left + estanteBottom2.width && 
            pontos_Player[indice].y >= estanteBottom2.top && pontos_Player[indice].y <= estanteBottom2.top + estanteBottom2.height)) ||
                        
        ((pontos__estanteBottom2[indice].x >= objetoPlayer.left && pontos__estanteBottom2[indice].x <= objetoPlayer.left + objetoPlayer.width && 
            pontos__estanteBottom2[indice].y >= objetoPlayer.top && pontos__estanteBottom2[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= estanteBottom3.left && pontos_Player[indice].x <= estanteBottom3.left + estanteBottom3.width && 
        pontos_Player[indice].y >= estanteBottom3.top && pontos_Player[indice].y <= estanteBottom3.top + estanteBottom3.height)) ||
                            
        ((pontos__estanteBottom3[indice].x >= objetoPlayer.left && pontos__estanteBottom3[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos__estanteBottom3[indice].y >= objetoPlayer.top && pontos__estanteBottom3[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= estanteBottom4.left && pontos_Player[indice].x <= estanteBottom4.left + estanteBottom4.width && 
        pontos_Player[indice].y >= estanteBottom4.top && pontos_Player[indice].y <= estanteBottom4.top + estanteBottom4.height)) ||
                        
        ((pontos__estanteBottom4[indice].x >= objetoPlayer.left && pontos__estanteBottom4[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos__estanteBottom4[indice].y >= objetoPlayer.top && pontos__estanteBottom4[indice].y <= objetoPlayer.top + objetoPlayer.height)) 
        
        ? colidiu = true : indice ++;2
    tecW = false;

    if (colidiu == true && tecW == false) {
        dy = 0;
    } else {
        tecW = true;
    };

    return colidiu;
};

//detecta colisão na parede de baixo e na parte de cima de um objeto
function detectarColisaoParedeB__quadTop__pedra1Top__pedra2Top__estanteTop__mesaTop_estanteBottom2_estanteTop3_estanteTop4(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5, idObjeto6, idObjeto7, idObjeto8, idObjeto9, idObjeto10) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeB = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadTop = document.getElementById(idObjeto3).getBoundingClientRect();
    let pedra1Top = document.getElementById(idObjeto4).getBoundingClientRect();
    let pedra2Top = document.getElementById(idObjeto5).getBoundingClientRect();
    let estanteTop = document.getElementById(idObjeto6).getBoundingClientRect();
    let mesaTop = document.getElementById(idObjeto7).getBoundingClientRect();
    let estanteTop2 = document.getElementById(idObjeto8).getBoundingClientRect();
    let estanteTop3 = document.getElementById(idObjeto9).getBoundingClientRect();
    let estanteTop4 = document.getElementById(idObjeto10).getBoundingClientRect();

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

    let pontos__pedra1Top = [{x : pedra1Top.left, y : pedra1Top.top}, 
                             {x : pedra1Top.left + pedra1Top.width, y : pedra1Top.top},
                             {x : pedra1Top.left + pedra1Top.width, y : pedra1Top.top + pedra1Top.height},
                             {x : pedra1Top.left, y : pedra1Top.top + pedra1Top.height}]; 

    let pontos__pedra2Top = [{x : pedra2Top.left, y : pedra2Top.top}, 
                             {x : pedra2Top.left + pedra2Top.width, y : pedra2Top.top},
                             {x : pedra2Top.left + pedra2Top.width, y : pedra2Top.top + pedra2Top.height},
                             {x : pedra2Top.left, y : pedra2Top.top + pedra2Top.height}];

    let pontos__estanteTop = [{x : estanteTop.left, y : estanteTop.top}, 
                              {x : estanteTop.left + estanteTop.width, y : estanteTop.top},
                              {x : estanteTop.left + estanteTop.width, y : estanteTop.top + estanteTop.height},
                              {x : estanteTop.left, y : estanteTop.top + estanteTop.height}];

    let pontos__mesaTop = [{x : mesaTop.left, y : mesaTop.top}, 
                              {x : mesaTop.left + mesaTop.width, y : mesaTop.top},
                              {x : mesaTop.left + mesaTop.width, y : mesaTop.top + mesaTop.height},
                              {x : mesaTop.left, y : mesaTop.top + mesaTop.height}];

    let pontos__estanteTop2 = [{x : estanteTop2.left, y : estanteTop2.top}, 
                                {x : estanteTop2.left + estanteTop2.width, y : estanteTop2.top},
                                {x : estanteTop2.left + estanteTop2.width, y : estanteTop2.top + estanteTop2.height},
                                {x : estanteTop2.left, y : estanteTop2.top + estanteTop2.height}];

    let pontos__estanteTop3 = [{x : estanteTop3.left, y : estanteTop3.top}, 
                                {x : estanteTop3.left + estanteTop3.width, y : estanteTop3.top},
                                {x : estanteTop3.left + estanteTop3.width, y : estanteTop3.top + estanteTop3.height},
                                {x : estanteTop3.left, y : estanteTop3.top + estanteTop3.height}];

    let pontos__estanteTop4 = [{x : estanteTop4.left, y : estanteTop4.top}, 
                                {x : estanteTop4.left + estanteTop4.width, y : estanteTop4.top},
                                {x : estanteTop4.left + estanteTop4.width, y : estanteTop4.top + estanteTop4.height},
                                {x : estanteTop4.left, y : estanteTop4.top + estanteTop4.height}];

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

        ((pontos_Player[indice].x >= pedra1Top.left && pontos_Player[indice].x <= pedra1Top.left + pedra1Top.width && 
        pontos_Player[indice].y >= pedra1Top.top && pontos_Player[indice].y <= pedra1Top.top + pedra1Top.height)) ||
                
        ((pontos__pedra1Top[indice].x >= objetoPlayer.left && pontos__pedra1Top[indice].x <= objetoPlayer.left + objetoPlayer.width &&
        pontos__pedra1Top[indice].y >= objetoPlayer.top && pontos__pedra1Top[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= pedra2Top.left && pontos_Player[indice].x <= pedra2Top.left + pedra2Top.width && 
        pontos_Player[indice].y >= pedra2Top.top && pontos_Player[indice].y <= pedra2Top.top + pedra2Top.height)) ||
                    
        ((pontos__pedra2Top[indice].x >= objetoPlayer.left && pontos__pedra2Top[indice].x <= objetoPlayer.left + objetoPlayer.width &&
        pontos__pedra2Top[indice].y >= objetoPlayer.top && pontos__pedra2Top[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= estanteTop.left && pontos_Player[indice].x <= estanteTop.left + estanteTop.width && 
        pontos_Player[indice].y >= estanteTop.top && pontos_Player[indice].y <= estanteTop.top + estanteTop.height)) ||
                        
        ((pontos__estanteTop[indice].x >= objetoPlayer.left && pontos__estanteTop[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos__estanteTop[indice].y >= objetoPlayer.top && pontos__estanteTop[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= mesaTop.left && pontos_Player[indice].x <= mesaTop.left + mesaTop.width && 
        pontos_Player[indice].y >= mesaTop.top && pontos_Player[indice].y <= mesaTop.top + mesaTop.height)) ||
                            
        ((pontos__mesaTop[indice].x >= objetoPlayer.left && pontos__mesaTop[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos__mesaTop[indice].y >= objetoPlayer.top && pontos__mesaTop[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= estanteTop2.left && pontos_Player[indice].x <= estanteTop2.left + estanteTop2.width && 
        pontos_Player[indice].y >= estanteTop2.top && pontos_Player[indice].y <= estanteTop2.top + estanteTop2.height)) ||
                            
        ((pontos__estanteTop2[indice].x >= objetoPlayer.left && pontos__estanteTop2[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos__estanteTop2[indice].y >= objetoPlayer.top && pontos__estanteTop2[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= estanteTop3.left && pontos_Player[indice].x <= estanteTop3.left + estanteTop3.width && 
        pontos_Player[indice].y >= estanteTop3.top && pontos_Player[indice].y <= estanteTop3.top + estanteTop3.height)) ||
                                
        ((pontos__estanteTop3[indice].x >= objetoPlayer.left && pontos__estanteTop3[indice].x <= objetoPlayer.left + objetoPlayer.width && 
         pontos__estanteTop3[indice].y >= objetoPlayer.top && pontos__estanteTop3[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= estanteTop4.left && pontos_Player[indice].x <= estanteTop4.left + estanteTop4.width && 
        pontos_Player[indice].y >= estanteTop4.top && pontos_Player[indice].y <= estanteTop4.top + estanteTop4.height)) ||
                                
        ((pontos__estanteTop4[indice].x >= objetoPlayer.left && pontos__estanteTop4[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos__estanteTop4[indice].y >= objetoPlayer.top && pontos__estanteTop4[indice].y <= objetoPlayer.top + objetoPlayer.height))

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
/*function detectarColisaoBossLeft(idObjeto1, idObjeto2) {
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

    /*return colidiu;
}*/

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
        window.location.href = '/jogo/pagina6/pagina6.html';
    }

    return colidiu;
}

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
        window.location.href = '/jogo/pagina5/pagina5.html';
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