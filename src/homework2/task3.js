/**
 * В переменных circle и square хранятся площади круга и квадрата соответственно. Написать программу, которая определяет, поместится ли круг в квадрат.
 *
 * @returns {*}
 */

export function isCircleInSquare(circle, square) {
  const squareHeight = Math.sqrt(square);
  const circleR = 2 * Math.sqrt(circle / Math.PI);

  return squareHeight >= circleR;
}
