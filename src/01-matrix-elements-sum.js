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
function getMatrixElementsSum(arr) {
  const n = arr.length;
  if (n === 0) return 0;
  if (!Array.isArray(arr[0])) return arr[0];
  const n2 = arr[0].length;
  let s = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n2; j++) {
      if (i === 0) { s += arr[i][j]; } else if (arr[i - 1][j] !== 0) { s += arr[i][j]; }
    }
  }
  return s;
}

module.exports = getMatrixElementsSum;
