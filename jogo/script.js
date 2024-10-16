let dx; //direção do eixo x
let dy; //direção do eixo y
let px; //posição final do eixo x
let py; //posição final do eixo y
let vel; //velocidade
let tmp; //intervalo de tempo até executar de novo a função
let objeto1; //objeto1/personagem1
let objeto2; //objeto2/personagem2

//inicia as variáveis
function inicia () {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 1.5;
    tmp = setInterval (funcionalidades, 1);
    objeto2 = document.getElementById('mario');
    document.addEventListener('keydown', teclaBaixo);
    document.addEventListener('keyup', teclaCima);

    objeto1 = document.getElementById('cogumelo');
};

//movimenta o personagem
function teclaBaixo (event) {
    let tecla = event.keyCode;
    if (tecla == 65) {
        dx = -1;
    } else if (tecla == 68) {
        dx = 1;
    } else if (tecla == 87) {
        dy = -1;
    } else if (tecla == 83) {
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

    objeto2.style.left = px + 'px';
    objeto2.style.top = py + 'px';

    (detectarColisao('cogumelo', 'mario') == true)?console.log('colidiu') : console.log('ainda não colidiu');
};

function detectarColisao(idObjeto2, idObjeto1) {
    let objeto1 = document.getElementById(idObjeto1).getBoundingClientRect();
    let objeto2 = document.getElementById(idObjeto2).getBoundingClientRect();

    let pontos_obj1 = [{x : objeto1.left, y : objeto1.top}, 
                        {x : objeto1.left + objeto1.width, y : objeto1.top},
                        {x : objeto1.left + objeto1.width, y : objeto1.top + objeto1.height},
                        {x : objeto1.left, y : objeto1.top + objeto1.height}];

    let pontos_obj2 = [{x : objeto2.left, y : objeto2.top}, 
                        {x : objeto2.left + objeto2.width, y : objeto2.top},
                        {x : objeto2.left + objeto2.width, y : objeto2.top + objeto2.height},
                        {x : objeto2.left, y : objeto2.top + objeto2.height}];

    let indice = 0;
    let colidiu = false;

    while ((colidiu == false) && (indice < 3))
        ((pontos_obj1[indice].x >= objeto2.left && pontos_obj1[indice].x <= objeto2.left + objeto2.width && 
        pontos_obj1[indice].y >= objeto2.top && pontos_obj1[indice].y <= objeto2.top + objeto2.height)) ||

        ((pontos_obj2[indice].x >= objeto1.left && pontos_obj2[indice].x <= objeto1.left + objeto1.width && 
        pontos_obj2[indice].y >= objeto1.top && pontos_obj2[indice].y <= objeto1.top + objeto1.height)) ? colidiu = true : indice ++;
    return colidiu;
};

window.addEventListener('load', inicia);