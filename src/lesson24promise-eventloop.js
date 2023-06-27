'use strict';
//callback
// setTimeout {function() {
//     console.log("lts this callback");
//     setTimeout(function() {
//         console.log(first)
// }


/// ========promises
// const promise = new Promise ((resolve, reject) =>{
// setTimeout  (() => resolve ('is done'),3000);
// setTimeout(()=> reject(new Error('not implemented')));
// })

// .then((done) =>{
//     console.log(done);
//     return done + 'it all';
// })
// .finally(() =>console.log('This code will execute any way'))
// .then((done) {
//     return done + 'Add something else ';
// })

//     .catch((err) =>console.log(err.merssage))

//     console.log(promise);
function sum (a, b) {
    return new Promise((resolve) =>{
        const result = a + b;
        resolve(result);
    })
}
sum(5, 20)
.then((value) =>   `${value}$`)
.then((str) =>{
    console.log(str);
    return parseInt(str);
})
.then()
console.log(sum);






