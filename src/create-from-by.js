'use strict';
const body = document.body;
document.body.style.background = 'blue';
// const header = document.createElement('header');
let divContainer= document.createElement('div');
const heading = document.createElement('h1');
divContainer.appendChild(heading);
const par1 = document.createElement('p');
divContainer.appendChild(par1);
heading.textContent = 'CREATE AN ACCOUNT';
divContainer.style.color = 'white'
par1.innerHTML = 'we always keep your name and email address private';
divContainer.className = 'zogolovok-container';
body.append(divContainer);
//header.appendChild (header);


let divContainer2 = document.createElement('div');
divContainer2.className = 'conteit-container';
body.append (divContainer2);
