const submitBtn = document.getElementById("submitBtn");

function addNumbers(){
    const stValue = parseInt(document.getElementById("1stValue").value)
    const ndValue = parseInt(document.getElementById("2ndValue").value)
    const result1 = document.getElementById("stValue")
    const result2 = document.getElementById("ndValue")
    const resultValue = document.getElementById("resultValue")

    const stNums = []
    const ndNums = []

    stNums.push(stValue)
    ndNums.push(ndValue)

    result1.textContent = `${stValue}`
    result2.textContent = `${ndValue}`
    resultValue.textContent = `${stValue+ndValue}`

    


}