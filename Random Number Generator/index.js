const generateButton = document.getElementById("generateButton");
const generatedNum = document.getElementById("generatedNum");

generateButton.onclick = function(){
    const min = parseInt(document.getElementById("minNum").value);
    const max = parseInt(document.getElementById("maxNum").value);
    let randomNum = Math.floor(Math.random() * max) + min;

    generatedNum.textContent = randomNum;
}


const rollBtn = document.getElementById("rollBtn");
const stNum = document.getElementById("1stNum");
const ndNum = document.getElementById("2ndNum");
const rdNum = document.getElementById("3rdNum");

rollBtn.onclick = function(){
    let min2 = 1;
    let max2 = 20;
    let randomNum2 = Math.floor(Math.random() * max2) + min2;
    let randomNum3 = Math.floor(Math.random() * max2) + min2;
    let randomNum4 = Math.floor(Math.random() * max2) + min2;

    stNum.textContent = randomNum2;
    ndNum.textContent = randomNum3;
    rdNum.textContent = randomNum4;
}