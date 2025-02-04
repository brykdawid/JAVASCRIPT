const hideButton = document.getElementById("hideButton");
const myJpg = document.getElementById("myJpg");

hideButton.addEventListener("click", event => {

    if(myJpg.style.visibility === "hidden"){
        myJpg.style.visibility = "visible";
        hideButton.textContent = "Hide"
    }
    else{
        myJpg.style.visibility = "hidden"
        hideButton.textContent = "Show"
    }

    
})