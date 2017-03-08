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
  var i;
  var rails = Array.apply(null, Array(numberRails)).map(function() {return [];});
  var result = '';
  var newRails;

  letters = string.split('');

  newRails = letters.forEach(applyLettersToRailsArray.bind(rails));

  result = newRails.reduce(function(finalString, rail) {
    return rail.reduce(function(letters, letter) {
      return letters + letter;
    }, finalString); 
  }, '');

  return result;
}

function applyLettersToRailsArray(letter, index) {
  var direction = 1;
  var railIterator = 0;
  var rails = this;
  var numberRails = rails.length;

  rails[railIterator][index] = letter;

  if (railIterator === numberRails - 1) direction = -1; 
  if (railIterator === 0) direction = 1;

  railIterator += direction;

  return rails;
}

console.log(encodeRailFenceCipher('hello world', 3));  //  horel ollwd
console.log(encodeRailFenceCipher('hello world', 4));  //  hwe olordll 
console.log(encodeRailFenceCipher('wearediscoveredfleeatonce', 3));  // wecrlteerdsoeefeaocaivden 
console.log(encodeRailFenceCipher('wearediscoveredfleeatonce', 4));  // wireeedseeeacaecvdltnrofo
