// promises syntax
const age = 16;

const ageCheck = new Promise((resolve, reject) => {
  if (age >= 18) {
    resolve("Access granted");
  } else {
    reject("Access denied");
  }
});

ageCheck
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error);
  });



function task1() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Task 1 started");
        resolve();
      }, 2500);
    });
  }
  
  function task2() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Task 2 started");
        resolve();
      }, 1500);
    });
  }
  
  function task3() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Task 3 started");
        resolve();
      }, 3000);
    });
  }
  
  function task4() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Task 4 started");
        resolve();
      }, 1000);
    });
  }

  task1()
  .then(task2)
  .then(task3)
  .then(task4)
  .then(() => {
    console.log("All tasks completed");
  })
  .catch(error => {
    console.log("Something went wrong:", error);
  });
