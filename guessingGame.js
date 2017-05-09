document.addEventListener('DOMContentLoaded', function(event) {
  var answer = getRandomNumber(100);
  var form = document.getElementsByTagName('form')[0];
  var input = form.querySelector('input');
  var messageParagraph = document.querySelector('p');
  var newGameLink = document.querySelector('a');
  var submitButton = document.querySelector('[type="submit"]');
  var guess;
  var guessCount;
  var message;

  function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
  }

  function checkGuess(guess, answer) {
    var msg;
   
    if (isNaN(guess)) {
      msg = 'Guess must be a number';
    } else if (guess < answer) {
      msg = 'Guess was less than my answer';
    } else if (guess > answer) {
      msg = 'Guess was greater than my answer';
    } else if (guess === answer) {
      msg = 'You guessed ' + guess + ' correctly in ' + guessCount + ' attempts';
      toggleSubmitButton();
    }

    if (!isNaN(guess)) guessCount += 1;

    messageParagraph.textContent = msg;
  }

  function toggleSubmitButton(on) {
    if (submitButton.disabled === true || on) {
      submitButton.disabled = false;
      input.disabled = false;
      input.focus();
      submitButton.style.background = 'linear-gradient(to bottom, #CC183E 0%, #780E24 100%)';
    } else {
      submitButton.disabled = true;
      input.disabled = true;
      submitButton.style.background = 'grey';
    }
  }

  function newGame(event) {
    answer = getRandomNumber(100);
    guessCount = 1;
    input.focus();
    messageParagraph.textContent = 'Guess a number between 1 and 100';
    toggleSubmitButton(true);
  }

  function submitAnswer(event) {
    event.preventDefault();
    guess = parseInt(input.value);
    checkGuess(guess, answer);
    input.value = '';
    input.focus();
  }
  
  form.addEventListener('submit', submitAnswer);
  newGameLink.addEventListener('click', newGame);

  newGame();
});
