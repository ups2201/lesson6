/**
 * *Запросить у пользователя ввод числа N. Вывести в консоль среднее арифметическое всех нечётных чисел от 1 до N.
 *
 * @returns {*}
 */

export function sum() {
  const n = `${prompt("Input")}`;
  let sum = 0;
  let count = 0;
  let i = 1;
  while (i <= n) {
    if (i % 2 === 1) {
      count++;
      sum += i;
    }
    i++;
  }

  console.log(sum / count);
}
