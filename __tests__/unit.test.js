// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//Phone Tester
test('Valid Phone number no symbols', () => {
  const number = '5623958767';
  expect(false).toBe(isPhoneNumber(number));
});

test('Valid Phone number only numbers', () => {
  const number = 5623958767;
  expect(false).toBe(isPhoneNumber(number));
});

test('Valid Phone number with symbols', () => {
  const number = '(562)-395-8767';
  expect(true).toBe(isPhoneNumber(number));
});

test('Valid Phone number with symbols 2', () => {
  const number = '(626)-123-4513';
  expect(true).toBe(isPhoneNumber(number));
});
//Email Function

test('Valid email', () => {
  const email = "ldpina@ucsd.edu";
  expect(true).toBe(isEmail(email));
});
test('Valid email with all symbols but random domains', () => {
  const email = "ldpina@nonPopular_address.io";
  expect(true).toBe(isEmail(email));
});

test('no words in email', () => {
  const email = "@.";
  expect(false).toBe(isEmail(email));
});


test('Valid email without . after @', () => {
  const email = "ldpina@yahoocom";
  expect(false).toBe(isEmail(email));
});

//Pass word function

test('Password shaped like an email', () => {
  const password = "ldpina@yahoo.com";
  expect(false).toBe(isStrongPassword(password));
});
test('Password exteremly password', () => {
  const password = "1234";
  expect(false).toBe(isStrongPassword(password));
});
test('Password with random letters and numbers', () => {
  const password = "asd128fsa3";
  expect(true).toBe(isStrongPassword(password));
});
test('Password with one symbol', () => {
  const password = "luis_pina";
  expect(true).toBe(isStrongPassword(password));
});

// Date function
test('date with incorrect spacer format', () => {
  const date = "01-19-2003";
  expect(false).toBe(isDate(date));
});

test('date with incorrect format internation style', () => {
  const date = "2003/01/03";
  expect(false).toBe(isDate(date));
});

test('date with correct format with 0s', () => {
  const date = "01/02/2003";
  expect(true).toBe(isDate(date));
});

test('date with correct format with no 0s', () => {
  const date = "1/19/2003";
  expect(true).toBe(isDate(date));
});

//Hexcode Function
test('hexcode with long string', () => {
  const hexCode = "#absdasda";
  expect(false).toBe(isHexColor(hexCode));
});

test('hexcode with incorrect format (hashtag at end)', () => {
  const hexCode = "000000#";
  expect(false).toBe(isHexColor(hexCode));
});

test('hexcode with correct format', () => {
  const hexCode = "#000000";
  expect(true).toBe(isHexColor(hexCode));
});

test('hexcode with short hexcode', () => {
  const hexCode = "#742";
  expect(true).toBe(isHexColor(hexCode));
});
