// sort()= used to sort elements of an array sorts elements in lexicographic order (alphabet+number+symbols) as strings
let fruits = ["apple","orange","banana","pineapple"];

fruits.sort();
console.log(fruits);


let numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.sort((a,b)=>  a=b);
console.log(numbers);


const people = [{name:"munim",age:"30",CGPA:3.3},
    {name:"shoukat",age:"31",CGPA:3.8},
    {name:"yasir",age:"42",CGPA:3.6},
    {name:"nabil",age:"27",CGPA:3.7},
    ]

    //  people.sort((a,b)=> b.CGPA- a.CGPA);
    // people.sort((a,b)=> b.age- a.age);

    // people.sort((a,b)=> a.name.localeCompare(b.name));
    // for reverse
    people.sort((a,b)=> b.name.localeCompare(a.name));
    console.log(people);