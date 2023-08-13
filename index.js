const names = ["Jacob", "Keely", "Joe"];
const card = [];
function writeCards(name, event) {
    for (let i = 0; i < 3; i++) {
        card.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        console.log(card)
    }
    return card
}


function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
