function outerFunction(){
    let name = "Chrome"; //Block scoped let
    function innerFunction(){
        console.log(name);
    }
    return innerFunction;
}
let inner = outerFunction();
inner();