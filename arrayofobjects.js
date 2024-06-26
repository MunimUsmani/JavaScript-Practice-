
const fruits = [{name:"apple",color:"red",calories:100},
    {name:"bana",color:"yellow",calories:80},
    {name:"orange",color:"orange",calories:50},
    {name:"coconut",color:"brown",calories:90},
    {name:"pineapple",color:"yellow",calories:15}]

    fruits.pop();
    // fruits.splice(1,2); will remove element at different indices

    fruits.push({name:"grapes",color:"purple",calories:45})

    console.log(fruits);
    


    // for each
    fruits.forEach(fruit => console.log(fruit.calories));

    // Map
    const fruitNames = fruits.map(fruit => fruit.name);
    const fruitcolors = fruits.map(fruit => fruit.color);
    const fruitcalories = fruits.map(fruit => fruit.calories);

    console.log(fruitNames);
    console.log(fruitcolors);
    console.log(fruitcalories);

    // filter

    const yellowfruits = fruits.filter(fruit => fruit.color === "yellow");
    const calfruits = fruits.filter(fruit => fruit.calories >79);
    const lowcalfruits = fruits.filter(fruit => fruit.calories < 90);
    console.log(yellowfruits);

    console.log(calfruits);
    console.log(lowcalfruits);

    // reduce

    const maxfruits = fruits.reduce( (max,fruit) => fruit.calories > max.calories ? fruit : max);
    console.log(maxfruits);

    const minfruits = fruits.reduce( (min,fruit) => fruit.calories < min.calories ? fruit : min);
    console.log(minfruits);



