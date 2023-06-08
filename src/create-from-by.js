'use strict';
const body = document.body;
document.body.style.background = 'rgba(25, 158, 211, 0.918)';
const header = document.createElement('header');
let divContainer= document.createElement('div');
const heading = document.createElement('h1');
divContainer.appendChild(heading);
const par1 = document.createElement('p');
divContainer.appendChild(par1);
heading.textContent = 'CREATE AN ACCOUNT';
divContainer.style.color = 'white'
par1.innerHTML = 'we always keep your name and email address private';
divContainer.className = 'zogolovok-container';
header.append(divContainer);
body.appendChild (header);



const formContainer = document.createElement('form');
let divContainer2 = document.createElement('div');
divContainer2.className = 'conteit-container';

let div1 = document.createElement('div');
div1.className = 'input-container';
let inputTypeText1 = document.createElement('input');
inputTypeText1.setAttribute('type', 'text');
inputTypeText1.value = 'First Name';
div1.appendChild(inputTypeText1);

let inputTypeText2 = document.createElement('input');
inputTypeText2.setAttribute('type', 'text');
inputTypeText2.value = 'Last Name';
div1.appendChild(inputTypeText2);

document.body.appendChild(formContainer);
formContainer.appendChild(divContainer2);
divContainer2.appendChild(div1);

let div2 = document.createElement('div');
div2.className = 'input-container';

let inputTypeText3 = document.createElement('input');
inputTypeText3.setAttribute('type', 'text');
inputTypeText3.value = 'Dister Name';
div2.appendChild(inputTypeText3);

let inputTypeText4 = document.createElement('input');
inputTypeText4.setAttribute('type', 'email');
inputTypeText4.value = 'Email Address';
div2.appendChild(inputTypeText4);

document.body.appendChild(formContainer);
formContainer.appendChild(divContainer2);
divContainer2.appendChild(div2);
 // пароли
 let div3 = document.createElement('div');
 div3.className = 'input-container'; 
let inputTypeText5 = document.createElement('input');
inputTypeText5.setAttribute('type', 'password');
inputTypeText5.value = 'password';
div3.appendChild(inputTypeText5);

let inputTypeText6 = document.createElement('input');
inputTypeText6.setAttribute('type', 'password');
inputTypeText6.value = 'password confirmation';
div3.appendChild(inputTypeText6);
document.body.appendChild(formContainer);
formContainer.appendChild(divContainer2);
divContainer2.appendChild(div3);
//// кнопки
let div4 = document.createElement('div');
div4.className = 'button';
body.appendChild(div4);
let inputTypeText7= document.createElement('input');
let h2 = document.createElement('h2');
div4.appendChild(h2);
inputTypeText7 = document.createElement('input');
inputTypeText7.setAttribute('type', 'radio');
inputTypeText7.className = 'input';
h2.appendChild(inputTypeText7);
let label1 = document.createElement('label');
let labelText1=document.createTextNode ('join As a Buyer');
let par2 = document.createElement ('p');
par2.className = 'par';
let par2Text=document.createTextNode ('i am looking for a Name, Logo or Tagline for my busininess, brand or product');
par2.appendChild(par2Text);
div4.appendChild(par2);
h2.appendChild(label1);
h2.appendChild(labelText1);
// 2кнопка
let div5 = document.createElement('div');
div5.className = 'button';
body.appendChild(div5);
let inputTypeText8= document.createElement('input');
let h3 = document.createElement('h3');
div5.appendChild(h3);
inputTypeText8 = document.createElement('input');
inputTypeText8.setAttribute('type', 'radio');
inputTypeText8.className = 'input';
h3.appendChild(inputTypeText8);
let label2 = document.createElement('label');
let labelText2=document.createTextNode ('join As a Creative or Marketplace Seller');
let par3 = document.createElement ('p');
let par3Text=document.createTextNode ('i plan ti submit name idees. Logo dessigns or sell names in Domain Marketplace');
par3.className = 'par';
par3.appendChild(par3Text);
div5.appendChild(par3);
h3.appendChild(label2);
h3.appendChild(labelText2);
// чекбокс для галочки
let div6 = document.createElement ("div");
body.appendChild(div6);
div6.id= 'checkbox';
let inputTypeText9 = document.createElement ("input");
inputTypeText9.setAttribute ('type','checkbox');
div6.appendChild(inputTypeText9);
let label3 = document.createElement('label');
let labelText10=document.createTextNode ('Allow Squadhelp to send marceting/promotional offers from time to time');
div6.appendChild(label3);
div6.appendChild(labelText10);
 // кнопка вход
 let div7 = document.createElement('div');
 body.appendChild(div7);
 div7.className = 'button';
 let button = document.createElement('button');
 div7.appendChild(button);
 let buttonText = document.createTextNode('Create account');
 button.appendChild(buttonText);