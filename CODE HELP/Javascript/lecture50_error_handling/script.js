// Compile-time Error
// let a = ; //Syntax Error
// Run-time Error
// console.log(a); //Reference Error


// Try catch block
// try{
//     console.log(a);
// }
// catch(e){
//     console.log("I am inside catch");
// }
// finally{
//     console.log("EVerytime runs");
// }

// Custom Error
try{
    // Reference Error
    console.log(a);
}
catch(err){
    throw new Error("First Declare,then print");
}