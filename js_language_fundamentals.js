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

// what is logged at 7, 11, 15, 19
/*
In this program, we initialize four variables to four
different values, a boolean, string, empty array and an
empty string. In the first conditional statement, we check
if the value of the boolean is true. true is true and so the program logs `Hello`. In the next condition, !myString coerces to false. Nothing is logged as line 11 does not run.
The next condition coerces myArray to the boolean value true.
This essentially reads as `not not myArray` Since an empty array object is truthy, this expression evaluates to true and the program logs 'World'. In the last condition, we use the logical or operator to examine if either value is truthy. If either is truthy, then the condition evaluates to true. In this case myArray is truthy as again, empty array objects are truthy. The program logs '!'.
*/

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
