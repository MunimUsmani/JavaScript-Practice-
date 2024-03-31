// local scope vars inside function which isn't accessible outside
// global scope vars which can be used throughout the whole program


let x = 87;
let y=86;


function1();
function2();
function function1() {
    // let x = 87;
    console.log(y);
}

function function2() {
    // let y = 86;
    console.log(x);
}