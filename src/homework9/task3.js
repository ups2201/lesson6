/**
 * Пользователь вводит числа a, b и c. Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.
 *
 * @returns {*}
 */

export function getX(a, b, c) {
  const d = b * b - 4 * a * c;

  if (d < 0) {
    console.log("Корней нет");
    return;
  }

  const x1 = (-b - Math.sqrt(d)) / (2 * a);
  const x2 = (-b + Math.sqrt(d)) / (2 * a);

  if (d === 0) {
    console.log(x1);
    return;
  }

  console.log(x1, x2);
}
