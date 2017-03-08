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
// alg: (this was the first iteration of the algorithm. outdated compared to code)
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

function parseNumberNotation(numberNotation) {
  var finalResult = [];
  var lastValue = -Infinity;

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

console.log(parseNumberNotation( '0..3' ));             //    => 0,1,2,3
console.log(parseNumberNotation( '1..3' ));             //    => 1,2,3
console.log(parseNumberNotation( '1,3,7,2,4,1' ));      //    => 1,3,7,12,14,21
console.log(parseNumberNotation( '1, 3, 7, 2, 4, 1' )); //    => 1,3,7,12,14,21
console.log(parseNumberNotation( '545, 65' ));          //    => 545, 565 
console.log(parseNumberNotation( '545, 32' ));          //    => 1,3,7,12,14,21
console.log(parseNumberNotation( '104, 02' ));          //    => 104, 202 
console.log(parseNumberNotation( '1-3,1-2' ));          //    => 1,2,3,11,12
console.log(parseNumberNotation( '3-1' ));              //    => 3,4,5,6,7,8,9,10,11 
console.log(parseNumberNotation( '4:5:9' ));            //    => 4,5,6,7,8,9 
console.log(parseNumberNotation( '1:5:2:5' ));          //    => 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
console.log(parseNumberNotation( '1-5:2' ));            //    => 1,2,3,4,5,6,7,8,9,10,11,12
console.log(parseNumberNotation( '104-2' ));            //    => 104,105,106,107,108,109,110,111,112
console.log(parseNumberNotation( '104..02' ))           //    => 104,105...202
console.log(parseNumberNotation( '545,64:11' ))         //    => 545,564,565...611
console.log(parseNumberNotation( '1,3,5,7,9-1,3-2' ))   //    => 1,3,4,5,9,10,11,13,14,15,16,17,18,19,20,21,22 
console.log(parseNumberNotation( '1-3, 5:7, 9..1'))     //    => 1,2,3,5,6,7,9,10,11

