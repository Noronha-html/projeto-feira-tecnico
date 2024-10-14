let dx;
let dy;
let px;
let py;
let vel;
let tmp;
let obj;

function inicia () {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 1;
    tmp = setInterval (tempo, 1);
    obj = document.getElementById('object');
    document.addEventListener('keydown', teclaBaixo);
    document.addEventListener('keyup', teclaCima);
};

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

function tempo () {
    px += dx * vel;
    py += dy * vel;

    obj.style.left = px + 'px';
    obj.style.top = py + 'px';
};

window.addEventListener('load', inicia);