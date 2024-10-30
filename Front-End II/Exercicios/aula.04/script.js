const p = document.querySelector('#paragrafo');
const divImg = document.querySelector('#divImg');

// divImg.addEventListener('click', () => {
//     divImg.style.border = '2px solid purple';
// })

function pMouse() {
    divImg.style.border = '2px solid purple';
}

function sMouse () {
    divImg.style.border = 'none';
}

divImg.addEventListener('mouseover', pMouse);
divImg.addEventListener('mouseout', sMouse);

p.onclick = () => {
    alert('Parágrafo Clicado!');
}

const clique = () => {
    console.log ('Botão Clicado!');
    alert('Botão Clicado!');
}

function pressTecla () {
    if (window.getComputedStyle(divImg, null).getPropertyValue
    ('background-color') === 'rgb(0, 0, 0)') {
        divImg.style.backgroundColor = 'rgb(255, 255, 255)'
    } else {
        divImg.style.backgroundColor = 'rgb(0, 0, 0)'
    } 
}
