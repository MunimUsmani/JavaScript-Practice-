// function = a section of reusable code
// declare code once reuse it whenever u want
// call the function to execute the code

// function Human(name, age) {
//     console.log("hi man");
//     console.log("how are you");
//     console.log("my name is",name);
//     console.log("I am",age,"years old");
// }
// Human("Munim",21);

function add(x,y) {
    return x + y;
}
console.log(add(2,4));

function subtract(x,y) {
    return x - y;
}
console.log(subtract(2,4));

function multiply(x,y) {
    return x * y;
}
console.log(multiply(2,4));

function divide(x,y) {
    return x / y;
}
console.log(divide(2,4));

function isEven(number) {
    // if (number % 2 === 0) {
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return number % 2 === 0 ? true : false;
}
console.log(isEven(14));

function isEmailValid(email) {
    // if (email.includes("@")) {
    //     return true;
    // } else {
    //     return false;
    // }

    return email.includes("@") ? true : false;
}

console.log(isEmailValid("munim1@gmail.com"));