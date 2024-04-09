
// reduce = reduce elements of an array to a single value

const prices = [5,30,10,25,15,20];

const total = prices.reduce(sum);
console.log(`Your total is ${total.toFixed(2)}`);

function sum(accumulator , element) {
    return accumulator + element;
}


const grades = [75,50,90,80,65,95];

const max = grades.reduce(maximum);

console.log(max);

const min = grades.reduce(minimum);
console.log(min);

function maximum(accumulator , element){
    return Math.max(accumulator, element);
}

function minimum(accumulator , element){
    return Math.min(accumulator, element);
}