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

// Math object functions
function radiansToDegrees(radians) {
  return radians / ( Math.PI / 180 );
}

function logPositive() {
  var x = -180;
  console.log(Math.abs(x));
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDayNumber() {
  var dayNumber = new Date;
  return "today is day number " + dayNumber.getDay();
}

function dayOfWeek() {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var today = new Date();

  return daysOfWeek[today.getDay()];
}

function formatMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var month = date.getMonth();
  
  return months[month] + " ";
}

function getDayName(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()] + ", ";
}

function formatDay(date) {
  var day = date.getDate();
  var remainder = day % 10;

  if (day >= 11 && day <= 13) {
    suffix = "th";
  } else if (remainder === 1) {
    suffix = "st";
  } else if (remainder === 2) {
    suffix = "nd";
  } else if (remainder === 3) {
    suffix = "rd";
  } else {
    suffix = "th"
  }
  
  return day.toString() + suffix;
}

function formattedDate(date) {
  var dayName = getDayName(date);
  var month = formatMonth(date);
  var day = formatDay(date);

  return "Today's date is " + dayName + month + day;
}

function getTomorrow() {
  var tomorrow = new Date(); 
  tomorrow.setDate(tomorrow.getDate() + 1);
  return formattedDate(tomorrow);
}

function compareDates(date1, date2) {
  if (date1.toDateString() === date2.toDateString()) {
    return true;
  } else {
    return false;
  }
}

function formatTime() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();

  function formatNumber(number) {
    if (number < 10) {
      number = "0" + number.toString();
    } else {
      number.toString();
    }

    return number;
  }

  return formatNumber(hours) + ":" + formatNumber(minutes);
}

// arguments object: welcome stranger exercise

function greetings(person, job) {
  var name = person.join(' ');
  var title = job.title;
  var occupation = job.occupation;

  console.log('Hello, ' + name + '! Nice to have a ' + title + ' ' + occupation + ' around');
}

function repeatedCharacters(word) {
  var wordArray = word.toLowerCase().split('').sort();
  var result = {};
  
  for (var i = 0; i < wordArray.length; i++) {
    chr = wordArray[i];
    result[chr] ? result[chr] += 1 : result[chr] = 1;
  }

  for (key in result) {
    if (result[key] === 1) delete result[key];
  }

  return result;
}
