/**
 * Выведите в консоль сумму всех элементов массива.
 * Создайте новый массив на основе исходного, в котором каждый элемент будет вдвое больше элемента исходного массива с таким же индексом. (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый массив).
 * *Найдите и выведите в консоль наибольший и наименьший элементы исходного массива.
 *
 * @returns {*}
 */

export const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function sumArray() {
  let sum = 0;
  array.forEach((el) => (sum += el));
  return sum;
}

export function cloneAndModify() {
  return array.map((el) => el * 2);
}

export function maxAndMinValue() {
  const max = Math.max(...array);
  const min = Math.min(...array);
  console.log(max, min);
}
