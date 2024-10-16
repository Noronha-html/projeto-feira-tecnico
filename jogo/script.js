let dx; //direção do eixo x
let dy; //direção do eixo y
let px; //posição final do eixo x
let py; //posição final do eixo y
let vel; //velocidade
let tmp; //intervalo de tempo até executar de novo a função
let obj; //objeto/personagem

//inicia as variáveis
function inicia () {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 1.5;
    tmp = setInterval (funcionalidades, 1);
    obj = document.getElementById('object');
    document.addEventListener('keydown', teclaBaixo);
    document.addEventListener('keyup', teclaCima);
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

    obj.style.left = px + 'px';
    obj.style.top = py + 'px';
};

window.addEventListener('load', inicia);