function posicionarMario() {
    let divMario = document.createElement('div');

    divMario.setAttribute('id', 'mario');
    document.getElementsByTagName('body')[0].appendChild(divMario);

    let larguraDivMario = document.getElementById('mario').clientWidth;
    let alturaDivMario = document.getElementById('mario').clientHeight;

    let left = parseInt(Math.random() * (window.innerWidth - larguraDivMario));
    let top = parseInt(Math.random() * (window.innerHeight - alturaDivMario));

    let css = `position: absolute; top: ${top}px; left: ${left}px; background-color: green;`;
    document.getElementById('mario').style = css;
};

function movimentar() {
    document.getElementById('cogumelo').style.position = 'absolute';
    document.getElementById('cogumelo').style.left = document.getElementById('leftCogumelo').value + 'px';
    document.getElementById('cogumelo').style.top = document.getElementById('topCogumelo').value + 'px';
    (detectarColisao('cogumelo', 'mario') == true)?alert('colidiu') : alert ('ainda não colidiu');
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