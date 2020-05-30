// Code your solutions in this file

let thankYouCards = [];

function writeCards(friends, occasion) {
    for (let x = 0; x < friends.length; x++)
    thankYouCards.push(`Thank you, ${friends[x]}, for the wonderful ${occasion} gift!`);

    return thankYouCards;
}

function countDown(number) {
    while (number != 0) {
        console.log(number);
        number--;
    }
    console.log(number)
}