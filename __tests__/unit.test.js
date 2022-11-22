// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber()
// Test 1 - True
 test(" (714)- 899-9876 should be true", () => {
    expect(functions.isPhoneNumber('(714)- 899-9876')).toBe(true);
 });
// Test 2 - True
test(" (714) 899-9876 should be true", () => {
    expect(functions.isPhoneNumber("(714) 899-9876")).toBe(true);
});
// Test 3 - False
test("(71415) 899-986 should be false", () => {
    expect(functions.isPhoneNumber("(71415) 899-986")).toBe(false);
});
// Test 4 - False
test("(714) 89-9876 should be false", () => {
    expect(functions.isPhoneNumber("(714) 89-9876")).toBe(false);
});



// isEmail()
// Test 5 - True
test(" Tennis@gmail.com should be true", () => {
    expect(functions.isEmail("Tennis@gmail.com")).toBe(true);
});
// Test 6 - True
test(" tennis5251@gmail.com should be true", () => {
    expect(functions.isEmail("Tennis@gmail.com")).toBe(true);
});
// Test 7 - False
test(" sandiego.gmail.com should be false", () => {
    expect(functions.isEmail("sandiego.gmail.com")).toBe(false);
});
// Test 8 - False
test(" losAngeles.gmailcom should be false", () => {
    expect(functions.isEmail("losAngeles.gmailcom")).toBe(false);
});


//isStrongPassword()
//Test 9 - True
test(" SanDiego_5251 should be true", () => {
    expect(functions.isStrongPassword("SanDiego_5251")).toBe(true);
});
// Test 10 - True
test(" UCSD_SanDiego23 should be true", () => {
    expect(functions.isStrongPassword("UCSD_SanDiego23")).toBe(true);
});
// Test 11 - False
test(" box should be false", () => {
    expect(functions.isStrongPassword("box")).toBe(false);
});
// Test 12 - False
test(" 2tennis should be false", () => {
    expect(functions.isStrongPassword("2tennis")).toBe(false);
});


// isDate()
// Test 13 - True
test(" 10 / 11 / 2022 should be true", () => {
    expect(functions.isDate("10/11/2022")).toBe(true);
});
// Test 14 - True
test(" 5 / 11 / 2022 should be true", () => {
    expect(functions.isDate("5/11/2022")).toBe(true);
});
// Test 15 - False
test("12-11-2022 should be false", () => {
    expect(functions.isDate("12-11-2022")).toBe(false);
});
// Test 16 - False
test("12/11/22 should be false", () => {
    expect(functions.isDate("12/11/22")).toBe(false);
});

// isHexColor()
// Test 17 - True
test(" #fff should be true", () => {
    expect(functions.isHexColor("#fff")).toBe(true);
});
// Test 18 - True
test(" #FF5733 should be true", () => {
    expect(functions.isHexColor("#FF5733")).toBe(true);
});
// Test 19 - False
test(" #ffff should be false", () => {
    expect(functions.isHexColor("#ffff")).toBe(false);
});
// Test 20 - False
test("11786445 should be false", () => {
    expect(functions.isHexColor("11786445")).toBe(false);
});