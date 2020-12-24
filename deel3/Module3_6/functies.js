/* broodjeswinkel

    Hollands broodje kaas:
        Neem een snee brood.
        Leg er een plakje kaas op.
        Leg er een snee brood op.
*/

// deel A
const broodjeKaas = function () {
    console.log('Neem een snee brood.');
    console.log('Leg er een plakje kaas op.');
    console.log('Leg er een snee brood op.');
}
broodjeKaas();

// deel B
// Here a function expression instead of function decleration.
const makeSandwich = function (topping) {
    console.log("There you go, a sandwich with " + topping);
}

makeSandwich('spam'); //function call
makeSandwich('blue cheese'); //function call

// deel C
const calculateDiscountedPrice = function (totalAmount, discount) {
    return console.log('Uw bestelling kost: ' + Math.round(totalAmount - discount) + ' Euro');
}
calculateDiscountedPrice(10, 6.3);

// deel D
const allowDiscount = function (totalAmount, discount) {
    if (totalAmount <= 25) {
        discount = 0;
    }
    return console.log('Uw bestelling kost: ' + Math.round(totalAmount - discount) + ' Euro');
}
allowDiscount(30, 6.3);