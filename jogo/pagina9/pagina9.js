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
let hp;

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
let quadrado;
let quadTop; //parte de cima do quadrado
let quadBottom; //parte de baixo do quadrado
let quadLeft; //parte da esquerda do quadrado
let quadRight; //parte da direita do quadrado
let quadTopClass;
let quadBottomClass;
let quadLeftclass;
let quadRightClass;
let portaLeft; //porta da esquerda
let portaRight; //porta da direita
let portaTop; //porta de cima
let portaDown; //porta de baixo
let coracao;
let coracaoVisual;
let linPedrasLeft1;
let linPedrasLeft1Class;
let linPedrasLeft2;
let linPedrasLeft2Class;
let linPedrasLeft_top;
let linPedrasLeft_topClass;
let linPedrasLeft_bottom;
let linPedrasLeft_bottomClass;
let linPedrasLeft_right1;
let linPedrasLeft_right1Class;
let linPedrasLeft_right2;
let linPedrasLeft_right2Class;
let linPedrasLeft_right3;
let linPedrasLeft_right3Class;
let linPedrasLeft_right4;
let linPedrasLeft_right4Class;
let linPedrasRight1;
let linPedrasRight1Class;
let linPedrasRight2;
let linPedrasRight2Class;
let linPedrasRight_top;
let linPedrasRight_topClass;
let linPedrasRight_bottom;
let linPedrasRight_bottomClass;
let linPedrasRight_left1;
let linPedrasRight_left1Class;
let linPedrasRight_left2;
let linPedrasRight_left2Class;
let linPedrasRight_left3;
let linPedrasRight_left3Class;
let linPedrasRight_left4;
let linPedrasRight_left4Class;
let linPedrasTop1;
let linPedrasTop1Class;
let linPedrasTop2;
let linPedrasTop2Class;
let linPedrasTop_left;
let linPedrasTop_leftClass;
let linPedrasTop_right;
let linPedrasTop_rightClass;
let linPedrasTop_bottom1;
let linPedrasTop_bottom1Class;
let linPedrasTop_bottom2;
let linPedrasTop_bottom2Class;
let linPedrasTop_bottom3;
let linPedrasTop_bottom3Class;
let linPedrasTop_bottom4;
let linPedrasTop_bottom4Class;
let linPedrasBottom1;
let linPedrasBottom1Class;
let linPedrasBottom2;
let linPedrasBottom2Class;
let linPedrasBottom_left;
let linPedrasBottom_leftClass;
let linPedrasBottom_right;
let linPedrasBottom_rightClass;
let linPedrasBottom_top1;
let linPedrasBottom_top1Class;
let linPedrasBottom_top2;
let linPedrasBottom_top2Class;
let linPedrasBottom_top3;
let linPedrasBottom_top3Class;
let linPedrasBottom_top4;
let linPedrasBottom_top4Class;

let pedra1;
let pedra2;
let pedra3;
let pedra4;
let pedra5;
let pedra6;
let pedra7;
let pedra8;

let pedra1Class;
let pedra2Class;
let pedra3Class;
let pedra4Class;
let pedra5Class;
let pedra6Class;
let pedra7Class;
let pedra8Class;

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
    playerVida = 7;
    playerDano = 1;
    PlayerAcertou = false;
    atacou = false;

    ultimaDirecao = null;

    hp = document.querySelector('.hp8');

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

    quadrado = document.getElementById('quadrado');
    quadTop = document.getElementById('quadTop');
    quadBottom = document.getElementById('quadBottom');
    quadLeft = document.getElementById('quadLeft');
    quadRight = document.getElementById('quadRight');

    quadTopClass = document.querySelector('.quadTop');
    quadBottomClass = document.querySelector('.quadBottom');
    quadLeftclass = document.querySelector('.quadLeft');
    quadRightClass = document.querySelector('.quadRight');

    coracao = document.getElementById('coracao');
    coracaoVisual = document.getElementById('coracaoVisual');

    linPedrasLeft1 = document.getElementById('linPedrasLeft1');
    linPedrasLeft1Class = document.querySelector('.linPedrasLeft1');
    linPedrasLeft2 = document.getElementById('linPedrasLeft2');
    linPedrasLeft2Class = document.querySelector('.linPedrasLeft2');
    linPedrasLeft_top = document.getElementById('linPedrasLeft-top');
    linPedrasLeft_topClass = document.querySelector('.linPedrasLeft-top');
    linPedrasLeft_bottom = document.getElementById('linPedrasLeft-bottom');
    linPedrasLeft_bottomClass = document.querySelector('.linPedrasLeft-bottom');
    linPedrasLeft_right1 = document.getElementById('linPedrasLeft-right1');
    linPedrasLeft_right1Class = document.querySelector('.linPedrasLeft-right1');
    linPedrasLeft_right2 = document.getElementById('linPedrasLeft-right2');
    linPedrasLeft_right2Class = document.querySelector('.linPedrasLeft-right2');
    linPedrasLeft_right3 = document.getElementById('linPedrasLeft-right3');
    linPedrasLeft_right3Class = document.querySelector('.linPedrasLeft-right3')
    linPedrasLeft_right4 = document.getElementById('linPedrasLeft-right4');
    linPedrasLeft_right4Class = document.querySelector('.linPedrasLeft-right4');

    linPedrasRight1 = document.getElementById('linPedrasRight1');
    linPedrasRight1Class = document.querySelector('.linPedrasRight1');
    linPedrasRight2 = document.getElementById('linPedrasRight2');
    linPedrasRight2Class = document.querySelector('.linPedrasRight2');
    linPedrasRight_top = document.getElementById('linPedrasRight-top');
    linPedrasRight_topClass = document.querySelector('.linPedrasRight-top');
    linPedrasRight_bottom = document.getElementById('linPedrasRight-bottom');
    linPedrasRight_bottomClass = document.querySelector('.linPedrasRight-bottom');
    linPedrasRight_left1 = document.getElementById('linPedrasRight-left1');
    linPedrasRight_left1Class = document.querySelector('.linPedrasRight-left1');
    linPedrasRight_left2 = document.getElementById('linPedrasRight-left2');
    linPedrasRight_left2Class = document.querySelector('.linPedrasRight-left2');
    linPedrasRight_left3 = document.getElementById('linPedrasRight-left3');
    linPedrasRight_left3Class = document.querySelector('.linPedrasRight-left3');
    linPedrasRight_left4 = document.getElementById('linPedrasRight-left4');
    linPedrasRight_left4Class = document.querySelector('.linPedrasRight-left4');

    linPedrasTop1 = document.getElementById('linPedrasTop1');
    linPedrasTop1Class = document.querySelector('.linPedrasTop1');
    linPedrasTop2 = document.getElementById('linPedrasTop2');
    linPedrasTop2Class = document.querySelector('.linPedrasTop2');
    linPedrasTop_left = document.getElementById('linPedrasTop-left');
    linPedrasTop_leftClass = document.querySelector('.linPedrasTop-left');
    linPedrasTop_right = document.getElementById('linPedrasTop-right');
    linPedrasTop_rightClass = document.querySelector('.linPedrasTop-right');
    linPedrasTop_bottom1 = document.getElementById('linPedrasTop-bottom1');
    linPedrasTop_bottom1Class = document.querySelector('.linPedrasTop-bottom1');
    linPedrasTop_bottom2 = document.getElementById('linPedrasTop-bottom2');
    linPedrasTop_bottom2Class = document.querySelector('.linPedrasTop-bottom2');
    linPedrasTop_bottom3 = document.getElementById('linPedrasTop-bottom3');
    linPedrasTop_bottom3Class = document.querySelector('.linPedrasTop-bottom3');
    linPedrasTop_bottom4 = document.getElementById('linPedrasTop-bottom4');
    linPedrasTop_bottom4Class = document.querySelector('.linPedrasTop-bottom4');

    linPedrasBottom1 = document.getElementById('linPedrasBottom1');
    linPedrasBottom1Class = document.querySelector('.linPedrasBottom1');
    linPedrasBottom2 = document.getElementById('linPedrasBottom2');
    linPedrasBottom2Class = document.querySelector('.linPedrasBottom2');
    linPedrasBottom_left = document.getElementById('linPedrasBottom-left');
    linPedrasBottom_leftClass = document.querySelector('.linPedrasBottom-left');
    linPedrasBottom_right = document.getElementById('linPedrasBottom-right');
    linPedrasBottom_rightClass = document.querySelector('.linPedrasBottom-right');
    linPedrasBottom_top1 = document.getElementById('linPedrasBottom-top1');
    linPedrasBottom_top1Class = document.querySelector('.linPedrasBottom-top1');
    linPedrasBottom_top2 = document.getElementById('linPedrasBottom-top2');
    linPedrasBottom_top2Class = document.querySelector('.linPedrasBottom-top2');
    linPedrasBottom_top3 = document.getElementById('linPedrasBottom-top3');
    linPedrasBottom_top3Class = document.querySelector('.linPedrasBottom-top3');
    linPedrasBottom_top4 = document.getElementById('linPedrasBottom-top4');
    linPedrasBottom_top4Class = document.querySelector('.linPedrasBottom-top4');

    pedra1 = document.getElementById('pedra1');
    pedra2 = document.getElementById('pedra2');
    pedra3 = document.getElementById('pedra3');
    pedra4 = document.getElementById('pedra4');
    pedra5 = document.getElementById('pedra5');
    pedra6 = document.getElementById('pedra6');
    pedra7 = document.getElementById('pedra7');
    pedra8 = document.getElementById('pedra8');

    pedra1Class = document.querySelector('.pedra1');
    pedra2Class = document.querySelector('.pedra2');
    pedra3Class = document.querySelector('.pedra3');
    pedra4Class = document.querySelector('.pedra4');
    pedra5Class = document.querySelector('.pedra5');
    pedra6Class = document.querySelector('.pedra6');
    pedra7Class = document.querySelector('.pedra7');
    pedra8Class = document.querySelector('.pedra8');

    //portaDown = document.getElementById('portaDown');
    portaRight = document.getElementById('portaRight');
    //portaLeft = document.getElementById('portaLeft');

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

    detectarColisaoParedeE__quadRight('player', 'paredeE', 'quadRight', 'linPedrasRight1', 'linPedrasRight2', 'linPedrasRight-top', 'linPedrasRight-bottom', 'linPedrasRight-left1', 'linPedrasRight-left2', 'linPedrasRight-left3', 'linPedrasRight-left4');
    detectarColisaoParedeD__quadLeft('player', 'paredeD', 'quadLeft', 'linPedrasLeft1', 'linPedrasLeft2', 'linPedrasLeft-top', 'linPedrasLeft-bottom', 'linPedrasLeft-right1', 'linPedrasLeft-right2', 'linPedrasLeft-right3', 'linPedrasLeft-right4');
    detectarColisaoParedeC__quadBottom('player', 'paredeC', 'quadBottom', 'linPedrasBottom1', 'linPedrasBottom2', 'linPedrasBottom-left', 'linPedrasBottom-right', 'linPedrasBottom-top1', 'linPedrasBottom-top2', 'linPedrasBottom-top3', 'linPedrasBottom-top4');
    detectarColisaoParedeB__quadTop('player', 'paredeB', 'quadTop', 'linPedrasTop1', 'linPedrasTop2', 'linPedrasTop-left', 'linPedrasTop-right', 'linPedrasTop-bottom1', 'linPedrasTop-bottom2', 'linPedrasTop-bottom3', 'linPedrasTop-bottom4');

    detectarColisaoCoracao('player', 'coracao');

    //detectarColisaoBossLeft('player', 'boss_cultista-left');
    //detectarColisaoBossRight('player', 'boss_cultista-right');
    //detectarColisaoBossTop('player', 'boss_cultista-top');
    //detectarColisaoBossBottom('player', 'boss_cultista-bottom');

    (detectarColisaoBossLeft__ParedeE__quadRight('boss_cultista-left', 'paredeE', 'quadRight') == true)? bossMovimentandoLeft = false : bossMovimentandoLeft = true;
    (detectarColisaoBossRight__ParedeD__quadLeft('boss_cultista-right', 'paredeD', 'quadLeft') == true)? bossMovimentandoRight = false : bossMovimentandoRight = true;
    /*detectarColisaoBossTop__ParedeC__quadBottom('boss_cultista-top', 'paredeC', 'quadBottom');
    detectarColisaoBossBottom__ParedeB__quadTop('boss_cultista-bottom', 'paredeB', 'quadTop');*/

    //detectarColisaoPortaTop('player', 'portaTop');
    //detectarColisaoPortaDown('player', 'portaDown');
    detectarColisaoPortaRight('player', 'portaRight');
    //detectarColisaoPortaLeft('player', 'portaLeft');

    playerAttackLeft('player');
    playerAttackRight('player');
    playerAttackUp('player');
    playerAttackDown('player');
 
    detectarColisaoAtaqueLeft('attackingLeft', 'boss_cultista-right', 'quadRight');
    detectarColisaoAtaqueRight('attackingRight', 'boss_cultista-left', 'quadLeft');
    detectarColisaoAtaqueUp('attackingUp', 'boss_cultista-bottom', 'quadBottom');
    detectarColisaoAtaqueDown('attackingDown', 'boss_cultista-top', 'quadTop');

    detectarColisaoPedra1('attackingLeft', 'attackingRight', 'attackingUp', 'attackingDown', 'pedra1');
    detectarColisaoPedra2('attackingLeft', 'attackingRight', 'attackingUp', 'attackingDown', 'pedra2');
    detectarColisaoPedra3('attackingLeft', 'attackingRight', 'attackingUp', 'attackingDown', 'pedra3');
    detectarColisaoPedra4('attackingLeft', 'attackingRight', 'attackingUp', 'attackingDown', 'pedra4');
    detectarColisaoPedra5('attackingLeft', 'attackingRight', 'attackingUp', 'attackingDown', 'pedra5');
    detectarColisaoPedra6('attackingLeft', 'attackingRight', 'attackingUp', 'attackingDown', 'pedra6');
    detectarColisaoPedra7('attackingLeft', 'attackingRight', 'attackingUp', 'attackingDown', 'pedra7');
    detectarColisaoPedra8('attackingLeft', 'attackingRight', 'attackingUp', 'attackingDown', 'pedra8');

    danoAoBoss();
    
    //movimentarBoss('player', 'boss_cultista-wrapper');

   // console.log(detectarColisaoParedeE__quadRight__bossRight('player', 'paredeE', 'quadRight', 'boss_cultista-right'));
};

