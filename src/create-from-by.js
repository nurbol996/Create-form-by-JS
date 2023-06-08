'use strict';

const body = document.body;

const header = document.createElement('header');
const divHeader = document.createElement('div');
const heading = document.createElement('h1');
const par1 = document.createElement('p');

heading.textContent = 'CREATE AN ACCOUNT';
par1.textContent = 'we always keep your name and email address private';

divHeader.appendChild(heading);
divHeader.appendChild(par1);
header.appendChild(divHeader);
body.appendChild(header);

const form = document.createElement('form');

const div1 = document.createElement('div');
div1.className = 'input-container';

const input1 = document.createElement('input');
input1.type = 'text';
input1.className = 'user-name';
input1.tabIndex = 1;
input1.placeholder = 'First name';

const input2 = document.createElement('input');
input2.type = 'text';
input2.className = 'user-name';
input2.tabIndex = 1;
input2.placeholder = 'Last name';

div1.appendChild(input1);
div1.appendChild(input2);
form.appendChild(div1);

const div2 = document.createElement('div');
div2.className = 'input-container';

const input3 = document.createElement('input');
input3.type = 'text';
input3.className = 'user-name';
input3.tabIndex = 1;
input3.placeholder = 'Dister name';

const input4 = document.createElement('input');
input4.type = 'email';
input4.className = 'user-name';
input4.tabIndex = 1;
input4.placeholder = 'Email Address';

div2.appendChild(input3);
div2.appendChild(input4);
form.appendChild(div2);

const div3 = document.createElement('div');
div3.className = 'input-container';

const input5 = document.createElement('input');
input5.type = 'password';
input5.className = 'user-name';
input5.tabIndex = 1;
input5.placeholder = 'Password';

const input6 = document.createElement('input');
input6.type = 'password';
input6.className = 'user-name';
input6.tabIndex = 1;
input6.placeholder = 'Password confirmation';

div3.appendChild(input5);
div3.appendChild(input6);
form.appendChild(div3);

const div4 = document.createElement('div');
div4.className = 'table';

const h2 = document.createElement('h2');
const radio1 = document.createElement('input');
radio1.type = 'radio';
radio1.name = 'color';
const label1 = document.createElement('label');
label1.textContent = 'Join As a Buyer';
h2.appendChild(radio1);
h2.appendChild(label1);
div4.appendChild(h2);

const p1 = document.createElement('p');
p1.textContent = 'I am looking for a Name, Logo or Tagline for my business, brand or product';
div4.appendChild(p1);
form.appendChild(div4);

const div5 = document.createElement('div');
div5.className = 'table';

const h3 = document.createElement('h3');
const radio2 = document.createElement('input');
radio2.type = 'radio';
radio2.name = 'color';
const label2 = document.createElement('label');
label2.textContent = 'Join As a Creative or Marketplace Seller';
h3.appendChild(radio2);
h3.appendChild(label2);
div5.appendChild(h3);

const p2 = document.createElement('p');
p2.textContent = 'I plan to submit name ideas, logo designs or sell names in Domain Marketplace';
div5.appendChild(p2);
form.appendChild(div5);

const div6 = document.createElement('div');
div6.id = 'checkbox';

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';

const label3 = document.createElement('label');
label3.textContent = 'Allow Squadhelp to send marketing/promotional offers from time to time';

div6.appendChild(checkbox);
div6.appendChild(label3);
form.appendChild(div6);

const button = document.createElement('button');
button.textContent = 'Create account';
form.appendChild(button);

body.appendChild(form);