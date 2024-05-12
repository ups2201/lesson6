/**
 * *В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ. Написать программу, которая определяет более молодого пользователя.
 *
 * @returns {*}
 */

export function minDate(date1, date2) {
  return getDate(date1) - getDate(date2) > 0 ? date1 : date2;
}

function getDate(date) {
  let [day, month, year] = date.split(".");
  return new Date(`${year}-${month}-${day}`);
}
