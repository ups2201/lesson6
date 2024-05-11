/**
 * Вывести в консоль сумму всех целых чисел от 50 до 100.
 *
 * @param a
 * @param b
 * @returns {*}
 */
export function sumNumber(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }

  console.log(sum);
}
