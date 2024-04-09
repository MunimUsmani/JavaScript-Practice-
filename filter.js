// filter = creates a new array by filtering out elements

let numbers = [1,2,3,4,5,6,7,8,9];

let evennum = numbers.filter(isEven);
let oddnum = numbers.filter(isOdd);
console.log(oddnum);

 console.log(evennum);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}


const age = [8,10,15,20,25,30,40,45];
const buddhe = age.filter(isbuddha);
 console.log(buddhe);

 const jawan = age.filter(isjawan);
 console.log(jawan);

function isbuddha(element){
    return element >= 18;
}

function isjawan(element){
    return element <=18;
}


// const food = ["apple","tomato","orange","banana","onion","kiwi","pomegranate"];

// const newfood = food.filter(short);
// console.log(newfood);

// function short(element){
//     return element.lenght <= 5;
// }