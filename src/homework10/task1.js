/**
 * Пользователь вводит текстовую строку. Определить с помощью регулярного выражения, является ли введённая строка: Датой.
 *
 * @returns {*}
 */
export function checkDate() {
  const date = `${prompt("date")}`;
  const regexp = /[0-3][0-9]\.(0[0-9]|1[0-2])\.[1-9][0-9]{3}/;
  return regexp.test(date);
}
