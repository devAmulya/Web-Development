// Global Scope 
var age = 15;
console.log(age);
{
    console.log(age);
}


// Function scope
function sayHello(){
    var planet = "Earth";
    console.log("Hello Dunia", planet);
}
sayHello();
// console.log(planet); //Undefined

// Block Scoped
console.log(height);
{
    var height = 180;
}

// Temporal dead zones
console.log(marks);
let marks = 100;
console.log(marks);