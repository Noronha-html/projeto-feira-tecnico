function posicionaMario() {
    let img = document.createElement('img');
    let larguraDiv = document.getElementById('cogumelo').clientWidth;
    let alturaDiv = document.getElementById('cogumelo').clientHeight;
    let left = parseInt(Math.random() * (window.innerWidth - larguraDiv));
    let top = parseInt(Math.random() * (window.innerHeight - alturaDiv));
    let css = `position: absolute; top: ${top}px; left: ${left}px;`;
    img.setAttribute('src', 'mario-teste.png');
    img.setAttribute('id', 'mario');
    img.setAttribute('style', css);
    document.getElementsByTagName('body')[0].appendChild(img);
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
    let pontos_obj1 = [{x : objeto1.left, y:objeto1.top}, {x : objeto1.left + objeto1.width},
                        {x : objeto1.left, y : objeto1.top + objeto1.width}, {x : objeto1.left + objeto1.width, y : objeto1.top + objeto1.height}]
};