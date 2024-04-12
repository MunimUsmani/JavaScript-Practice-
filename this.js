// this keyword gives reference to the object
const person = {
    firstName: "Munim",
    lastName: "Usmani",
    favfood:"burgers",
    age: 21,
    isEmployed: false,
    talk : function(){console.log(`Hi I am ${this.firstName}`)},
    eat : function(){console.log(`my fav food is ${this.favfood}`)},
}

person.talk();
person.eat();