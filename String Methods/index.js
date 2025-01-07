/*
string methods = manipulating text
*/

let name = "Dawid";

console.log(name.charAt(0));
console.log(name.indexOf("d"));
console.log(name.lastIndexOf("d"));
console.log(name.length);
console.log(name.trim()) //usuwa spacje
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.repeat(5));

let result = name.startsWith("D"); //sprawdzenie czy string zaczyna sie z ukazanym znakiem
console.log(result)

let result2 = name.endsWith(" "); //sprawdzenie czy string konczy sie z ukazanym znakiem
console.log(result2)

let result3 = name.includes(" "); //sprawdza czy w calym stringu znajduja sie wskazane znaki
console.log(result3)

let phoneNumber = "123-456-789";

phoneNumber = phoneNumber.replaceAll("-", ""); //replace bez All aby usunac pierwszy znak, all do wszytskich
console.log(phoneNumber)

let phoneNumber2 = "123-456-789";

phoneNumber2 = phoneNumber2.padStart(15, "0"); //wybieramy dlugosc stringa, mozemy dac znak od ktorego ma sie zaczynac
console.log(phoneNumber2)

let phoneNumber3 = "123-456-789";

phoneNumber3 = phoneNumber3.padEnd(15, "0"); //wybieramy dlugosc stringa, mozemy dac znak na ktory ma sie konczyc
console.log(phoneNumber3)

