/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(array) {
  const addDuplicateIndex = (arr, el, pos) => {
    const tst = arr.slice();
    let idx = 1;
    tst[pos] = '';
    tst.forEach((name, i) => {
      if (name === el) {
        // eslint-disable-next-line no-param-reassign
        arr[i] += `(${idx})`;
        idx += 1;
      }
    });
    return true;
  };

  array.forEach((el, i) => addDuplicateIndex(array, el, i));

  return array;
}

module.exports = renameFiles;
