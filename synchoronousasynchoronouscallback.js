// You are at a bank counter
// Only ONE customer can be served at a time
// Everyone waits in line for their turn

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// sync example
function longTask() {
    for (let i = 0; i < 1e9; i++) {}
    console.log("Task done");
  }
  
  console.log("Start");
  longTask();
  console.log("End");
  
  // async example
  console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");

//callback example
function fetchData(callback) {
    setTimeout(() => {
      console.log("Data fetched");
      callback();
    }, 2000);
  }
  
  console.log("Start");
  fetchData(() => {
    console.log("Process data");
  });
  console.log("End");
  
