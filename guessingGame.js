// create event listener for DOMContentLoaded
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
  var input = document.querySelector('input');
  var message = document.getElementsByTagName('p')[0];
  var newGameLink = document.querySelector('a');
  var guessButton = form.querySelector('[type="submit"]')
  var answer;
  var guess;
  var count;

  newGame();

  form.addEventListener('submit', onSubmitAnswer);
  newGameLink.addEventListener('click', newGame);

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    count = 1;
    toggleInputs(true);
    clearInput();
    message.textContent = 'Guess a number between 1 and 100';
  }

  function onSubmitAnswer(event) {
    event.preventDefault;
    guess = parseInt(input.value); 
    message.textContent = checkGuess(guess, answer);
    checkGameReset(guess, answer);
  }

  function checkGuess(guess, answer) {
    var msg;

    if (isNaN(guess)) {
      msg = 'Please enter a number';
    } else if (guess < answer) {
      msg = 'Your guess is less than my answer';
    } else if (guess > answer) {
      msg = 'Your guess is greater than my answer';
    } else {
      msg = 'Correct! You guessed ' + answer + ' in ' + count + ' tries!';
    }

    return msg;
  }

  function checkGameReset(guess, answer) {
    if (guess === answer) {
      toggleInputs(false);
    } else if (!isNaN(guess)) {
      count += 1;
      clearInput();
    }
  }

  function toggleInputs(initializeGame) {
    if (guessButton.disabled || initializeGame) {
      guessButton.disabled = false;
      input.disabled = false;
      guessButton.classList.remove('button-grey');
      guessButton.classList.add('button-red');
    } else {
      guessButton.disabled = true;
      input.disabled = true;
      guessButton.classList.add('button-grey');
      guessButton.classList.remove('button-red');
      newGameLink.focus();
    }
  }

  function clearInput() {
    input.value = '';
    input.focus();
  }
});
