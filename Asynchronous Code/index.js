/*

synchronous = wykonuje linijka po linijce, kod czeka az operacja sie zakonczy

asynchronous = pozwala na wykonywanie wielu operacji jednoczesnie bez czekania na zakonczenie poprzedniej
nie blokuje wykonywalnosci kodu

zarządzane przy uzyciu = callback, promises, async/wait

*/

function func1(callback){

    setTimeout(() => {console.log(`Task 1`); callback()}, 3000)
}

function func2(){
    console.log("Task 2")
    console.log(`Task 3`)
    console.log(`Task 4`)
}

func1(func2)

