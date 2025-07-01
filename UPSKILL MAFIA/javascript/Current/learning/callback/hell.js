// console.log("hello");
// setTimeout(() => {
//     console.log("this will execute later")
// },3000);
// console.log("world");

function getCheese(callback){
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is cheese",cheese);
        callback(cheese);
    }, 2000);
}

function makeDough(cheese,callback) {
    setTimeout(() => {
        const dough = cheesse + '🍩';
        console.log('here is the dough',dough);
        callback(dough);
    },2000);
}

function bakePizza(dough, callback){
    setTimeout(() => {
        const pizza = cheesse + '🍕';
        console.log('here is the dough',pizza);
        callback(pizza);
    },2000);
}

getCheese((cheese) => {
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log("Got the pizza",pizza);
        })
    })
});

//pizza -> dough -> cheese