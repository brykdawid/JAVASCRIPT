let age = 18;
let hasLicense = false;


if(age >= 18){
    console.log("Old enough")
}
else{
    console.log("Not 18")
}

let time = 9;

if(time < 12){
    console.log("GM")

}
else{
    console.log("GA")
}

let isStudent = false;

if(isStudent){
    console.log("True")
}
else{
    console.log("False")
}
 

 if(age>=16){
    console.log("Old enough to drive")
    if(hasLicense){
        console.log("You have your license")
    }
    else{
        console.log("You dont have your license yet")
    }
 }
 else{
    console.log("16+ to have a license")
 }

 if(age > 18){
    console.log("You are old enough")
 }
 else if(age < 0){
    console.log("Your age cant be below 0")
 }
 else{
    console.log("Not old enough")
 }

 const submitBtn = document.getElementById("submitBtn");
 submitBtn.onclick = function(){

    const ageInput = document.getElementById("ageInput").value;
    const result = document.getElementById("result");
    if(ageInput <= 0){
        result.textContent = ("Your age cant be 0 or less!")
    }
    else if(ageInput>=100){
        result.textContent = ("You are too old")
    }
    else if(ageInput>18){
        result.textContent = ("You are old enough")
    }
    else{
        result.textContent = ("You are not old enough")
    }
    

 }


