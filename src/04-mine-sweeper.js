/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new Error('Not implemented');
  const res = [];

  for (let i = 0; i < matrix.length; i++) {
    const line = matrix[i].map((el, j) => {
      const arr = [];
      let count = 0;

      arr.push(matrix[i][j - 1]);
      arr.push(matrix[i][j + 1]);

      if (matrix.length - 1 > i) {
        arr.push(matrix[i + 1][j]);
        arr.push(matrix[i + 1][j + 1]);
        arr.push(matrix[i + 1][j - 1]);
      }

      if (i > 0) {
        arr.push(matrix[i - 1][j]);
        arr.push(matrix[i - 1][j + 1]);
        arr.push(matrix[i - 1][j - 1]);
      }

      count = arr.filter((e) => e).length;
      return count;
    });

    res.push(line);
  }

  return res;
}

minesweeper(
  [
    [false, false],
    [true, false],
    [true, false],
  ],
);
module.exports = minesweeper;
