'use strict';
//AJAX -Asynchronous-javascriptand xml
//xmlhttprequest -
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.responseType='json';
// xhr.send();
// xhr.onload =() => {
// console.log(xhr.response);
// console.log(xhr.status);
// localStorage.setItem('users', JSON.stringify(xhr.response));
// };
///==========ferch api =================
// const requestSrc ='users';
// const myRequest =
// new Request ('https://jsonplaceholder.typicode.com/${requestSrc}');
// fetch(myRequest)
// .then ((response) => {
//     console.log(response)
//   return response.json();
// })
// .then ((response) => {
//     console.log(response)
//   localStorage.setItem(requestSrc,JSON.stringify(jsonObject));
// })

// const users = JSON.parse(localStorage.getItem(requestSrc));
// console.log(users);
// users.forEach((user) => console.log(
//     `Name is: ${user.name},
//     email is:   ${user.email},
//     phone is: ${user.phone}`,
//     ));

///=========post================
// const sendPostRequest = async () => {
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     const body = {
//       name: 'John Doe',
//       username: 'John',
//       email: 'John@example.com',
//     };
//     const headers = new Headers();
//     headers.append('Content-Type', 'application/json; charset=utf-8');
  
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(body),
//       headers: headers,
//     };
  
//     const request = new Request(url, options);
//     const response = await fetch(request);
//     if (!response.ok) {
//       throw new Error(response.status); // Если ответ не успешный, выбросить ошибку
//     }
    
//     const json = await response.json();
//     localStorage.setItem('postUser', JSON.stringify(json));
//     console.log(json); // Вывести ответ в консоль
//   };
  
//   sendPostRequest();
  //======PUT================================
  const sendPutRequest = async() => {
    const url  = 'https://jsonplaceholder.typicode.com/users';
    const body ={
        name: 'John smith',
      username: 'John',
      email: 'John@example.com',
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        Headers,
      };

    const request = new Request(url, options);
    try{
        const response = await fetch(request);
        if (!response.ok) throw new Error(response.status);
        const json = response.json();
        console.log(json)
    }catch(error) {}
  };
  sendPutRequest ()