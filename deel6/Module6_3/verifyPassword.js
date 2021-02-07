// Utility functions
const isNotNull = (str) => { if(str) {return true}};
const hasRightLength = (str) => { if(str.length <= 8) {return true} else {return false}};
const hasUpperCaseCharacter = (str) => /[A-Z]/.test(str);
const hasLowerCaseCharacter = (str) => /[a-z]/.test(str);
const hasDigit = (str) => /\d/g.test(str);

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};