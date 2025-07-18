// Boxes Colour feature
let boxes = document.querySelectorAll('.box');

function color(){
    const color = this.innerHTML.toLowerCase();
    this.style.backgroundColor = color;
}

boxes.forEach(box => {
    box.addEventListener('click', color);
});

// Header feature
let form = document.getElementById('form');

function form_submit(event) {
    event.preventDefault(); 
    let name = document.getElementById('name-input');
    const inputValue = name.value;
    let h = document.getElementById("head");
    h.innerHTML = `Hello, ${inputValue}`;
}

form.addEventListener('submit', form_submit);