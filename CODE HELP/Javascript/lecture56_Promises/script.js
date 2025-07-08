// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Babbar");
//     reject(new Error("Internal Server"));
// });

// function sayMyName() {
//     console.log("My name is Amulya Gupta");
// }

// setTimeout(sayMyName,10000);

// let firstPromise = new Promise((resolve, rejecy) => {
//     function sayMyName() {
//         console.log("My name is Amulya Gupta");
//     }

//     setTimeout(sayMyName,3000);
//     resolve(1);
// });

let promise1 = new Promise((resolve, reject)=> {
    let success = 0;
    if(success) {
        resolve(10);
    }
    else {
        reject("Promise Rejected");
    }
});

promise1.then((message) => {
    console.log("Then ka message is " + message);
}).catch((error) => {
    console.log("Error : " + error);
});

promise1.then((message)=> {
    console.log("first msg:" + message);
    return 20;
}).then((message)=> {
    console.log("second msg: " + message);
    return 30;
}).then((message)=> {
    console.log("third msg: " + message);
}).catch((error) => {
    console.error(error);
}).finally((message) => {
    console.log("Main to final hu, chalunga pakka")
})