//detecta colisão na parede esquerda
function detectarColisaoParedeE__quadRight(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5, idObjeto6, idObjeto7, idObjeto8, idObjeto9, idObjeto10, idObjeto11) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeE = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadRight = document.getElementById(idObjeto3).getBoundingClientRect();
    let linPedrasRight1 = document.getElementById(idObjeto4).getBoundingClientRect();
    let linPedrasRight2 = document.getElementById(idObjeto5).getBoundingClientRect();
    let linPedrasRight_Top = document.getElementById(idObjeto6).getBoundingClientRect();
    let linPedrasRight_Bottom = document.getElementById(idObjeto7).getBoundingClientRect();
    let linPedrasRight_left1 = document.getElementById(idObjeto8).getBoundingClientRect();
    let linPedrasRight_left2 = document.getElementById(idObjeto9).getBoundingClientRect();
    let linPedrasRight_left3 = document.getElementById(idObjeto10).getBoundingClientRect();
    let linPedrasRight_left4 = document.getElementById(idObjeto11).getBoundingClientRect();

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

    let pontos_linPedrasRight1 = [{x : linPedrasRight1.left, y : linPedrasRight1.top}, 
                                 {x : linPedrasRight1.left + linPedrasRight1.width, y : linPedrasRight1.top},
                                 {x : linPedrasRight1.left + linPedrasRight1.width, y : linPedrasRight1.top + linPedrasRight1.height},
                                 {x : linPedrasRight1.left, y : linPedrasRight1.top + linPedrasRight1.height}];

    let pontos_linPedrasRight2 = [{x : linPedrasRight2.left, y : linPedrasRight2.top}, 
                                  {x : linPedrasRight2.left + linPedrasRight2.width, y : linPedrasRight2.top},
                                  {x : linPedrasRight2.left + linPedrasRight2.width, y : linPedrasRight2.top + linPedrasRight2.height},
                                  {x : linPedrasRight2.left, y : linPedrasRight2.top + linPedrasRight2.height}];

    let pontos_linPedrasRight_Top = [{x : linPedrasRight_Top.left, y : linPedrasRight_Top.top}, 
                                     {x : linPedrasRight_Top.left + linPedrasRight_Top.width, y : linPedrasRight_Top.top},
                                     {x : linPedrasRight_Top.left + linPedrasRight_Top.width, y : linPedrasRight_Top.top + linPedrasRight_Top.height},
                                     {x : linPedrasRight_Top.left, y : linPedrasRight_Top.top + linPedrasRight_Top.height}];

    let pontos_linPedrasRight_Bottom = [{x : linPedrasRight_Bottom.left, y : linPedrasRight_Bottom.top}, 
                                        {x : linPedrasRight_Bottom.left + linPedrasRight_Bottom.width, y : linPedrasRight_Bottom.top},
                                        {x : linPedrasRight_Bottom.left + linPedrasRight_Bottom.width, y : linPedrasRight_Bottom.top + linPedrasRight_Bottom.height},
                                        {x : linPedrasRight_Bottom.left, y : linPedrasRight_Bottom.top + linPedrasRight_Bottom.height}];

    let pontos_linPedrasRight_left1 = [{x : linPedrasRight_left1.left, y : linPedrasRight_left1.top}, 
                                       {x : linPedrasRight_left1.left + linPedrasRight_left1.width, y : linPedrasRight_left1.top},
                                       {x : linPedrasRight_left1.left + linPedrasRight_left1.width, y : linPedrasRight_left1.top + linPedrasRight_left1.height},
                                       {x : linPedrasRight_left1.left, y : linPedrasRight_left1.top + linPedrasRight_left1.height}];

    let pontos_linPedrasRight_left2 = [{x : linPedrasRight_left2.left, y : linPedrasRight_left2.top}, 
                                       {x : linPedrasRight_left2.left + linPedrasRight_left2.width, y : linPedrasRight_left2.top},
                                       {x : linPedrasRight_left2.left + linPedrasRight_left2.width, y : linPedrasRight_left2.top + linPedrasRight_left2.height},
                                       {x : linPedrasRight_left2.left, y : linPedrasRight_left2.top + linPedrasRight_left2.height}];

    let pontos_linPedrasRight_left3 = [{x : linPedrasRight_left3.left, y : linPedrasRight_left3.top}, 
                                       {x : linPedrasRight_left3.left + linPedrasRight_left3.width, y : linPedrasRight_left3.top},
                                       {x : linPedrasRight_left3.left + linPedrasRight_left3.width, y : linPedrasRight_left3.top + linPedrasRight_left3.height},
                                       {x : linPedrasRight_left3.left, y : linPedrasRight_left3.top + linPedrasRight_left3.height}];

    let pontos_linPedrasRight_left4 = [{x : linPedrasRight_left4.left, y : linPedrasRight_left4.top}, 
                                       {x : linPedrasRight_left4.left + linPedrasRight_left4.width, y : linPedrasRight_left4.top},
                                       {x : linPedrasRight_left4.left + linPedrasRight_left4.width, y : linPedrasRight_left4.top + linPedrasRight_left4.height},
                                       {x : linPedrasRight_left4.left, y : linPedrasRight_left4.top + linPedrasRight_left4.height}];

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

    ((pontos_Player[indice].x >= linPedrasRight1.left && pontos_Player[indice].x <= linPedrasRight1.left + linPedrasRight1.width && 
    pontos_Player[indice].y >= linPedrasRight1.top && pontos_Player[indice].y <= linPedrasRight1.top + linPedrasRight1.height)) ||

    ((pontos_linPedrasRight1[indice].x >= objetoPlayer.left && pontos_linPedrasRight1[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_linPedrasRight1[indice].y >= objetoPlayer.top && pontos_linPedrasRight1[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= linPedrasRight2.left && pontos_Player[indice].x <= linPedrasRight2.left + linPedrasRight2.width && 
    pontos_Player[indice].y >= linPedrasRight2.top && pontos_Player[indice].y <= linPedrasRight2.top + linPedrasRight2.height)) ||

    ((pontos_linPedrasRight2[indice].x >= objetoPlayer.left && pontos_linPedrasRight2[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_linPedrasRight2[indice].y >= objetoPlayer.top && pontos_linPedrasRight2[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= linPedrasRight_Top.left && pontos_Player[indice].x <= linPedrasRight_Top.left + linPedrasRight_Top.width && 
    pontos_Player[indice].y >= linPedrasRight_Top.top && pontos_Player[indice].y <= linPedrasRight_Top.top + linPedrasRight_Top.height)) ||

    ((pontos_linPedrasRight_Top[indice].x >= objetoPlayer.left && pontos_linPedrasRight_Top[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_linPedrasRight_Top[indice].y >= objetoPlayer.top && pontos_linPedrasRight_Top[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= linPedrasRight_Bottom.left && pontos_Player[indice].x <= linPedrasRight_Bottom.left + linPedrasRight_Bottom.width && 
    pontos_Player[indice].y >= linPedrasRight_Bottom.top && pontos_Player[indice].y <= linPedrasRight_Bottom.top + linPedrasRight_Bottom.height)) ||

    ((pontos_linPedrasRight_Bottom[indice].x >= objetoPlayer.left && pontos_linPedrasRight_Bottom[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_linPedrasRight_Bottom[indice].y >= objetoPlayer.top && pontos_linPedrasRight_Bottom[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= linPedrasRight_left1.left && pontos_Player[indice].x <= linPedrasRight_left1.left + linPedrasRight_left1.width && 
    pontos_Player[indice].y >= linPedrasRight_left1.top && pontos_Player[indice].y <= linPedrasRight_left1.top + linPedrasRight_left1.height)) ||

    ((pontos_linPedrasRight_left1[indice].x >= objetoPlayer.left && pontos_linPedrasRight_left1[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_linPedrasRight_left1[indice].y >= objetoPlayer.top && pontos_linPedrasRight_left1[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= linPedrasRight_left2.left && pontos_Player[indice].x <= linPedrasRight_left2.left + linPedrasRight_left2.width && 
    pontos_Player[indice].y >= linPedrasRight_left2.top && pontos_Player[indice].y <= linPedrasRight_left2.top + linPedrasRight_left2.height)) ||

    ((pontos_linPedrasRight_left2[indice].x >= objetoPlayer.left && pontos_linPedrasRight_left2[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_linPedrasRight_left2[indice].y >= objetoPlayer.top && pontos_linPedrasRight_left2[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= linPedrasRight_left3.left && pontos_Player[indice].x <= linPedrasRight_left3.left + linPedrasRight_left3.width && 
    pontos_Player[indice].y >= linPedrasRight_left3.top && pontos_Player[indice].y <= linPedrasRight_left3.top + linPedrasRight_left3.height)) ||

    ((pontos_linPedrasRight_left3[indice].x >= objetoPlayer.left && pontos_linPedrasRight_left3[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_linPedrasRight_left3[indice].y >= objetoPlayer.top && pontos_linPedrasRight_left3[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

    ((pontos_Player[indice].x >= linPedrasRight_left4.left && pontos_Player[indice].x <= linPedrasRight_left4.left + linPedrasRight_left4.width && 
    pontos_Player[indice].y >= linPedrasRight_left4.top && pontos_Player[indice].y <= linPedrasRight_left4.top + linPedrasRight_left4.height)) ||

    ((pontos_linPedrasRight_left4[indice].x >= objetoPlayer.left && pontos_linPedrasRight_left4[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_linPedrasRight_left4[indice].y >= objetoPlayer.top && pontos_linPedrasRight_left4[indice].y <= objetoPlayer.top + objetoPlayer.height))
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
function detectarColisaoParedeD__quadLeft(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5, idObjeto6, idObjeto7, idObjeto8, idObjeto9, idObjeto10, idObjeto11) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeD = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadLeft = document.getElementById(idObjeto3).getBoundingClientRect();
    let linPedrasLeft1 = document.getElementById(idObjeto4).getBoundingClientRect();
    let linPedrasLeft2 = document.getElementById(idObjeto5).getBoundingClientRect();
    let linPedrasLeft_top = document.getElementById(idObjeto6).getBoundingClientRect();
    let linPedrasLeft_bottom = document.getElementById(idObjeto7).getBoundingClientRect();
    let linPedrasLeft_right1 = document.getElementById(idObjeto8).getBoundingClientRect();
    let linPedrasLeft_right2 = document.getElementById(idObjeto9).getBoundingClientRect();
    let linPedrasLeft_right3 = document.getElementById(idObjeto10).getBoundingClientRect();
    let linPedrasLeft_right4 = document.getElementById(idObjeto11).getBoundingClientRect();

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

    let pontos_linPedrasLeft1 = [{x : linPedrasLeft1.left, y : linPedrasLeft1.top}, 
                                 {x : linPedrasLeft1.left + linPedrasLeft1.width, y : linPedrasLeft1.top},
                                 {x : linPedrasLeft1.left + linPedrasLeft1.width, y : linPedrasLeft1.top + linPedrasLeft1.height},
                                 {x : linPedrasLeft1.left, y : linPedrasLeft1.top + linPedrasLeft1.height}];

    let pontos_linPedrasLeft2 = [{x : linPedrasLeft2.left, y : linPedrasLeft2.top}, 
                                 {x : linPedrasLeft2.left + linPedrasLeft2.width, y : linPedrasLeft2.top},
                                 {x : linPedrasLeft2.left + linPedrasLeft2.width, y : linPedrasLeft2.top + linPedrasLeft2.height},
                                 {x : linPedrasLeft2.left, y : linPedrasLeft2.top + linPedrasLeft2.height}];

    let pontos_linPedrasLeft_top = [{x : linPedrasLeft_top.left, y : linPedrasLeft_top.top}, 
                                    {x : linPedrasLeft_top.left + linPedrasLeft_top.width, y : linPedrasLeft_top.top},
                                    {x : linPedrasLeft_top.left + linPedrasLeft_top.width, y : linPedrasLeft_top.top + linPedrasLeft_top.height},
                                    {x : linPedrasLeft_top.left, y : linPedrasLeft_top.top + linPedrasLeft_top.height}];

    let pontos_linPedrasLeft_bottom = [{x : linPedrasLeft_bottom.left, y : linPedrasLeft_bottom.top}, 
                                       {x : linPedrasLeft_bottom.left + linPedrasLeft_bottom.width, y : linPedrasLeft_bottom.top},
                                       {x : linPedrasLeft_bottom.left + linPedrasLeft_bottom.width, y : linPedrasLeft_bottom.top + linPedrasLeft_bottom.height},
                                       {x : linPedrasLeft_bottom.left, y : linPedrasLeft_bottom.top + linPedrasLeft_bottom.height}];

    let pontos_linPedrasLeft_right1 = [{x : linPedrasLeft_right1.left, y : linPedrasLeft_right1.top}, 
                                       {x : linPedrasLeft_right1.left + linPedrasLeft_right1.width, y : linPedrasLeft_right1.top},
                                       {x : linPedrasLeft_right1.left + linPedrasLeft_right1.width, y : linPedrasLeft_right1.top + linPedrasLeft_right1.height},
                                       {x : linPedrasLeft_right1.left, y : linPedrasLeft_right1.top + linPedrasLeft_right1.height}];

    let pontos_linPedrasLeft_right2 = [{x : linPedrasLeft_right2.left, y : linPedrasLeft_right2.top}, 
                                       {x : linPedrasLeft_right2.left + linPedrasLeft_right2.width, y : linPedrasLeft_right2.top},
                                       {x : linPedrasLeft_right2.left + linPedrasLeft_right2.width, y : linPedrasLeft_right2.top + linPedrasLeft_right2.height},
                                       {x : linPedrasLeft_right2.left, y : linPedrasLeft_right2.top + linPedrasLeft_right2.height}];

    let pontos_linPedrasLeft_right3 = [{x : linPedrasLeft_right3.left, y : linPedrasLeft_right3.top}, 
                                       {x : linPedrasLeft_right3.left + linPedrasLeft_right3.width, y : linPedrasLeft_right3.top},
                                       {x : linPedrasLeft_right3.left + linPedrasLeft_right3.width, y : linPedrasLeft_right3.top + linPedrasLeft_right3.height},
                                       {x : linPedrasLeft_right3.left, y : linPedrasLeft_right3.top + linPedrasLeft_right3.height}];

    let pontos_linPedrasLeft_right4 = [{x : linPedrasLeft_right4.left, y : linPedrasLeft_right4.top}, 
                                       {x : linPedrasLeft_right4.left + linPedrasLeft_right4.width, y : linPedrasLeft_right4.top},
                                       {x : linPedrasLeft_right4.left + linPedrasLeft_right4.width, y : linPedrasLeft_right4.top + linPedrasLeft_right4.height},
                                       {x : linPedrasLeft_right4.left, y : linPedrasLeft_right4.top + linPedrasLeft_right4.height}];


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

        ((pontos_Player[indice].x >= linPedrasLeft1.left && pontos_Player[indice].x <= linPedrasLeft1.left + linPedrasLeft1.width && 
        pontos_Player[indice].y >= linPedrasLeft1.top && pontos_Player[indice].y <= linPedrasLeft1.top + linPedrasLeft1.height)) ||

        ((pontos_linPedrasLeft1[indice].x >= objetoPlayer.left && pontos_linPedrasLeft1[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasLeft1[indice].y >= objetoPlayer.top && pontos_linPedrasLeft1[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasLeft2.left && pontos_Player[indice].x <= linPedrasLeft2.left + linPedrasLeft2.width && 
        pontos_Player[indice].y >= linPedrasLeft2.top && pontos_Player[indice].y <= linPedrasLeft2.top + linPedrasLeft2.height)) ||

        ((pontos_linPedrasLeft2[indice].x >= objetoPlayer.left && pontos_linPedrasLeft2[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasLeft2[indice].y >= objetoPlayer.top && pontos_linPedrasLeft2[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasLeft_top.left && pontos_Player[indice].x <= linPedrasLeft_top.left + linPedrasLeft_top.width && 
        pontos_Player[indice].y >= linPedrasLeft_top.top && pontos_Player[indice].y <= linPedrasLeft_top.top + linPedrasLeft_top.height)) ||

        ((pontos_linPedrasLeft_top[indice].x >= objetoPlayer.left && pontos_linPedrasLeft_top[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasLeft_top[indice].y >= objetoPlayer.top && pontos_linPedrasLeft_top[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasLeft_bottom.left && pontos_Player[indice].x <= linPedrasLeft_bottom.left + linPedrasLeft_bottom.width && 
        pontos_Player[indice].y >= linPedrasLeft_bottom.top && pontos_Player[indice].y <= linPedrasLeft_bottom.top + linPedrasLeft_bottom.height)) ||

        ((pontos_linPedrasLeft_bottom[indice].x >= objetoPlayer.left && pontos_linPedrasLeft_bottom[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasLeft_bottom[indice].y >= objetoPlayer.top && pontos_linPedrasLeft_bottom[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasLeft_right1.left && pontos_Player[indice].x <= linPedrasLeft_right1.left + linPedrasLeft_right1.width && 
        pontos_Player[indice].y >= linPedrasLeft_right1.top && pontos_Player[indice].y <= linPedrasLeft_right1.top + linPedrasLeft_right1.height)) ||

        ((pontos_linPedrasLeft_right1[indice].x >= objetoPlayer.left && pontos_linPedrasLeft_right1[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasLeft_right1[indice].y >= objetoPlayer.top && pontos_linPedrasLeft_right1[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasLeft_right2.left && pontos_Player[indice].x <= linPedrasLeft_right2.left + linPedrasLeft_right2.width && 
        pontos_Player[indice].y >= linPedrasLeft_right2.top && pontos_Player[indice].y <= linPedrasLeft_right2.top + linPedrasLeft_right2.height)) ||

        ((pontos_linPedrasLeft_right2[indice].x >= objetoPlayer.left && pontos_linPedrasLeft_right2[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasLeft_right2[indice].y >= objetoPlayer.top && pontos_linPedrasLeft_right2[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasLeft_right3.left && pontos_Player[indice].x <= linPedrasLeft_right3.left + linPedrasLeft_right3.width && 
        pontos_Player[indice].y >= linPedrasLeft_right3.top && pontos_Player[indice].y <= linPedrasLeft_right3.top + linPedrasLeft_right3.height)) ||

        ((pontos_linPedrasLeft_right3[indice].x >= objetoPlayer.left && pontos_linPedrasLeft_right3[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasLeft_right3[indice].y >= objetoPlayer.top && pontos_linPedrasLeft_right3[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasLeft_right4.left && pontos_Player[indice].x <= linPedrasLeft_right4.left + linPedrasLeft_right4.width && 
        pontos_Player[indice].y >= linPedrasLeft_right4.top && pontos_Player[indice].y <= linPedrasLeft_right4.top + linPedrasLeft_right4.height)) ||

        ((pontos_linPedrasLeft_right4[indice].x >= objetoPlayer.left && pontos_linPedrasLeft_right4[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasLeft_right4[indice].y >= objetoPlayer.top && pontos_linPedrasLeft_right4[indice].y <= objetoPlayer.top + objetoPlayer.height))
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
function detectarColisaoParedeC__quadBottom(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5, idObjeto6, idObjeto7, idObjeto8, idObjeto9, idObjeto10, idObjeto11) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeC = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadBottom = document.getElementById(idObjeto3).getBoundingClientRect();
    let linPedrasBottom1 = document.getElementById(idObjeto4).getBoundingClientRect();
    let linPedrasBottom2 = document.getElementById(idObjeto5).getBoundingClientRect();
    let linPedrasBottom_left = document.getElementById(idObjeto6).getBoundingClientRect();
    let linPedrasBottom_right = document.getElementById(idObjeto7).getBoundingClientRect();
    let linPedrasBottom_top1 = document.getElementById(idObjeto8).getBoundingClientRect();
    let linPedrasBottom_top2 = document.getElementById(idObjeto9).getBoundingClientRect();
    let linPedrasBottom_top3 = document.getElementById(idObjeto10).getBoundingClientRect();
    let linPedrasBottom_top4 = document.getElementById(idObjeto11).getBoundingClientRect();

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

    let pontos_linPedrasBottom1 = [{x : linPedrasBottom1.left, y : linPedrasBottom1.top}, 
                                   {x : linPedrasBottom1.left + linPedrasBottom1.width, y : linPedrasBottom1.top},
                                   {x : linPedrasBottom1.left + linPedrasBottom1.width, y : linPedrasBottom1.top + linPedrasBottom1.height},
                                   {x : linPedrasBottom1.left, y : linPedrasBottom1.top + linPedrasBottom1.height}];

    let pontos_linPedrasBottom2 = [{x : linPedrasBottom2.left, y : linPedrasBottom2.top}, 
                                   {x : linPedrasBottom2.left + linPedrasBottom2.width, y : linPedrasBottom2.top},
                                   {x : linPedrasBottom2.left + linPedrasBottom2.width, y : linPedrasBottom2.top + linPedrasBottom2.height},
                                   {x : linPedrasBottom2.left, y : linPedrasBottom2.top + linPedrasBottom2.height}];

    let pontos_linPedrasBottom_left = [{x : linPedrasBottom_left.left, y : linPedrasBottom_left.top}, 
                                       {x : linPedrasBottom_left.left + linPedrasBottom_left.width, y : linPedrasBottom_left.top},
                                       {x : linPedrasBottom_left.left + linPedrasBottom_left.width, y : linPedrasBottom_left.top + linPedrasBottom_left.height},
                                       {x : linPedrasBottom_left.left, y : linPedrasBottom_left.top + linPedrasBottom_left.height}];

    let pontos_linPedrasBottom_right = [{x : linPedrasBottom_right.left, y : linPedrasBottom_right.top}, 
                                        {x : linPedrasBottom_right.left + linPedrasBottom_right.width, y : linPedrasBottom_right.top},
                                        {x : linPedrasBottom_right.left + linPedrasBottom_right.width, y : linPedrasBottom_right.top + linPedrasBottom_right.height},
                                        {x : linPedrasBottom_right.left, y : linPedrasBottom_right.top + linPedrasBottom_right.height}];

    let pontos_linPedrasBottom_top1 = [{x : linPedrasBottom_top1.left, y : linPedrasBottom_top1.top}, 
                                       {x : linPedrasBottom_top1.left + linPedrasBottom_top1.width, y : linPedrasBottom_top1.top},
                                       {x : linPedrasBottom_top1.left + linPedrasBottom_top1.width, y : linPedrasBottom_top1.top + linPedrasBottom_top1.height},
                                       {x : linPedrasBottom_top1.left, y : linPedrasBottom_top1.top + linPedrasBottom_top1.height}];

    let pontos_linPedrasBottom_top2 = [{x : linPedrasBottom_top2.left, y : linPedrasBottom_top2.top}, 
                                       {x : linPedrasBottom_top2.left + linPedrasBottom_top2.width, y : linPedrasBottom_top2.top},
                                       {x : linPedrasBottom_top2.left + linPedrasBottom_top2.width, y : linPedrasBottom_top2.top + linPedrasBottom_top2.height},
                                       {x : linPedrasBottom_top2.left, y : linPedrasBottom_top2.top + linPedrasBottom_top2.height}];

    let pontos_linPedrasBottom_top3 = [{x : linPedrasBottom_top3.left, y : linPedrasBottom_top3.top}, 
                                       {x : linPedrasBottom_top3.left + linPedrasBottom_top3.width, y : linPedrasBottom_top3.top},
                                       {x : linPedrasBottom_top3.left + linPedrasBottom_top3.width, y : linPedrasBottom_top3.top + linPedrasBottom_top3.height},
                                       {x : linPedrasBottom_top3.left, y : linPedrasBottom_top3.top + linPedrasBottom_top3.height}];

    let pontos_linPedrasBottom_top4 = [{x : linPedrasBottom_top4.left, y : linPedrasBottom_top4.top}, 
                                       {x : linPedrasBottom_top4.left + linPedrasBottom_top4.width, y : linPedrasBottom_top4.top},
                                       {x : linPedrasBottom_top4.left + linPedrasBottom_top4.width, y : linPedrasBottom_top4.top + linPedrasBottom_top4.height},
                                       {x : linPedrasBottom_top4.left, y : linPedrasBottom_top4.top + linPedrasBottom_top4.height}];

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

        ((pontos_Player[indice].x >= linPedrasBottom1.left && pontos_Player[indice].x <= linPedrasBottom1.left + linPedrasBottom1.width && 
        pontos_Player[indice].y >= linPedrasBottom1.top && pontos_Player[indice].y <= linPedrasBottom1.top + linPedrasBottom1.height)) ||

        ((pontos_linPedrasBottom1[indice].x >= objetoPlayer.left && pontos_linPedrasBottom1[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasBottom1[indice].y >= objetoPlayer.top && pontos_linPedrasBottom1[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasBottom2.left && pontos_Player[indice].x <= linPedrasBottom2.left + linPedrasBottom2.width && 
        pontos_Player[indice].y >= linPedrasBottom2.top && pontos_Player[indice].y <= linPedrasBottom2.top + linPedrasBottom2.height)) ||

        ((pontos_linPedrasBottom2[indice].x >= objetoPlayer.left && pontos_linPedrasBottom2[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasBottom2[indice].y >= objetoPlayer.top && pontos_linPedrasBottom2[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasBottom_left.left && pontos_Player[indice].x <= linPedrasBottom_left.left + linPedrasBottom_left.width && 
        pontos_Player[indice].y >= linPedrasBottom_left.top && pontos_Player[indice].y <= linPedrasBottom_left.top + linPedrasBottom_left.height)) ||

        ((pontos_linPedrasBottom_left[indice].x >= objetoPlayer.left && pontos_linPedrasBottom_left[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasBottom_left[indice].y >= objetoPlayer.top && pontos_linPedrasBottom_left[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasBottom_right.left && pontos_Player[indice].x <= linPedrasBottom_right.left + linPedrasBottom_right.width && 
        pontos_Player[indice].y >= linPedrasBottom_right.top && pontos_Player[indice].y <= linPedrasBottom_right.top + linPedrasBottom_right.height)) ||

        ((pontos_linPedrasBottom_right[indice].x >= objetoPlayer.left && pontos_linPedrasBottom_right[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasBottom_right[indice].y >= objetoPlayer.top && pontos_linPedrasBottom_right[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasBottom_top1.left && pontos_Player[indice].x <= linPedrasBottom_top1.left + linPedrasBottom_top1.width && 
        pontos_Player[indice].y >= linPedrasBottom_top1.top && pontos_Player[indice].y <= linPedrasBottom_top1.top + linPedrasBottom_top1.height)) ||

        ((pontos_linPedrasBottom_top1[indice].x >= objetoPlayer.left && pontos_linPedrasBottom_top1[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasBottom_top1[indice].y >= objetoPlayer.top && pontos_linPedrasBottom_top1[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasBottom_top2.left && pontos_Player[indice].x <= linPedrasBottom_top2.left + linPedrasBottom_top2.width && 
        pontos_Player[indice].y >= linPedrasBottom_top2.top && pontos_Player[indice].y <= linPedrasBottom_top2.top + linPedrasBottom_top2.height)) ||

        ((pontos_linPedrasBottom_top2[indice].x >= objetoPlayer.left && pontos_linPedrasBottom_top2[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasBottom_top2[indice].y >= objetoPlayer.top && pontos_linPedrasBottom_top2[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasBottom_top3.left && pontos_Player[indice].x <= linPedrasBottom_top3.left + linPedrasBottom_top3.width && 
        pontos_Player[indice].y >= linPedrasBottom_top3.top && pontos_Player[indice].y <= linPedrasBottom_top3.top + linPedrasBottom_top3.height)) ||

        ((pontos_linPedrasBottom_top3[indice].x >= objetoPlayer.left && pontos_linPedrasBottom_top3[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasBottom_top3[indice].y >= objetoPlayer.top && pontos_linPedrasBottom_top3[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasBottom_top4.left && pontos_Player[indice].x <= linPedrasBottom_top4.left + linPedrasBottom_top4.width && 
        pontos_Player[indice].y >= linPedrasBottom_top4.top && pontos_Player[indice].y <= linPedrasBottom_top4.top + linPedrasBottom_top4.height)) ||

        ((pontos_linPedrasBottom_top4[indice].x >= objetoPlayer.left && pontos_linPedrasBottom_top4[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasBottom_top4[indice].y >= objetoPlayer.top && pontos_linPedrasBottom_top4[indice].y <= objetoPlayer.top + objetoPlayer.height))
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
function detectarColisaoParedeB__quadTop(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5, idObjeto6, idObjeto7, idObjeto8, idObjeto9, idObjeto10, idObjeto11) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeB = document.getElementById(idObjeto2).getBoundingClientRect();
    let quadTop = document.getElementById(idObjeto3).getBoundingClientRect();
    let linPedrasTop1 = document.getElementById(idObjeto4).getBoundingClientRect();
    let linPedrasTop2 = document.getElementById(idObjeto5).getBoundingClientRect();
    let linPedrasTop_left = document.getElementById(idObjeto6).getBoundingClientRect();
    let linPedrasTop_right = document.getElementById(idObjeto7).getBoundingClientRect();
    let linPedrasTop_bottom1 = document.getElementById(idObjeto8).getBoundingClientRect();
    let linPedrasTop_bottom2 = document.getElementById(idObjeto9).getBoundingClientRect();
    let linPedrasTop_bottom3 = document.getElementById(idObjeto10).getBoundingClientRect();
    let linPedrasTop_bottom4 = document.getElementById(idObjeto11).getBoundingClientRect();

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

    let pontos_linPedras_Top1 = [{x : linPedrasTop1.left, y : linPedrasTop1.top}, 
                                 {x : linPedrasTop1.left + linPedrasTop1.width, y : linPedrasTop1.top},
                                 {x : linPedrasTop1.left + linPedrasTop1.width, y : linPedrasTop1.top + linPedrasTop1.height},
                                 {x : linPedrasTop1.left, y : linPedrasTop1.top + linPedrasTop1.height}];

    let pontos_linPedras_Top2 = [{x : linPedrasTop2.left, y : linPedrasTop2.top}, 
                                 {x : linPedrasTop2.left + linPedrasTop2.width, y : linPedrasTop2.top},
                                 {x : linPedrasTop2.left + linPedrasTop2.width, y : linPedrasTop2.top + linPedrasTop2.height},
                                 {x : linPedrasTop2.left, y : linPedrasTop2.top + linPedrasTop2.height}];

    let pontos_linPedrasTop_left = [{x : linPedrasTop_left.left, y : linPedrasTop_left.top},
                                    {x : linPedrasTop_left.left + linPedrasTop_left.width, y : linPedrasTop_left.top},
                                    {x : linPedrasTop_left.left + linPedrasTop_left.width, y : linPedrasTop_left.top + linPedrasTop_left.height},
                                    {x : linPedrasTop_left.left, y : linPedrasTop_left.top + linPedrasTop_left.height}];

    let pontos_linPedrasTop_right = [{x : linPedrasTop_right.left, y : linPedrasTop_right.top},
                                     {x : linPedrasTop_right.left + linPedrasTop_right.width, y : linPedrasTop_right.top},
                                     {x : linPedrasTop_right.left + linPedrasTop_right.width, y : linPedrasTop_right.top + linPedrasTop_right.height},
                                     {x : linPedrasTop_right.left, y : linPedrasTop_right.top + linPedrasTop_right.height}];

    let pontos_linPedrasTop_bottom1 = [{x : linPedrasTop_bottom1.left, y : linPedrasTop_bottom1.top},
                                       {x : linPedrasTop_bottom1.left + linPedrasTop_bottom1.width, y : linPedrasTop_bottom1.top},
                                       {x : linPedrasTop_bottom1.left + linPedrasTop_bottom1.width, y : linPedrasTop_bottom1.top + linPedrasTop_bottom1.height},
                                       {x : linPedrasTop_bottom1.left, y : linPedrasTop_bottom1.top + linPedrasTop_bottom1.height}];

    let pontos_linPedrasTop_bottom2 = [{x : linPedrasTop_bottom2.left, y : linPedrasTop_bottom2.top},
                                       {x : linPedrasTop_bottom2.left + linPedrasTop_bottom2.width, y : linPedrasTop_bottom2.top},
                                       {x : linPedrasTop_bottom2.left + linPedrasTop_bottom2.width, y : linPedrasTop_bottom2.top + linPedrasTop_bottom2.height},
                                       {x : linPedrasTop_bottom2.left, y : linPedrasTop_bottom2.top + linPedrasTop_bottom2.height}];

    let pontos_linPedrasTop_bottom3 = [{x : linPedrasTop_bottom3.left, y : linPedrasTop_bottom3.top},
                                       {x : linPedrasTop_bottom3.left + linPedrasTop_bottom3.width, y : linPedrasTop_bottom3.top},
                                       {x : linPedrasTop_bottom3.left + linPedrasTop_bottom3.width, y : linPedrasTop_bottom3.top + linPedrasTop_bottom3.height},
                                       {x : linPedrasTop_bottom3.left, y : linPedrasTop_bottom3.top + linPedrasTop_bottom3.height}];

    let pontos_linPedrasTop_bottom4 = [{x : linPedrasTop_bottom4.left, y : linPedrasTop_bottom4.top},
                                       {x : linPedrasTop_bottom4.left + linPedrasTop_bottom4.width, y : linPedrasTop_bottom4.top},
                                       {x : linPedrasTop_bottom4.left + linPedrasTop_bottom4.width, y : linPedrasTop_bottom4.top + linPedrasTop_bottom4.height},
                                       {x : linPedrasTop_bottom4.left, y : linPedrasTop_bottom4.top + linPedrasTop_bottom4.height}];

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

        ((pontos_Player[indice].x >= linPedrasTop1.left && pontos_Player[indice].x <= linPedrasTop1.left + linPedrasTop1.width && 
        pontos_Player[indice].y >= linPedrasTop1.top && pontos_Player[indice].y <= linPedrasTop1.top + linPedrasTop1.height)) ||

        ((pontos_linPedras_Top1[indice].x >= objetoPlayer.left && pontos_linPedras_Top1[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedras_Top1[indice].y >= objetoPlayer.top && pontos_linPedras_Top1[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasTop2.left && pontos_Player[indice].x <= linPedrasTop2.left + linPedrasTop2.width && 
        pontos_Player[indice].y >= linPedrasTop2.top && pontos_Player[indice].y <= linPedrasTop2.top + linPedrasTop2.height)) ||

        ((pontos_linPedras_Top2[indice].x >= objetoPlayer.left && pontos_linPedras_Top2[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedras_Top2[indice].y >= objetoPlayer.top && pontos_linPedras_Top2[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasTop_left.left && pontos_Player[indice].x <= linPedrasTop_left.left + linPedrasTop_left.width && 
        pontos_Player[indice].y >= linPedrasTop_left.top && pontos_Player[indice].y <= linPedrasTop_left.top + linPedrasTop_left.height)) ||

        ((pontos_linPedrasTop_left[indice].x >= objetoPlayer.left && pontos_linPedrasTop_left[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasTop_left[indice].y >= objetoPlayer.top && pontos_linPedrasTop_left[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasTop_right.left && pontos_Player[indice].x <= linPedrasTop_right.left + linPedrasTop_right.width && 
        pontos_Player[indice].y >= linPedrasTop_right.top && pontos_Player[indice].y <= linPedrasTop_right.top + linPedrasTop_right.height)) ||

        ((pontos_linPedrasTop_right[indice].x >= objetoPlayer.left && pontos_linPedrasTop_right[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasTop_right[indice].y >= objetoPlayer.top && pontos_linPedrasTop_right[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasTop_bottom1.left && pontos_Player[indice].x <= linPedrasTop_bottom1.left + linPedrasTop_bottom1.width && 
        pontos_Player[indice].y >= linPedrasTop_bottom1.top && pontos_Player[indice].y <= linPedrasTop_bottom1.top + linPedrasTop_bottom1.height)) ||

        ((pontos_linPedrasTop_bottom1[indice].x >= objetoPlayer.left && pontos_linPedrasTop_bottom1[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasTop_bottom1[indice].y >= objetoPlayer.top && pontos_linPedrasTop_bottom1[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasTop_bottom2.left && pontos_Player[indice].x <= linPedrasTop_bottom2.left + linPedrasTop_bottom2.width && 
        pontos_Player[indice].y >= linPedrasTop_bottom2.top && pontos_Player[indice].y <= linPedrasTop_bottom2.top + linPedrasTop_bottom2.height)) ||

        ((pontos_linPedrasTop_bottom2[indice].x >= objetoPlayer.left && pontos_linPedrasTop_bottom2[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasTop_bottom2[indice].y >= objetoPlayer.top && pontos_linPedrasTop_bottom2[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasTop_bottom3.left && pontos_Player[indice].x <= linPedrasTop_bottom3.left + linPedrasTop_bottom3.width && 
        pontos_Player[indice].y >= linPedrasTop_bottom3.top && pontos_Player[indice].y <= linPedrasTop_bottom3.top + linPedrasTop_bottom3.height)) ||

        ((pontos_linPedrasTop_bottom3[indice].x >= objetoPlayer.left && pontos_linPedrasTop_bottom3[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasTop_bottom3[indice].y >= objetoPlayer.top && pontos_linPedrasTop_bottom3[indice].y <= objetoPlayer.top + objetoPlayer.height)) ||

        ((pontos_Player[indice].x >= linPedrasTop_bottom4.left && pontos_Player[indice].x <= linPedrasTop_bottom4.left + linPedrasTop_bottom4.width && 
        pontos_Player[indice].y >= linPedrasTop_bottom4.top && pontos_Player[indice].y <= linPedrasTop_bottom4.top + linPedrasTop_bottom4.height)) ||

        ((pontos_linPedrasTop_bottom4[indice].x >= objetoPlayer.left && pontos_linPedrasTop_bottom4[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_linPedrasTop_bottom4[indice].y >= objetoPlayer.top && pontos_linPedrasTop_bottom4[indice].y <= objetoPlayer.top + objetoPlayer.height))
        ? colidiu = true : indice ++;
    tecS = false;

    if (colidiu == true && tecS == false) {
        dy = 0;
    } else {
        tecS = true;
    };

    return colidiu;
};

function detectarColisaoCoracao(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let coracao = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                         {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                         {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_coracao = [{x : coracao.left, y : coracao.top}, 
                              {x : coracao.left + coracao.width, y : coracao.top},
                              {x : coracao.left + coracao.width, y : coracao.top + coracao.height},
                              {x : coracao.left, y : coracao.top + coracao.height}];

    let colidiu = false;
    let indice = 0;

    while ((colidiu == false) && (indice < 3))
    ((pontos_Player[indice].x >= coracao.left && pontos_Player[indice].x <= coracao.left + coracao.width && 
    pontos_Player[indice].y >= coracao.top && pontos_Player[indice].y <= coracao.top + coracao.height)) ||

    ((pontos_coracao[indice].x >= objetoPlayer.left && pontos_coracao[indice].x <= objetoPlayer.left + objetoPlayer.width && 
    pontos_coracao[indice].y >= objetoPlayer.top && pontos_coracao[indice].y <= objetoPlayer.top + objetoPlayer.height))
    ? colidiu = true : indice ++;

    if (colidiu == true) {
        coracaoVisual.style.display = 'none';
        playerDano = 2;
        /*playerVida = 8;
        hp.classList.remove('hp7');
        hp.classList.add('hp8');*/
    }

    return colidiu;
}

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
    } else if (colidiuBossLeft == false && detectarColisaoParedeD__quadLeft('player', 'paredeD', 'quadLeft', 'linPedrasLeft1', 'linPedrasLeft2', 'linPedrasLeft-top', 'linPedrasLeft-bottom') == false) {
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
    } else if (colidiuBossRight == false && detectarColisaoParedeE__quadRight('player', 'paredeE', 'quadRight', 'linPedrasRight1', 'linPedrasRight2', 'linPedrasRight-top', 'linPedrasRight-bottom') == false) {
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
    } else if (colidiuBossTop == false && detectarColisaoParedeB__quadTop('player', 'paredeB', 'quadTop', 'linPedrasTop1', 'linPedrasTop2', 'linPedrasTop-left', 'linPedrasTop-right') == false) {
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
    } else if (colidiuBossBottom == false && detectarColisaoParedeC__quadBottom('player', 'paredeC', 'quadBottom', 'linPedrasBottom1', 'linPedrasBottom2', 'linPedrasBottom-left', 'linPedrasBottom-right') == false) {
        tecW = true;
        bossMovimentando = true;
    }

    return colidiuBossBottom;
}*/

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
/*function detectarColisaoPortaDown (idObjeto1, idObjeto2) {
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
        window.location.href = '/jogo/pagina8/pagina8.html';
    }

    return colidiu;
}*/

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
        window.location.href = '/jogo/pagina26/pagina26.html';
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

function detectarColisaoPedra1(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5) {
    let attackingLeft = document.getElementById(idObjeto1).getBoundingClientRect();
    let attackingRight = document.getElementById(idObjeto2).getBoundingClientRect();
    let attackingUp = document.getElementById(idObjeto3).getBoundingClientRect();
    let attackingDown = document.getElementById(idObjeto4).getBoundingClientRect();
    let pedra1 = document.getElementById(idObjeto5).getBoundingClientRect();

    let pontos_pedra1 = [{x : pedra1.left, y : pedra1.top}, 
                         {x : pedra1.left + pedra1.width, y : pedra1.top},
                         {x : pedra1.left + pedra1.width, y : pedra1.top + pedra1.height},
                         {x : pedra1.left, y : pedra1.top + pedra1.height}];

    let pontos_ataque_Left = [{x : attackingLeft.left, y : attackingLeft.top}, 
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top},
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top + attackingLeft.height},
                              {x : attackingLeft.left, y : attackingLeft.top + attackingLeft.height}];

    let pontos_ataque_Right = [{x : attackingRight.left, y : attackingRight.top}, 
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top},
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top + attackingRight.height},
                               {x : attackingRight.left, y : attackingRight.top + attackingRight.height}];

    let pontos_ataque_Up = [{x : attackingUp.left, y : attackingUp.top}, 
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top},
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top + attackingUp.height},
                            {x : attackingUp.left, y : attackingUp.top + attackingUp.height}];

    let pontos_ataque_Down = [{x : attackingDown.left, y : attackingDown.top}, 
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top},
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top + attackingDown.height},
                              {x : attackingDown.left, y : attackingDown.top + attackingDown.height}];

    let colidiu = false;
    let indice = 0;

    while ((colidiu == false) && (indice < 3))
    ((pontos_ataque_Left[indice].x >= pedra1.left && pontos_ataque_Left[indice].x <= pedra1.left + pedra1.width && 
    pontos_ataque_Left[indice].y >= pedra1.top && pontos_ataque_Left[indice].y <= pedra1.top + pedra1.height)) ||
    
    ((pontos_pedra1[indice].x >= attackingLeft.left && pontos_pedra1[indice].x <= attackingLeft.left + attackingLeft.width && 
    pontos_pedra1[indice].y >= attackingLeft.top && pontos_pedra1[indice].y <= attackingLeft.top + attackingLeft.height)) ||

    ((pontos_ataque_Right[indice].x >= pedra1.left && pontos_ataque_Right[indice].x <= pedra1.left + pedra1.width && 
    pontos_ataque_Right[indice].y >= pedra1.top && pontos_ataque_Right[indice].y <= pedra1.top + pedra1.height)) ||
    
    ((pontos_pedra1[indice].x >= attackingRight.left && pontos_pedra1[indice].x <= attackingRight.left + attackingRight.width && 
    pontos_pedra1[indice].y >= attackingRight.top && pontos_pedra1[indice].y <= attackingRight.top + attackingRight.height)) ||

    ((pontos_ataque_Up[indice].x >= pedra1.left && pontos_ataque_Up[indice].x <= pedra1.left + pedra1.width && 
    pontos_ataque_Up[indice].y >= pedra1.top && pontos_ataque_Up[indice].y <= pedra1.top + pedra1.height)) ||
    
    ((pontos_pedra1[indice].x >= attackingUp.left && pontos_pedra1[indice].x <= attackingUp.left + attackingUp.width && 
    pontos_pedra1[indice].y >= attackingUp.top && pontos_pedra1[indice].y <= attackingUp.top + attackingUp.height)) ||

    ((pontos_ataque_Down[indice].x >= pedra1.left && pontos_ataque_Down[indice].x <= pedra1.left + pedra1.width && 
    pontos_ataque_Down[indice].y >= pedra1.top && pontos_ataque_Down[indice].y <= pedra1.top + pedra1.height)) ||
    
    ((pontos_pedra1[indice].x >= attackingDown.left && pontos_pedra1[indice].x <= attackingDown.left + attackingDown.width && 
    pontos_pedra1[indice].y >= attackingDown.top && pontos_pedra1[indice].y <= attackingDown.top + attackingDown.height))
    ? colidiu = true : indice ++;

    if (colidiu == true) {
        pedra1Class.style.display = 'none';
        linPedrasLeft1Class.style.display = 'none';
        linPedrasTop_leftClass.style.display = 'none';
        linPedrasRight_left2Class.style.display = 'none';
        linPedrasBottom_top1Class.style.display = 'none';
    }

    return colidiu;
}

function detectarColisaoPedra2(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5) {
    let attackingLeft = document.getElementById(idObjeto1).getBoundingClientRect();
    let attackingRight = document.getElementById(idObjeto2).getBoundingClientRect();
    let attackingUp = document.getElementById(idObjeto3).getBoundingClientRect();
    let attackingDown = document.getElementById(idObjeto4).getBoundingClientRect();
    let pedra2 = document.getElementById(idObjeto5).getBoundingClientRect();

    let pontos_pedra2 = [{x : pedra2.left, y : pedra2.top}, 
                         {x : pedra2.left + pedra2.width, y : pedra2.top},
                         {x : pedra2.left + pedra2.width, y : pedra2.top + pedra2.height},
                         {x : pedra2.left, y : pedra2.top + pedra2.height}];

    let pontos_ataque_Left = [{x : attackingLeft.left, y : attackingLeft.top}, 
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top},
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top + attackingLeft.height},
                              {x : attackingLeft.left, y : attackingLeft.top + attackingLeft.height}];

    let pontos_ataque_Right = [{x : attackingRight.left, y : attackingRight.top}, 
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top},
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top + attackingRight.height},
                               {x : attackingRight.left, y : attackingRight.top + attackingRight.height}];

    let pontos_ataque_Up = [{x : attackingUp.left, y : attackingUp.top}, 
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top},
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top + attackingUp.height},
                            {x : attackingUp.left, y : attackingUp.top + attackingUp.height}];

    let pontos_ataque_Down = [{x : attackingDown.left, y : attackingDown.top}, 
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top},
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top + attackingDown.height},
                              {x : attackingDown.left, y : attackingDown.top + attackingDown.height}];

    let colidiu = false;
    let indice = 0;

    while ((colidiu == false) && (indice < 3))
    ((pontos_ataque_Left[indice].x >= pedra2.left && pontos_ataque_Left[indice].x <= pedra2.left + pedra2.width && 
    pontos_ataque_Left[indice].y >= pedra2.top && pontos_ataque_Left[indice].y <= pedra2.top + pedra2.height)) ||
    
    ((pontos_pedra2[indice].x >= attackingLeft.left && pontos_pedra2[indice].x <= attackingLeft.left + attackingLeft.width && 
    pontos_pedra2[indice].y >= attackingLeft.top && pontos_pedra2[indice].y <= attackingLeft.top + attackingLeft.height)) ||

    ((pontos_ataque_Right[indice].x >= pedra2.left && pontos_ataque_Right[indice].x <= pedra2.left + pedra2.width && 
    pontos_ataque_Right[indice].y >= pedra2.top && pontos_ataque_Right[indice].y <= pedra2.top + pedra2.height)) ||
    
    ((pontos_pedra2[indice].x >= attackingRight.left && pontos_pedra2[indice].x <= attackingRight.left + attackingRight.width && 
    pontos_pedra2[indice].y >= attackingRight.top && pontos_pedra2[indice].y <= attackingRight.top + attackingRight.height)) ||

    ((pontos_ataque_Up[indice].x >= pedra2.left && pontos_ataque_Up[indice].x <= pedra2.left + pedra2.width && 
    pontos_ataque_Up[indice].y >= pedra2.top && pontos_ataque_Up[indice].y <= pedra2.top + pedra2.height)) ||
    
    ((pontos_pedra2[indice].x >= attackingUp.left && pontos_pedra2[indice].x <= attackingUp.left + attackingUp.width && 
    pontos_pedra2[indice].y >= attackingUp.top && pontos_pedra2[indice].y <= attackingUp.top + attackingUp.height)) ||

    ((pontos_ataque_Down[indice].x >= pedra2.left && pontos_ataque_Down[indice].x <= pedra2.left + pedra2.width && 
    pontos_ataque_Down[indice].y >= pedra2.top && pontos_ataque_Down[indice].y <= pedra2.top + pedra2.height)) ||
    
    ((pontos_pedra2[indice].x >= attackingDown.left && pontos_pedra2[indice].x <= attackingDown.left + attackingDown.width && 
    pontos_pedra2[indice].y >= attackingDown.top && pontos_pedra2[indice].y <= attackingDown.top + attackingDown.height))
    ? colidiu = true : indice ++;

    if (colidiu == true) {
        pedra2Class.style.display = 'none';
        linPedrasLeft2Class.style.display = 'none';
        linPedrasTop_bottom1Class.style.display = 'none';
        linPedrasRight_left3Class.style.display = 'none';
        linPedrasBottom_leftClass.style.display = 'none';
    }

    return colidiu;
}

function detectarColisaoPedra3(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5) {
    let attackingLeft = document.getElementById(idObjeto1).getBoundingClientRect();
    let attackingRight = document.getElementById(idObjeto2).getBoundingClientRect();
    let attackingUp = document.getElementById(idObjeto3).getBoundingClientRect();
    let attackingDown = document.getElementById(idObjeto4).getBoundingClientRect();
    let pedra3 = document.getElementById(idObjeto5).getBoundingClientRect();

    let pontos_pedra3 = [{x : pedra3.left, y : pedra3.top}, 
                         {x : pedra3.left + pedra3.width, y : pedra3.top},
                         {x : pedra3.left + pedra3.width, y : pedra3.top + pedra3.height},
                         {x : pedra3.left, y : pedra3.top + pedra3.height}];

    let pontos_ataque_Left = [{x : attackingLeft.left, y : attackingLeft.top}, 
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top},
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top + attackingLeft.height},
                              {x : attackingLeft.left, y : attackingLeft.top + attackingLeft.height}];

    let pontos_ataque_Right = [{x : attackingRight.left, y : attackingRight.top}, 
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top},
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top + attackingRight.height},
                               {x : attackingRight.left, y : attackingRight.top + attackingRight.height}];

    let pontos_ataque_Up = [{x : attackingUp.left, y : attackingUp.top}, 
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top},
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top + attackingUp.height},
                            {x : attackingUp.left, y : attackingUp.top + attackingUp.height}];

    let pontos_ataque_Down = [{x : attackingDown.left, y : attackingDown.top}, 
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top},
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top + attackingDown.height},
                              {x : attackingDown.left, y : attackingDown.top + attackingDown.height}];

    let colidiu = false;
    let indice = 0;

    while ((colidiu == false) && (indice < 3))
    ((pontos_ataque_Left[indice].x >= pedra3.left && pontos_ataque_Left[indice].x <= pedra3.left + pedra3.width && 
    pontos_ataque_Left[indice].y >= pedra3.top && pontos_ataque_Left[indice].y <= pedra3.top + pedra3.height)) ||
    
    ((pontos_pedra3[indice].x >= attackingLeft.left && pontos_pedra3[indice].x <= attackingLeft.left + attackingLeft.width && 
    pontos_pedra3[indice].y >= attackingLeft.top && pontos_pedra3[indice].y <= attackingLeft.top + attackingLeft.height)) ||

    ((pontos_ataque_Right[indice].x >= pedra3.left && pontos_ataque_Right[indice].x <= pedra3.left + pedra3.width && 
    pontos_ataque_Right[indice].y >= pedra3.top && pontos_ataque_Right[indice].y <= pedra3.top + pedra3.height)) ||
    
    ((pontos_pedra3[indice].x >= attackingRight.left && pontos_pedra3[indice].x <= attackingRight.left + attackingRight.width && 
    pontos_pedra3[indice].y >= attackingRight.top && pontos_pedra3[indice].y <= attackingRight.top + attackingRight.height)) ||

    ((pontos_ataque_Up[indice].x >= pedra3.left && pontos_ataque_Up[indice].x <= pedra3.left + pedra3.width && 
    pontos_ataque_Up[indice].y >= pedra3.top && pontos_ataque_Up[indice].y <= pedra3.top + pedra3.height)) ||
    
    ((pontos_pedra3[indice].x >= attackingUp.left && pontos_pedra3[indice].x <= attackingUp.left + attackingUp.width && 
    pontos_pedra3[indice].y >= attackingUp.top && pontos_pedra3[indice].y <= attackingUp.top + attackingUp.height)) ||

    ((pontos_ataque_Down[indice].x >= pedra3.left && pontos_ataque_Down[indice].x <= pedra3.left + pedra3.width && 
    pontos_ataque_Down[indice].y >= pedra3.top && pontos_ataque_Down[indice].y <= pedra3.top + pedra3.height)) ||
    
    ((pontos_pedra3[indice].x >= attackingDown.left && pontos_pedra3[indice].x <= attackingDown.left + attackingDown.width && 
    pontos_pedra3[indice].y >= attackingDown.top && pontos_pedra3[indice].y <= attackingDown.top + attackingDown.height))
    ? colidiu = true : indice ++;

    if (colidiu == true) {
        pedra3Class.style.display = 'none';
        linPedrasLeft_bottomClass.style.display = 'none';
        linPedrasTop_bottom2Class.style.display = 'none';
        linPedrasRight_left4Class.style.display = 'none';
        linPedrasBottom1Class.style.display = 'none';
    }

    return colidiu;
}

function detectarColisaoPedra4(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5) {
    let attackingLeft = document.getElementById(idObjeto1).getBoundingClientRect();
    let attackingRight = document.getElementById(idObjeto2).getBoundingClientRect();
    let attackingUp = document.getElementById(idObjeto3).getBoundingClientRect();
    let attackingDown = document.getElementById(idObjeto4).getBoundingClientRect();
    let pedra4 = document.getElementById(idObjeto5).getBoundingClientRect();

    let pontos_pedra4 = [{x : pedra4.left, y : pedra4.top}, 
                         {x : pedra4.left + pedra4.width, y : pedra4.top},
                         {x : pedra4.left + pedra4.width, y : pedra4.top + pedra4.height},
                         {x : pedra4.left, y : pedra4.top + pedra4.height}];

    let pontos_ataque_Left = [{x : attackingLeft.left, y : attackingLeft.top}, 
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top},
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top + attackingLeft.height},
                              {x : attackingLeft.left, y : attackingLeft.top + attackingLeft.height}];

    let pontos_ataque_Right = [{x : attackingRight.left, y : attackingRight.top}, 
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top},
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top + attackingRight.height},
                               {x : attackingRight.left, y : attackingRight.top + attackingRight.height}];

    let pontos_ataque_Up = [{x : attackingUp.left, y : attackingUp.top}, 
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top},
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top + attackingUp.height},
                            {x : attackingUp.left, y : attackingUp.top + attackingUp.height}];

    let pontos_ataque_Down = [{x : attackingDown.left, y : attackingDown.top}, 
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top},
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top + attackingDown.height},
                              {x : attackingDown.left, y : attackingDown.top + attackingDown.height}];

    let colidiu = false;
    let indice = 0;

    while ((colidiu == false) && (indice < 3))
    ((pontos_ataque_Left[indice].x >= pedra4.left && pontos_ataque_Left[indice].x <= pedra4.left + pedra4.width && 
    pontos_ataque_Left[indice].y >= pedra4.top && pontos_ataque_Left[indice].y <= pedra4.top + pedra4.height)) ||
    
    ((pontos_pedra4[indice].x >= attackingLeft.left && pontos_pedra4[indice].x <= attackingLeft.left + attackingLeft.width && 
    pontos_pedra4[indice].y >= attackingLeft.top && pontos_pedra4[indice].y <= attackingLeft.top + attackingLeft.height)) ||

    ((pontos_ataque_Right[indice].x >= pedra4.left && pontos_ataque_Right[indice].x <= pedra4.left + pedra4.width && 
    pontos_ataque_Right[indice].y >= pedra4.top && pontos_ataque_Right[indice].y <= pedra4.top + pedra4.height)) ||
    
    ((pontos_pedra4[indice].x >= attackingRight.left && pontos_pedra4[indice].x <= attackingRight.left + attackingRight.width && 
    pontos_pedra4[indice].y >= attackingRight.top && pontos_pedra4[indice].y <= attackingRight.top + attackingRight.height)) ||

    ((pontos_ataque_Up[indice].x >= pedra4.left && pontos_ataque_Up[indice].x <= pedra4.left + pedra4.width && 
    pontos_ataque_Up[indice].y >= pedra4.top && pontos_ataque_Up[indice].y <= pedra4.top + pedra4.height)) ||
    
    ((pontos_pedra4[indice].x >= attackingUp.left && pontos_pedra4[indice].x <= attackingUp.left + attackingUp.width && 
    pontos_pedra4[indice].y >= attackingUp.top && pontos_pedra4[indice].y <= attackingUp.top + attackingUp.height)) ||

    ((pontos_ataque_Down[indice].x >= pedra4.left && pontos_ataque_Down[indice].x <= pedra4.left + pedra4.width && 
    pontos_ataque_Down[indice].y >= pedra4.top && pontos_ataque_Down[indice].y <= pedra4.top + pedra4.height)) ||
    
    ((pontos_pedra4[indice].x >= attackingDown.left && pontos_pedra4[indice].x <= attackingDown.left + attackingDown.width && 
    pontos_pedra4[indice].y >= attackingDown.top && pontos_pedra4[indice].y <= attackingDown.top + attackingDown.height))
    ? colidiu = true : indice ++;

    if (colidiu == true) {
        pedra4Class.style.display = 'none';
        linPedrasLeft_right4Class.style.display = 'none';
        linPedrasTop_bottom3Class.style.display = 'none';
        linPedrasRight_bottomClass.style.display = 'none';
        linPedrasBottom2Class.style.display = 'none';
    }

    return colidiu;
}

function detectarColisaoPedra5(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5) {
    let attackingLeft = document.getElementById(idObjeto1).getBoundingClientRect();
    let attackingRight = document.getElementById(idObjeto2).getBoundingClientRect();
    let attackingUp = document.getElementById(idObjeto3).getBoundingClientRect();
    let attackingDown = document.getElementById(idObjeto4).getBoundingClientRect();
    let pedra5 = document.getElementById(idObjeto5).getBoundingClientRect();

    let pontos_pedra5 = [{x : pedra5.left, y : pedra5.top}, 
                         {x : pedra5.left + pedra5.width, y : pedra5.top},
                         {x : pedra5.left + pedra5.width, y : pedra5.top + pedra5.height},
                         {x : pedra5.left, y : pedra5.top + pedra5.height}];

    let pontos_ataque_Left = [{x : attackingLeft.left, y : attackingLeft.top}, 
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top},
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top + attackingLeft.height},
                              {x : attackingLeft.left, y : attackingLeft.top + attackingLeft.height}];

    let pontos_ataque_Right = [{x : attackingRight.left, y : attackingRight.top}, 
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top},
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top + attackingRight.height},
                               {x : attackingRight.left, y : attackingRight.top + attackingRight.height}];

    let pontos_ataque_Up = [{x : attackingUp.left, y : attackingUp.top}, 
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top},
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top + attackingUp.height},
                            {x : attackingUp.left, y : attackingUp.top + attackingUp.height}];

    let pontos_ataque_Down = [{x : attackingDown.left, y : attackingDown.top}, 
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top},
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top + attackingDown.height},
                              {x : attackingDown.left, y : attackingDown.top + attackingDown.height}];

    let colidiu = false;
    let indice = 0;

    while ((colidiu == false) && (indice < 3))
    ((pontos_ataque_Left[indice].x >= pedra5.left && pontos_ataque_Left[indice].x <= pedra5.left + pedra5.width && 
    pontos_ataque_Left[indice].y >= pedra5.top && pontos_ataque_Left[indice].y <= pedra5.top + pedra5.height)) ||
    
    ((pontos_pedra5[indice].x >= attackingLeft.left && pontos_pedra5[indice].x <= attackingLeft.left + attackingLeft.width && 
    pontos_pedra5[indice].y >= attackingLeft.top && pontos_pedra5[indice].y <= attackingLeft.top + attackingLeft.height)) ||

    ((pontos_ataque_Right[indice].x >= pedra5.left && pontos_ataque_Right[indice].x <= pedra5.left + pedra5.width && 
    pontos_ataque_Right[indice].y >= pedra5.top && pontos_ataque_Right[indice].y <= pedra5.top + pedra5.height)) ||
    
    ((pontos_pedra5[indice].x >= attackingRight.left && pontos_pedra5[indice].x <= attackingRight.left + attackingRight.width && 
    pontos_pedra5[indice].y >= attackingRight.top && pontos_pedra5[indice].y <= attackingRight.top + attackingRight.height)) ||

    ((pontos_ataque_Up[indice].x >= pedra5.left && pontos_ataque_Up[indice].x <= pedra5.left + pedra5.width && 
    pontos_ataque_Up[indice].y >= pedra5.top && pontos_ataque_Up[indice].y <= pedra5.top + pedra5.height)) ||
    
    ((pontos_pedra5[indice].x >= attackingUp.left && pontos_pedra5[indice].x <= attackingUp.left + attackingUp.width && 
    pontos_pedra5[indice].y >= attackingUp.top && pontos_pedra5[indice].y <= attackingUp.top + attackingUp.height)) ||

    ((pontos_ataque_Down[indice].x >= pedra5.left && pontos_ataque_Down[indice].x <= pedra5.left + pedra5.width && 
    pontos_ataque_Down[indice].y >= pedra5.top && pontos_ataque_Down[indice].y <= pedra5.top + pedra5.height)) ||
    
    ((pontos_pedra5[indice].x >= attackingDown.left && pontos_pedra5[indice].x <= attackingDown.left + attackingDown.width && 
    pontos_pedra5[indice].y >= attackingDown.top && pontos_pedra5[indice].y <= attackingDown.top + attackingDown.height))
    ? colidiu = true : indice ++;

    if (colidiu == true) {
        pedra5Class.style.display = 'none';
        linPedrasLeft_right3Class.style.display = 'none';
        linPedrasTop_bottom4Class.style.display = 'none';
        linPedrasRight2Class.style.display = 'none';
        linPedrasBottom_rightClass.style.display = 'none';
    }

    return colidiu;
}

function detectarColisaoPedra6(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5) {
    let attackingLeft = document.getElementById(idObjeto1).getBoundingClientRect();
    let attackingRight = document.getElementById(idObjeto2).getBoundingClientRect();
    let attackingUp = document.getElementById(idObjeto3).getBoundingClientRect();
    let attackingDown = document.getElementById(idObjeto4).getBoundingClientRect();
    let pedra6 = document.getElementById(idObjeto5).getBoundingClientRect();

    let pontos_pedra6 = [{x : pedra6.left, y : pedra6.top}, 
                         {x : pedra6.left + pedra6.width, y : pedra6.top},
                         {x : pedra6.left + pedra6.width, y : pedra6.top + pedra6.height},
                         {x : pedra6.left, y : pedra6.top + pedra6.height}];

    let pontos_ataque_Left = [{x : attackingLeft.left, y : attackingLeft.top}, 
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top},
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top + attackingLeft.height},
                              {x : attackingLeft.left, y : attackingLeft.top + attackingLeft.height}];

    let pontos_ataque_Right = [{x : attackingRight.left, y : attackingRight.top}, 
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top},
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top + attackingRight.height},
                               {x : attackingRight.left, y : attackingRight.top + attackingRight.height}];

    let pontos_ataque_Up = [{x : attackingUp.left, y : attackingUp.top}, 
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top},
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top + attackingUp.height},
                            {x : attackingUp.left, y : attackingUp.top + attackingUp.height}];

    let pontos_ataque_Down = [{x : attackingDown.left, y : attackingDown.top}, 
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top},
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top + attackingDown.height},
                              {x : attackingDown.left, y : attackingDown.top + attackingDown.height}];

    let colidiu = false;
    let indice = 0;

    while ((colidiu == false) && (indice < 3))
    ((pontos_ataque_Left[indice].x >= pedra6.left && pontos_ataque_Left[indice].x <= pedra6.left + pedra6.width && 
    pontos_ataque_Left[indice].y >= pedra6.top && pontos_ataque_Left[indice].y <= pedra6.top + pedra6.height)) ||
    
    ((pontos_pedra6[indice].x >= attackingLeft.left && pontos_pedra6[indice].x <= attackingLeft.left + attackingLeft.width && 
    pontos_pedra6[indice].y >= attackingLeft.top && pontos_pedra6[indice].y <= attackingLeft.top + attackingLeft.height)) ||

    ((pontos_ataque_Right[indice].x >= pedra6.left && pontos_ataque_Right[indice].x <= pedra6.left + pedra6.width && 
    pontos_ataque_Right[indice].y >= pedra6.top && pontos_ataque_Right[indice].y <= pedra6.top + pedra6.height)) ||
    
    ((pontos_pedra6[indice].x >= attackingRight.left && pontos_pedra6[indice].x <= attackingRight.left + attackingRight.width && 
    pontos_pedra6[indice].y >= attackingRight.top && pontos_pedra6[indice].y <= attackingRight.top + attackingRight.height)) ||

    ((pontos_ataque_Up[indice].x >= pedra6.left && pontos_ataque_Up[indice].x <= pedra6.left + pedra6.width && 
    pontos_ataque_Up[indice].y >= pedra6.top && pontos_ataque_Up[indice].y <= pedra6.top + pedra6.height)) ||
    
    ((pontos_pedra6[indice].x >= attackingUp.left && pontos_pedra6[indice].x <= attackingUp.left + attackingUp.width && 
    pontos_pedra6[indice].y >= attackingUp.top && pontos_pedra6[indice].y <= attackingUp.top + attackingUp.height)) ||

    ((pontos_ataque_Down[indice].x >= pedra6.left && pontos_ataque_Down[indice].x <= pedra6.left + pedra6.width && 
    pontos_ataque_Down[indice].y >= pedra6.top && pontos_ataque_Down[indice].y <= pedra6.top + pedra6.height)) ||
    
    ((pontos_pedra6[indice].x >= attackingDown.left && pontos_pedra6[indice].x <= attackingDown.left + attackingDown.width && 
    pontos_pedra6[indice].y >= attackingDown.top && pontos_pedra6[indice].y <= attackingDown.top + attackingDown.height))
    ? colidiu = true : indice ++;

    if (colidiu == true) {
        pedra6Class.style.display = 'none';
        linPedrasLeft_right2Class.style.display = 'none';
        linPedrasTop_rightClass.style.display = 'none';
        linPedrasRight1Class.style.display = 'none';
        linPedrasBottom_top4Class.style.display = 'none';
    }

    return colidiu;
}

function detectarColisaoPedra7(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5) {
    let attackingLeft = document.getElementById(idObjeto1).getBoundingClientRect();
    let attackingRight = document.getElementById(idObjeto2).getBoundingClientRect();
    let attackingUp = document.getElementById(idObjeto3).getBoundingClientRect();
    let attackingDown = document.getElementById(idObjeto4).getBoundingClientRect();
    let pedra7 = document.getElementById(idObjeto5).getBoundingClientRect();

    let pontos_pedra7 = [{x : pedra7.left, y : pedra7.top}, 
                         {x : pedra7.left + pedra7.width, y : pedra7.top},
                         {x : pedra7.left + pedra7.width, y : pedra7.top + pedra7.height},
                         {x : pedra7.left, y : pedra7.top + pedra7.height}];

    let pontos_ataque_Left = [{x : attackingLeft.left, y : attackingLeft.top}, 
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top},
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top + attackingLeft.height},
                              {x : attackingLeft.left, y : attackingLeft.top + attackingLeft.height}];

    let pontos_ataque_Right = [{x : attackingRight.left, y : attackingRight.top}, 
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top},
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top + attackingRight.height},
                               {x : attackingRight.left, y : attackingRight.top + attackingRight.height}];

    let pontos_ataque_Up = [{x : attackingUp.left, y : attackingUp.top}, 
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top},
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top + attackingUp.height},
                            {x : attackingUp.left, y : attackingUp.top + attackingUp.height}];

    let pontos_ataque_Down = [{x : attackingDown.left, y : attackingDown.top}, 
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top},
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top + attackingDown.height},
                              {x : attackingDown.left, y : attackingDown.top + attackingDown.height}];

    let colidiu = false;
    let indice = 0;

    while ((colidiu == false) && (indice < 3))
    ((pontos_ataque_Left[indice].x >= pedra7.left && pontos_ataque_Left[indice].x <= pedra7.left + pedra7.width && 
    pontos_ataque_Left[indice].y >= pedra7.top && pontos_ataque_Left[indice].y <= pedra7.top + pedra7.height)) ||
    
    ((pontos_pedra7[indice].x >= attackingLeft.left && pontos_pedra7[indice].x <= attackingLeft.left + attackingLeft.width && 
    pontos_pedra7[indice].y >= attackingLeft.top && pontos_pedra7[indice].y <= attackingLeft.top + attackingLeft.height)) ||

    ((pontos_ataque_Right[indice].x >= pedra7.left && pontos_ataque_Right[indice].x <= pedra7.left + pedra7.width && 
    pontos_ataque_Right[indice].y >= pedra7.top && pontos_ataque_Right[indice].y <= pedra7.top + pedra7.height)) ||
    
    ((pontos_pedra7[indice].x >= attackingRight.left && pontos_pedra7[indice].x <= attackingRight.left + attackingRight.width && 
    pontos_pedra7[indice].y >= attackingRight.top && pontos_pedra7[indice].y <= attackingRight.top + attackingRight.height)) ||

    ((pontos_ataque_Up[indice].x >= pedra7.left && pontos_ataque_Up[indice].x <= pedra7.left + pedra7.width && 
    pontos_ataque_Up[indice].y >= pedra7.top && pontos_ataque_Up[indice].y <= pedra7.top + pedra7.height)) ||
    
    ((pontos_pedra7[indice].x >= attackingUp.left && pontos_pedra7[indice].x <= attackingUp.left + attackingUp.width && 
    pontos_pedra7[indice].y >= attackingUp.top && pontos_pedra7[indice].y <= attackingUp.top + attackingUp.height)) ||

    ((pontos_ataque_Down[indice].x >= pedra7.left && pontos_ataque_Down[indice].x <= pedra7.left + pedra7.width && 
    pontos_ataque_Down[indice].y >= pedra7.top && pontos_ataque_Down[indice].y <= pedra7.top + pedra7.height)) ||
    
    ((pontos_pedra7[indice].x >= attackingDown.left && pontos_pedra7[indice].x <= attackingDown.left + attackingDown.width && 
    pontos_pedra7[indice].y >= attackingDown.top && pontos_pedra7[indice].y <= attackingDown.top + attackingDown.height))
    ? colidiu = true : indice ++;

    if (colidiu == true) {
        pedra7Class.style.display = 'none';
        linPedrasLeft_right1Class.style.display = 'none';
        linPedrasTop2Class.style.display = 'none';
        linPedrasRight_topClass.style.display = 'none';
        linPedrasBottom_top3Class.style.display = 'none';
    }

    return colidiu;
}

function detectarColisaoPedra8(idObjeto1, idObjeto2, idObjeto3, idObjeto4, idObjeto5) {
    let attackingLeft = document.getElementById(idObjeto1).getBoundingClientRect();
    let attackingRight = document.getElementById(idObjeto2).getBoundingClientRect();
    let attackingUp = document.getElementById(idObjeto3).getBoundingClientRect();
    let attackingDown = document.getElementById(idObjeto4).getBoundingClientRect();
    let pedra8 = document.getElementById(idObjeto5).getBoundingClientRect();

    let pontos_pedra8 = [{x : pedra8.left, y : pedra8.top}, 
                         {x : pedra8.left + pedra8.width, y : pedra8.top},
                         {x : pedra8.left + pedra8.width, y : pedra8.top + pedra8.height},
                         {x : pedra8.left, y : pedra8.top + pedra8.height}];

    let pontos_ataque_Left = [{x : attackingLeft.left, y : attackingLeft.top}, 
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top},
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top + attackingLeft.height},
                              {x : attackingLeft.left, y : attackingLeft.top + attackingLeft.height}];

    let pontos_ataque_Right = [{x : attackingRight.left, y : attackingRight.top}, 
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top},
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top + attackingRight.height},
                               {x : attackingRight.left, y : attackingRight.top + attackingRight.height}];

    let pontos_ataque_Up = [{x : attackingUp.left, y : attackingUp.top}, 
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top},
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top + attackingUp.height},
                            {x : attackingUp.left, y : attackingUp.top + attackingUp.height}];

    let pontos_ataque_Down = [{x : attackingDown.left, y : attackingDown.top}, 
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top},
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top + attackingDown.height},
                              {x : attackingDown.left, y : attackingDown.top + attackingDown.height}];

    let colidiu = false;
    let indice = 0;

    while ((colidiu == false) && (indice < 3))
    ((pontos_ataque_Left[indice].x >= pedra8.left && pontos_ataque_Left[indice].x <= pedra8.left + pedra8.width && 
    pontos_ataque_Left[indice].y >= pedra8.top && pontos_ataque_Left[indice].y <= pedra8.top + pedra8.height)) ||
    
    ((pontos_pedra8[indice].x >= attackingLeft.left && pontos_pedra8[indice].x <= attackingLeft.left + attackingLeft.width && 
    pontos_pedra8[indice].y >= attackingLeft.top && pontos_pedra8[indice].y <= attackingLeft.top + attackingLeft.height)) ||

    ((pontos_ataque_Right[indice].x >= pedra8.left && pontos_ataque_Right[indice].x <= pedra8.left + pedra8.width && 
    pontos_ataque_Right[indice].y >= pedra8.top && pontos_ataque_Right[indice].y <= pedra8.top + pedra8.height)) ||
    
    ((pontos_pedra8[indice].x >= attackingRight.left && pontos_pedra8[indice].x <= attackingRight.left + attackingRight.width && 
    pontos_pedra8[indice].y >= attackingRight.top && pontos_pedra8[indice].y <= attackingRight.top + attackingRight.height)) ||

    ((pontos_ataque_Up[indice].x >= pedra8.left && pontos_ataque_Up[indice].x <= pedra8.left + pedra8.width && 
    pontos_ataque_Up[indice].y >= pedra8.top && pontos_ataque_Up[indice].y <= pedra8.top + pedra8.height)) ||
    
    ((pontos_pedra8[indice].x >= attackingUp.left && pontos_pedra8[indice].x <= attackingUp.left + attackingUp.width && 
    pontos_pedra8[indice].y >= attackingUp.top && pontos_pedra8[indice].y <= attackingUp.top + attackingUp.height)) ||

    ((pontos_ataque_Down[indice].x >= pedra8.left && pontos_ataque_Down[indice].x <= pedra8.left + pedra8.width && 
    pontos_ataque_Down[indice].y >= pedra8.top && pontos_ataque_Down[indice].y <= pedra8.top + pedra8.height)) ||
    
    ((pontos_pedra8[indice].x >= attackingDown.left && pontos_pedra8[indice].x <= attackingDown.left + attackingDown.width && 
    pontos_pedra8[indice].y >= attackingDown.top && pontos_pedra8[indice].y <= attackingDown.top + attackingDown.height))
    ? colidiu = true : indice ++;

    if (colidiu == true) {
        pedra8Class.style.display = 'none';
        linPedrasLeft_topClass.style.display = 'none';
        linPedrasTop1Class.style.display = 'none';
        linPedrasRight_left1Class.style.display = 'none';
        linPedrasBottom_top2Class.style.display = 'none';
    }

    return colidiu;
}

