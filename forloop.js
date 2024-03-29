
// repeat code for a limited amount of times

for (let i = 0; i<=2; i++) {
    console.log(i);
}

for(let i = 1; i<=45; i++){
    console.log("munim");
} 

for(let j = 1; j<=45; j+=2){
    console.log(j);
} 

for(let l = 10; l> 0; l--){
    console.log(l);
} 

for(let l = 10; l> 0; l-=2){
    console.log(l);
} 

for(let m = 1; m<= 20; m++){
    if (m == 11) {
        continue; // skips that iteration
    }
    else{
        console.log(m);
    }
    
} 

for(let s = 1; s<= 20; s++){
    if (s == 11) {
        break; // when iteration reaches 11 terminate the program
    }
    else{
        console.log(s);
    }
    
} 