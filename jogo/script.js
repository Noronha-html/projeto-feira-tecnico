let dx; //direção do eixo x
let dy; //direção do eixo y
let px; //posição final do eixo x
let py; //posição final do eixo y
let vel; //velocidade
let tmpFuncionalidades; //intervalo de tempo até executar de novo a função
let objetoPlayer; //objeto1/personagem1
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

//inicia as variáveis
function inicia () {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 1;
    tmpFuncionalidades = setInterval (funcionalidades, 1);

    objetoPlayer = document.getElementById('player');
    document.addEventListener('keydown', teclaBaixo);
    document.addEventListener('keyup', teclaCima);

    paredeD = document.getElementById('paredeD');
    paredeE = document.getElementById('paredeE');
    paredeC = document.getElementById('paredeC');
    paredeB = document.getElementById('paredeB');

    quadTop = document.getElementById('quadTop');
    quadBottom = document.getElementById('quadBottom');
    quadLeft = document.getElementById('quadLeft');
    quadRight = document.getElementById('quadRight');
};

//movimenta o personagem
function teclaBaixo (event) {
    let tecla = event.keyCode;
    if (tecla == 65 && tecA) {
        dx = -1;
    } else if (tecla == 68 && tecD) {
        dx = 1;
    } else if (tecla == 87 && tecW) {
        dy = -1;
    } else if (tecla == 83 && tecS) {
        dy = 1;
    };
};

//para de movimentar
function teclaCima (event) {
    let tecla = event.keyCode;
    if (tecla == 65) {
        dx = 0;
    } else if (tecla == 68) {
        dx = 0;
    } else if (tecla == 87) {
        dy = 0;
    } else if (tecla == 83) {
        dy = 0;
    };
};

//declara a velocidade do personagem e outras funionalidades
function funcionalidades () {
    px += dx * vel;
    py += dy * vel;

    objetoPlayer.style.left = px + 'px';
    objetoPlayer.style.top = py + 'px';

    (detectarColisaoParedeE('player', 'paredeE') == true)?console.log('colidiu') : console.log('ainda não colidiu');
    (detectarColisaoParedeD('player', 'paredeD') == true)?console.log('colidiu') : console.log('ainda não colidiu');
    (detectarColisaoParedeC('player', 'paredeC') == true)?console.log('colidiu') : console.log('ainda não colidiu');
    (detectarColisaoParedeB('player', 'paredeB') == true)?console.log('colidiu') : console.log('ainda não colidiu');

    (detectarColisaoQuadTop('player', 'quadTop') == true)?console.log('colidiu') : console.log('ainda não colidiu');
    (detectarColisaoQuadBottom('player', 'quadBottom') == true)?console.log('colidiu') : console.log('ainda não colidiu');
    (detectarColisaoQuadLeft('player', 'quadLeft') == true)?console.log('colidiu') : console.log('ainda não colidiu');
    (detectarColisaoQuadRight('player', 'quadRight') == true)?console.log('colidiu') : console.log('ainda não colidiu');
};

