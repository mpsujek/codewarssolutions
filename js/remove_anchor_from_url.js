// https://www.codewars.com/kata/remove-anchor-from-url/train/javascript

function removeUrlAnchor(url) {
    const urlSplitted = url.split('#');
    return urlSplitted[0];
}

function removeUrlAnchorOtherSolution(url){
  return url.replace(/\?.*/,'');
}

module.exports = removeUrlAnchor;
module.exports = removeUrlAnchorOtherSolution;
