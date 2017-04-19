//Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.

function threeFive(min, max) {
  for (i = min; i <= max; i++) {
    if (i % 15 === 0) {
      console.log('!' + String(i));
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
}

//threeFive(3, 78);

// Write a function printMultiples that takes one argument number. 
// It should log all multiples of the argument between 0 and 100 (inclusive) 
// that are also odd numbers. Log the values in descending order.
// You may assume that number is an integer between 0 and 100.

function printMultiples(number) {
  for (i = 100; i > 0; i--) {
    if (i % number === 0 && i % 2 !== 0) {
      console.log(i);
    }
  }
}

//printMultiples(11);

// Write a function that iterates over the integers from 1 to 100, inclusive. 
// For multiples of three, log "Fizz" to the console. For multiples of five, log "Buzz".
// For numbers which are multiples of both three and five, log "FizzBuzz". 
// For all other numbers, log the number.
function fizzBuzz(number) {
  for (i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i);
    }
  }
}

function fizzBuzz2(max) {
  for (i = 1; i <= max; i++) {
    var message = '';
   
    if (i % 3 === 0) {
      message += 'Fizz' 
    }
    
    if (i % 5 === 0) {
      message += 'Buzz' 
    }

    console.log(message || i);

    message = '';
  }
}

//fizzBuzz2(100);

// Write a function that takes a number argument, and returns true if the number is prime, false if it is not.

function isPrime(number) {
  var result = true;

  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    result = false;
  } else {
      var divisor = 3;
      while (divisor < number) {
        if (number % divisor === 0) {
          return false;
        }

        divisor += 2;
      }
    }

  return result; 
}

function primes(max) {
  var result = [];

  for (i = 0; i <= max; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  return result;
}

function isXor(a, b) {
  if ((a && !b) || (!a && b)) {
    return true;
  }

  return false;
}

function guessPassword() {
  var password = 'password';
  var attempts = 0;
  var result;

  while (attempts < 3) {
    answer = prompt('Enter your password:');

    if (answer === password) {
      return 'Successfully logged in';
    }

    attempts++
  }

  return 'Denied Access';
}

function getLetterGrade() {
  var inputs = [];
  var numberGrades;

  function getNumberGrades() {
    while (true) {
      numberGrades = Number(prompt('How many grades'));
      if (numberGrades >= 0) {
        break;
      }
    }
  }

  function getInputs() {
    while (true) {
      answer = prompt('enter a grade');
      
      if (!isNaN(answer)) {
        inputs.push(Number(answer));
      }

      if (answer === null) {
        break;
      }

      if (inputs.length === numberGrades) {
        break;
      }
    }
  }

  function returnAverage() {
    sum = inputs.reduce(function(a, b) {
      return a + b;
    });

    return sum / numberGrades;
  }

  function getGrade() {
    getNumberGrades();
    getInputs();

    var average = returnAverage();
    var result;
    
    switch (true) {
      case average > 90:
        result = "A";
        break;
      case average > 80:
        result = "B";
        break;
      case average > 70:
        result = "C";
        break;
      case average > 60:
        result = "D";
        break;
      default:
        result = "A";
        break;
    }

    console.log(result);
  }
  
  getGrade();
}

// Create a function that computes the Greatest Common Divisor of two positive integers
// using Euclid's algorithm
// https://en.wikipedia.org/wiki/Greatest_common_divisor

function gcd(larger, smaller) {
  var remainder = 0;

  while (smaller > 0) {
    remainder = larger % smaller;

    larger = smaller;
    smaller = remainder;
  }
  
  return(larger);
}

// get the gcd of an array of numbers
// gcd( n1, n2, .... nx ) == gcd( n1, gcd( n2, gcd( ... , nx ) ) )
function gcd2(array) {
  array.sort((a, b)=>a-b); // ECMAscript 6 only

  var first = array.pop(); 

  while (array.length > 0) {
    next = array.pop();
    first = gcd(next, first);
  }

  return first;
}

// Write a function named checkGoldbach() that uses
// Goldbach's Conjecture to log every pair of primes
// that sum to the number supplied as an argument.
// The conjecture states that "you can express every even
// integer greater than 2 as the sum of two primes".
// The function takes as its only parameter, an integer n,
// and logs all combinations of two prime numbers whose sum
// is n. Log the prime pairs with the smaller number first.
// If n is odd or less than 4, your function should log null.

function checkGoldbach(n) {
  // initialize a result array
  result = [];

  // guard
  if (n % 2 !== 0 || n < 4) {
    return null;
  }

  // get an array of primes
  primez = primes(n);

  // build and array of prime pairs that add to n
  while (primez.length > 0) {
    m = primez.shift();

    // avoids duplicates by not checking m when greater than 50%
    if (m < n/2) {
      diff = n - m;

      // push into array when diff is prime
      if (isPrime(diff) && m !== diff) {
        result.push([m, diff]);
      }
    }
  }

  return String(result);
}

// Write a function that takes a number of rows as the
// argument n and logs a square of numbers and asterisks.
// For example, if n = 3, log the following pattern:
// 1**
// 12*
// 123

function pattern(n) {
  for (i = 1; i <= n; i++) {
    var line = '';

    for (j = 1; j <= i; j++) {
      line = line + String(j);
    }

    mLimit = n - i;

    for (m = 1; m <= mLimit; m++) {
      if (n < 10) {
        line = line + '*';
      } else if (n >= 10 && i < 10) {
        line = line + '*';
      } else if (n >= 10 && i >= 10) {
        line = line + '**';
      }
    }
    
    console.log(line);
  }
}

// substring functions
// write indexOf() and lastIndexOf() function that return the position of a substring
// lastIndexOf() returns the index of the last instance of the string

function anotherIndexOf(firstString, secondString) {
  var lengthFirst = firstString.length;
  var lengthSecond = secondString.length;
  var remainingChars;
  var testWord = '';

  if (lengthSecond > lengthFirst) {
    return -1;  // first can't contain second if it is shorter
  }

  for (i = 0; i < lengthFirst; i++) {
    remainingChars = lengthFirst - i;

    if (remainingChars < lengthSecond) {
      return -1; // 
    }

    for (j = 0; j < lengthSecond; j++) {
      testWord = testWord + firstString[i + j]; 
    }

    if (testWord === secondString) {
      return i;
    }

    testWord = '';
  }
}

function lastIndexOf(firstString, secondString) {
  var lengthFirst = firstString.length;
  var lengthSecond = secondString.length;
  var remainingChars;
  var testWord = '';
  var index;

  if (lengthSecond > lengthFirst) {
    return -1;  // first can't contain second if it is shorter
  }

  for (i = 0; i < lengthFirst; i++) {
    remainingChars = lengthFirst - i;

    if (remainingChars < lengthSecond && !i) {
      return -1;
    }

    for (j = 0; j < lengthSecond; j++) {
      testWord = testWord + firstString[i + j]; 
    }

    if (testWord === secondString) {
      index = i;
    }

    testWord = '';
  }

  return index;
}

function trimSpaces(str) {
  var len = str.length;
  var copy = false;
  var result = '';
  var finalResult = '';

  for (i = 0; i < len; i++) {
    if (str[i] === ' ' && !copy) {
      continue;
    }

    copy = true;
    result = result + str[i];
  }

  len = result.length - 1;
  copy = false;
  
  for (i = len; i >= 0; i--) {
    if (result[i] === ' ' && !copy) {
      continue;
    }

    copy = true;
    finalResult = result[i] + finalResult;
  }

  return finalResult;
}

function splitString(string, delimiter) {
  var tempString = '';
  var len = string.length;
  var character;

  if (delimiter === undefined) {
    return 'Error';
  }

  for (i = 0; i < len; i++) {
    character = string[i];
    if (character === delimiter) {
      console.log(tempString);
      tempString = '';
    } else if (delimiter === '') {
      console.log(character); 
    } else {
      tempString += character;
    }
  }
}

function repeat(string, times) {
  var result = '';

  if (times === 0) {
    result = '';
  } else if (isNaN(times) || times < 0) {
    result = undefined;
  } else {
    for (i = 0; i < times; i++) {
      result += string;
    }
  }

  return result;
}

function startsWith(string, searchString) {
  var lengthSearchString = searchString.length;

  for (i = 0; i < lengthSearchString; i++) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }

  return true;
}

function toLowerCase(string) {
  var character;
  var result = '';
  var converted;

  for (i = 0; i < string.length; i++) {
    character = string[i];
    
    if (character >= "A" && character <= "Z") {
      result += String.fromCharCode(character.charCodeAt(0) + 32);
    } else {
      result += character;
    }
  }

  return result;
}

function substr(string, start, length) {
  result = '';

  if (start < 0) {
    start = string.length + start;
  }

  for (i = start; i < start + length; i++) {
    if (string[i]) {
      result += string[i]
    } else {
      return result;
    }
  }

  return result;
}

function substring(string, start, end) {
  var length = string.length;
  var temp;

  if (start < 0 || isNaN(start)) {
    start = 0;
  } else if (start > length) {
    start = length;
  }

  if (end < 0 || (isNaN(end) && end !== undefined)) {
    end = 0;
  } 

  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }
  
  if (end >= length) {
    end = length;
  } else if (end === undefined) {
    end = length;
  }

  return substr(string, start, end - start);
}

function testSubstring() {
  var string = 'hello world';
  var result = ''

  if (substring(string, 2, 4) === "ll") {
    result += true + ' ';
  } else {
    result += false + ' ';
  }

  if (substring(string, 4, 2) === "ll") {
    result += true + ' ';
  } else {
    result += false + ' ';
  }

  if (substring(string, 2, 2) === "") {
    result += true + ' ';
  } else {
    result += false + ' ';
  }

  if (substring(string, 0, -1) === "") {
    result += true + ' ';
  } else {
    result += false + ' ';
  }

  if (substring(string, 2) === "llo world") {
    result += true + ' ';
  } else {
    result += false + ' ';
  }

  if (substring(string, 'a') === "hello world") {
    result += true + ' ';
  } else {
    result += false + ' ';
  }

  if (substring(string, 8, 20) === "rld") {
    result += true + ' ';
  } else {
    result += false + ' ';
  }

  if (substring(string, 20, 8) === "rld") {
    result += true + ' ';
  } else {
    result += false + ' ';
  }

  if (substring(string, 20, 21) === "") {
    result += true + ' ';
  } else {
    result += false + ' ';
  }

  if (substring(string, 20, 0) === "hello world") {
    result += true + ' ';
  } else {
    result += false + ' ';
  }

  return result;
}

