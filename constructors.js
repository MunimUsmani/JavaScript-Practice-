// special method for defining properties of methods n objects, 
//through constructors we dont have to create objects again n again instead we can create a parameterized constructor and reuse it

function Car(make, model , color, year) {
    this.make = make,
    this.model = model,
    this.color = color,
    this.year = year
    this.drive = function() { console.log(`You drive ${this.model}`) 
    }
}

const car1 = new Car("Ford","Mustang","Black","1967");
const car2 = new Car("Toyota","Corolla","white","2013");
const car3 = new Car("Suzuki","Cultus","white","2006");

console.log(car1.make);

console.log(car2.model);

console.log(car3.color);

car1.drive();
