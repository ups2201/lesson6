/**
 * Запросите у пользователя дату в формате ДД.ММ.ГГГГ. Напишите программу, выводящую день недели по введённой дате.
 *
 * @returns {*}
 */

export function getDay() {
  const date = `${prompt("date in format 'ДД.ММ.ГГГГ'")}`;
  let [day, month, year] = date.split(".");
  const inputDate = new Date(`${year}-${month}-${day}`);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[inputDate.getDay()];
}
