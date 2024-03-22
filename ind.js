const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");
const increasebtn = document.getElementById("increase");
const counter = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function(){
    count++;
    counter.textContent = count;
}

decreasebtn.onclick = function(){
    count--;
    counter.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    counter.textContent = count;
}