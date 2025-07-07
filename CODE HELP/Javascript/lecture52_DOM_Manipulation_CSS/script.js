let paraElement = document.getElementById('spara');
console.log(paraElement.style);

// let bgcolor = (colour) => {
//     paraElement.style.backgroundColor = colour;
// }
// for(let i = 1; i < 12; i++){
//     if(i  % 3 == 0){
//         setTimeout( bgcolor('white'),20000);
//     }
//     else{
//         setTimeout( bgcolor('yellow'),20000);
//     }
// }
// paraElement.style.backgroundColor = 'white';

// let secondElement = document.getElementById('sdiv');
// console.log(secondElement.style.cssText);
// secondElement.style.cssText = "background-color : black; color : white; padding : 0.5rem";

let firstElement = document.getElementById('fdiv');
firstElement.setAttribute('class','divClass');