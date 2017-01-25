function objectHasProperty(obj, propName) {
  return Object.keys(obj).indexOf(propName) !== -1;
}

function objectHasProperty2(obj, propName) {
  if (obj[propName]) {
    return true;
  } else {
    return false;
  }
}

function objectHasProperty3(obj, propName) {
  return obj[propName] ? true : false; 
}

function incrementProperty(obj, propName) {
  var keys = Object.keys(obj);
  var hasProperty = keys.indexOf(propName) !== -1;

  if (hasProperty) {
    obj[propName]++;
  } else {
    obj[propName] = 1;
  }
}

function incrementProperty2(obj, propName) {
  obj[propName] ? obj[propName]++ : obj[propName] = 1;
}

function incrementProperty2(obj, propName) {
  if (obj[propName]) {
    obj[propName]++
  } else {
    obj[propName] = 1;
  }
}

function copyProperties(obj1, obj2) {
  var count;

  for (prop in obj1) {
    obj2[prop] = obj1[prop];
    count++
  }

  return count;
}

function wordCount(str) {
  var words = str.split(' ');
  var wordCount = {};

  words.forEach(function(word) {
    wordCount[word] ? wordCount[word]++ : wordCount[word] = 1;
  });

  return wordCount;
}