//colisões de ataques com os bosses
function detectarColisaoAtaqueLeft(objeto1, objeto2, idObjeto3) {
    let attackingLeft = document.getElementById(objeto1).getBoundingClientRect();
    //let boss_cultista_Right = document.getElementById(objeto2).getBoundingClientRect();
    let quadRight = document.getElementById(idObjeto3).getBoundingClientRect();

    let pontos_ataque_Left = [{x : attackingLeft.left, y : attackingLeft.top}, 
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top},
                              {x : attackingLeft.left + attackingLeft.width, y : attackingLeft.top + attackingLeft.height},
                              {x : attackingLeft.left, y : attackingLeft.top + attackingLeft.height}];

    /*let pontos_boss_cultista_Right = [{x : boss_cultista_Right.left, y : boss_cultista_Right.top}, 
                                      {x : boss_cultista_Right.left + boss_cultista_Right.width, y : boss_cultista_Right.top},
                                      {x : boss_cultista_Right.left + boss_cultista_Right.width, y : boss_cultista_Right.top + boss_cultista_Right.height},
                                      {x : boss_cultista_Right.left, y : boss_cultista_Right.top + boss_cultista_Right.height}];*/

    let pontos_quadRight = [{x : quadRight.left, y : quadRight.top}, 
                                    {x : quadRight.left + quadRight.width, y : quadRight.top},
                                    {x : quadRight.left + quadRight.width, y : quadRight.top + quadRight.height},
                                    {x : quadRight.left, y : quadRight.top + quadRight.height}];

    let indice = 0;
    let colidiuAtaqueLeft = false;

    while((colidiuAtaqueLeft == false) && (indice < 3)) 
    /*((pontos_ataque_Left[indice].x >= boss_cultista_Right.left && pontos_ataque_Left[indice].x <= boss_cultista_Right.left + boss_cultista_Right.width && 
    pontos_ataque_Left[indice].y >= boss_cultista_Right.top && pontos_ataque_Left[indice].y <= boss_cultista_Right.top + boss_cultista_Right.height)) ||
    
    ((pontos_boss_cultista_Right[indice].x >= attackingLeft.left && pontos_boss_cultista_Right[indice].x <= attackingLeft.left + attackingLeft.width && 
    pontos_boss_cultista_Right[indice].y >= attackingLeft.top && pontos_boss_cultista_Right[indice].y <= attackingLeft.top + attackingLeft.height)) ||*/

    ((pontos_ataque_Left[indice].x >= quadRight.left && pontos_ataque_Left[indice].x <= quadRight.left + quadRight.width && 
    pontos_ataque_Left[indice].y >= quadRight.top && pontos_ataque_Left[indice].y <= quadRight.top + quadRight.height)) ||
    
    ((pontos_quadRight[indice].x >= attackingLeft.left && pontos_quadRight[indice].x <= attackingLeft.left + attackingLeft.width && 
    pontos_quadRight[indice].y >= attackingLeft.top && pontos_quadRight[indice].y <= attackingLeft.top + attackingLeft.height))
    ? colidiuAtaqueLeft = true : indice ++;

    if (colidiuAtaqueLeft == true/* && lifeBoss > 0*/) {
        //PlayerAcertou = true;
        quadrado.style.display = 'none';
        quadRightClass.style.left = 0 + 'px';
        quadLeftclass.style.left = 0 + 'px';
        quadTopClass.style.top = 0 + 'px';
        quadBottomClass.style.top = 0 + 'px';
    }

    return colidiuAtaqueLeft;
}

