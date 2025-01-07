/*
1. easy way = window promt
2. proffesional = html textbox
*/

let username;

//username = window.prompt("Whats your username");


document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
    console.log(username);

}