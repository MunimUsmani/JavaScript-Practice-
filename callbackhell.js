function task1(callback){
    setTimeout(() => {
        console.log("Task 1 started");
        callback();
    }, 2500);
}
function task2(callback){
    setTimeout(() => {
        console.log("Task 2 started");
        callback();
    }, 1500);
}
function task3(callback){
    setTimeout(() => {
        console.log("Task 3 started");
        callback();
    }, 3000);
}
function task4(callback){
    setTimeout(() => {
        console.log("Task 4 started");
        callback();
    }, 1000);
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All tasks completed");
            });
        });
    });
})