function detectarColisaoAtaqueRight(objeto1, objeto2, idObjeto3) {
    let attackingRight = document.getElementById(objeto1).getBoundingClientRect();
    //let boss_cultista_Left = document.getElementById(objeto2).getBoundingClientRect();
    let quadLeft = document.getElementById(idObjeto3).getBoundingClientRect();

    let pontos_ataque_Right = [{x : attackingRight.left, y : attackingRight.top}, 
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top},
                               {x : attackingRight.left + attackingRight.width, y : attackingRight.top + attackingRight.height},
                               {x : attackingRight.left, y : attackingRight.top + attackingRight.height}];

    /*let pontos_boss_cultista_Left = [{x : boss_cultista_Left.left, y : boss_cultista_Left.top}, 
                                     {x : boss_cultista_Left.left + boss_cultista_Left.width, y : boss_cultista_Left.top},
                                     {x : boss_cultista_Left.left + boss_cultista_Left.width, y : boss_cultista_Left.top + boss_cultista_Left.height},
                                     {x : boss_cultista_Left.left, y : boss_cultista_Left.top + boss_cultista_Left.height}];*/

    let pontos_quadLeft = [{x : quadLeft.left, y : quadLeft.top}, 
                           {x : quadLeft.left + quadLeft.width, y : quadLeft.top},
                           {x : quadLeft.left + quadLeft.width, y : quadLeft.top + quadLeft.height},
                           {x : quadLeft.left, y : quadLeft.top + quadLeft.height}];

    let indice = 0;
    let colidiuAtaqueRight = false;

    while((colidiuAtaqueRight == false) && (indice < 3)) {
    /*((pontos_ataque_Right[indice].x >= boss_cultista_Left.left && pontos_ataque_Right[indice].x <= boss_cultista_Left.left + boss_cultista_Left.width && 
    pontos_ataque_Right[indice].y >= boss_cultista_Left.top && pontos_ataque_Right[indice].y <= boss_cultista_Left.top + boss_cultista_Left.height)) ||
    
    ((pontos_boss_cultista_Left[indice].x >= attackingRight.left && pontos_boss_cultista_Left[indice].x <= attackingRight.left + attackingRight.width && 
    pontos_boss_cultista_Left[indice].y >= attackingRight.top && pontos_boss_cultista_Left[indice].y <= attackingRight.top + attackingRight.height)) ||*/

    ((pontos_ataque_Right[indice].x >= quadLeft.left && pontos_ataque_Right[indice].x <= quadLeft.left + quadLeft.width && 
    pontos_ataque_Right[indice].y >= quadLeft.top && pontos_ataque_Right[indice].y <= quadLeft.top + quadLeft.height)) ||
    
    ((pontos_quadLeft[indice].x >= attackingRight.left && pontos_quadLeft[indice].x <= attackingRight.left + attackingRight.width && 
    pontos_quadLeft[indice].y >= attackingRight.top && pontos_quadLeft[indice].y <= attackingRight.top + attackingRight.height))
    ? colidiuAtaqueRight = true : indice ++;
    }

    if (colidiuAtaqueRight == true && lifeBoss > 0) {
        //PlayerAcertou = true;
        quadrado.style.display = 'none';
        quadRightClass.style.left = 0 + 'px';
        quadLeftclass.style.left = 0 + 'px';
        quadTopClass.style.top = 0 + 'px';
        quadBottomClass.style.top = 0 + 'px';
    }
}

