// window.open();
// window.close();
// console.log(document)

// console.log(document.getElementById("fpara"));
// console.log(document.getElementsByClassName('textMatter'));
// console.log(document.getElementsByTagName("p"));
// console.log(document.querySelector('#fpara'));
// console.log(document.querySelector('.textMatter'));
// console.log(document.querySelector('p'));
// console.log(document.querySelector('textMatter'));

// get through innerHTML
// let a = document.querySelector('button');
// a.innerHTML = '<p>Hello</p>';
// console.log(a.innerHTML);

// get/set textContent
// let element = document.querySelector('#fdiv');
// console.log(element.textContent);
// console.log(element.innerText);

// Appending a child
// let fHeading = document.createElement('h1');
// fHeading.textContent = "My Name is Amulya Gupta";
// let bodyTag = document.querySelector('body');
// bodyTag.appendChild(fHeading);

// Adding child at a postion
// let mydiv = document.querySelector('#mydiv');
// let newElement = document.createElement('span');
// newElement.textContent = "By Amulya Gupta";
// mydiv.insertAdjacentElement('afterend',newElement);

// Removing CHild at a position
let parent = document.querySelector('#mydiv');
let child = document.querySelector('#fpara');
parent.removeChild(child);