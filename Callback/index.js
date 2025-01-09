// callback = a function that is passed as an argument
//            to another function.
//
//            used to handle asynchronous operations:
//              1. Reading a file
//              2. Network requests
//              3. Interacting with databases
//
//            "Hey, when you're done, call this next."



hello(wait);

sum(displayConsole, 5, 4)
sum(displayPage, 5, 8)

function hello(callback){
    setTimeout( function(){
        console.log(`Hello`)
        callback();
    }, 3000);
    
    
}

function wait(){
    console.warn(`Wait`)
}

function leave(){
    console.log(`Leave!`)
}


function goodbye(){
    console.log(`Goodbye`)
}


function sum(callback, x,y){
    let result = x+y;
    callback(result);
}

function displayConsole(result){
    console.log(result)
}

function displayPage(result){
    document.getElementById("myH1").textContent = result
}