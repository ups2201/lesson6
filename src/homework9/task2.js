/**
 * Пользователь вводит число R. Написать программу, которая выведет в консоль длину окружности и площадь круга с радиусом R.
 * @returns {*}
 */
export function getLengthAndArea(r) {
  const length = 2 * Math.PI * r;
  const area = Math.PI * r * r;
  console.log(length, area);
}
