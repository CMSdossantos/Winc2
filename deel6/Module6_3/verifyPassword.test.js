const verify = require("./verifyPassword.js");

test("Testing if input is not Null:", () => {
    expect(verify.isNotNull()).not.toBeNull();
})

test("Testing if input is less then 9", () => {
    expect(verify.hasRightLength("Henkie!3")).toBeTruthy();
})
test("Testing if input has Uppercase", () => {
    expect(verify.hasUpperCaseCharacter("Henkie!3")).toBeTruthy();
})
test("Testing if input has Lowercase", () => {
    expect(verify.hasLowerCaseCharacter("Henkie!3")).toBeTruthy();
})
test("Testing if input has a Digit", () => {
    expect(verify.hasDigit("Henkie!3")).toBeTruthy();
})

test("Testing if all requirements are valid:", () => {

    expect(verify.verifyPassword("Henkie3!")).toBeTruthy();
})