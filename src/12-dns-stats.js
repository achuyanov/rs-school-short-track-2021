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
function getDNSStats(arr) {
  let srt = [];
  arr.map(x=>x.split('.').reverse()).forEach(el=>{
    let len = el.length;
    srt.push(el[0]);
    if (len > 1) srt.push(el[0]+'.'+el[1]);
    if (len > 2) srt.push(el.join('.'));
  })
  srt = srt.map(x=>'.'+x);

  return srt.reduce((acc, val) => ({...acc,[val]: (acc[val] || 0) + 1 }), {});
}


console.log(getDNSStats(['epam.com', 'info.epam.com']));



module.exports = getDNSStats;
