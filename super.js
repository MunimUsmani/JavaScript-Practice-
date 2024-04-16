//super keyword is used to call the constructor of parent class in child classes helps with code reusability

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed=swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} swims `);
        super.move(this.swimSpeed);
    }
}

class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed=runSpeed;
    }
    run(){
        console.log(`This ${this.name} runs `);
        super.move(this.runSpeed);
    }
}


class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed=flySpeed;
    }
    fly(){
        console.log(`This ${this.name} flies`);
        super.move(this.flySpeed);
    }
}


const rabbit = new Rabbit("rabbit",2,20);
const fish = new Fish("fish",8,27);
const hawk = new Hawk("hawk",7,40);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly();
