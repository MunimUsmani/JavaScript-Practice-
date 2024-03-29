
const min = 1;
const max = 100;
const result = Math.floor(Math.random()*(max-min + 1)+min);
console.log(result);

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt('Guess a number between 1 to 100');
    guess = Number(guess);

    if (isNaN (guess)) {
     window.alert("please enter a valid number");
   }
    else if(guess < min || guess > max){
    console.log("please enter a valid number");
   }
    else{
     attempts++;
     if (guess < result) {
        window.alert("too low try again");
    }

    else if (guess > result) {
        window.alert("too high try again");
        }
        else{
            window.alert("correct the answer was",result,"it took you",attempts,"attempts");
            running = false;
        }
    }
   
}
