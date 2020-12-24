const age = 18;
const isFemale = false;
const driverStatus = 'bob';
const name = 'sarah';
const totalAmount = 101;

console.log('Mag ik uw ID zien?');

if (age >= 18) {
    console.log('Welkom bij de kroeg!');
    if (age <= 25) {
        console.log("Je krijgt 50% korting!");
    } else {
        console.log("Helaas geen korting van toepassing.");
    }
    if (isFemale) {
        console.log('en veel plezier mevrouw.');
    }
    if (driverStatus == 'bob') {
        console.log('Ik zie dat u de bob gaat zijn vandaag.');
    } else {
        console.log('Houd er rekening mee dat als u geen bob heeft een taxi moet regelen?');
    }
    if (name == 'sarah' || 'bram') {
        console.log('Overigens is het eerste biertje voor u gratis!');
    }
    console.log('Bij uw vorige bezoek heeft u ' + totalAmount + ' euro aan drankjes besteld.')
    if (totalAmount >= 25 && totalAmount <= 50) {
        console.log('Dat betekent dat u een gratis portie bitterballen krijgt.')
    }
    if (totalAmount > 50 && totalAmount <= 100) {
        console.log('Dat betekent dat u een gratis portie nachos krijgt.')
    }
    if (totalAmount > 100) {
        console.log('Dat betekent dat u een gratis fles champagne krijgt.')
    }

} else if (age < 18) {
    console.log('Sorry, minderjarigen komen niet naar binnen.');
} else {
    console.log('Meneer, vandaag is het ladiesnight. Alleen toegang voor vrouwen met dit kaartje.');
}