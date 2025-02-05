/*

Async/Await - 
Async = funkcja zwraca promise
Await = async funckja czeka na promis

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

async function doChores() {
    try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult)

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult)

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult)
    

    console.log(`Finished`)
}
catch(error){
    console.log(error)
}
}

doChores();
