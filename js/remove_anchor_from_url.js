// https://www.codewars.com/kata/remove-anchor-from-url/train/javascript

function removeUrlAnchor(url) {
  const urlSplitted = url.split('#');
  return urlSplitted[0];
}

function removeAfterHash(s) {
  return s.replace(/#.*/, '');
}

module.exports = {
  removeUrlAnchor: removeUrlAnchor,
  removeAfterHash: removeAfterHash
};
