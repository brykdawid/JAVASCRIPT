/*
getter = metoda pozwalajaca na czytanie wartosci
setter = metoda pozwalajaca na nadpisywanie wartosci

walidacja oraz modyfukacja wartosci podczas czytania/nadpisywania zmiennej
*/

class Rectangle{
    constructor(width, height){
    this.width = width
    this.height = height
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth
        }
        else{
            console.error("Width must be a positive number")
        }
    }


    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight
        }
        else{
            console.error("Heigth must be a positive number")
        }
    }

    get width(){
        return this._width.toFixed(2);
    }
    get height(){
        return this._height.toFixed(2);
    }
 

    get area(){
        return (this._width * this._height).toFixed(2);
    }
}   

const rectangle = new Rectangle(3, 4);

rectangle.width = 5
rectangle.height = 6

console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
        set firstName(newFirstName){
            if(typeof newFirstName === "string" && newFirstName.length > 0){
                this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-mepty string")
        }
    }
        set lastName(newLastName){
            if(typeof newLastName === "string" && newLastName.length > 0){
                this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-mepty string")
        }

    }
        set age(newAge){
            if(typeof newAge === "number" && newAge >= 0){
                this._age = newAge
            }
            else{
                console.error(`Age must be a positive number`)
            }
        }
        get firstName(){
            return this._firstName
        }
        get lastName(){
            return this._lastName
        }
        get age(){
            return this._age
        }
}

const person = new Person("Dawid", "Bryk", 22)

console.log(person.firstName, person.lastName, person.age)
