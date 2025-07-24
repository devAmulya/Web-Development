// const ticket = new Promise(function(resolve,reject){
//     const isBoarded = 1;
//     if(isBoarded){
//         resolve('You are not in the flight');
//     }else{
//         reject("Your flight has been cancelled");
//     }
// });

// ticket.then((data) => {
//     console.log('Great', data);
// }).catch((data) => {
//     console.log("nope", data);
// }).finally(() => {
//     console.log("I will always be executed");
// });

function getCheese() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const cheese = "🧀";
            resolve(cheese);
        }, 2000);
    });
}

function makeDough(cheese){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const dough = cheese + "🍩";
            resolve(dough);
        }, 2000);
    });
}

function makePizza(dough){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const pizza = "🍕";
            resolve(pizza);
        }, 2000);
    });
}

// getCheese()
//     .then((cheese) => {
//         console.log('here is the cheese', cheese);
//         return makeDough(cheese);
//     }).then((dough) => {
//         console.log('here is the dough', dough);
//         return makePizza(dough);
//     }).then((pizza) => {
//         console.log('here is the pizza', pizza);
//     }).catch((data) => {
//         console.log("error occured", data);
//     }).finally(() => {
//         console.log("Process Ended");
//     });

async function orderPizza(){
    const cheese = await getCheese();
    console.log("here is the cheese", cheese);
    const dough = await makeDough(cheese);
    console.log("here is the dough", dough);
    const pizza = await makePizza(dough);
    console.log("here is the pizza", pizza);
}

orderPizza();

