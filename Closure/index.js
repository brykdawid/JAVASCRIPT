/*
closure = funkcja zdefiniowana w innej funkcji, 
funkcja wewnatrz ma dostep do zmiennych i metod funkcji zewnetrznej
*/

function outer(){

    let message = `Hello`;
        function inner(){
            console.log(message)

        }

    inner();
}

message = "goodbye"

outer()

function createCounter(){

    let count = 0;

    function increment(){
        count++;
        console.log(`Count increase to ${count}`)
    
    
    }

    function getCount(){
        return count;
    }

    return {increment, getCount}
}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`)



function createGame(){
    let score = 0;

        function increaseScore(points){
            score += points;
            console.log(`+${points}pts`)
        }
        function decreseScore(points){
            score -= points;
            console.log(`-${points}pts`)
        }


        function getScore(){
            return score;
        }
        return {increaseScore, decreseScore, getScore}
}

const game = createGame();

game.increaseScore(5);
game.decreseScore(3)



console.log(`Final score: ${game.getScore()}`)