// extract values from arrays n objects then assign them to variables in a convinient manner
// []= to perform array destructuring
//{}= to perform object destructuring

//swap value of two variables
let a = 1;
let b = 2;

[a,b] = [b,a];
console.log(a);
console.log(b);

// swap 2 elements in an array
const colors = ["red", "blue", "green","white"];
[colors[0],colors[3]] = [colors[3],colors[0]];
console.log(colors);

//assign array elements to variables
const color = ["red", "blue", "green","white","pink"];
const [firstcolor, secondcolor, thirdcolor, ...remaining] = color;

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(remaining);

// extract values from objects
const Person1 = {
    firstName :"Munim",
    lastName: "Usmani",
    age:21,
    job:"engineer"
}

const Person2 = {
    firstName :"Shaukat",
    lastName: "Sohail",
    age:22,
}

const {firstName,lastName,age,job="developer"}=Person2;


console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//destructure in function parameters

function displayPerson({firstName,lastName,age,job}) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const Person3 = {
    firstName :"abdul",
    lastName: "munim",
    age:21,
    job:"software engineer"
}

displayPerson(Person3);