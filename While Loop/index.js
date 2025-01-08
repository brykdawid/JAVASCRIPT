let username = "";

while(username ==="" || username === null){
    username = window.prompt(`enter your name`)
}

console.log(username)

do{

    username = window.prompt(`enter your name`)
}while(username ==="" || username === null)

console.log(username)

let loggedIn = false;
let username1;
let passowrd;

while(!loggedIn){
    username1 = window.prompt(`Enter your username`);
    passowrd = window.prompt(`Enter your password`);

    if(username1 === "DawidBryk" && passowrd === "hleb123"){
        loggedIn =  true;
        console.log("You are logged in");
    }
    else{
        console.log("Invalid Credentials");
    }
}