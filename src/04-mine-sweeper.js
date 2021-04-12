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
function minesweeper(arr) {
  const sizeHor = arr[0].length;
  const sizeVert = arr.length;
  const ret = [];

  const calcCol = (i, j, o = false) => {
    let sum = 0;
    if (j > 0) sum += arr[i][j - 1];
    if (j < sizeHor - 2) sum += arr[i][j + 1];
    if (o) sum += arr[i][j];
    return sum;
  };

  const calcStr = (i, j) => {
    let sum = 0;
    if (i > 0) sum += calcCol(i - 1, j, true);
    if (i < sizeVert - 2) sum += calcCol(i + 1, j, true);
    sum += calcCol(i, j, false);
    return sum;
  };

  for (let i = 0; i < sizeVert; i++) {
    const strArr = [];
    for (let j = 0; j < sizeHor; j++) strArr.push(calcStr(i, j));
    ret.push(strArr);
  }
  return ret;
}

module.exports = minesweeper;
