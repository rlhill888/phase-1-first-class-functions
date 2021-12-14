
function receivesAFunction(callbackFunction){
    callbackFunction();

}
function returnsANamedFunction(){
    function hi(){
        console.log("Hello world");
    }
    return hi;
}
function returnsAnAnonymousFunction(){
     return () => {
        console.log("Hello World");
    } 
}