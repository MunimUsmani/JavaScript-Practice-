 // objects inside other objects

// const person = {
//     fullname: "Abdul Munim Usmani",
//     age:21,
//     isStudent: true,
//     hobbies: ["sports","reading","gaming"],
//     address : {
//         city : "Karachi",
//         Street : "123 North",
//         country: "Pakistan"
//     }

// }

// console.log(person.fullname);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies);
// console.log(person.address.city);

// // to show the nested object at once
// for (const property in person.address) {
//     console.log(person.address[property]);
    
// }

class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address= new Address(...address);
    }
}

class Address{
    constructor(street,city,country){
        this.street = street;
        this.city=city;
        this.country=country;
    }
}

const person1 = new Person("munim",21,"124 north","karachi","pakistan");
const person2 = new Person("usmano",50,"432 north","delhi","india");
const person3 = new Person("tallu",87,"11 srekms","sydney","australia");

console.log(person1.address.street);