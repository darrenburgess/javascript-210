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
  result = [];

  for (i = 0; i <= max; i++) {
    if (isPrime(i)) {
      result.push(i);
    }

    if (i % 100 === 0) {
      console.log(i);
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

