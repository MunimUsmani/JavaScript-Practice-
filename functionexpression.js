// function expression = a way to define functions as values or variables

setTimeout(function() {
console.log("hello");
}, 3000);

// by map method
const numbers = [1,2,3,4,5,6];

const squares = numbers.map(function square(element) {
    return Math.pow(element,2);
})

console.log(squares);

const cubes = numbers.map(function cube(element){
    return Math.pow(element,3);
})

console.log(cubes);

//by filter method
const evennums = numbers.filter(function isEven(element) {
    return element % 2 === 0;
})

console.log(evennums);

const oddnums = numbers.filter(function isOdd(element) {
    return element % 2 !== 0;
})

console.log(oddnums);

//by reduce method
const total = numbers.reduce(function sum(accumulator , element) {
    return accumulator + element;
})

console.log(total);