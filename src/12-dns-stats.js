/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainNames = [...domains];
  const output = {};

  const checker = (domain) => {
    domain.split('.').reverse().forEach((element, index, tmp) => {
      const findTmp = `.${tmp.slice(0, index + 1).join('.')}`;
      output[findTmp] = output[findTmp] ? output[findTmp] += 1 : output[findTmp] = 1;
    });
  };

  domainNames.forEach((domain) => checker(domain));
  // throw new Error('Not implemented');
  return output;
}

module.exports = getDNSStats;
