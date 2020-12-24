const calculateSupply = function (age, amount) {
    let maxLeeftijd = 90;
    let answer = (maxLeeftijd - age) * (amount * 365);
    let msg = 'You will need ' + answer + ' of cookies to last you until the ripe old age of ' + maxLeeftijd;
    console.log(msg);
}

calculateSupply(20, 3);
calculateSupply(53, 9);
calculateSupply(33, 4);