function lastInArray(arr) {
  return arr[arr.length - 1];
}

function rollCall(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function arrayReverse(arr) {
  var result = [];
  index = 0;
  for (i = arr.length - 1; i >= 0; i--) {
    result[index] = arr[i];
    index++;
  }

  return result;
}

function arrayIndexOf(arr, value) {
  var result = -1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      result = i;
      break;
    }
  }

  return result;
}

function arrayJoin(arr) {
  var result = '';

  for (var i = 0; i < arr.length; i++) {
    result += arr[i].toString();
  }

  return result;
}

function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

function pop(arr) {
  result = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return result;
}

function unshift(arr, value) {
  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }

  arr[0] = value;
  return arr.length;
}

function shift(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  var first = array[0];

  for (var i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }

  arr.length = arr.length - 1;
  return first;
}

function myIndexOf(array, value) {
  var result = -1;

  for (var i = 0; i <= array.length; i++) {
    if (array[i] === value) {
      result = i;
      break;
    }
  }

  return result;
}

function lastIndexOf(array, value) {
  var result = -1
  var temp;

  for (var i = 0; i <= array.length; i++) {
    if (array[i] === value) {
      result = i;
    }
  }

  return result;
}

function slice(array, start, end) {
  start = start || 0;
  end = end || array.length;
  var result = [];
  var counter = 0;

  for (var i = start; i < end; i++) {
    result[counter] = array[i];
    counter++;
  }

  return result;
}

function splice(array, start, deleteCount) {
  var end = start + deleteCount;
  var newArray = slice(array, start, end)

  for (i = 0; i <= array.length; i++) {
    if (i < start) {
      array[i] = array[i]; 
    } else if (i >= start && i <= end) {
      array[i] = array[i + deleteCount];
    }
  }

  array.length = array.length - deleteCount;
  
  return newArray;
}

function join(array, string) {
  var result = '';
  string = string || ',';

  for (i = 0; i < array.length; i++) {
    result += array[i].toString();

    if (i < array.length - 1) {
      result += string;
    }
  }

  return result;
}

function concat(array1, array2){
  var result = [];

  for (var i = 0; i < array1.length; i++) {
    push(result, array1[i]);
  }

  for (var j = 0; j < array2.length; j++) {
    push(result, array2[j]);
  }

  return result;
}

function arraysEqual(arr1, arr2) {
  var result;
  var limit;

  if (arr1.length > arr2.length) {
    limit = arr1.length;
  } else if (arr2.length > arr1.length) {
    limit = arr2.length;
  } else {
    limit = arr1.length;
  }

  for (var i = 0; i < limit; i++) {
    if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
}

function arraysEqual2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function firstElementOf(arr) {
  return arr[0];
}

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

function nthElementOf(arr, index) {
  return arr[index];
}

function firstNOf(arr, count) {
  result = [];

  for (var i = 0; i < count; i++) {
    result.push(arr[i]);
  }

  return result;
}

function firstNOf2(arr, count) {
  return arr.slice(0, count);
}

function lastNOf(arr, count) {
  return arr.slice(arr.length - count, arr.length);
}

function endsOf(beginningArr, endArr) {
  var result = [];

  result.push(firstElementOf(beginningArr));
  result.push(lastElementOf(endArr));

  return result;

  // or:
  return [beginningArr[0], endArr[endArr.length -1]];
}

function oddElementsOf(arr) {
  result = [];

  for (var i = 1; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  return result;
}

function combinedArray(even, odd) {
  result = [];

  for (var i = 0; i < even.length; i++) {
    result.push(even[i]);
    result.push(odd[i]);
  }

  return result;
}

function originalAndReversed(array) {
  result = [];

  for (var i = 0; i < array.length; i++) {
    result.push(array[i]);
  }

  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
}

function mirrorArray(array) {
  return array.concat(array.slice().reverse());
}

function joinArray(array, joiner) {
  result = '';
  joiner = joiner || '';

  for (var i = 0; i < array.length; i++) {
    result += array[i].toString();
    if (i !== array.length -1) {
      result += joiner;
    }
  }

  return result;
}

function sortDescending(array) {
  return array.slice().sort(function(a, b) {
    return b - a;
  });
}

function matrixSums(array) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    result.push(array[i].reduce(function(a, b) {
      return a + b;
    }));
  }

  return result;
}

function uniqueElements(array) {
  var result = [];
  var len = array.length;

  for (var i = 0; i < len; i++) {
    if (array.lastIndexOf(array[i]) === i) {
      result.push(array[i]);
    }
  }

  return result;
}

function findMissingNumbers(array) {
  array.sort();
  var result = [];
  var diff;
  var value;

  for (var i = 0; i < array.length; i++) {
    value = array[i];
    diff = Math.abs(value - array[i + 1]); 

    if (diff > 1) {
      for (var j = 1; j < diff; j++) {
        result.push(value + j);
      }
    }
  }

  return result;
}


function whatever() {
  var myBoolean = true;
  var myString = 'hello';
  var myArray = [];
  var myOtherString = '';

  if (myBoolean) {
    console.log('Hello');
  }

  if (!myString) {
    console.log('World');
  }

  if (!!myArray) {
    console.log('World');
  }

  if (myOtherString || myArray) {
    console.log('!');
  }
}

function numbersMath() {
  function forceNumberInput(count) {
    var input;
    do {
      input = prompt('Enter the ' + count + ' number:');
    } while (isNaN(input) || input === '');

    return Number(input);
  }

  var number1 = forceNumberInput('first');
  var number2 = forceNumberInput('second');

  console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
  console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
  console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
  console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
  console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
  console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));
}

function stringLength() {
  var input;
  do {
    input = prompt('Enter a string:');
  } while (input === '');

  if (input === null) {
    console.log("User cancelled input");
  } else {
    console.log('There are ' + input.length + ' characters in "' + input + '"');
  }
}

function stringLength2() {
  var input;
  var newStr;

  do {
    input = prompt('Enter a string:');
  } while (input === '');

  if (input === null) {
    console.log('User cancelled input');
  } else {
    newStr = input.replace(' ', '');
    console.log('There are ' + newStr.length + ' non-space characters in "' + input + '"');
  }
}

function stringLengthAlpha() {
  var input;
  var newStr

  do {
    input = prompt('Enter a string');
  } while (input === '');

  if (input === null) {
    console.log('user canclled');
  } else {
    newStr = input.replace(/[^A-z]+/, '');
    console.log('There are ' + newStr.length + ' alpha characters in "' + input + '"');
  }
}

function stringToInteger(str) {
  var result = 0;
  str = str.split('').reverse().join('');

  for (i = 0; i < str.length; i += 1) {
    result += str.charAt(i) * Math.pow(10, i);
  }

  return result;
}

function stringToInteger2(str) {
  var numbers = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 
  };

  var result = 0;
  var number;

  str = str.split('').reverse().join('');

  for (i = 0; i < str.length; i +=1 ) {
    number = numbers[str[i]];
    result += number * Math.pow(10, i);
  }

  return result;
}

function stringToInteger3(str) {
  var numbers = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 
  }

  var result = 0;
  var number;

  str = str.split('').reverse().join('');

  for (i = 0; i < str.length; i += 1) {
    number = numbers[str[i]];

    if (str[i] === '-') {
      result = -result;
    } else if (!isNaN(number)) {
      result += number * Math.pow(10, i);
    }
  }

  return result;
}

function stringToSignedInteger(str) {
  var numbers = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 
  }

  var result = 0;
  var number;

  result = str.split('').reverse().map(function(chr, idx) {
    if (!isNaN(chr)) {
      return numbers[chr] * Math.pow(10, idx);
    } else {
      return null;
    }
  }).reduce(function(a, b) { return a + b; }, 0);

  if (str.slice(0, 1) === '-') {
    return -result;
  }

  return result;
}

function integerToString(int) {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var remainder;
  var result = '';

  do {
    remainder = int % 10;
    result = numbers[remainder] + result;
    int = Math.floor(int / 10);
  } while (int > 0);

  return result;
}

function signedIntegerToString(int) {
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var remainder;
  var result = '';
  var num = int;
  
  if (int < 0) {
    num = -int;
  }

  do {
    remainder = num % 10;
    result = numbers[remainder] + result;
    num = Math.floor(num / 10);
  } while (num > 0);

  if (int < 0) {
    return '-' + result;
  } else {
    return result;
  }
}

function arrayCopy1(arr) {
  result = [];

  for (var i = 0; i < arr.length; i += 1) {
    result.push(arr[i]);
  }

  return result;
}

function arrayCopy2(arr) {
  result = [];
  arr.forEach(function(e) {
    result.push(e);
  });
  return result;
}

function arrayCopy3(arr) {
  return arr.map(function(e){
    return e;
  });
}

function concat(array1, value) { 
 result = array1.slice();

  if (Array.isArray(value)) {
    value.forEach(function(e) {
      result.push(e);
    });
  } else {
    result.push(value);
  }

  return result;
}

function concat2(arr) {
  // guard clause when first argument is not an array 
  if (! Array.isArray(arr)) {
    return 'error: ' + arr + 'is not an array';
  }

  // create a result array from arr
  result = arr.slice();

  // parse the arguments into args array, removing first argument (the original array)
  args = Array.prototype.slice.call(arguments).splice(1);

  // parse the arguments
  for (var i = 0; i < args.length; i += 1) {
    arg = args[i];

    // push each value of arg when arg is an array, otherwise just push
    if (Array.isArray(arg)) {
      args[i].forEach(function(e) {
        result.push(e);
      });
    } else {
      result.push(arg);
    }
  }

  return result; 
}

