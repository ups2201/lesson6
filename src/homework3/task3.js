/**
 * *Запросить у пользователя ввод числа N. Вывести в консоль среднее арифметическое всех нечётных чисел от 1 до N.
 *
 * @returns {*}
 */

export function sum() {
  const n = `${prompt("Input")}`;
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= n; i = i + 2) {
    sum += i;
    count++;
  }

  console.log(sum / count);
}
