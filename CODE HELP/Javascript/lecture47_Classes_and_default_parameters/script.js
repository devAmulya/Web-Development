class Human{
    // properties
    age = 13; //public
    #wt = 80; //private
    ht = 180;

    // behaviour
    walking(){
        console.log("I am walking", this.#wt);
    }
    running(){
        console.log("I am running");
    }
}

let obj = new Human();
console.log(obj.age);
obj.walking();
console.log(obj.wt);