//date objects = pbjects that contain values that represent date n time we can format it according to our needs

// will show current date and time of your computer
// const date = new Date();

// console.log(date);

// we can pass parameters as in years month hours minute second milisecond
// const date = new Date(2024,0,1,2,3,4,5);
// console.log(date);

// it will show the time our computer thinks time began, it's also called epic date
// const date = new Date(0); if i pass miliseconds it will give of time since that epic date
// console.log(date);

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hours = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const dayofweek = date.getDay();

// console.log(dayofweek);

// const date = new Date();

// date.setFullYear(2024);
// date.setMonth(3);
// date.setDate(24);
// date.setHours(23);
// date.setMinutes(11)
// date.setSeconds(6);

// console.log(date);

// to compare two dates

const date1 = new Date("2023","12","31");
const date2 = new Date("2024","1","1");

if (date2 > date1) {
    console.log("HAPPY NEW YEAR!");
}