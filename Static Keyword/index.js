/*
static = keyword który definiuje wartości lub metody nalezace do klasy, 
niz do objektu stworzonego z tej klasy
(klasa posiada wszystko co static, nie objekt)
*/

class MathUtil{
    static PI = 3.14159;

    static getDiamater(radius){
        return radius * 2
    }
    static getCircumference(radius){
        return 2*this.PI*radius
    }
    static getArea(radius){
        return this.PI * radius *radius
    }
}

console.log(MathUtil.PI)
console.log(MathUtil.getDiamater(10))
console.log(MathUtil.getCircumference(10))
console.log(MathUtil.getArea(10))


class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount ++;
        
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`)
    }
}

const user1 = new User("spongebob")
const user2 = new User("kjashkdja")
const user3 = new User("231312")
const user4 = new User("dsadas")

console.log(user1.username)
console.log(User.userCount)
user1.sayHello()

User.getUserCount()