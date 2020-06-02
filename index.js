// Code your solutions in this file
function writeCards(nameArray, eventName) {
    const thankYouCards = []
        for (let i = 0; i < nameArray.length; i += 1) {
            thankYouCards.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`)
         }
    return thankYouCards
}

function countDown(startingNumber) {
    while (startingNumber > 0) {
        console.log(startingNumber);
        startingNumber -=1;
    }

    console.log(startingNumber);
}

