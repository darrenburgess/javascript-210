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

console.log(luhnCheckSum('2323 2005 7766 3554'));  // true
console.log(luhnCheckSum('visa: 2323 2005 7766 3554'));  // true
console.log(luhnCheckSum('8763'));  // true
console.log(luhnCheckSum('11114'));  // true
console.log(luhnCheckSum('2323 2005 7766 35547'));  // false
console.log(luhnCheckSum('2323 2005 7766 3551'));  // false
console.log(luhnCheckSum('1111'));  // false


