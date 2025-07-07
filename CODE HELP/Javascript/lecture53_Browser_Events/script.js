let fpara = document.getElementById('fpara');

function changeText(){
    fpara.textContent = "Namaste Duniya"
}

fpara.addEventListener('click', changeText);

// fpara.removeEventListener('click', changeText);

let anchorElement = document.getElementById('Fanchor');
function changeBehaviour(e){
    e.preventDefault();
    anchorElement.textContent = "CLicked";
}
anchorElement.addEventListener('click', changeBehaviour);

// function alertPara(event) {
//     alert("You have Clicked on para: " + event.target.textContent );
// }

function alertPara(event) {
    if(event.target.nodeName === 'SPAN') {
        alert("You have Clicked on para: " + event.target.textContent );
    }   
}

let mydiv = document.getElementById('wrapper');
document.addEventListener('click', alertPara);