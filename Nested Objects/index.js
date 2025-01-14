/*
nested objects = objekty wewnatrz innych objektow
pozwalaja na reprezentowanie bardziej zlozonych struktur danych
objekt dziedziczacy jest załączony za pomocą objektu dziedzicznego

Person{Adress{}, ContactInfo{}}
ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

*/

const person = {
    fullName: "Dawid Bryk",
    age: 30,
    isStudent: true,
    hobbie: ["gamble", "football", "reading"],
    address: {
        street: "124 Kasf Ka",
        city: "Legionowo",
        county: "Poland"
    }

}


console.log(person.fullName)
console.log(person.age, person.isStudent)
console.log(person.hobbie[2])
console.log(person.address.street)

for(const property in person.address){
    console.log(person.address[property])
}

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address)
    }
}


class Address{
    constructor(street, city, country){
        this.street = street
        this.city=city
        this.country=country 

    }
}

const person1 = new Person("dawid", 30, "123 sadkjh ks","Legionowo","Poland")
const person2 = new Person("magda", 20, "dsafafa ks","ssss","dsass")
const person3 = new Person("kamil", 25, "fa ks","pasdasdasda","ppppppp")

console.log(person1.address.street)
console.log(person2)
console.log(person3)
