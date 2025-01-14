/*
super = keyword uzywany w klasach do wywołania konstrukota, lub wartosci i metod z klasy rodzica
(superclass)
this = this object
super = the parent
*/

class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}km/h`)
    }

}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age); //bez super nie mozna wywolac tych klas
        this.runSpeed = runSpeed
    }
    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed)
    }

}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed
    }
    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed)
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed
    }
    fly(){
        console.log(`This ${this.name} can fly`)
        super.move(this.flySpeed)
    }
}

const rabbit = new Rabbit("rabbit", 1, 25)
const fish = new Fish("fish", 2, 10)
const hawk = new Hawk("hawk", 5, 50)

console.log(rabbit.name, rabbit.age, rabbit.runSpeed)

rabbit.run()
fish.swim()
hawk.fly()