/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new Error('Not implemented');
  const numbers = n.toString().split('').map((num, index, standart) => {
    const vault = [];
    for (let i = 0; i < standart.length; i++) {
      if (i !== index) vault.push(standart[i]);
    }
    return parseInt(vault.join(''), 10);
  });

  return Math.max(...numbers);
}

// deleteDigit(123);
module.exports = deleteDigit;