//detecta colisão na parede esquerda
function detectarColisaoParedeE(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeE = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                        {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_parede_E = [{x : paredeE.left, y : paredeE.top}, 
                           {x : paredeE.left + paredeE.width, y : paredeE.top},
                           {x : paredeE.left + paredeE.width, y : paredeE.top + paredeE.height},
                           {x : paredeE.left, y : paredeE.top + paredeE.height}];

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
function detectarColisaoParedeD(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeD = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                        {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_parede_D = [{x : paredeD.left, y : paredeD.top}, 
                           {x : paredeD.left + paredeD.width, y : paredeD.top},
                           {x : paredeD.left + paredeD.width, y : paredeD.top + paredeD.height},
                           {x : paredeD.left, y : paredeD.top + paredeD.height}];

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= paredeD.left && pontos_Player[indice].x <= paredeD.left + paredeD.width && 
        pontos_Player[indice].y >= paredeD.top && pontos_Player[indice].y <= paredeD.top + paredeD.height)) ||

        ((pontos_parede_D[indice].x >= objetoPlayer.left && pontos_parede_D[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_parede_D[indice].y >= objetoPlayer.top && pontos_parede_D[indice].y <= objetoPlayer.top + objetoPlayer.height)) 
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
function detectarColisaoParedeC(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeC = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                        {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_parede_C = [{x : paredeC.left, y : paredeC.top}, 
                           {x : paredeC.left + paredeC.width, y : paredeC.top},
                           {x : paredeC.left + paredeC.width, y : paredeC.top + paredeC.height},
                           {x : paredeC.left, y : paredeC.top + paredeC.height}];

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= paredeC.left && pontos_Player[indice].x <= paredeC.left + paredeC.width && 
        pontos_Player[indice].y >= paredeC.top && pontos_Player[indice].y <= paredeC.top + paredeC.height)) ||

        ((pontos_parede_C[indice].x >= objetoPlayer.left && pontos_parede_C[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_parede_C[indice].y >= objetoPlayer.top && pontos_parede_C[indice].y <= objetoPlayer.top + objetoPlayer.height)) 
        ? colidiu = true : indice ++;
    tecW = false;

    if (colidiu == true && tecW == false) {
        dy = 0;
    } else {
        tecW = true;
    };

    return colidiu;
}

//detecta colisão na parede de baixo
function detectarColisaoParedeB(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeB = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                        {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_parede_B = [{x : paredeB.left, y : paredeB.top}, 
                           {x : paredeB.left + paredeB.width, y : paredeB.top},
                           {x : paredeB.left + paredeB.width, y : paredeB.top + paredeB.height},
                           {x : paredeB.left, y : paredeB.top + paredeB.height}];

    let indice = 0;
    let colidiu = false

    while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= paredeB.left && pontos_Player[indice].x <= paredeB.left + paredeB.width && 
        pontos_Player[indice].y >= paredeB.top && pontos_Player[indice].y <= paredeB.top + paredeB.height)) ||

        ((pontos_parede_B[indice].x >= objetoPlayer.left && pontos_parede_B[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_parede_B[indice].y >= objetoPlayer.top && pontos_parede_B[indice].y <= objetoPlayer.top + objetoPlayer.height)) 
        ? colidiu = true : indice ++;
    tecS = false;

    if (colidiu == true && tecS == false) {
        dy = 0;
    } else {
        tecS = true;
    };

    return colidiu;
}


//detecta colisão da parte de cima do quadrado
function detectarColisaoQuadTop(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let quadTop = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                        {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_quad_Top = [{x : quadTop.left, y : quadTop.top}, 
                           {x : quadTop.left + quadTop.width, y : quadTop.top},
                           {x : quadTop.left + quadTop.width, y : quadTop.top + quadTop.height},
                           {x : quadTop.left, y : quadTop.top + quadTop.height}];

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= quadTop.left && pontos_Player[indice].x <= quadTop.left + quadTop.width && 
        pontos_Player[indice].y >= quadTop.top && pontos_Player[indice].y <= quadTop.top + quadTop.height)) ||

        ((pontos_quad_Top[indice].x >= objetoPlayer.left && pontos_quad_Top[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_quad_Top[indice].y >= objetoPlayer.top && pontos_quad_Top[indice].y <= objetoPlayer.top + objetoPlayer.height)) 
        ? colidiu = true : indice ++;
    tecS = false;

    if (colidiu == true && tecS == false) {
        dy = 0;
    } else if (colidiu == false) {
        tecS = true;
    };

    return colidiu;
};

function detectarColisaoQuadBottom(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let quadBottom = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                        {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_quad_Bottom = [{x : quadBottom.left, y : quadBottom.top}, 
                           {x : quadBottom.left + quadBottom.width, y : quadBottom.top},
                           {x : quadBottom.left + quadBottom.width, y : quadBottom.top + quadBottom.height},
                           {x : quadBottom.left, y : quadBottom.top + quadBottom.height}];

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= quadBottom.left && pontos_Player[indice].x <= quadBottom.left + quadBottom.width && 
        pontos_Player[indice].y >= quadBottom.top && pontos_Player[indice].y <= quadBottom.top + quadBottom.height)) ||

        ((pontos_quad_Bottom[indice].x >= objetoPlayer.left && pontos_quad_Bottom[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_quad_Bottom[indice].y >= objetoPlayer.top && pontos_quad_Bottom[indice].y <= objetoPlayer.top + objetoPlayer.height)) 
        ? colidiu = true : indice ++;
    tecW = false;

    if (colidiu == true && tecW == false) {
        dy = 0;
    } else if (colidiu == false) {
        tecW = true;
    };

    return colidiu;
};

function detectarColisaoQuadLeft(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let quadLeft = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                        {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_quad_Left = [{x : quadLeft.left, y : quadLeft.top}, 
                           {x : quadLeft.left + quadLeft.width, y : quadLeft.top},
                           {x : quadLeft.left + quadLeft.width, y : quadLeft.top + quadLeft.height},
                           {x : quadLeft.left, y : quadLeft.top + quadLeft.height}];

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= quadLeft.left && pontos_Player[indice].x <= quadLeft.left + quadLeft.width && 
        pontos_Player[indice].y >= quadLeft.top && pontos_Player[indice].y <= quadLeft.top + quadLeft.height)) ||

        ((pontos_quad_Left[indice].x >= objetoPlayer.left && pontos_quad_Left[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_quad_Left[indice].y >= objetoPlayer.top && pontos_quad_Left[indice].y <= objetoPlayer.top + objetoPlayer.height)) 
        ? colidiu = true : indice ++;
    tecD = false;

    if (colidiu == true && tecD == false) {
        dx = 0;
    } else if (colidiu == false) {
        tecD = true;
    };

    return colidiu;
};

function detectarColisaoQuadRight(idObjeto1, idObjeto2) {
    let objetoPlayer = document.getElementById(idObjeto1).getBoundingClientRect();
    let quadRight = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_Player = [{x : objetoPlayer.left, y : objetoPlayer.top}, 
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top},
                        {x : objetoPlayer.left + objetoPlayer.width, y : objetoPlayer.top + objetoPlayer.height},
                        {x : objetoPlayer.left, y : objetoPlayer.top + objetoPlayer.height}];

    let pontos_quad_Right = [{x : quadRight.left, y : quadRight.top}, 
                           {x : quadRight.left + quadRight.width, y : quadRight.top},
                           {x : quadRight.left + quadRight.width, y : quadRight.top + quadRight.height},
                           {x : quadRight.left, y : quadRight.top + quadRight.height}];

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
        ((pontos_Player[indice].x >= quadRight.left && pontos_Player[indice].x <= quadRight.left + quadRight.width && 
        pontos_Player[indice].y >= quadRight.top && pontos_Player[indice].y <= quadRight.top + quadRight.height)) ||

        ((pontos_quad_Right[indice].x >= objetoPlayer.left && pontos_quad_Right[indice].x <= objetoPlayer.left + objetoPlayer.width && 
        pontos_quad_Right[indice].y >= objetoPlayer.top && pontos_quad_Right[indice].y <= objetoPlayer.top + objetoPlayer.height)) 
        ? colidiu = true : indice ++;
    tecA = false;

    if (colidiu == true && tecA == false) {
        dx = 0;
    } else if (colidiu == false) {
        tecA = true;
    };

    return colidiu;
};

window.addEventListener('load', inicia);