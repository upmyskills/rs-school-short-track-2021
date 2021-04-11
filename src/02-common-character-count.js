/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  const findUs = new Set(str1.split(''));
  let res = 0;

  const chLencher = (str, ch) => [...str.matchAll(ch)].length;

  findUs.forEach((ch) => {
    const charactersInStr1 = chLencher(str1, ch);
    const charactersInStr2 = chLencher(str2, ch);

    res += Math.min(charactersInStr1, charactersInStr2);
  });

  return res;
}

// getCommonCharacterCount('aabcc', 'aasd');

module.exports = getCommonCharacterCount;
