// rest parameter = (...rest) allows a function work with a variable number of arguments by bundling them into an array
// spread expands an array into separate elements while rest bundles elements in an array



function openFridge(...foods) {
    console.log(...foods);
}
function getFood(...foods) {
    return foods;
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "kabab";
const food4 = "egg";
const food5 = "qeema";

// openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5); 
console.log(foods);


function sum(...numbers){
    let result = 0;
    for (let number of numbers) {
        result += number;
        
    }
    return result;
}

function getAverage(...numbers){
    let result = 0;
    for (let number of numbers) {
        result += number;
        
    }
    return result / numbers.length;
}

const total = getAverage(70,100,80,88,87);
console.log(total);


function combineStrings(...strings) {
    return strings.join(" ")
}

const fullName = combineStrings("Mr","Abdul","Munim","Usmani");
console.log(fullName);