function pop(arr) {
  // removes and returns the last value in an array
  // mutates the original array
  // returns undefined for an empty array
  
  var result;

  if (arr.length) {
    result = arr[arr.length - 1];
    arr.length = arr.length - 1;
  }

  return result;
}

function push(arr) {
  // adds a value(s) to the end of an array
  // returns the new array length
  
  // parse argumnts, remove first (the original array)
  args = Array.prototype.slice.call(arguments).splice(1);

  args.forEach(function(arg) {
    arr[arr.length] = arg;
  });

  return arr.length;
}

function reverse(valueToReverse) {
  var result;

  if (Array.isArray(valueToReverse)) {
    result = reverseArray(valueToReverse); 
  } else if (typeof valueToReverse === 'string') {
    result = reverseArray(valueToReverse.split('')).join(''); 
  }

  function reverseArray(arr) {
    var newArray = [];
    arr.forEach(function(e){
      newArray.unshift(e);
    });

    return newArray;
  }

  return result;
}

function shift(arr) {
  // removes and returns the first element of an array

  var result = arr[0];
  arr.splice(0, 1);
  return result;
}

function unshift(arr) {
  // add an element(s) to the first position in an array
  // returns the new length
  
  // parse arguments
  var args = Array.prototype.slice.call(arguments).splice(1);
  var arg;

  // loop the arguments in reverse order
  // adding each to the beginning of the array
  for (var o = args.length - 1; o >= 0; o -= 1){
    arg = args[o];

    // add an undefined element to the array by increasing its length
    arr.length = arr.length + 1;

    // loop the array in reverse, shifting each value to the right
    for (var i = arr.length - 1; i >= 0; i -= 1) {
      arr[i] = arr[i - 1];
    }

    // set the value in position 0 to the current argument
    arr[0] = arg;
  }

  return arr.length;
}

function slice(array, begin, end) {

}

function splice(array, start, deleteCount) {
  // splice method changes the contents of an array by removing and/or adding elements
  // returns an array containing the deleted elements
  // start: index at which to start changing the array
  //   if start is greater then length, start === length
  //   if start is negative, start that many elements from end of array
  // deleteCount: an optional parameter. number of elements to remove
  //   if 0, remove no elements, so make sure to specify elements to add
  //   if delete count is greater than remaining elements, then delete all to end
  //   if deleteCount is omitted deleteCount === arr.length - start
  // item1, item2.... optional elements to add to the array, beginning at start index
  
  // considered using this function to splice the arguments, but it creates recursive issues
  var newItems = Array.prototype.slice.call(arguments).splice(3);
  var arrayLength = array.length;
  var deletedItems = [];
  var itemsLength = newItems.length;
  var i;
  
  if (start > arrayLength) start = arrayLength; 
  if (start < 0) start = array.length - Math.abs(start);
  if (deleteCount === undefined) deleteCount = arrayLength - start;
  if (deleteCount > arrayLength - start) deleteCount = arrayLength - start;

  if (deleteCount) {
    // push the deleted items into the deletedItems array
    for (i = start; i <= (deleteCount + start - 1); i += 1){
      deletedItems.push(array[i]);
    }

    // displace elements up the array (toward beginning)
    for (i = 0; i < deleteCount; i += 1) {
      array[start + i] = array[start + i + deleteCount];      
    }

    // and adjust array length to remove elements at end
    array.length = arrayLength - deleteCount;
  }

  if (itemsLength) {
    for (i = 0; i < itemsLength; i += 1) {
      // displace elements down the array to make room
      array[array.length] = array[start + i];

      // insert new items from the arguments array
      array[start + i] = newItems[i];
    } 
  }

  return deletedItems;  
}

function slice(array, begin, end) {
  // requirements from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  // slice returns a shallow copy of a portion of an array into a new array object
  // selected from begin to end. slice does not mutate the original array.
  // begin: the zero-based index to begin 
  //   if begin is negative, remove that many elements offset from the end
  //   if begin is undefined, begin === 0
  // end: extract up to but not including the value at end
  //   if end is negative, end represents an offset from the end of the sequence
  //   if end is undefined, slice all the way to and including the end
  //   if end is greater then length end === length
  
  // set up variables
  var newArray = [];
  var arrayLength = array.length;
  var numberToExtract;
  
  if (begin === undefined) begin = 0;
  if (begin < 0)           begin = arrayLength - Math.abs(begin);
  if (end === undefined)   end = arrayLength;
  if (end < 0)             end = arrayLength - Math.abs(end);
  if (end > arrayLength)   end = arrayLength;

  numberToExtract = end - begin;

  for (i = 0; i < numberToExtract; i += 1) {
    newArray.push(array[begin + i]);
  }

  return newArray;
}

function areArraysEqual(array1, array2) {
  var result = true;
  if (array1.length !== array2.length) result = false;

  var arr1 = array1.concat().sort();
  var arr2 = array2.concat().sort();

  arr1.forEach(function(ele, idx){
    if (ele !== arr2[idx]) {
      result = false;
      return;
    }
  });
  
  return result;
}

function helloWorld() {
  var myObj = {}
  
  myObj[myFunc('greet')] = 'Hello, ';
  myObj[myFunc('planet')] = 'World!';

  function myFunc(prop) {
    return prop;
  };

  return myObj.greet + myObj.planet;
}

function penultimate(string) {
  arr = string.split(' ');
  return arr[arr.length - 2];
}

function timeOfDay(deltaMinutes) {
  time = new Date(2017, 0, 1, 0, 0 + deltaMinutes, 0);
  hours = time.getHours();
  minutes = time.getMinutes();

  function convertTime(number) {
    var result;
    num = number.toString();
    return num.length === 1 ? '0' + num : num;
  }

  return convertTime(hours) + ':' + convertTime(minutes);
}

function afterMidnight(timeStr) {
  var time = new Date('Jan 1 2017 ' + timeStr);
  var midnight = new Date('Jan 1 2017 00:00');
  return Math.abs((time - midnight) / 60000);
}

function beforeMidnight(timeStr) {
  var time = new Date('Jan 1 2017 ' + timeStr);
  var midnight;

  if (timeStr === '00:00') {
    midnight = new Date('Jan 1 2017 00:00');
  } else {
    midnight = new Date('Jan 1 2017 24:00');
  }

  return Math.abs((midnight - time) / 60000);
}

function timesTable() {
  var row;
  var i;
  var j;

  function padLeft(num) {
    len = String(num).length;

    if (len <= 1) {
      return '  ' + num;
    } else if (len === 2) {
      return ' ' + num;
    } else {
      return num;
    }
  }

  for (i = 1; i <= 10; i++) {
    row = '';
    for (j = 1; j <= 10; j++) {
      row += padLeft(i * j) + ' ';
    }
    console.log(row + '\n');
  }
}

function getSelectedColumns(numbers, cols) {
  //var result [];

  for (var i = 0, length = numbers.length; i < length; i++) {
    for (var j = 0, length = cols.length; j < length; j++) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
      }
    }

  return result;
}

function summation(start, count) {
  return Array.apply(0, Array(count))
    .map(function (element, index) { 
    return index + start;  
  }).reduce(function(a, b){ return a + b; });
}

