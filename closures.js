
function outer(){
    let message = "hello";

    function inner(){
        console.log(message);
    }
    inner();
}

outer();


function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`count increased to ${count}`);
    }
    return(increment);
}
