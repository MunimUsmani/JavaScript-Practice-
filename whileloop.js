// if condition in the loop is true then code will continuously run

let loggedIn = false;
let username;
let password;

do {
    {
        username = window.prompt("myUsername");
        password = window.prompt("myPassword");
    }
    
    if (username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("you are logged in successfully");
    } else {
        console.log("your username and password is incorrect");
    }
    
} while (!loggedIn) ;



