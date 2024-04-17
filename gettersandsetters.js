
class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }

    set width(newWidth){
        if (newWidth > 0) {
            this._width=newWidth;
        }
        else{
            console.error("width must be a positive number");
        }
    }

    set height(newheight){
        if (newheight > 0) {
            this._height=newheight;
        }
        else{
            console.error("height must be a positive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get Area(){
        return `${(this._width * this._height).toFixed(1)}cm`;
    }
}

const rectangle = new Rectangle(3,4);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.Area);




// class Person{
//     constructor(firstName, LastName, age){
//         this.firstName = firstName;
//         this.LastName = LastName;
//         this.age = age;
//     }

//     set firstName(newfirstName){
//         if (typeof newfirstName === "String" && newfirstName.lenght > 0) {
//             this._newfirstName = newfirstName;
//         }
//         else{
//             console.error("first name must be non empty string");
//         }
//     }

//     set LastName(newLastName){
//         if (typeof newLastName === "String" && newLastName.lenght > 0) {
//             this._newLastName = newLastName;
//         }
//         else{
//             console.error("Last name must be non empty string");
//         }
//     }

//     set age(newage){
//         if (typeof newage === "number" && newage.lenght > 0) {
//             this._newage = newage;
//         }
//         else{
//             console.error("Age must be a non negative number");
//         }
//     }

//     get firstName(){
//         return this._newfirstName;
//     }

//     get LastName(){
//         return this._newLastName;
//     }

//     get fullName(){
//         return this._newfirstName + "" + this._newLastName;
//     }

//     get age(){
//         return this._newage;
//     }
// }

// const person = new Person("Munim", "Usmani", 21);
// console.log(person.firstName);
// console.log(person.LastName);
// console.log(person.fullName);
// console.log(person.age);