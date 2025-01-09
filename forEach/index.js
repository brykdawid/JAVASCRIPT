// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element
//
//             array.forEach(callback)
//              element, index, array are arleady provided


let numbers = [1,2,3,4,5]

//numbers.forEach(double);
//numbers.forEach(triple);
//numbers.forEach(square);
numbers.forEach(qube);
numbers.forEach(display);



function display(element){
    console.log(element)
}

function double(element, index, array){
    array[index] = element *2;
    
}

function triple(element, index, array){
    array[index] = element *3;
    
}
function square(element, index, array){
    array[index] = Math.pow(element,2);
    
}
function qube(element, index, array){
    array[index] = Math.pow(element,3);
    
}

let fruits = ["apple", "orange", "banana", "coconut"]

fruits.forEach(capitalize)
fruits.forEach(display2)

function display2(element){
    console.log(element)
}

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}