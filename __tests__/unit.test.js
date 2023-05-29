// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//check phone
test('check phone number', () => {
    expect(functions.isPhoneNumber("99999999999999")).toBe(false);
});
test('check phone number', () => {
    expect(functions.isPhoneNumber("111")).toBe(false);
});
test('check phone number', () => {
    expect(functions.isPhoneNumber("626-555-9998")).toBe(true);
});
test('check phone number', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
//check email
test('check email', ()=>{
    expect(functions.isEmail("@.com")).toBe(false);
})
test('check email', ()=>{
    expect(functions.isEmail("agmail.cnm")).toBe(false);
})
test('check email', ()=>{
    expect(functions.isEmail("haw01@qq.com")).toBe(true);
})
test('check email', ()=>{
    expect(functions.isEmail("haw01@gmail.com")).toBe(true);
})
//check date
test('check date', ()=>{
    expect(functions.isDate("05/02/2001")).toBe(true);
})
test('check date', ()=>{
    expect(functions.isDate("06/02/2001")).toBe(true);
})
test('check date', ()=>{
    expect(functions.isDate("052001")).toBe(false);
})
test('check date', ()=>{
    expect(functions.isDate("-3/3/2001")).toBe(false);
})
//check strong pass
test("check strong password",()=>{
    expect(functions.isStrongPassword("1")).toBe(false);
})
test("check strong password",()=>{
    expect(functions.isStrongPassword("a")).toBe(false);
})
test("check strong password",()=>{
    expect(functions.isStrongPassword("kfdsljacs")).toBe(true);
})
test("check strong password",()=>{
    expect(functions.isStrongPassword("fdsaksks")).toBe(true);
})
//check hex color
test("check hex color",()=>{
    expect(functions.isHexColor("1")).toBe(false);
})
test("check hex color",()=>{
    expect(functions.isHexColor("22")).toBe(false);
})
test("check hex color",()=>{
    expect(functions.isHexColor("111111")).toBe(true);
})
test("check hex color",()=>{
    expect(functions.isHexColor("AA11AA")).toBe(true);
})

