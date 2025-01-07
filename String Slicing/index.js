const fullName = "Dawid Bryk"
/*
let fistName = fullName.slice(0, 5)
let lastName = fullName.slice(6, 10)
console.log(fistName)
console.log(lastName)

let fistChar = fullName.slice(0,1)
console.log(fistChar)
let lastChat = fullName.slice(-1)
console.log(lastChat)
*/

let firstName = fullName.slice(0, fullName.indexOf((" ")))
console.log(firstName)
let lastName = fullName.slice(fullName.indexOf(" ") + 1)
console.log(lastName)

const email = "gsakljdla@gmail.com"

let username = email.slice(0, email.indexOf("@"));
console.log(username)
let extension = email.slice(email.indexOf("@") +1 )
console.log(extension)