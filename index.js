// Code your solutions in this file
const people = ["Lisa", "Kaitlin", "Jan"]
let event = "birthday"

function writeCards(people, event) {
    let cards = []
    for (let i = 0; i < people.length; i++) {
        cards.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}