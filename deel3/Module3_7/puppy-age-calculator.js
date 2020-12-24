const calculateDogAge = function (age, rate) {
    let converse = age * rate;
    let msg = 'Your dog is ' + converse + ' years old in doggy years!';
    return console.log(msg);
}

calculateDogAge(3, 7);
calculateDogAge(6, 6);
calculateDogAge(11, 5);