/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(mac) {
  const macTemplate = /^([0-9A-F]{2}-)+([0-9A-F]){2}$/g;

  return mac.search(macTemplate) !== -1;
  // throw new Error('Not implemented');
}

// console.log(isMAC48Address('Z0-1B-63-84-45-E6'));
module.exports = isMAC48Address;
