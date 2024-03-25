
// let age = 15;

// if (age >= 18) {
//     console.log("you are old enough ")
// }
// else{
//     console.log("you must atleast be 18+")
// }

// let isStudent = true;

// if (isStudent) {
//     console.log("you are a student");
// }
// else{
//     console.log("not a student");
// }

// let age = 14;
// let hasLicense = true;

// if (age >=16) {
//     console.log("you can drive");

//     if (hasLicense) {
//         console.log("i have license");
//     }
//     else{
//         console.log("i dont have license");
//     }
// }
// else{
//     console.log("you can not drive");
// }

const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");
const result = document.getElementById("result");

let age;

 myButton.onclick = function(){
    age = myText.value;
    age = Number(age);
    if (age >=18) {
        result.textContent = "you are old enough";
    }
    else if(age > 0){
        result.textContent = "age can not be 0";
    }
    else{
        result.textContent = "you are notold enough";
    }
}
