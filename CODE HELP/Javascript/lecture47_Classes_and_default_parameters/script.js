class Human{
    // properties
    age = 13; //public
    #wt = 80; //private
    ht = 180;

    constructor(newAge, newHeight){
        this.age = newAge;
        this.ht = newHeight;
    }

    // behaviour
    walking(){
        console.log("I am walking", this.#wt);
    }
    running(){
        console.log("I am running");
    }

    get fetchWeight(){
        return this.#wt;
    }
    set modifyWeight(val){
        this.#wt = val;
    }
}

let obj = new Human();
console.log(obj.age);
obj.walking();
obj.fetchWeight()
console.log(obj.wt);

// Function parameters 
