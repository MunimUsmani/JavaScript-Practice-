// a collection of related properties or methods, can represent real world objects like people, products, places
// objectname = {key:value,functions()}


const person = {
    firstName: "Munim",
    lastName: "Usmani",
    age: 21,
    isEmployed: false,
    talk : function(){console.log("yes i can talk")},
    eat : function(){console.log("i like eating burgers")},
}

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 26,
    isEmployed: true,
    talk : ()=>{console.log("hey I am patrick")},
    eat : ()=> {console.log("yes i eat pizza's")},
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);
person.talk();
person.eat();

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.talk();
person1.eat();