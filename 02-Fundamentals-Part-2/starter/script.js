'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   //Spelled icorrectly (without the s)
//   hasDriverLicense = true;
// }


// Function declaration
console.log(calcAge1(2000));

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge1(1984));

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge2(1984));

// Arrow Functions (one line)
const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge3(1984));

// Arrow Functions (multiple lines)
const yearsUntilRetirement_1 = birthYear => {
  const age = 2037 - birthYear;
  const years = 65 - age;
  return years;
}

console.log(yearsUntilRetirement_1(1984));

// Arrow Functions (multiple parameters)
const yearsUntilRetirement_2 = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const years = 65 - age;
  return `${firstName} has ${years} until retirement`;
}

console.log(yearsUntilRetirement_2(1990, `Bob`));

// Call Function From Another Function
const cutFruitPieces = function (fruit) {
  return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {
  apples = cutFruitPieces(apples);
  oranges = cutFruitPieces(oranges)
  return `Juice with ${apples} apples & ${oranges} oranges.`
}

console.log(fruitProcessor(2, 4));

const maybeReturnNumber = function (input) {
  const numberToMaybeReturn = input * 5;
  if (numberToMaybeReturn > 20) {
    return numberToMaybeReturn;
  } else {
    // Nothing returned
  }
}

console.log(maybeReturnNumber(7));
console.log(maybeReturnNumber(2));
