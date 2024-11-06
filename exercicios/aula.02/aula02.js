const body = document.querySelector('body');

const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
    ];


const header = document.createElement('header');
const nav = document.createElement('nav')
    
const lista = document.createElement('ul');

itensMenu.forEach(body => {
    
});

const inicio = document.createElement('li');
const sobre = document.createElement('li');
const contato = document.createElement('li');

inicio.textContent = 'INÍCIO';
sobre.textContent = 'SOBRE';
contato.textContent = 'CONTATO';

lista.append(inicio);
lista.append(sobre);
lista.append(contato);

body.append(lista);

const ancora = document.createElement('a');

lista.appendChild(ancora);

ancora.setAttribute('href', 'https://steinlavinia.github.io/projeto2/siteCooking/index.html')
ancora.setAttribute('target', '_blanck')