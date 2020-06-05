// Code your solutions in this file
const nameArray = ["Ada", "Brendan", "Ali"]
const event = "birthday"

function writeCards(nameArray, event) {
    let thankyouMessages = [ ]
    for (let i=0; i < nameArray.length; i++) {
        thankyouMessages.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
    }
return thankyouMessages
}

function countDown (num1){
    while(num1 > 0) {
    console.log(num1)
    num1 -= 1
    }
    console.log (num1)
}

