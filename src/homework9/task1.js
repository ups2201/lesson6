/**
 * Даны длины трёх сторон треугольника. Определить, является ли треугольник прямоугольным.
 *
 * @returns {*}
 */

export function isRightTriangle(a, b, c) {
  const array = [a, b, c];
  const max = Math.max(a, b, c);

  // получаем сумму квадратов катетов
  const sumLegs = array
    .filter((el) => el < max)
    .map((el) => el * el)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return max * max === sumLegs;
}
