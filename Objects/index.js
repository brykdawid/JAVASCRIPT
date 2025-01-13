/*
object = kolekcja o powiazanych wartosci i metod
moze przedstawiac realny przedmiot (ludzi/produkty/etc)
object = {key:value,
function()}
*/

const person1 = {
    firstName : "spongebob",
    lastName : "squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){
        console.log(`Hi, I'm ${this.firstName}`)
    },
    eat: function(){
        console.log(`Im eating fdsgafssf`)
    },


}
const person2 = {
    firstName : "Patric",
    lastName : "Star",
    age : 29,
    isEmployed: false,
    //sayHello: () => console.log(`Hi, I'm ${this.firstName}`) // arrow function = no this.
    sayHello: function(){
        console.log(`Hi, I'm ${this.firstName}`)
    },
    eat: function(){
        console.log(`Im eating dsadfggfsfgs`)
    },
}

console.log(person1.firstName)

person1.sayHello()
person2.sayHello()
person1.eat()