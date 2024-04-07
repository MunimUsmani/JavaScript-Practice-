//callbacks = a function that is passed as an argument to another function 
// used to handle async operations such as reading a file, network requests, interacting with databases

// hello(wait);


function hello(callback) {
    console.log("hello");
    callback();
}

function goodbye() {
    console.log("goodbye");
}

function wait() {
    console.log("wait");
}

function leave() {
    console.log("leave");
}

sum(displaypage, 2, 2);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function display(result) {
console.log(result);
}

function displaypage(result) {
    document.getElementById("myH1").textContent = result;

}