function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

// Write some JavaScript using the lastChild and childNodes properties to change the color of the On the River heading to red and make its font size 48 pixels.
var html = document.childNodes[1];
var body = html.lastChild;
var heading = body.childNodes[1];
heading.style.color = 'red';
heading.style.fontSize = '48px';

// Write some JavaScript to count and log the paragraphs on the page
function logParagraphs(body) {
  var count = 0;

  body.childNodes.forEach(function(node) {
    if (node.tagName === 'P') {
      console.log(node);
      count += 1;
    };
  });

  console.log('count: ' + count);
}

//logParagraphs(body);

function logParagraphs2(node) {
  if (node.nodeName === 'P') {
    var text = node.firstChild.data.trim();
    var firstWord = text.split(' ')[0];
    console.log(firstWord);
  }
}

var addClass = false;

function addStanza(node) {
  if (node.nodeName === 'P') {
    if (addClass) {
      node.setAttribute('class', 'stanza');
    }

    addClass = true;
  }
}

//walk(document, logParagraphs2);

walk(document, addStanza);
