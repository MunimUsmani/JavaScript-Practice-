// variable like structure that can hold more than 1 value

let fruits = ["apple","orange","banana"];

// fruits[0] = "coconut";
// fruits.push() = "coconut";
// fruits.pop() 
// fruits.unshift() = "mango";
// fruits.shift() 

let numOffruits = fruits.length;
console.log(numOffruits);
console.log(fruits.indexOf("banana"));

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    
}

for (let i = fruits.length; i >=0 ; i--) {
    console.log(fruits[i]);
    
}

fruits.sort();
fruits.sort().reverse();

// shortcut

// for(let fruit of fruits){
//     console.log(fruits);
// }


// console.log(fruits[0]);