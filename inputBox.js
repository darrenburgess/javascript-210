var interval;
var textField;
var content;

document.addEventListener('DOMContentLoaded', function() {
  textField = document.querySelector('.text-field');
  content = document.querySelector('.content');
  
  textField.addEventListener('click', function() {
    event.stopPropagation();
    textField.classList.add('focused');
    interval = setInterval(function() {
      textField.classList.toggle('cursor');
    }, 500);
  });


  document.addEventListener('click', function() {
    textField.classList.remove('focused');
    window.clearInterval(interval); 
  });
});

document.addEventListener('keyup', function(event) {
  if (textField.classList.contains('focused')) {
    var key = event.key;

    if (event.which === 8) {
      content.textContent = content.textContent.slice(0, -1);
    } else if (event.key.length === 1) {
      content.textContent += key;
    }
  }
});
