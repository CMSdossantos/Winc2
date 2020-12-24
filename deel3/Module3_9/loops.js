// Oude stijl: loops
colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;

while (i < colors.length) {
    console.log(colors[i]);
    i++
}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Nieuwe stijl: array methods
const func = function (n) {
    console.log(n);
};
colors.forEach(func);

/*
Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
for: 3, while: 4

Hoeveel regels neemt mijn forEach method in beslag?
1 zonder declaratie v.d. functie, en anders 4.

Welke voordelen heeft het gebruiken van een array method?
Je hoeft geen rekening mee te houden met hoe groot (length) je array gaat zijn in runtime of toekomst.

Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen.
Dit kan met de for..in loop. (through the properties of an object)

const obj = {
    num: 1,
    ch: 'o',
    bool: true
}
for (let i in obj) {
    console.log(i);
}
*/