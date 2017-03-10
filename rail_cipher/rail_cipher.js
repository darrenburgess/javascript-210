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
//     - letter: a single character in the string
//
// input: string
// output: encoded string, retaining spaces
// algorithm:
//   initialize variables: i, rails[[],[],[],[]] one array for each of rails
//   initialize variable: direction = 1 (the amount to increment the rail counter)
//   convert string to array of letters
//   initialize a rail iterator = 0
//   forEach loop the array of letters (this needs to be manually tested)
//     set rails[letterIndex] to current letter
//     if rail iterator = rails - 1 set direction = -1
//     if rail iterator = 0 set direction = 1
//     increment the rail iterator
//   end forEach
//   reduce the array of arrays with a nested reduce
//     this will work because reduce will only iterate the array indexes that have a value

function encodeRailFenceCipher(string, numberRails) {
  var emptyRails = Array.apply(null, Array(numberRails)).map(function() {return [];});
  var filledRails = applyLettersToRailsArray(emptyRails, string.split(''));
  return reduceRailArrayToString(filledRails);
}

function applyLettersToRailsArray(rails, letters) {
  var direction = 1;
  var railIterator = 0;
  var numberRails = rails.length;

  letters.forEach(function(letter, index) {
    rails[railIterator][index] = letter;
    direction = reverseDirectionCheck(direction, numberRails, railIterator);
    railIterator += direction;
  })

  return rails;
}

function reduceRailArrayToString(railArray) {
  return railArray.reduce(function(finalString, rail) {
    return rail.reduce(function(letters, letter) {
      return letters + letter;
    }, finalString); 
  }, '');
}

function reverseDirectionCheck(direction, numberRails, railIterator) {
  if (railIterator === numberRails - 1) direction = -1; 
  if (railIterator === 0) direction = 1;
  return direction; 
}

// rail fence cipher decoding
// alg:
//   forEach loop the encoded string reuse applyLetters function 
//     set each index position to a character (can reuse encode function)
//     incrementing the rails up or down
//     reverse direction when you hit the top or bottom
//   end loop
//   loop the array of characters in encoded string
//     loop the array of rails
//       loop each rail (it will only access the defined positions)
//         set each defined position until you get to end of the rail
//       end rail loop
//     end arry of rails loop
//   end characters loop
//   return looped length of charaters
//     append each char to result
//     change directions as needed at top or bottom.

function decodeRailFenceCipher(string, numberRails) {
  var emptyRails = Array.apply(null, Array(numberRails)).map(function() {return [];});
  var filledRails = applyLettersToRailsArray(emptyRails, string.split(''));
  var characterIndex = 0;
  var railIterator = 0;
  var direction = 1;
  var result = '';

  filledRails.forEach(function(rail) {
    rail.forEach(function(node, position, rail) {
      rail[position] = string[characterIndex];
      characterIndex += 1;
    });
  });

  for (var i = 0; i < string.length; i += 1) {
    result += filledRails[railIterator][i];
    direction = reverseDirectionCheck(direction, numberRails, railIterator);
    railIterator += direction;
  }

  return result;
}

//console.log(encodeRailFenceCipher('hello world', 3));
//console.log(decodeRailFenceCipher('horel ollwd', 3));

//console.log(encodeRailFenceCipher('hello world', 3));  //  horel ollwd
//console.log(encodeRailFenceCipher('hello world', 4));  //  hwe olordll 
//console.log(encodeRailFenceCipher('hello world', 5));  //  hwe olordll 

//console.log(encodeRailFenceCipher('wearediscoveredfleeatonce', 3));  // wecrlteerdsoeefeaocaivden 
//console.log(encodeRailFenceCipher('wearediscoveredfleeatonce', 4));  // wireeedseeeacaecvdltnrofo
//console.log(decodeRailFenceCipher('wecrlteerdsoeefeaocaivden', 3));
//console.log(decodeRailFenceCipher('wireeedseeeacaecvdltnrofo', 4));

var lorem = 'Amet non facere minima iure unde, provident, veritatis officiis asperiores ipsa eveniet sit! Deserunt autem excepturi quibusdam iure unde! Porro alias distinctio ipsam iure exercitationem molestiae. Voluptate fugiat quasi maiores!jk'

var randomRailCount = Math.floor(Math.random() * (100 - 2 + 1)) + 2;

console.log(decodeRailFenceCipher(encodeRailFenceCipher(lorem, randomRailCount), randomRailCount) === lorem);
// true
