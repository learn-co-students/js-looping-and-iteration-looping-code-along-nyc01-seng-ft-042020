// Code your solutions in this file





function writeCards(namesArray, event) {
    let messages = [];
    for (let x = 0; x < namesArray.length; x++ ) {
        messages.push(`Thank you, ${namesArray[x]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(x) {
    while (x >= 0) {
        console.log(x--);
    }
}