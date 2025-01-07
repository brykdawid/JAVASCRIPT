const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercard = document.getElementById("mastercard");
const PayPal = document.getElementById("PayPal");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


submitBtn.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = ("Thanks for sub")
    }
    else{
        subResult.textContent = ("You are not sub")

    }

    if(visaBtn.checked){
        paymentResult.textContent = ("You selected Visa")
    }
    else if(mastercard.checked){
        paymentResult.textContent = ("You selected Mastercard")
    }
    else if(PayPal.checked){
        paymentResult.textContent = ("You selected PayPal")

    }
    else{
        paymentResult.textContent = ("You did not select any payment method")

    }
}


