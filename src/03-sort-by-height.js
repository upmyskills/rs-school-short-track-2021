/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const neededNumbers = arr.filter((num) => num !== -1).sort((a, b) => a - b);
  const res = [];

  arr.forEach((el) => {
    if (el === -1) res.push(-1);
    if (el !== -1) res.push(neededNumbers.shift());
  });

  // console.log("my res: ", res);
  // console.log("sorted: ", neededNumbers);
  return res;
}

// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
// sortByHeight([4, 2, 9, 11, 2, 16]);
module.exports = sortByHeight;
