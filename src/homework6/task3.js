/**
 * Напишите функцию pow(a, x), которая вернёт значение числа a, возведённого в степень x.
 *
 * @returns {*}
 */

export function pow(a, x) {
  let result = a;
  for (let i = 1; i < x; i++) {
    result *= a;
  }
  return result;
}
