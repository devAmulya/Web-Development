console.log("HI");
let sayMyName = () => {
    console.log("hello");
}
setTimeout(sayMyName,500);
setTimeout(sayMyName,5);
for(let i = 0; i < 10000; i++){
    console.log(i);
}