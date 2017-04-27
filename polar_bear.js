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
    node.setAttribute('style', 'color: red');
  }
}

walk(document, countImages);
console.log(imageCount);
console.log(pngCount);

walk(document, linkToRed);
