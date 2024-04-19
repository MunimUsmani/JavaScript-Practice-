// objects inside other objects

const person = {
    fullname: "Abdul Munim Usmani",
    age:21,
    isStudent: true,
    hobbies: ["sports","reading","gaming"],
    address : {
        city : "Karachi",
        Street : "123 North",
        country: "Pakistan"
    }

}

console.log(person.fullname);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address.city);

// to show the nested object at once
for (const property in person.address) {
    console.log(person.address[property]);
    
}