const rollDiceBtn = document.getElementById("rollDiceBtn")


 function rollDice(){
    const amountOfDice = document.getElementById("amountOfDice").value;
    const diceResult = document.getElementById("diceResult")
    const diceImg = document.getElementById("diceImg")
    const values = []
    const images = []

    for(let i = 0; i < amountOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value)
        images.push(`<img src="dice_images/dice ${value}.png" alt="Dice ${value}">`)
    }
    
    console.log(values)

    diceResult.textContent = (`dice: ${values.join(`,  `)}`)
    diceImg.innerHTML = images.join(``)
 }