function detectarColisaoAtaqueUp(objeto1, objeto2, idObjeto3) {
    let attackingUp = document.getElementById(objeto1).getBoundingClientRect();
    //let boss_cultista_Bottom = document.getElementById(objeto2).getBoundingClientRect();
    let quadBottom = document.getElementById(idObjeto3).getBoundingClientRect();

    let pontos_ataque_Up = [{x : attackingUp.left, y : attackingUp.top}, 
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top},
                            {x : attackingUp.left + attackingUp.width, y : attackingUp.top + attackingUp.height},
                            {x : attackingUp.left, y : attackingUp.top + attackingUp.height}];

    let pontos_boss_cultista_Bottom = [{x : boss_cultista_Bottom.left, y : boss_cultista_Bottom.top}, 
                                       {x : boss_cultista_Bottom.left + boss_cultista_Bottom.width, y : boss_cultista_Bottom.top},
                                       {x : boss_cultista_Bottom.left + boss_cultista_Bottom.width, y : boss_cultista_Bottom.top + boss_cultista_Bottom.height},
                                       {x : boss_cultista_Bottom.left, y : boss_cultista_Bottom.top + boss_cultista_Bottom.height}];

    let pontos_quadBottom = [{x : quadBottom.left, y : quadBottom.top}, 
                             {x : quadBottom.left + quadBottom.width, y : quadBottom.top},
                             {x : quadBottom.left + quadBottom.width, y : quadBottom.top + quadBottom.height},
                             {x : quadBottom.left, y : quadBottom.top + quadBottom.height}];

    let indice = 0;
    let colidiuAtaqueUp = false;

    while((colidiuAtaqueUp == false) && (indice < 3)) {
    /*((pontos_ataque_Up[indice].x >= boss_cultista_Bottom.left && pontos_ataque_Up[indice].x <= boss_cultista_Bottom.left + boss_cultista_Bottom.width && 
    pontos_ataque_Up[indice].y >= boss_cultista_Bottom.top && pontos_ataque_Up[indice].y <= boss_cultista_Bottom.top + boss_cultista_Bottom.height)) ||
    
    ((pontos_boss_cultista_Bottom[indice].x >= attackingUp.left && pontos_boss_cultista_Bottom[indice].x <= attackingUp.left + attackingUp.width && 
    pontos_boss_cultista_Bottom[indice].y >= attackingUp.top && pontos_boss_cultista_Bottom[indice].y <= attackingUp.top + attackingUp.height))*/

    ((pontos_ataque_Up[indice].x >= quadBottom.left && pontos_ataque_Up[indice].x <= quadBottom.left + quadBottom.width && 
    pontos_ataque_Up[indice].y >= quadBottom.top && pontos_ataque_Up[indice].y <= quadBottom.top + quadBottom.height)) ||
    
    ((pontos_quadBottom[indice].x >= attackingUp.left && pontos_quadBottom[indice].x <= attackingUp.left + attackingUp.width && 
    pontos_quadBottom[indice].y >= attackingUp.top && pontos_quadBottom[indice].y <= attackingUp.top + attackingUp.height))
    ? colidiuAtaqueUp = true : indice ++;
    }

    if (colidiuAtaqueUp == true && lifeBoss > 0) {
        //PlayerAcertou = true;
        quadrado.style.display = 'none';
        quadRightClass.style.left = 0 + 'px';
        quadLeftclass.style.left = 0 + 'px';
        quadTopClass.style.top = 0 + 'px';
        quadBottomClass.style.top = 0 + 'px';
    }
}

