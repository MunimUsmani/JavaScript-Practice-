const PI = "3.141";
let radius;
let circumference;


document.getElementById("mybutton").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    if (isNaN(radius)) {
        alert("enter a valid number for the radius.");
        return false; 
      }
    
    console.log(radius);
    circumference = 2 * parseFloat(PI) * radius; 
    
document.getElementById("myh3").textContent = circumference;
}

