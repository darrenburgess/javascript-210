function rott13(string) {
  var result = '';
  var length = string.length;
  var limit;
  var code;

  function isLetter(chr) {
    return chr.toLowerCase() !== chr.toUpperCase();
  }

  function letterTypeLimit(chr) {
    if (chr === chr.toUpperCase()) {
      return 90;
    } else if (chr === chr.toLowerCase()) {
      return 122;
    }
  }

  for (i = 0; i < length; i++) {
    limit = letterTypeLimit(string[i]) - 13; 
    code = string[i].charCodeAt(0);

    if (code < limit) {
      newChar = String.fromCharCode(code + 13);
    } else {
      newChar = String.fromCharCode(code - 13);
    }

    if (isLetter(newChar)) {
      result += newChar;
    } else {
      result += string[i];
    }
  }

  return result;
}

function rottTest() {
  string = 'Teachers open the door, but you must enter by yourself.';

  if (string === rott13(rott13(string))) {
    return 'PASSED';
  } else {
    return "FAILED. Return value:\n    '" + rott13(string) + "'\nshould be\n    'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.'";
  }
}
