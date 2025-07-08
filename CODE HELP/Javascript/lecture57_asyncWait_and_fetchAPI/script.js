// async function
// async function getData() {
//     setTimeout(function(){
//         console.log("I am inside set timeout block")
//     },3000);
// }
// getData();

// await

// fetch API
async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json(); //parse json - async 
    console.log(response);
    console.log(data);
}

getData();