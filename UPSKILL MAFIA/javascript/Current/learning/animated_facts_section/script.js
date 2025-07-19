const icons = document.querySelectorAll(".container");

function show(ans, i){
    if(i.classList.contains("active")){
        ans.style.maxHeight = null;
        
    }else{
        ans.style.maxHeight = ans.scrollHeight + 'px';
    }
    i.classList.toggle("active");
}

icons.forEach(icon => {
    const ans = icon.querySelector(".answer");
    const i = icon.querySelector(".icon");
    icon.addEventListener('click',() => {
        show(ans,i);
    });
});