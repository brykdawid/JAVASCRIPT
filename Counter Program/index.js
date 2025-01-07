
const countLabel =  document.getElementById("countLabel");
const decreseBtn = document.getElementById("decreseBtn");
const resetBtn = document.getElementById("resetBtn");
const increseBtn = document.getElementById("increseBtn");
let count = 0;

decreseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
increseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}