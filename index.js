
function makeCounterLogger(startNumber) {
  return function count(countToNumber) {
    for (var i = 0; i <= Math.abs(countToNumber - startNumber); i += 1) {
      countToNumber > startNumber ? console.log(startNumber + i) : console.log(startNumber - i);
    }
  }
}

var countLog = makeCounterLogger(5);
countLog(8);
countLog(2);
