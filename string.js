/*
 * @Author: KyleWang
 * @Date: 2020-05-17 20:19:12
 * @Last Modified by: KyleWang
 * @Last Modified time: 2020-05-17 20:42:12
 *
 * 《字符串相关的一些常用方法》
 */

/**
 * 去掉字符左右空格
 * @param {String} str 字符
 */
export const trimLeftOrRight = str => {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

/**
 * 判断字符是否包含某值
 * @param {String} str 字符
 * @param {String} value 字符
 */
export const include = (str, value) => {
  return str.includes(value)
}

/**
 * 判断字符是否以某个字符开头
 * @param {String} str 字符
 * @param {String} value 字符
 */
export const beginWith = (str, value) => {
  return str.indexOf(value) === 0
}

/**
 * 全局替换某个字符为另一个字符
 * @param {String} str 字符
 * @param {String} valueOne 包含的字符
 * @param {String} valueTwo 要替换的字符,选填
 */
export const replace = (str, valueOne, valueTwo) => {
  return str.replace(new RegExp(valueOne, 'g'), valueTwo)
}

/**
 * 将字母全部转化成大写
 * @param {String} str 字符
 */
export const toCapital = str => {
  return str.toUpperCase()
}

/**
 * 将字母全部转化成小写
 * @param {String} str 字符
 */
export const toLowercase = str => {
  return str.toLowerCase()
}

/**
 * 将字母全部转化成以大写开头
 * @param {String} str 字符
 */
export const toCapitalLetter = str => {
  const strOne = str.toLowerCase()
  return strOne.charAt(0).toUpperCase() + strOne.slice(1)
}