// https://www.codewars.com/kata/the-hashtag-generator/train/javascript

function generateHashtag(str) {
  String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) {
      return a.toUpperCase();
    });
  };

  const strWithoutSpaces = str.capitalize().replace(/\s/g, '');
  if (strWithoutSpaces.length < 140 && strWithoutSpaces.length !== 0) {
    return `#${strWithoutSpaces}`;
  } else {
    return false;
  }
}

module.exports = generateHashtag;
