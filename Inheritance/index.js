/*
inheritance =  pozwala nowej klasie na dziedziczenie wartosci oraz metod z 
stworzonej wczesniej klasy (parent -> child)
pomaga w reużytkowniu kodu
*/

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`)
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }

}


class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`)
    }
}

class Fish extends Animal{
    name = "fish"
    swim(){
        console.log(`This ${this.name} is swimming`)
    }
}

class Hawk extends Animal{
    name = "Hawk"

    fly(){
        console.log(`This ${this.name} is flying`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish()
const hawk = new Hawk()

rabbit.alive = false


console.log(rabbit.alive)

rabbit.eat()
rabbit.sleep()
rabbit.run()