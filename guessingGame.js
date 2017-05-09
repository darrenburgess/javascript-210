// create event handler for DOMContentLoaded
// create answer number as random number from 1 to 100
// create event listener on form submission, use preventDefault
// store user guess in variable
// validate the guess as number
// create variable to store string for message to display
// check if guess is a number
// add a count of guesses 
// check guess against answer and display appropriate message
// test guessing
// create event listener for new game link
// extra: disable button on correct answer. also disable input. Grey out button.

document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  var input = form.querySelector('input');
  var message = document.querySelector('p');
  var newGameLink = document.querySelector('a')

  var answer;
  var count;
  var guess;
  var message;

  function getRandomNumber(limit) {
    return Math.floor(Math.random() * 100 + 1);
  }

  function checkGuess(guess, answer) {
    var msg;

    if (isNaN(guess)) {
      msg = 'Please enter a number for your guess';
    } else if (guess < answer) {
      msg = 'Your guess ' + guess + ' is less than my answer';
    } else if (guess > answer) {
      msg = 'Your guess ' + guess + ' is more than my answer';
    } else {
      msg = 'You guessed ' + guess + ' correctly in ' + count + ' tries!';
    }

    if (!isNaN(guess)) {
      message.textContent = msg;
      count += 1;
    }
  }

  function clearInput() {
    input.value = '';
    input.focus();
  }

  function submitGuess(event) {
    event.preventDefault();
    guess = input.value;
    checkGuess(guess, answer);
    clearInput();
  }

  function newGame(event) {
    count = 1;
    answer = getRandomNumber(100);
    clearInput();
  }

  newGameLink.addEventListener('click', newGame);
  form.addEventListener('submit', submitGuess);

  newGame();
});
