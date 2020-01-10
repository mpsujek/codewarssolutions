// http://codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x) {
  const text = x.filter(isEqualGood);

  if (text.length > 2) {
    return 'I smell a series!';
  }
  if (text.length >= 1) {
    return 'Publish!';
  } else {
    return 'Fail!';
  }
}


function isEqualGood(value) {
  return value === 'good';
}

module.exports = well;
