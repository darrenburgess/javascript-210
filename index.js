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

//fizzBuzz(100);

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

function indexOf(firstString, secondString) {
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

function indexOf(array, value) {
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

