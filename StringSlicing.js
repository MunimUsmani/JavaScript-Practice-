const fullname = "Abdul Munim Usmani";

// let firstName = fullname.slice(0,7);
// let LastName = fullname.slice(8,11);

let firstName = fullname.slice(0, fullname.indexOf(" "));
let LastName = fullname.slice(fullname.indexOf(" ")+1);
console.log(firstName);
console.log(LastName);

const email = "munim1@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);

console.log(username);
console.log(extension);
