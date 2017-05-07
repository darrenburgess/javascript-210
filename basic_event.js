document.addEventListener('DOMContentLoaded', function() {
  var addButton = document.getElementById('add');
  var output = document.getElementById('output');
  var count = 0;

  addButton.addEventListener('click', function(e) {
    count++;
    output.textContent = count;
    console.log(e.timeStamp);
    console.log(e.type);
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e);
  });
});
