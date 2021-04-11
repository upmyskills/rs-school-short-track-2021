/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new Error('Not implemented');
  let prev = matrix[0] || [];
  let oneLine = [];

  const filterList = (arr, prevState) => arr.filter((_el, idx) => prevState[idx] !== 0);

  matrix.forEach((arr) => {
    oneLine = [...oneLine, ...filterList(arr, prev)];
    prev = arr;
  });

  const res = oneLine.reduce((a, b) => a + b, 0);
  return res;
}

// const matrix = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ];

getMatrixElementsSum([[0]]);

module.exports = getMatrixElementsSum;
