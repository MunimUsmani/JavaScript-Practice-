//allows the children classes to access the methods of parent classes helps with code reusability

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`this ${this.name} is swimming`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`this ${this.name} is running`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();

console.log(rabbit.alive);

fish.eat();
fish.sleep();
fish.swim();

rabbit.sleep();
rabbit.eat();
rabbit.run();