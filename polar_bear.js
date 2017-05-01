function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

var imageCount = 0;
var pngCount = 0;

function countImages(node) {
  if (node.nodeName === 'IMG') {
    imageCount += 1;
    var imageType = node.getAttribute('src').slice(-3);
    if (imageType.toLowerCase() === 'png') {
      pngCount += 1;
    }
  }
}

function linkToRed(node) {
  if (node.nodeName === 'A') {
    node.style.color = 'red';
  }
}

function countWords(node) {
  return node.textContent.split(' ').length;
}

h2 = document.getElementsByTagName('h2');

function wordCounter(nodes, func) {
  for (var i = 0; i < nodes.length; i += 1) {
    var node = nodes[i];
    console.log(node.nodeName + ' ' + func(node));
  }
}

function wordCounter2(nodes) {
  nodes = Array.prototype.slice.call(nodes);

  return nodes.map(function(node) {
    return node.textContent.split(' ').length;
  })
}

function wordCounter3(nodes) {
  nodes = Array.prototype.slice.call(nodes);
  return nodes.map(node => node.textContent.split(' ').length);
}

function setTocLiColor(clr) {
  liElements = document.querySelectorAll('.toc ul li:nth-child(2n+1) a');
  liElements = Array.prototype.slice.call(liElements);
  liElements.forEach(liElement => liElement.style.color = clr);
}

function classification() {
  var classification = {};
  var tbody = document.querySelector('.infobox tbody');
  var klass;

  for (var i = 6; i < 14; i += 1) {
    klass = tbody.querySelector('tr:nth-child(' + i +') td:nth-child(1)').textContent;
    klass = klass.slice(0, klass.length - 1).toLowerCase();
    value = tbody.querySelector('tr:nth-child(' + i +') td:nth-child(2)').textContent;
    classification[klass] = value;
  }

  return classification;
}
//walk(document, countImages);
//console.log(imageCount);
//console.log(pngCount);
//walk(document, linkToRed);

