function roll() {
    const numOfdice= document.getElementById("numOfdice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages= document.getElementById("diceimages");

    const values = [];
    const images = [];

    for (let i = 0; i < numOfdice; i++) {
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        
    }
     console.log(values);
    
}