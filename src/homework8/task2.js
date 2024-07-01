/**
 * Написать программу, которая выводит в консоль количество минут, прошедшее с начала сегодняшнего дня.
 * @returns {*}
 */
export function getMinute() {
  const date = new Date();
  return date.getHours() * 60 + date.getMinutes();
}
