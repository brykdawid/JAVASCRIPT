/*

Promise = objekt który zarządza asynchronicznymi operacjami
zagnieźdź objekt Promise dookoła {asynchronicznego kodu}
"I promise to return a value"
PENDING -> RESOLVED OR REJECTED
new Promise((resolve, reject) => {aynchronic code})

Do these in order

1.Walk the dog
2.Clean the kitchen
3. Take out the trash

*/

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if(dogwalked){
                resolve(`You walk the dog`)
            }
            else{
                reject("You did not walk the dog")
            }

            
        }, 1500)
    });
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

        const kitchenCleaned = true;
        if(kitchenCleaned){
            resolve(`You cleaned the kitchen`)
        }
        else{
            reject("You did not cleaned the kitchen")
        }

        }, 2500)
    })

}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = false;
            if(trashTakenOut){
                resolve(`You took out the trash`)
            }
            else{
                reject(`You did not take the trash out`)
            }
            
        }, 500)

    })

}

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log(`Finished`)})
        .catch(error => console.error(error));
