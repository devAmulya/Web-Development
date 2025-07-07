// // Code 1
// const t1 = performance.now();

// for(let i = 1; i <= 100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is Para " + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();
// console.log('Total time by Code 1 : ',t=(t2-t1));

// // code 2
// let mydiv = document.createElement('div');

// const t3 = performance.now();
// for(let i = 1; i <= 100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is Para " + i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);

// const t4 = performance.now();
// console.log('Total time by Code 2 : ',t=(t4-t3));

// Best Code
let fragment = document.createDocumentFragment();
const t3 = performance.now();
for(let i = 1; i <= 100; i++){
    let para = document.createElement('p');
    para.textContent = "This is Para " + i;
    fragment.appendChild(para); //No reflow and No repaint
}
document.body.appendChild(fragment);

const t4 = performance.now();
console.log('Total time by best Code : ',t=(t4-t3));