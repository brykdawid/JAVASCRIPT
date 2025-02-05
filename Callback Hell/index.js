/*

Callback Hell - sytuacja w JS gdzie callbacki są zagnieżdżone w innych callbackach w takim 
stopniu, że trudno zrozumieć kod czytając go
Jest to stary sposób na radzenie sobie z asynchronicznymi funkcjami
aby uknikac Callback Hell powinno się używać:
promises
async/await

*/

function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 complete")
        callback();
    }, 3000);

}
function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 complete")
        callback();
    }, 1000);
}
function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 complete")
        callback();
    }, 2000);
}
function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 complete")
        callback();
    }, 2400);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(()=>{
                console.log("completed")
            })
        })
    })
})
task2()
task3()
task4()
