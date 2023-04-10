console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hey, ${name}!`;
}
// Remember to call the function to test
console.log('Test - Should say "Hey, Arnold!"', helloName('Arnold'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log('test - should return 12', addNumbers(6, 6));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  return num1 * num2 * num3;
}
console.log('test - should return 27', multiplyThree(3, 3, 3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if ( array.length === 0) {
    return undefined;
  } return array[array.length - 1];
}
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for ( let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
 for ( let i = 0; i < string.length - 1; i++) {
  if (string[0] === letter) {
    return true;
  }
 } return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );






// 9. Function to return the sum of all numbers in an array
function sumAll( array) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
array = [4, 5, -2, -4, 5, -1,];
function betterArray( array ) {
  const newArray = [];
  for ( let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray.push(array[i]);
    }
  } return newArray;
}
console.log('Test - should return "4, 5, 5"', betterArray( array ));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
// The code problem I found on edabit was converting age to days. The programmer is supposed to
// create a funtion that converts age to days. To do this I create a funtion called ageToDays and it takes an argument as a value.
// this funtion will return the number passed into the function multiplied by 365. Resulting in how many days old. 

function ageToDays ( value ) {
  return value * 365;
}

console.log('I guess I am this many days old', ageToDays(25));