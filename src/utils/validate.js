/**
 * @校验库
*/

/**
 * 数字
 * @value
*/
export const number = function (value) {
  return /^[0-9]*$/.test(value)
}

/**
 * 汉字
 * @value
*/
export const chinese = function (value) {
  return /^[\u4e00-\u9fa5]{0,}$/.test(value)
}

/**
 * 邮箱
 * @value
*/
export const email = function (value) {
  return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)
}

/**
 * 大陆手机号
 * @value
*/
export const mobile = function (value) {
  return /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(value)
}

/**
 * 大陆座机
 * @value
*/
export const phone = function (value) {
  return /^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$/.test(value)
}

/**
 * url
 * @url
*/
export const url = function (url) {
  return /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i.test(url)
}

/**
 * 身份证号码
 * @value
*/
export const idCard = function (value) {
  return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/.test(
    value
  )
}