function getSelectedColumns(numbers, cols) {
  var result = [];
  for (let i = 0, length = numbers.length; i < length; i++) {
    console.log('Outer length: ' + length);
    for (let j = 0, length = cols.length; j < length; j++) {
      console.log('Inner length: ' + length);
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

function invoiceTotal() {
  var total = 0;

  var args = Array.prototype.slice.call(arguments);

  total = args.reduce(function(a, b) {
    return a + b;
  })

  return total;
}

function invoiceTotal2() {
  var total = 0;

  total = arguments.reduce(function(a, b) {
    return a + b;
  })

  return total;
}

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (quantity <= 0) {
    quantity = 1;
  } else {
    quantity = quantity || 1;
  }

  if (discount < 0) {
    // not really sure a negative value should be 0. 
    // perhaps the program should return an error?
    discount = 0;    
  } else {
    discount = discount || 0;
  }

  if (serviceCharge <= 0 ) {
    serviceCharge = 0;
  } else {
    serviceCharge = serviceCharge || 0.1;
  }

  if (tax <= 0) {
    tax = 0;
  } else {
    tax = tax || 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

function objectsEqual(obj1, obj2) {
  var length1 = Object.keys(obj1).length;
  var length2 = Object.keys(obj2).length;

  if (length1 !== length2) {
    return false;
  }

  for (prop in obj1) {
    if (obj1.prop !== obj2.prop) return false;
  }

  return true;
}

function makeDoubler(caller) {
  return function(number) {
    console.log('This function was called by ' + caller + '.');
    return number + number;
  };
}

function ticketsOrig(peopleInLine){
  var bank = {25: 0, 50: 0, 100: 0};
  var price = 25;
  var bill;
  var change;
  var result = 'YES';
  
  for (var i = 0; i < peopleInLine.length; i += 1) {
    bill = peopleInLine[i];
    change = bill - price;
    
    if (change === 0) {
      // do nothing
    } else if (change === 25) {
      if (bank[25] === 0) {
        result = 'NO'
        break;
      } else {
        bank[25] -= 1;
      }
    } else if (change === 75) {
      if (bank[25] > 0 && bank[50] > 0) {
        bank[25] -= 1;
        bank[50] -= 1;
      } else if (bank[25] >= 3) {
        bank[25] -= 3;
      } else {
        result = 'NO';
        break;
      }
    }
    
    bank[bill] += 1;
  };
  
  return result;  
}

function tickets(arr) {
    let bank = {
        25: 0,
        50: 0,
        100: 0,
    };

    for (let i = 0; i < arr.length; i++) {
        let bill = arr[i]
        if (bill == 25) {
          bank[25]++;
        } else {
          bank[bill]++;
          hasChange = checkBank(bank, bill);
          if (!hasChange) return 'NO';
        }
    }

    return 'YES';
}

function checkBank (bank, val) {
    if (val === 50)  {
        return bank[25]--;
    } else if (bank[25] && bank[50]) {
        bank[25]--;
        bank[50]--;
        return true;
    } else if (bank[25] > 2) {
        bank[25] -= 3;
        return true;
    }
    return 0;
}

function digPow(n, p){
  var x = 0;
  var array = [];
  var k;
  var result = 0;

  array = String(n).split('').map(function(str){
    return Number(str); 
  });
  
  array.forEach(function(ele, idx) {
    result += Math.pow(ele, p + idx); 
  })
  
  k = result / n;
  
  if (k === Math.floor(k)) {
    return k;
  } else {
    return -1;
  }
}

function duplicateEncode(word){
    return word.toLowerCase()
               .split('')
               .map(function(chr, idx, arr){
                 if (idx === arr.indexOf(chr) && idx === arr.lastIndexOf(chr)) {
                   return '(';
                 } else {
                   return ')';
                 }
               })
               .join('');
}

function addingShifted (arrayOfArrays, shift) {
  var result = [];
  var lengthArray = arrayOfArrays[0].length;
  var numberArrays = arrayOfArrays.length;
  var totalLength = lengthArray + ((numberArrays - 1) * shift);
  var shifted = shift;
  var sum;
  var value;
  
  for (var i = 1; i < numberArrays; i += 1) {
    array = arrayOfArrays[i];
    for (var j = 0; j < array.length + shift; j += 1) {
      if (j < shifted) array.unshift(0);
    };
    shifted += shift;
  };
  
  for (i = 0; i < totalLength; i += 1) {
    sum = 0;
    for (j = 0; j < numberArrays; j += 1) {
      array = arrayOfArrays[j];
      value = array[i] || 0;
      sum = sum + value;
    };
    result.push(sum);
  };
  
  return result;
}

function logOdd() {
  var num;
  var stop;
  var range = getRange();

  var start = range.start;
  var end = range.end;

  if (start === 'cancelled' || end === 'cancelled') {
    console.log('user cancelled input');
    return;
  }

  if (start >= end) {
    console.log('input error: start greater than end');
    return;
  }

  num = Number(start);
  stop = Number(end);

  do {
    if (num % 2 !== 0) console.log(num);
    num += 1;
  } while (num < stop);
}

function getRange() {
  var start;
  var end;

  function isNotInteger(n) {
    !Number.isInteger(Number(n));
  }

  function getInput(type) {
    do {
      num = prompt('Enter ' + type + ' (integer)');
      if (num === null) break;
    } while (isNotInteger(num));

    return num || 'cancelled';
  }

  start = getInput('Start');

  if (start !== 'cancelled') end = getInput('End');

  return {
    start: start,
    end: end,
  }
}

function mazeRunner(maze, directions) {
  // in: two d maze of numbers, array of directions
  // out: string, success = Finish, wall = Dead, out of moves = Lost
  // alg:
  //   find the start coordinate
  //   loop the array of directions 
  //     N change index to row-1, col
  //     W change index to row, col-1
  //     E change index to row, col+1
  //     S change index to row+1, col
  //     evaluate the new location 0: safe, 1: Dead, 2: start, 3: Finish
  //     if not Finish and or at end of array then return Lost
  console.log(directions);
  
  function findCoordinates(type) {
    var result;
    
    for (var row = 0; row < maze.length; row += 1) {
      col = maze[row].indexOf(type);
      if (col >= 0) {
        result = [row, col];
        break;
      };
    };
    
    return result;
  }
  
  function move(direction, coordinate) {
    // return a new coordinate
    var result;
    
    switch (direction) {
      case "N":
        result = [coordinate[0] - 1, coordinate[1]];
        break;
      case "W":
        result = [coordinate[0], coordinate[1] - 1];
        break;
      case "E":
        result = [coordinate[0], coordinate[1] + 1];
        break;
      case "S":
        result = [coordinate[0] + 1, coordinate[1]];
        break;
    }
    
    return result;
  }
  
  function checkPosition(coordinate) {
    // evaluate the new location 0: safe, 1: Dead, 2: safe, 3: Finish
    if (maze[coordinate[0]] === undefined) return 'Dead';
    
    switch (maze[coordinate[0]][coordinate[1]]) {
      case 1:
        return "Dead";
      case 3:
        return "Finish";
      case undefined:
        return "Dead";
      default:
        return "Safe";
    }
  }
  
  function navigate(directions) {
    var currentIndex = findCoordinates(2);
    var endIndex = findCoordinates(3);
    var result = 'Lost';
    var direction;
    
    for (var i = 0; i < directions.length; i += 1) {
      direction = directions[i];
      currentIndex = move(direction, currentIndex);
      result = checkPosition(currentIndex);
      if (result === 'Dead' || result === 'Finish') {
        break;
      }
    }
    
    return result;
  }

  return navigate(directions);
}

function mazeRunner2(maze, directions) {
  var size=maze.length;
  var i=-1;
  var j=-1;
  var di={N:-1,S:1,E:0,W:0};
  var dj={W:-1,E:1,N:0,S:0};
  
  while(!maze[++i].includes(2));
  while(maze[i][++j]!=2);
  
  for(var s of directions){
    i+=di[s],j+=dj[s]
    if(i<0||j<0||i>=size||j>=size||maze[i][j]==1) return "Dead"
    if(maze[i][j]==3) return "Finish"
  }
  
  return "Lost"
}

function filterArray(array, callback) {
  return array.filter(callback);
}

function isOdd(num) {
  return num % 2 !== 0;
}

function isEven(num) {
  return num % 2 === 0;
}

function myForEach(array, func) {
  var length = array.length;

  for (var i = 0; i < length; i += 1) {
    func(array[i]);
  }
}

var min = Infinity;
var max = -Infinity;

var getMinMax = function(value) {

  if (value >= max) {
    max = value;
  }

  if (value <= min) {
    min = value;
  }

  return [min, max];
};

function myFilter(array, func) {
  var newArray = [];

  for (var i = 0; i < array.length; i += 1) {
    if (func(array[i])) newArray.push(array[i]);
  }

  return newArray;
}

var isPythgoreanTriple = function(triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

var isMultipleOfThreeOrFive = function(value) {
  return value % 5 === 0 || value % 3 ===0;
};

function myMap(array, func) {
  var newArray = [];

  array.forEach(function(ele) {
    newArray.push(func(ele));
  });

  return newArray;
}

var addTwo = function(value) {
  return value + 2;
}

function getBooksTitle(books) {
  return myMap(books, getTitle);
}

var books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: 'Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics',
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

var getTitle = function(book) {
  return book['title'];
}

getBooksTitle(books);

function add(previousValue, element, array) {
  var sum = previousValue + element;
  console.log(previousValue, element, sum);
  return sum;
}

function myReduce(array, func, initial) {
  var index;
  initial === undefined ? index = 1 : index = 0;
  var result = initial || array[0];

  for (var i = index; i < array.length; i += 1) {
    result = func(result, array[i]);
  }

  return result;
}

var smallest = function(result, value) {
  return result <= value ? result : value;
}

var sum = function(result, value) {
  return result + value;
}

var longest = function(result, word) {
  return result.length >= word.length ? result : word;
}

function longestWord(words) {
  return myReduce(words, longest);
}

function myOwnEvery(array, func) {
  var result = true;

  for (var i = 0; i < array.length; i += 1) {
    if (!func(array[i])) return false;
  }

  return result;
}

var isAString = function(value) {
  return typeof value === 'string';
}

//console.log(myOwnEvery(['a', 'a234', 1], isAString));

var isANumber = function(value) {
  return typeof value === 'number';
}

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

//console.log(areAllNumbers([1, 5, 6, 7, 1]));

function myOwnSome(array, func) {
  var result = false;

  for (var i = 0; i < array.length; i += 1) {
    if (func(array[i])) return true;
  }

  return result;
}

function areSomeNumbers(array) {
  return myOwnSome(array, isANumber);
}

//console.log(areSomeNumbers([null,"1234"]));

var studentGrades = [
  { name: 'StudentA', grade: 100 },
  { name: 'StudentB', grade: 92, },
  { name: 'StudentC', grade: 91.8, },
  { name: 'StudentD', grade: 95.23, },
  { name: 'StudentE', grade: 91.81, },
];

var compareGrades = function(student1, student2) {
  var result = 0;
  student1.grade < student2.grade ? result = 1 : result = -1;
  return result;
}

//console.log(studentGrades.sort(compareGrades));

var names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

function mostCommonFirstLetter(names) {
  var obj = {};

  letterCounts = names.map(function(name) {
    return name[0];
  }).reduce(function(obj, letter) {
    obj[letter] = obj[letter] || 0;
    obj[letter] += 1;
    return obj;
  }, obj);

  return Object.keys(letterCounts).reduce(function(a, b) {
    return letterCounts[a] >= letterCounts[b] ? a : b;
  });
}

function sortNumbers(numbers) {
  return numbers.sort(function(a, b) {
    return;
  });
}

function doubleObjectValues(obj) {
  var newObject = {};
  var keys = Object.keys(obj);
  keys.forEach(function(ele) {
    newObject[ele] = obj[ele] * 2;
  });
  return newObject;
}

// console.log(doubleObjectValues({a: 1, b: 2, c: 3}));

function keepEvenValues(obj) {
  var newObject = {};
  var keys = Object.keys(obj);
  keys.reduce(function(newObject, key) {
    if (obj[key] % 2 === 0) {
     newObject[key] = obj[key];
    }
    return newObject;
  }, newObject);
  return newObject;
}

//console.log(keepEvenValues({a: 1, b: 2, c: 3, d: 4}));

function getTotalFromInvoice(invoice) {
  return Object.keys(invoice).reduce(function(acc, key) {
    return acc + invoice[key];
  }, 0)
}

//console.log(getTotalFromInvoice({phone: 10000, internet: 8000, tax: 3000}));

function totalArea(rectangles) {
  return rectangles.map(function(rectangle) {return rectangle[0] * rectangle[1];})
                   .reduce(function(totalArea, area) {
                     return totalArea + area;
                   }, 0);
}

//var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
//console.log(totalArea(rectangles));

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

var isSquare = function(rectangle) {
  return rectangle[0] === rectangle[1];
}

var getAreas = function(rectangle) {
  return rectangle[0] * rectangle[1];
}

var getSum = function(a, b) {
  return a + b;
}

function totalSquareArea(rectangles) {
  return rectangles.filter(isSquare).map(getAreas).reduce(getSum, 0);
}

//console.log(totalSquareArea(rectangles));

var newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

// generate an Array of Objects that contain only the id and title key/value pairs. 
// retain releases with both id and title data
// return an array of objects with the id and title of each

var hasIdAndTitle = function(release) {
  return release.id && release.title;
}

var idAndTitle = function(release) {
  return {id: release.id, title: release.title};
}

function processReleaseData(releases) {
  return releases.filter(hasIdAndTitle).map(idAndTitle);
};

//console.log(processReleaseData(newReleases));

function convertToDecimal(number, base) {
  return number.split('').reverse()
               .reduce(function(acc, value, index) {
                 return acc + value * base ** index;
               }, 0);
}

//console.log(convertToDecimal('1', 8));
//console.log(convertToDecimal('10', 8));
//console.log(convertToDecimal('130', 8));
//console.log(convertToDecimal('17', 8));
//console.log(convertToDecimal('2047', 8));
//console.log(convertToDecimal('011', 8));

function anagram(word, wordList) {
  return wordList.filter(function(wordFromList) {
    return areAnagrams(word, wordFromList);
  });
}

function areAnagrams(word1, word2) {
  return sortWord(word1) === sortWord(word2);
}

function sortWord(word) {
  return word.split('').sort().join('');
}

//console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));
//console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(bands) {
  return bands.map(function(band) {
    name = band.name.split(' ').map(function(word) {
      word = word.split('').filter(function(character) {
        return character !== '.';
      }).join('');

      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');

    return {name: name, country: "Canada", active: band.active};
  });
}

//console.log(processBands(bands));

function processBands2(bands) {
  bands.map(function(band) {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
  });
}

function updateCountry(band) {
  band.country = 'Canada';
}

function capitalizeBandName(band) {
  band.name = band.name.split(' ').map(function(word){
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

function removeDotsInBandName(band) {
  band.name = band.name.split('').filter(function(character) {
    return character !== '.';
  }).join('');
}

//processBands2(bands);
//console.log(bands);

function processBands3(bands) {
  var processedBands = bands.map(function(band) {
    name = capitalizePhrase(band.name);
    name = removeDotsInString(name);

    return {
      name: name,
      country: 'Canada',
      active: band.active,
    };
  });

  return processedBands;
}

function capitalizePhrase(phrase) {
  return phrase.split(' ').map(function(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' '); 
}

function removeDotsInString(string) {
  return string.split('').filter(function(character) {
    return character !== '.';
  }).join('');
}

//console.log(processBands3(bands));

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

longestPalindrome = function(str){
  var length = str.length;
  var result = 0;
 
  for (var i = length; i >= 1; i -= 1) {
    for (var j = 0; j + i <= length; j += 1) {
      var string = str.slice(j, j + i + 1);

      if (isPalindrome(string)) {
        return string.length;
      };
    };
  };
 
  return result;
}

var fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

var position = [0,0];

moves = ["right","right","right","right","right","right","right","right"];

function streetFighterSelection(fighters, position, moves) {
  var result = [];
  if (moves.length === 0) return [];

  for (var i = 0; i < moves.length; i += 1) {

    if (moves[i] === 'up') {
      if (position[0] === 1) position[0] -= 1;
    } else if (moves[i] === 'down') {
      if (position[0] === 0) position[0] = 1;
    } else if (moves[i] === 'left') {
      if (position[1] > 0) {
        position[1] -= 1;
      } else if (position[1] === 0 && i === 0) {
        position[1] = 5;
      } else if (position[1] === 0 && i !== 0) {
        position[1] = 5;
      }
    } else if (moves[i] === 'right') {
      if (position[1] < 5) {
        position[1] += 1;
      } else if (position[1] === 5) {
        position[1] = 0;
      }
    };  

    result.push(fighters[position[0]][position[1]]);
  };
  
  return result;
}

//console.log(streetFighterSelection(fighters, position, moves));

var text = 'The quick brown fox jumps over the lazy dog.';

function capitalize(words) {
  return words.split(' ').map(function(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

//console.log(capitalize(text));

function countWordInText(word, text) {
  text = text.toLowerCase('').split('').filter(function(character) {});

  return text.split(' ').filter(function(werd) {
    return werd === word;
  }).length;
}

//console.log(countWordInText('the', text));
//console.log(countWordInText('dog', text));

function greet() {
  var name = prompt('What is your name?');
  var greet = 'Hello ';

  if (name[name.length - 1] === '!') {
    greet = greet.toUpperCase();
    name = name.toUpperCase()
  }

  console.log(greet + name);
}

//return the total number of smiling faces in the array
function countSmileys(arr) {
  return arr.reduce(function(count, smiley) {
    return smiley.match(/[:;][~-]?[)D]/) ? ++count : count;  
  }, 0);
}

//console.log(countSmileys([':D',':~)',';~D',':)']), 4);

function isUrl(text) {
  text = text.toLowerCase();
  return text.match(/^https*:\/\/\w+\.[a-z]{3}$/) ? true : false;
}

function getFields(text) {

}

function reverse(string) {
  return string.split('').reverse().join('');
}

function acronym(string) {
  var result;
  words = string.replace(/-/g, ' ').split(' ');
  
  letters = words.map(function(word) {
    return word[0];
  });
  
  return letters.join('').toUpperCase();
}

//console.log( acronym('Portable Network Graphics') );
//console.log( acronym('First In, First Out') );
//console.log( acronym('PHP: HyperText Preprocessor') );
//console.log( acronym('Complementary metal-oxide semiconductor') );
//console.log( acronym('Hyper-text Markup Language') );

function isValidEmail(email) {
  var regex = /^[a-z\d]+@([a-z]+\.)+[a-z]+$/i;
  return email.match(regex) ? true : false;
}

//console.log(isValidEmail('Foo@baz.com.ph'));
//console.log(isValidEmail('Foo@mx.baz.com.ph'));
//console.log(isValidEmail('foo@baz.com')); 
//console.log(isValidEmail('foo@baz.ph'));
//console.log(isValidEmail('HELLO123@baz'));
//console.log(isValidEmail('foo.bar@baz.to'));
//console.log(isValidEmail('foo@baz.'));
//console.log(isValidEmail('foo_bat@baz'));
//console.log(isValidEmail('foo@bar.a12'));
//console.log(isValidEmail('foo_bar@baz.com'));
//console.log(isValidEmail('foo@bar.....com'));  

function isBalanced(string) {
  var array = string.split('');
  var result = 0;

  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === '(') result += 1;
    if (array[i] === ')') result -=1;
    if (result < 0) {
      return false
    }
  }

  return result === 0 ? true : false;
}

//console.log(isBalanced('What (is) this?'));        // true
//console.log(isBalanced('((What) (is this))?'));    // true
//console.log(isBalanced('Hey!'));                   // true
//console.log(isBalanced('What is) this?'));         // false
//console.log(isBalanced('What (is this?'));         // false
//console.log(isBalanced('((What)) (is this))?'));   // false
//console.log(isBalanced(')Hey!('));                 // false
//console.log(isBalanced('What ((is))) up('));       // false

var textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

var positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
var negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  // in: text sample, lists of positive and negative words
  // out: count of positive words, list of positive words
  // out: count of negative words, list of negative words
  // alg:
  // - remove non-letter characers with replace - convert to space
  // - split string on space
  // - loop array of words
  //   - push arr positive if indexOf returns value >= 0 against pos words
  //   - push arr negative if indexOf returns value >= 0 against neg words
  // - log result: count and array. 
  
  var posWords = [];
  var negWords = [];

  words = text.toLowerCase().replace(/[!-,\s\.\[\]\?:]/g, ' ').split(' ');

  words.forEach(function(word) {
    if (positiveWords.indexOf(word) >= 0) posWords.push(word);
    if (negativeWords.indexOf(word) >= 0) negWords.push(word);
  });

  console.log('There are ' + posWords.length + ' positive words');
  console.log('Positive sentiments: ' + posWords.toString());
  console.log('There are ' + negWords.length + ' negative words');
  console.log('Negative sentiments: ' + negWords.toString());
}

//sentiment(textExcerpt);


function sentiment2(text) {
  var positiveRegex = /(fortunes?)|(dream(s|t|ed)?)|(love(s|ed)?)|(respect(s|ed)?)|(patien(ce|t)?)|(devout(ly)?)|(noble)|(resolut(e|ion)?)/gi;

  var negativeRegex = /(die(s|d)?)|(heartached?)|(death)|(despise(s|d)?)|(scorn(s|ed)?)|(weary)|(troubles?)|(oppress(es|ed|or)?)/gi;

  var posWords = text.match(positiveRegex);
  var negWords = text.match(negativeRegex);

  console.log('There are ' + posWords.length + ' positive words');
  console.log('Positive sentiments: ' + posWords.toString());
  console.log('There are ' + negWords.length + ' negative words');
  console.log('Negative sentiments: ' + negWords.toString());
}

//sentiment2(textExcerpt);

function mailCount(emailData) {
  // in: email data string
  // out: count of emails
  // out: date range of emails
  // alg:
  // - replace whitespace with space
  // - split the string on ##||## to get count of emails
  // - 

  emailData.replace(/\n/, '');
  var emailArray = emailData.replace(/\s/g, ' ').split('##||##');
  var emailCount = emailArray.length;

  dates = emailArray.map(function(email) {
    date = email.match(/Date: \d\d-\d\d-\d\d\d\d#\/#/g);
    date = date[0].replace('Date: ', '').replace('#/#', '');
    return date;
  });

  dates = dates.map(function(date) {
    return new Date(date);
  }).sort();

  console.log(dates);

  var dateFirst = new Date(dates[0]);
  var dateLast = new Date(dates[dates.length - 1]);

  console.log('Count of Email: ' + emailCount);
  console.log('Date Range: ' + dateFirst.toDateString() + ' - ' + dateLast.toDateString());
}

//mailCount(emailData);

var longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function longestSentence(text) {
  var longestSentence;
  var longestLength = 0;
  var sentences = text.split(/[.!\?]+/);

  sentences.forEach(function(sentence) {
    var length = sentence.trim().split(' ').length;
    if (length > longestLength) {
      longestLength = length;
      longestSentence = sentence.trim();
    }
  });

  console.log(longestSentence);
  console.log('The longest sentence has ' + longestLength + ' words.');
}

//longestSentence(longText);

function compareVersions(version1, version2) {
  // in: two version numbers - strings
  // out: 1 if v1 > v2
  //      -1 if v1 < v2
  //      0 if v1 = v2
  //      null if input illegal (just numbers and .)
  // alg:
  //   use regex to reject bad input
  //   split each numbers on .
  //   loop from 0 to longer length - 1
  //     compare the numbers at the index of the iterator
  //     if there is no number at the index then the value is 0
  //     if v1 < v2 return -1
  //     if v1 > v2 return +1
  //     if v1 = v2 keep looping 
  //     return 0 at final line
 
  var length, num1, num2;
  var validInput = /^\d+(\.?\d+)*$/;

  if (!validInput.test(version1) || !validInput.test(version2)) {
    return null;
  };

  version1 = version1.split('.').map(Number);
  version2 = version2.split('.').map(Number);

  // 1.2.2.0  [1,2,2,0]
  // 1.3      [1,3, undefined, undefined]

  length = Math.max(version1.length, version2.length);

  for (var i = 0; i < length; i += 1) {
    num1 = version1[i] || 0;
    num2 = version2[i] || 0;

    if (num1 < num2) {
      return -1;
    } else if ( num1 > num2) {
      return 1;
    }
  }

  return 0;
}

//console.log(compareVersions('1.2', '1.2.0'))       // 0 
//console.log(compareVersions('1.2', '1.2.0.0'))     // 0 
//console.log(compareVersions('0.1', '1'))           // -1
//console.log(compareVersions('1.0', '1.1'))         // -1
//console.log(compareVersions('1.1', '1.2'))         // -1
//console.log(compareVersions('1.2', '1.2.0.1'))     // -1
//console.log(compareVersions('1.18.2', '13.37'))    // -1
//console.log(compareVersions('1', '0.1'))           // 1
//console.log(compareVersions('1.18.2', '1.2.0.0'))  // 1
//console.log(compareVersions('badinput', '1.2.1'))  // null
//console.log(compareVersions('1.2.1', 'badinput'))  // null
//console.log(compareVersions('1.', '1.1'))  // null
//console.log(compareVersions('.2.1', '1.2'))  // null

function cleanPhoneNumbers(phoneNumber) {
  // ignore any non number characters
  // if length < 10 then bad number
  // if lenght = 10 then good number
  // if length = 11 and num[0] = 1, trim the 1 slice the number starting at index 1
  // if length = 11 and num[0] <> 1, then bad number 
  // if length > 11, bad number
  // return 000000000 if bad number
  // in: string
  // out: 10 digit number or 0000000000
  // datastructure: string, no need to work with arrays
  // alg: 
  //   clean input with regex to remove non number characters
  //   return 0000000000 for len>11 or len=11 && char 1 = 1 or len < 10
  //   strip a leading 1 if len 11
  
  phoneNumber = phoneNumber.replace(/[^\d]/g, '');
  var len = phoneNumber.length;

  if (len < 10 || len > 11 || ( len === 11 && phoneNumber[0] !== '1' )) {
    return '0000000000';
  };

  return len === 11 && phoneNumber[0] === '1' ? phoneNumber.slice(1) : phoneNumber; 
}

//console.log(cleanPhoneNumbers('234-234-2344'));   // 23423423444
//console.log(cleanPhoneNumbers('1-234-234-2344'));   // 23423423444
//console.log(cleanPhoneNumbers('234-2344'));   // 0000000000
//console.log(cleanPhoneNumbers('12-234-234-2344'));   // 0000000000
//console.log(cleanPhoneNumbers('bad input'));   // 0000000000
//console.log(cleanPhoneNumbers('2-234-234-2344'));   // 0000000000
//console.log(cleanPhoneNumbers('1-(234)-234-2344 cell'));   // 2342342344

function luhnCheckSum(number) {
  // in: number expressed as a string
  // out: true or false if the number is valid
  // rules: 
  //   iterate from right
  //   double each digit
  //   if digit greater than 10, subtract 9
  //   sum the digits
  //   return true if sum % 10 = 0, else return false
  // alg:
  //   clean the input using regex to remove non-number chars
  //   split input into array
  //   map array parsing each digit
  //     if len is odd, then only process odd indexes
  //     if len is even, then only prcess even indexes
  //     return double the number, subtract 9 if > 10
  //     return number if not process
  //   reduce the result, summing
  //   return true if sum % 10 === 0 else false 
  
  var numArray = number.replace(/\D/g, '').split('').reverse().map(Number);

  var checkDigit = numArray.reduce(function(sum, num, idx) {
    if (idx % 2 === 1) {
      return num * 2 >= 10 ? sum + (num * 2 - 9) : sum + num * 2;
    } else {
      return sum + num;
    }
  }, 0);

  return checkDigit % 10 === 0 ? true : false; 
}

//console.log(luhnCheckSum('2323 2005 7766 3554'));  // true
//console.log(luhnCheckSum('visa: 2323 2005 7766 3554'));  // true
//console.log(luhnCheckSum('8763'));  // true
//console.log(luhnCheckSum('11114'));  // true
//console.log(luhnCheckSum('2323 2005 7766 35547'));  // false
//console.log(luhnCheckSum('2323 2005 7766 3551'));  // false
//console.log(luhnCheckSum('1111'));  // false

// write a function to make the number valid per the luhn formula
// and return the original number plus that digit.  This should give
// 2323 2005 7766 3554 in response to 2323 2005 7766 355
// in: number, potentially valid, that need just one more digit
// out: luhn-valid number with the additional digit added
// alg1: 
//       if valid return unchanged
//       if not valid loop 0-9 and add to the end of the provided number, then test with luhnCheckSum();

// REFACTOR to consider a different algorithm
// try summing the numbers and then seeing what the difference is
// to get it to a number that is divisible by 10
function makeLuhnValid(number) {
  if (luhnCheckSum(number)) {
    return number;
  }
  
  var newNumber;

  for (var i = 0; i < 10; i += 1) {
    if (luhnCheckSum(number + i.toString())) {
      break;
    }
  }

  return number + i.toString();
}

//console.log(makeLuhnValid('2323 2005 7766 355'));  // 2323 2005 7766 3554
//console.log(makeLuhnValid('876'));   // 8673
//console.log(makeLuhnValid('1111'));   // 11114
//console.log(makeLuhnValid('34534562'));   // ??

//in: string(word)
//out: true or false if the word can be spelled from the available blocks
//rules: use each block once, can only use one letter from each block
//alg:
//  lowercase the string
//  split into array of letters
//  iterate over array of letters
//    loop array of objects
//      if obj.letters.includes(letter)
//        if obj.status === true then return false
//          else set object.status = true(used)
//  end loop
//  return true
// REFACTOR: create array of pairs, then just delete the pair if we use it
// use Array.prototype.some() and includes() to check the array. use splice to remove the element
// remember to abstract certain parts to a function
//
// new algorithm:
//   initialize usedLetters array
//   initialize blocks array
//   lowercase the string
//   split into array of letters
//   for loop the array of letters
//     if usedLetters includes(letter) return false
//     for loop the array of blocks
//       if block includes(letter)
//         push block to usedLetters, one letter at a time
//         break
//     end blockloop
//     splice remove block from array of blocks(optional, improves processing speed, more reflective of reality)
//   end letter loop
//   return true


function isBlockWord(word) {
  var usedLetters = [];
  var blocks = [['b', 'o'], ['x', 'k'], ['d', 'q'], ['c', 'p'], ['n', 'a'],
                ['g', 't'], ['r', 'e'], ['f', 's'], ['j', 'w'], ['h', 'u'],
                ['v', 'i'], ['l', 'y'], ['z', 'm']]; 

  var letters = word.toLowerCase().split('');
  var letter;
  var block;

  function chooseBlocks() {
    for (var j = 0; j < blocks.length; j += 1) {
      block = blocks[j];
      if (block.includes(letter)) {
        usedLetters.push(block[0], block[1]);
        blocks.splice(j, 1);
        break;
      };
    };
  }
  
  for (var i = 0; i < letters.length; i += 1) {
    letter = letters[i];

    if (usedLetters.includes(letter)){
      return false;
    };

    chooseBlocks();
  };

  return true;
}

//console.log(isBlockWord('modulate'));  // true
//console.log(isBlockWord('batch'));  // true
//console.log(isBlockWord('BaTcH'));  // true
//console.log(isBlockWord('botch'));  // false B/O
//console.log(isBlockWord('coffee')); // false

// you are given a list of numbers in a shorthand range notation where only the significant part of the next number is written because we know the numbers are always increasing(ex. 1,2,7,2,4,1 represents 1,3,7,12,14,21). Some people use different separators for their ranges (ex. 1-3, 1-2 or 1:3, 1:2 or 1..3, 1..2 represent the same numbers 1,2,3,11,12) range limits are always inclusive.  Goal: return a list of the complete numbers.  
//
// Separators: -  :  .. 
// problem:
//   - range notation is used to denote ranges of consecutive numbers
//   - ranges can be delimited by - or : or ..
//   - ranges can be chained as in 1:3:5 would represent 1,2,3,4,5
//   - ranges are always inclusive
//   - range is all the numbers from lower to upper bounds
//   - a number series can have a combination of range notations
//   - the range notation always indicates a list of numbers that are increasing
//   - the next number is the smallest possible number greater than previous that ends with the shorthand  
//   - input could be a mix of numbers and ranges.  1,3,5,7-1,2,4 => 1,3,5,7,8,9,10,12,14
//
// examples:
//   1,3,7,2,4,1 => 1,3,7,12,14,21
//   1-3,1-2    => 1,2,3,11,12
//   1:5:2       => 1,2,3,4,5,6,7,8,9,10,11,12
//   104-2       => 104,105,106,107,108,109,110,111,112
//   104-02      => 104,105...202
//   545,64:11  => 545,564,565...611
//
// in: string of encoded numbers and ranges, delimited by commas.
// out: array of numbers
//
// datastructure: array - convert the input to an array (will assume no bad input for now)
//
// alg:
//   initialize vars: result, lastValue = -infinity, currentValue
//   replace spaces in input with ''
//   split input into array on ','
//   loop array with forEach
//     if currentValue is a number (make sure to convert string to number)
//       if currentValue at index i > than lastValue
//         push currentValue to array result
//         set lastValue to currentValue 
//       else
//         calculate number that is represented by "significant part" (abstract into method)
//           if lengthSecond - lengthFirst < 0 then set value for slice second param to 0
//           slice the digits of lastValue from 0 to length first - length second
//             if that slice is empty string, set it to '1'
//           concat the the sliced lastValue to currentValue
//           push the resulting number to result array (convert to number)
//       end if
//     else
//       process range (abstract into method)
//         split the range, using regex, into an array
//         loop the range array
//           invoke method: is value less than lastValue?
//         end loop
//     end if
//  end loop
//
//         
//         
//         

function parseNumberNotation(numberNotation) {
  var finalResult = [];
  var lastValue = -Infinity;

  function isNumber(string) {
    return !isNaN(string);
  }

  function convertSignificantPart(currentNumber, previousNumber) {
    var endIndex;
    var newCurrentNumber = currentNumber;
    var i = 1;

    if (parseInt(newCurrentNumber) < parseInt(previousNumber)) {
      do {
        newCurrentNumber = parseInt(i.toString() + currentNumber.toString());
        i += 1;
      } while (newCurrentNumber < previousNumber);
    }
    
    return newCurrentNumber;
  }

  function processRange(range, lastValue) {
    var result = [];
    var i;

    range = range.split(/:|\-|\.{2}/);

    range.forEach(function(currentValue, index) {
      currentValue = parseInt(convertSignificantPart(currentValue, lastValue)); 
      nextValue = parseInt(convertSignificantPart(range[index + 1], currentValue)); 
      
      for (var i = currentValue; i <= nextValue; i += 1) {
        if (result[result.length -1] !== i) result.push(i);
      };

      lastValue = i - 1;
    });

    return result;
  }

  numberNotation = numberNotation.replace(/\s+/g, '').split(',').map(function(element) {
    return isNumber(element) && element.length === Number(element).toString() ? parseInt(element) : element; 
  });

  numberNotation.forEach(function(currentValue) {
    var range;

    if (isNumber(currentValue)) {
      if (parseInt(currentValue) < parseInt(lastValue)) {
        currentValue = convertSignificantPart(currentValue, lastValue);
      };

      finalResult.push(parseInt(currentValue));
      lastValue = currentValue
    } else {
      range = processRange(currentValue, lastValue);
      range.forEach(function(element) {
        finalResult.push(convertSignificantPart(element, lastValue));
        lastValue = element;
      });
    }
  });

  return finalResult;
}

//console.log(parseNumberNotation( '0..3' ));             //    => 0,1,2,3
//console.log(parseNumberNotation( '1..3' ));             //    => 1,2,3
//console.log(parseNumberNotation( '1,3,7,2,4,1' ));      //    => 1,3,7,12,14,21
//console.log(parseNumberNotation( '1, 3, 7, 2, 4, 1' )); //    => 1,3,7,12,14,21
//console.log(parseNumberNotation( '545, 65' ));          //    => 545, 565 
//console.log(parseNumberNotation( '545, 32' ));          //    => 1,3,7,12,14,21
//console.log(parseNumberNotation( '104, 02' ));          //    => 104, 202 
//console.log(parseNumberNotation( '1-3,1-2' ));          //    => 1,2,3,11,12
//console.log(parseNumberNotation( '3-1' ));              //    => 3,4,5,6,7,8,9,10,11 
//console.log(parseNumberNotation( '4:5:9' ));            //    => 4,5,6,7,8,9 
//console.log(parseNumberNotation( '1:5:2:5' ));          //    => 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
//console.log(parseNumberNotation( '1-5:2' ));            //    => 1,2,3,4,5,6,7,8,9,10,11,12
//console.log(parseNumberNotation( '104-2' ));            //    => 104,105,106,107,108,109,110,111,112
//console.log(parseNumberNotation( '104..02' ))           //    => 104,105...202
//console.log(parseNumberNotation( '545,64:11' ))         //    => 545,564,565...611
//console.log(parseNumberNotation( '1,3,5,7,9-1,3-2' ))   //    => 1,3,4,5,9,10,11,13,14,15,16,17,18,19,20,21,22 
//console.log(parseNumberNotation( '1-3, 5:7, 9..1'))     //    => 1,2,3,5,6,7,9,10,11

// rail fence cipher
//
// Implement the encoding and decoding of the rail fence cipher
// In the rail fence the cipher, the message is written downwards
// on successive rails of an imaginary fence, then moving up
// when we get to the bottom. like a zig-zag. Finally the message
// is read off in rows.
// example
// WEAREDISCOVEREDFLEEATONCE -> WECRLTEERDSOEEFEAOCAIVDEN
// W . . . E . . . C . . . R . . . L . . . T . . . E  // start from 0, every 5th character (rows + 2?)
// . E . R . D . S . O . E . E . F . E . A . O . C .  // start from 1, every 2nd character (rows - 1?)
// . . A . . . I . . . V . . . D . . . E . . . N . .  // start from 2, every 5th character (rows + 2?)
//
// build two functions:
//   encodeRailFenceCipher(plainText, numberOfRails) 
//     returns the encoded string 
//   decodeRailFenceCipher(encodedText, numberOfRails)
//     returns the plain text string
//
// ENCODING
// problem/requirements:
//   - provided a plain text string and a number of rails
//   - the string is laid out down and diagonally on each successive rail
//   - until reaching the bottom
//   - then diagonally up until reaching the top
//   - until reaching the end of the string
//   - then read each row, removing cells with no character to form a string
//   - concatinate each row together to form the encoded string
//   - spaces are optional, we can remove spaces before encoding or keep them
//   - for this exercise, we will retain spaces and include them in the encoding
// 
// examples:
// encodeRailFenceCipher('hello world', 3) => HOREL OLLWD
// H . . . O . . . R . .   0 4 8       // start from 0, every 4th char
// . E . L . _ . O . L .   1 3 5 7 9   // start from 1, every 2nd char
// . . L . . . W . . . D   2 6 10      // start from 2, every 4th char
//
// encodeRailFenceCipher('hello world', 4) => HWE OLORDLL
// H . . . . . W . . . .   0 6         // start from 0, every 6th character (rows + 2?)
// . E . . . _ . O . . .   1 5 7       // start from 1, every 4th, then second character (rows)
// . . L . O . . . R . D   2 4 8 10    // start from 2, every 2nd, then fourth
// . . . L . . . . . L .   3 9         // start from 3, every 6th character (rows + 2)
//
// data structure:
//   - array of arrays
//   - each rail is an array of spaces whose value will be with either undefined or a character
//   - can we math the length of the array? YES - length of each array is length of string.
//   - variables:
//     - rails: the array of arrays
//     - string: the input string

// 1000 lights
// problem
//   - n lights in a row, all initially off
//   - n times you will toggle the switches
//     - 1st time every light is toggled
//     - 2nd time every 2 lights is toggled
//     - 3rd time every 3 lights is toggled (starting with 3rd)
//   - return array of ligths that are on after n repetitions - just the ones that are on
//   - 0 returns empty array
//   - assume no bad input.  Switches will always be 0 or greater.  Always integer.
// examples
//   - 0: f f f f f 
//   - 1: t t t t t 
//   - 2: t f t f t
//   - 3: t f f f t
//   - 4: t f f t t
//   - 5: t f f t f
//   - r: 0 3
// data
//   - array?
// alg
//   - initialize: result = []
//   - convert n to array of n values = boolean false
//   - for loop 1 to n (i) 
//     - for loop i - 1 to end of array (j) j+=n
//       - starting j as index set value to its opposite (!value)
//     - end loop
//   - end loop
//   - return filtered array where value = true 
//


function lightsOn(switches) {
  var result = [];
  var lights = new Array(switches).join().split(',').map(function() {return false;});

  for (var i = 1; i < switches + 1; i += 1) {
    for (var j = i - 1; j < lights.length; j += i) {
      lights[j] = !lights[j];
    };
  };

  lights.forEach(function(light, index) {
    if (light === true) result.push(index + 1);
  });

  return result;
}

function lightsOn2(switches) {
  var result = [];
  var value = 1;
  var increment = 3;

  do {
    result.push(value);
    value += increment
    increment += 2;
  } while (value <= switches);

  return result;
}

//console.log(lightsOn(5));     //  [1, 4]
//console.log(lightsOn(100));     //  [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
//console.log(lightsOn2(5));     //  [1, 4]
//console.log(lightsOn2(100));   //  [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

//Write a function that takes a two dimensional array as the argument, turn it into a flat array and with all the duplicated elements removed. Treat numbers and number strings, for example, 1 and '1' as duplicates, and keep the one that comes first in the flattened array.
//Problem
//  In: array of arrays
//  out: flattened array
//  remove all duplicates
//  numbers and strings are considered duplicates 1 = '1'
//  retain the original order
//structure: arrays
//alg:
//  initialize a result []
//  forEach loop array of arrays
//    forEach loop the current array
//      if result hasMatch current value == ??
//        push current value result
//    end loop
//  end loop
//  return result
//  hasMatch
//    loop array and return true if current element == value
//      matching either primitive value
//      branch on if it is an object
//      if object
//        convert keys to array
//        loop the array of keys
//  null == undefined !!!
//          
//alg:
//  initialize result []
//  reduce array of arrays (acc = result)
//    forEach loop the current array
//      if result !includes currenValue then push to acc 

function flatten2(arrays) {
  var result = [];

  arrays.forEach(function(array) {
    array.forEach(function(element) {
      if (!hasMatch(result, element) ) {
        result.push(element);
      }
    });
  });

  return result;
}

function hasMatch(array, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }

  return false;
}

//array1 = [[2, 3], [2, 3]] // [2, 3]
//console.log(flatten(array1));

//array2 = [ ['2', '3'], [2, 3] ]  // ['2', '3']
//console.log(flatten(array2));

//array3 = [ ['2', '3', 5, 2, 4, 9], [2, 3, 6] ]  // ['2', '3', 5, 6, 4, 9]
//console.log(flatten(array3));

//array4 = [[2, 3, { dog: "milo"}], [2,3, { dog: "milo"}]];
//console.log(flatten(array4));

function volleyballPositions(formation, k) {
  // problem:
  //  predict the initial position given the current position and the number of times 
  //    the serve has changed (k)
  //  the server rotates clockwise
  //  the numbers decend.  2 becomes 1, 3 becomes 2, 1 becomes 6
  // input: array of position arrays
  //        the string PlayerX denotes a player is in a position
  //        empty means there is no player there
  // output: array of positions arrays equal to the original position
  // solution: to get the original position rotate backwards k times
  //           1 becomes 2, 6 becomes 1, 2 becomes 3
  // data: structure is an array of arrays
  // 0 5 0
  // 4 0 2
  // 0 3 0
  // 6 0 1
  
  // x,x 0,1 x,x
  // 1,0 x,x 1,2
  // x,x 2,1 x,x
  // 3,0 x,x 3,2
  
  // clockwise array: [[0,1], [1,2], [3,2], [2,1], [3,0], [1,0]]
  // create an object structure:
  //   {'player1': [0,1], 'player2': [1,2], 'player3': [3,2],
  //    'player4': [2,1], 'player5': [3,0], 'player6': [1,0]}
  // and then rotate the player string to the next position
  //
  // or loop through the clockwise order get the next value and 
  //   set that position equal to the current
  //   or perhaps vise versa- like look backwards
  //
  // algorithm:
  //   create the clockwise order array
  //   create a new array from formation array (don't want to mutate caller)
  //   for loop from 0 to < k
  //     forEach loop the order array (clockwise or counter?)
  //       get the value at the combination of indexes
  //
}

var me = {
  firstName: 'Jane',
  lastName: 'Doe',
};

var friend = {
  firstName: 'tom',
  lastName: 'smith',
};

var you = {
  firstName: 'test',
  lastName: 'person',
};

var him = {
  firstName: 'Joe',
  lastName: 'Smith',
}

var him2 = {
  firstName: 'Joe',
  lastName: 'Smith',
}

function fullName(person) {
  console.log(person.firstName);
}

function rollCall(collection) {
  collection.forEach(fullName);
}

var people = {
  index: 0,
  collection: [],

  fullName: function(person) {
    console.log(person.firstName +' ' + person.lastName + ' ' + person.id);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    person.id = this.getNextIndex();
    this.collection.push(person);

    this.incrementIndex();
  },

  getNextIndex: function() {
    return this.index;
  },

  incrementIndex: function() {
    this.index += 1;
  },

  getIndex: function(person) {
    var index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName && comparator.lastName === person.lastName) {
        index = i;
      }
    });

    return index;
  },

  getIndexById: function(id) {
    var index = -1;
    this.collection.forEach(function(comparator, i) {
      if (collection.id = id) {
        index = i;
      }
    });
  },

  remove: function(person) {
    if(this.isInvalidPerson(person)) {
      return;
    }

    var index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index,1);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  updateById: function(id) {
    
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    var existingPersonId = this.getIndex(person);

    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

var invoices = {
  unpaid: [],
  paid: [],

  add: function(clientName, amountOwed) {
    var invoice = {
      clientName: clientName,
      amountOwed: amountOwed,
    };

    this.unpaid.push(invoice);
  },

  totalDue: function() {
    return this.unpaid.reduce(function(sum, invoice) {
      return sum += invoice.amountOwed;
    }, 0);
  },

  totalPaid: function() {
    return this.paid.reduce(function(sum, invoice) {
      return sum += invoice.amountOwed;
    }, 0);
  },

  payInvoice: function(clientName) {
    var unpaidInvoices = [];
    for (var i = 0; i < this.unpaid.length; i += 1) {
      if (clientName === this.unpaid[i].clientName) {
        this.paid.push(this.unpaid[i]);
      } else {
        unpaidInvoices.push(this.unpaid[i]);
      }
    }

    this.unpaid = unpaidInvoices;
  },
};

var sedan = {
  speed: 0,
  rate: 8,

  accelerate: function() {
    this.speed += this.rate;
  },
};

function makeCar(accelerationRate, brakingRate) {
  return {
    speed: 0,
    accelerationRate: accelerationRate,
    brakingRate: brakingRate,
    accelerate: function() {
      this.speed += this.accelerationRate;
    },

    brake: function() {
      this.speed -= this.brakingRate;
      if (this.speed < 0) this.speed = 0;
    },
  };
}

function testWrap() {
  function testing() {
    var object = {
      foo: function() {
        return 'this: ' + this;
      },
    };

    console.log(object.foo())

    var bar = object.foo;
    console.log(bar());
  }

  testing();
}

function testThis() {
  var wrapperObject = {
    testing: function() {
      var object = {
        foo: function() {
          return 'this: ' + this;
        },
      };

      function insideFunc() {
        console.log(object.foo())
        var bar = object.foo;
        console.log(bar());
      }

      insideFunc();
    },
  }
  wrapperObject.testing()
}

function bindDemo() {
  var a = 'goodbye';

  var object = {
    a: 'hello',
    b: 'world',
    foo: function() {
      return this.a + ' ' + this.b;
    },
  };

  var bar = object.foo;
  console.log(bar());  // undefined undefined

  var baz = object.foo.bind(object);
  console.log(baz());  // hello world 

  var object2 = {
    a: 'hi',
    b: 'there',
  };

  console.log(baz.call(object2));  // hello world

  object.a = 'HELLO';
  console.log(baz.call(object2)); // HELLO world

  baz = object.foo.bind(object2);
  console.log(baz.call(object2));  // hi there
}

function bindDemo2() {
  var greetings = {
    morning: 'good morning ',
    afternoon: 'good afternoon ',
    evening: 'good evening ',

    greeting: function(name) {
      var currentHour = (new Date()).getHours();

      console.log(this);

      if (currentHour < 12) {
        console.log(this.morning + name);
      } else if (currentHour < 18) {
        console.log(this.afternoon + name);
      } else {
        console.log(this.evening + name);
      }
    },
  }

  greetings.greeting('Darren'); // good afternoon darren

  var spanishWords = {
    morning: 'Buenos dias ',
    afternoon: 'Buenas tardes ',
    evening: 'Buena noches ',
  }

  var spanishGreeter = greetings.greeting.bind(spanishWords);

  spanishGreeter('Jose');  // buenos ??? Jose
  spanishGreeter('Juan');  // buenos ??? juan
}

function makeCounterLogger(startNumber) {
  return function count(countToNumber) {
    for (var i = 0; i <= Math.abs(countToNumber - startNumber); i += 1) {
      if (countToNumber > startNumber) {
        console.log(startNumber + i);
      } else {
        console.log(startNumber - i);
      }
    }
  }
}

//var countLog = makeCounterLogger(5);
//countLog(8);
//countLog(2);

// When the returned function is called with a String, it should add that argument to an array of items if it doesn't yet exist.
// If the element already exists in the list, then it should be removed.
// If the returned function is called without any arguments, it should log all of the elements in the list to the console.

function makeList() {
  var list = [];
  return function(str) {
    if (str === undefined) {
      if (list.length) {
        list.forEach(function(item) {
          console.log(item);
        });
      } else {
        console.log('no items');
      }
    } else if (list.includes(str)) {
      list.splice(list.indexOf(str), 1);
      console.log(str + ' removed');
    } else {
      list.push(str);
      console.log(str + ' added');
    }
  }
}

//Write a JavaScript function named makeMultipleLister that, when invoked and passed a number, returns a function that logs every multiple of that number less than 100. It should be used like this:

function makeMultipleLister(number) {
  return function() {
    for (var i = number; i < 100; i += number) {
      console.log(i);
    }
  }
}

// Write a program that uses two JavaScript functions, add and subtract, to manipulate a running total value. When either function is invoked with a number, it should add or subtract the passed value from the total and then log the total to the console

var numberTotal = 0;

function add(number) {
  numberTotal += number;
  console.log(numberTotal);
}

function subtract(number) {
  numberTotal -= number;
  console.log(numberTotal);
}

// Write a function named later that takes two arguments: a function and an argument to be passed to that function at a future time. later should return a new function that, when invoked, calls the function that was passed in along with the argument that was passed in.

function later(func, arg) {
  return function() {
    func(arg);
  }
}

function startup() {
  var status = 'ready';
  return function() {
    console.log('The system is ready.');
  }
}

//var ready = startup();

// create a function that returns an object with a property that is a list and methods add, remove and list that perform those actions on the list

function makeList2() {
  var list = [];

  return {
    printList: function() {
      if (!list.length) {
        console.log('list is empty');
      } else {
        list.forEach(function(item) {
          console.log(item);
        });
      }
    },

    add: function(item) {
      list.push(item);
    },

    remove: function(item) {
      if (list.includes(item)) {
        list.splice(list.indexOf(item), 1);
        console.log(item + ' removed');
      } else {
        console.log(item + ' is not in the list');
      }
    }
  };
}
