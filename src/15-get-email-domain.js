/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(str) {
  // throw new Error('Not implemented');
  const regTmplt = /@([A-Z.0-9-]+)$/gi;

  const res = regTmplt.exec(str);
  return res[1];
}

getEmailDomain('prettyandsimple@example.com');
getEmailDomain('someaddress@yandex.ru');
getEmailDomain('very.unusual.@.unusual.com@usual.com');
getEmailDomain('admin@mailserver2.ru');
getEmailDomain('example-indeed@strange-example.com');

module.exports = getEmailDomain;
