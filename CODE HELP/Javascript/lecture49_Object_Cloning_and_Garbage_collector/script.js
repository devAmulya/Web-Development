let obj = {
    age:12,
    wt:68,
    ht:180,
};

let dest = {};

// let dest = Object.assign({},obj);
// console.log(obj);
// obj.color = "white";
// console.log(obj);
// let dest = {...obj};
// obj.age = 30;
// console.log("obj:",obj);
// console.log("dest:",dest);


// console.log("dest:",dest);

for(let key in obj){
    // let newKey = key;
    // let newValue = obj[key];
    // dest[newKey] = newValue;
    dest[key] = obj[key];
    // dest.key = obj.key;
}
console.log(dest);