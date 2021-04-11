/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  let res = '';
  let prev = str[0];
  let count = [];

  if (str === '') return '';

  for (let i = 0; i < str.length; i++) {
    if (prev === str[i]) {
      count.push(str[i]);
    } else {
      prev = str[i];
      if (count.length > 1) {
        res += count.length + str[i - 1];
      } else {
        res += str[i - 1];
      }
      count = [prev];
    }
  }
  if (count.length > 1) { res += count.length + prev; } else { res += prev; }
  return res;
}

module.exports = encodeLine;