function detectarColisaoAtaqueDown(objeto1, objeto2, idObjeto3) {
    let attackingDown = document.getElementById(objeto1).getBoundingClientRect();
    //let boss_cultista_Top = document.getElementById(objeto2).getBoundingClientRect();
    let quadTop = document.getElementById(idObjeto3).getBoundingClientRect();

    let pontos_ataque_Down = [{x : attackingDown.left, y : attackingDown.top}, 
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top},
                              {x : attackingDown.left + attackingDown.width, y : attackingDown.top + attackingDown.height},
                              {x : attackingDown.left, y : attackingDown.top + attackingDown.height}];

    let pontos_boss_cultista_Top = [{x : boss_cultista_Top.left, y : boss_cultista_Top.top}, 
                                    {x : boss_cultista_Top.left + boss_cultista_Top.width, y : boss_cultista_Top.top},
                                    {x : boss_cultista_Top.left + boss_cultista_Top.width, y : boss_cultista_Top.top + boss_cultista_Top.height},
                                    {x : boss_cultista_Top.left, y : boss_cultista_Top.top + boss_cultista_Top.height}];

    let pontos_quadTop = [{x : quadTop.left, y : quadTop.top}, 
                          {x : quadTop.left + quadTop.width, y : quadTop.top},
                          {x : quadTop.left + quadTop.width, y : quadTop.top + quadTop.height},
                          {x : quadTop.left, y : quadTop.top + quadTop.height}];

    let indice = 0;
    let colidiuAtaqueDown = false;

    while((colidiuAtaqueDown == false) && (indice < 3)) {
    /*((pontos_ataque_Down[indice].x >= boss_cultista_Top.left && pontos_ataque_Down[indice].x <= boss_cultista_Top.left + boss_cultista_Top.width && 
    pontos_ataque_Down[indice].y >= boss_cultista_Top.top && pontos_ataque_Down[indice].y <= boss_cultista_Top.top + boss_cultista_Top.height)) ||
    
    ((pontos_boss_cultista_Top[indice].x >= attackingDown.left && pontos_boss_cultista_Top[indice].x <= attackingDown.left + attackingDown.width && 
    pontos_boss_cultista_Top[indice].y >= attackingDown.top && pontos_boss_cultista_Top[indice].y <= attackingDown.top + attackingDown.height))*/

    ((pontos_ataque_Down[indice].x >= quadTop.left && pontos_ataque_Down[indice].x <= quadTop.left + quadTop.width && 
    pontos_ataque_Down[indice].y >= quadTop.top && pontos_ataque_Down[indice].y <= quadTop.top + quadTop.height)) ||
    
    ((pontos_quadTop[indice].x >= attackingDown.left && pontos_quadTop[indice].x <= attackingDown.left + attackingDown.width && 
    pontos_quadTop[indice].y >= attackingDown.top && pontos_quadTop[indice].y <= attackingDown.top + attackingDown.height))
    ? colidiuAtaqueDown = true : indice ++;
    }

    if (colidiuAtaqueDown == true && lifeBoss > 0) {
        //PlayerAcertou = true;
        quadrado.style.display = 'none';
        quadRightClass.style.left = 0 + 'px';
        quadLeftclass.style.left = 0 + 'px';
        quadTopClass.style.top = 0 + 'px';
        quadBottomClass.style.top = 0 + 'px';
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