/*
constructor  = spejcalna metoda definiujaca wartosci i methody objektu
*/



function Car(make, model,year,color){
    this.make = make,
    this.model = model,
    this.yaer = year,
    this.color = color
    this.drive = function(){
        console.log(`You drive the ${this.model}`)
    }

}


const car1 = new Car("mercedes", "CLS", 2024, "black");
const car2 = new Car("Chevrolet", "Camaro", 2023, "blue")
const car3 = new Car("Dodge", "Charger", 2022, "Silver")

console.log(car1)
console.log(car2)
console.log(car3)
car1.drive()