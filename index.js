// Code your solutions in this file
function writeCards(array, event) {
    let returnArray = [];
    for (let index = 0; index < array.length; index++) {
        returnArray.push(`Thank you, ${array[index]}, for the wonderful ${event} gift!`);
    }
    return returnArray;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(number) {
    let countdown = number;
    while (countdown > 0) {
        console.log(countdown);
        countdown --;
    }
    console.log(0);
}

countDown(10);