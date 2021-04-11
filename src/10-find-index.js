/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, val) {
  // throw new Error('Not implemented');
  // return arr.indexOf(val);
  let idx = 0;
  let len = arr.length;
  let mid;

  while (idx < len) {
    mid = Math.floor((idx + len) / 2);
    if (val <= arr[mid]) len = mid;
    else idx = mid + 1;
  }

  if (arr[idx] === val) return idx;
  return -1;
}

module.exports = findIndex;
