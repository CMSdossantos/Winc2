const age = 18;
const isFemale = false;
const driverStatus = 'bob';

console.log('Mag ik uw ID zien?');

if (age >= 18) {
    console.log('Welkom bij de kroeg!');
    if (isFemale) {
        console.log('en veel plezier mevrouw.')
    }
    if (driverStatus == 'bob') {
        console.log('Ik zie dat u de bob gaat zijn vandaag.')
    } else {
        console.log('Houd er rekening mee dat als u geen bob heeft een taxi moet regelen?')
    }

} else if (age < 18) {
    console.log('Sorry, minderjarigen komen niet naar binnen.');
} else {
    console.log('Meneer, vandaag is het ladiesnight. Alleen toegang voor vrouwen met dit kaartje.');
}