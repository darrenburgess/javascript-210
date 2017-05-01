function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

var paragraphArray = [];

function paragraphs(node) {
  if (node instanceof HTMLParagraphElement) paragraphArray.push(node);
}

function addClass(node) {
  if (node instanceof HTMLParagraphElement) node.setAttribute('class', 'article-text');
}

function getElementsByName(tagName) {
  elements = [];

  function pushMatchingTag(node) {
    if (node.nodeName.toLowerCase() === tagName) {
      elements.push(node);
    }
  }
  
  walk(document.body, pushMatchingTag);

  return elements;
}

divs = document.getElementsByClassName('intro');

for (var i = 0; i < divs.length; i += 1) {
  paragraphs = divs[i].getElementsByTagName('p');
  for (var j = 0; j < paragraphs.length; j += 1) {
    paragraphs[j].classList.add('text-line');
  }
}

//var intros = document.getElementsByClassName('intro');
//for (var i = 0; i < intros.length; i++) {
  //var paragraphs = intros[i].getElementsByTagName('p');
  //for (var p = 0; p < paragraphs.length; p++) {
    //paragraphs[p].classList.add('article-text');
  //}
//}

