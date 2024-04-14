

class MathUtil{
    static PI = 3.14159;

    static getDiammeter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2* this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }

}

console.log(MathUtil.PI);
console.log(MathUtil.getDiammeter(7));
console.log(MathUtil.getCircumference(9));
console.log(MathUtil.getArea(8));


class user{
     static usercount = 0;

    constructor(username){
        this.username = username;

        user.usercount++;
    }

    sayHello(){
        console.log(`hello my name is ${this.username}`);
    }

    static getUserCount(){
        console.log(`there are ${user.usercount} users only`);
    }
}

   const user1 = new user("Munim");
   const user2 = new user("Usmani");
   const user3 = new user("abdul");

   console.log(user1.username);
   console.log(user2.username);
   console.log(user3.username);

    user1.sayHello();
    user2.sayHello();
    user3.sayHello();

   user.getUserCount();

   console.log(user.usercount);