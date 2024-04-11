// arrow functions = a concise way to write function expressions, good for simple functions that you use only once 
// (parameters)=>code

// const hello = function(){
//     console.log("hello");
// }

// hello();

// instead of this we can write

const hello = (name,age) => console.log(`hello your name is ${name} and your age is ${age}`);

hello("munim",21);



setTimeout(function() {
    console.log("hello");
    }, 3000);

// by map method

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element)=> Math.pow(element,2));
const cubes = numbers.map((element)=> Math.pow(element,3));
const evennums = numbers.filter((element)=> element % 2 === 0);
const oddnums = numbers.filter((element)=> element %2 !== 0);
const total = numbers.reduce((accumulator , element)=> accumulator + element);
console.log(squares);
console.log(cubes);
console.log(evennums);
console.log(oddnums);
console.log(total);