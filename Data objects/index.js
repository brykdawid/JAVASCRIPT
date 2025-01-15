/*
date objects = objekty zawierajace wartosci reprezentujace daty i czas
date objects moga byc formatowane i zmieniane
*/


//Date(year, month, day, hour, minute, second, ms)
const date = new Date();

date.setFullYear(2025);
date.setMonth(0);
date.setDate(15);
date.getHours(18)
date.getMinutes(18)
date.getSeconds(20)

console.log(date)


/*
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year)
console.log(month)
console.log(day)
console.log(hour)
console.log(minutes)
console.log(seconds)
console.log(dayOfWeek )
*/

const date1 = new Date("2023-12-31");
const date2 = new Date("2022-01-01")

if(date2>date1){
    console.log("Happy new year")

}
else{
    console.log(`no new year`)
}