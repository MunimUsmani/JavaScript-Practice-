// spread operator = ... allows you to expand an array or string into seperate elements (unpacks them)

let num = [1,2,3,4,5];
let max = Math.max(...num);
let min = Math.min(...num);
console.log(max);
console.log(min);


let username = "munim usmani";
// join() helps you insert anything in between the elements of array
let letters = [...username].join("-"); // to add a dash between each letter
console.log(letters);

// we can also use spread to combine arrays and even append values

let fruits = ["apple","banana"];
let vegetables = ["tomatoes", "potatoes"];

let food = [...fruits,...vegetables, "onions","orange"];
console.log(food);