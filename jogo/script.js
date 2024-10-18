let dx; //direção do eixo x
let dy; //direção do eixo y
let px; //posição final do eixo x
let py; //posição final do eixo y
let vel; //velocidade
let tmpFuncionalidades; //intervalo de tempo até executar de novo a função
let objetoMario; //objeto1/personagem1
let paredeD; //parede da direita
let paredeE; //parede da esquerda
let paredeC; //parede de cima
let paredeB; //parede de baixo
let tecA = true; //declara a tecla A como verdadeira
let tecD = true; //declara a tecla D como verdadeira
let tecW = true; //declara a tecla W como verdadeira
let tecS = true; //declara a tecla S como verdadeira

//inicia as variáveis
function inicia () {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 1;
    tmpFuncionalidades = setInterval (funcionalidades, 1);
    objetoMario = document.getElementById('mario');
    document.addEventListener('keydown', teclaBaixo);
    document.addEventListener('keyup', teclaCima);

    paredeD = document.getElementById('paredeD');
    paredeE = document.getElementById('paredeE');
    paredeC = document.getElementById('paredeC');
    paredeB = document.getElementById('paredeB');
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

    objetoMario.style.left = px + 'px';
    objetoMario.style.top = py + 'px';
    (detectarColisaoParedeE('mario', 'paredeE') == true)?console.log('colidiu') : console.log('ainda não colidiu');
    (detectarColisaoParedeD('mario', 'paredeD') == true)?console.log('colidiu') : console.log('ainda não colidiu');
    (detectarColisaoParedeC('mario', 'paredeC') == true)?console.log('colidiu') : console.log('ainda não colidiu');
    (detectarColisaoParedeB('mario', 'paredeB') == true)?console.log('colidiu') : console.log('ainda não colidiu');
};

function detectarColisaoParedeE(idObjeto1, idObjeto2) {
    let objetoMario = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeE = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_mario = [{x : objetoMario.left, y : objetoMario.top}, 
                        {x : objetoMario.left + objetoMario.width, y : objetoMario.top},
                        {x : objetoMario.left + objetoMario.width, y : objetoMario.top + objetoMario.height},
                        {x : objetoMario.left, y : objetoMario.top + objetoMario.height}];

    let pontos_parede_E = [{x : paredeE.left, y : paredeE.top}, 
                           {x : paredeE.left + paredeE.width, y : paredeE.top},
                           {x : paredeE.left + paredeE.width, y : paredeE.top + paredeE.height},
                           {x : paredeE.left, y : paredeE.top + paredeE.height}];

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
    ((pontos_mario[indice].x >= paredeE.left && pontos_mario[indice].x <= paredeE.left + paredeE.width && 
        pontos_mario[indice].y >= paredeE.top && pontos_mario[indice].y <= paredeE.top + paredeE.height)) ||

        ((pontos_parede_E[indice].x >= objetoMario.left && pontos_parede_E[indice].x <= objetoMario.left + objetoMario.width && 
        pontos_parede_E[indice].y >= objetoMario.top && pontos_parede_E[indice].y <= objetoMario.top + objetoMario.height)) 
        ? colidiu = true : indice ++;
        tecA = false;

        if (colidiu == true && tecA == false) {
            dx = 0;
        } else {
            tecA = true;
        }

    return colidiu;
};

