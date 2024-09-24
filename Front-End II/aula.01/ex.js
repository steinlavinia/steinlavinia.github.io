// const titulo = document.querySelector('h1');

// titulo.remove()

// console.log(titulo.innerHTML);
// console.log(titulo.innerText);
// console.log(titulo.textContent);

// titulo.textContent = 'Meu novo parágrafo!';

// const body = document.querySelector('body');
// const ancora = document.createElement('a');

// ancora.setAttribute('href', 'https://steinlavinia.github.io/projeto2/siteCooking/index.html');
// ancora.setAttribute('target', '_blanck')
// ancora.textContent = "Site Cooking...";
// ancora.style.color = 'green';
// ancora.style.textDecoration = 'none';

// body.appendChild(ancora);

const body = document.querySelector('body');

const lista = document.createElement('ul');

const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');

item1.textContent = 'Item 1';
item2.textContent = 'Item 2';
item3.textContent = 'Item 3';

lista.append(item1);
lista.append(item2);
lista.append(item3);

body.append(lista);