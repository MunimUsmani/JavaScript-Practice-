// map = accepts a callback and applies that function to each element of an array, then return a new array

const numbers = [1,2,3,4,5];

// const squares = numbers.map(square);
// console.log(squares);

const squares = numbers.map(cube);
console.log(squares);

function square(element) {
    return Math.pow(element , 2);
}

function cube(element) {
    return Math.pow(element , 3);
}


const students = ["munim","usmani","abdul"];

const newstudents = students.map(uppercase);
// const newstudents = students.map(lowercase);
console.log(newstudents);

function uppercase(element) {
    return element.toUpperCase();
}

function lowercase(element){
    return element.toLowerCase();
}


const dates = ["2024-07-01","2024-08-20","2024-02-15"];
const formatted = dates.map(partition);
console.log(formatted);


function partition(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
