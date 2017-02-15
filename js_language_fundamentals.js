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