function detectarColisaoParedeD(idObjeto1, idObjeto2) {
    let objetoMario = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeD = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_mario = [{x : objetoMario.left, y : objetoMario.top}, 
                        {x : objetoMario.left + objetoMario.width, y : objetoMario.top},
                        {x : objetoMario.left + objetoMario.width, y : objetoMario.top + objetoMario.height},
                        {x : objetoMario.left, y : objetoMario.top + objetoMario.height}];

    let pontos_parede_D = [{x : paredeD.left, y : paredeD.top}, 
                           {x : paredeD.left + paredeD.width, y : paredeD.top},
                           {x : paredeD.left + paredeD.width, y : paredeD.top + paredeD.height},
                           {x : paredeD.left, y : paredeD.top + paredeD.height}];

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
        ((pontos_mario[indice].x >= paredeD.left && pontos_mario[indice].x <= paredeD.left + paredeD.width && 
        pontos_mario[indice].y >= paredeD.top && pontos_mario[indice].y <= paredeD.top + paredeD.height)) ||

        ((pontos_parede_D[indice].x >= objetoMario.left && pontos_parede_D[indice].x <= objetoMario.left + objetoMario.width && 
        pontos_parede_D[indice].y >= objetoMario.top && pontos_parede_D[indice].y <= objetoMario.top + objetoMario.height)) 
        ? colidiu = true : indice ++;
    tecD = false;

    if (colidiu == true && tecD == false) {
        dx = 0;
    } else {
        tecD = true;
    }

    return colidiu;
}

function detectarColisaoParedeC(idObjeto1, idObjeto2) {
    let objetoMario = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeC = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_mario = [{x : objetoMario.left, y : objetoMario.top}, 
                        {x : objetoMario.left + objetoMario.width, y : objetoMario.top},
                        {x : objetoMario.left + objetoMario.width, y : objetoMario.top + objetoMario.height},
                        {x : objetoMario.left, y : objetoMario.top + objetoMario.height}];

    let pontos_parede_C = [{x : paredeC.left, y : paredeC.top}, 
                           {x : paredeC.left + paredeC.width, y : paredeC.top},
                           {x : paredeC.left + paredeC.width, y : paredeC.top + paredeC.height},
                           {x : paredeC.left, y : paredeC.top + paredeC.height}];

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
        ((pontos_mario[indice].x >= paredeC.left && pontos_mario[indice].x <= paredeC.left + paredeC.width && 
        pontos_mario[indice].y >= paredeC.top && pontos_mario[indice].y <= paredeC.top + paredeC.height)) ||

        ((pontos_parede_C[indice].x >= objetoMario.left && pontos_parede_C[indice].x <= objetoMario.left + objetoMario.width && 
        pontos_parede_C[indice].y >= objetoMario.top && pontos_parede_C[indice].y <= objetoMario.top + objetoMario.height)) 
        ? colidiu = true : indice ++;
    tecW = false;

    if (colidiu == true && tecW == false) {
        dy = 0;
    } else {
        tecW = true;
    }

    return colidiu;
}

function detectarColisaoParedeB(idObjeto1, idObjeto2) {
    let objetoMario = document.getElementById(idObjeto1).getBoundingClientRect();
    let paredeB = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_mario = [{x : objetoMario.left, y : objetoMario.top}, 
                        {x : objetoMario.left + objetoMario.width, y : objetoMario.top},
                        {x : objetoMario.left + objetoMario.width, y : objetoMario.top + objetoMario.height},
                        {x : objetoMario.left, y : objetoMario.top + objetoMario.height}];

    let pontos_parede_B = [{x : paredeB.left, y : paredeB.top}, 
                           {x : paredeB.left + paredeB.width, y : paredeB.top},
                           {x : paredeB.left + paredeB.width, y : paredeB.top + paredeB.height},
                           {x : paredeB.left, y : paredeB.top + paredeB.height}];

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
        ((pontos_mario[indice].x >= paredeB.left && pontos_mario[indice].x <= paredeB.left + paredeB.width && 
        pontos_mario[indice].y >= paredeB.top && pontos_mario[indice].y <= paredeB.top + paredeB.height)) ||

        ((pontos_parede_B[indice].x >= objetoMario.left && pontos_parede_B[indice].x <= objetoMario.left + objetoMario.width && 
        pontos_parede_B[indice].y >= objetoMario.top && pontos_parede_B[indice].y <= objetoMario.top + objetoMario.height)) 
        ? colidiu = true : indice ++;
    tecS = false;

    if (colidiu == true && tecS == false) {
        dy = 0;
    } else {
        tecS = true;
    }

    return colidiu;
}

window.addEventListener('load', inicia);