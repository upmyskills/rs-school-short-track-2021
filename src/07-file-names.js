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
function renameFiles(fileNamesList) {
  const filesDB = {};
  const resArr = fileNamesList.map((name) => {
    if (Object.keys(filesDB).includes(name)) {
      filesDB[name] += 1;
      filesDB[`${name}(${filesDB[name]})`] = 0;
    } else {
      filesDB[name] = 0;
    }

    return filesDB[name] === 0 ? `${name}` : `${name}(${filesDB[name]})`;
  });

  return resArr;
  // throw new Error('Not implemented');
}

// renameFiles(["file", "file", "image", "file(1)", "file"]);
module.exports = renameFiles;
