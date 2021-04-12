/**
 * Given a sorted array, find the index of the element with the given val.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} val
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, val) {
  let start = 0;
  let end = array.length;
  let pos = Math.floor(end / 2);

  while (pos >= 0) {
    if (array[pos] === val) return pos;
    if (val < array[pos]) {end = pos} else {start = pos}
    pos = Math.floor((start + end) / 2);
  }

  return pos;
}

module.exports = findIndex;
