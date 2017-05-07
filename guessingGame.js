document.addEventListener('DOMContentLoaded', function(event) {
  var answer = randomNumber();
  var form = document.getElementsByTagName('form')[0];
  var guessCount = 0;
  var messageParagraph = document.querySelector('p');
  var newGameLink = document.querySelector('a');
  var guessInput = document.getElementById('guess');
  var submitButton = document.querySelector('[type="submit"]');

  guessInput.focus();
  
  function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function isNumber(value) {
    return typeof value === 'number';
  }

  function toggleSubmitButton(on) {
    if (submitButton.disabled === true || on) {
      submitButton.disabled = false;
      guessInput.disabled = false;
      guessInput.focus();
      submitButton.style.background = 'linear-gradient(to bottom, #CC183E 0%, #780E24 100%';
    } else {
      submitButton.disabled = true;
      guessInput.disabled = true;
      submitButton.style.background = 'grey';
      newGameLink.focus();
    }
  }

  function returnMessage(guess, answer) {
    if (guess < answer && isNumber(guess)) {
      message = 'My number is higher than ' + guess;
    } else if (guess > answer) {
      message = 'My number is lower than ' + guess;
    } else if (guess === answer) {
      message = 'You guessed correctly in ' + guessCount;
      toggleSubmitButton();
    } else {
      message = 'Please enter a number';
    }

    return message;
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var guess = parseInt(guessInput.value, 10);

    var message = returnMessage(guess, answer);

    if (isNumber(guess)) guessCount += 1;
    messageParagraph.textContent = message;
    guessInput.value = '';
  });

  newGameLink.addEventListener('click', function() {
    messageParagraph.textContent = 'Guess a number between 1 and 100';
    guessCount = 0;
    answer = randomNumber();
    toggleSubmitButton(true);
  });
});
