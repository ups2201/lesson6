/**
 * 3.*Написать программу, которая запрашивает у
 * пользователя ввод трёхзначного числа, а потом
 * выводит в консоль сумму цифр введённого числа.
 *
 * @returns {*}
 */

export function sumNumber() {
  const x = `${prompt("Input")}`;
  console.log(Number(x.charAt(0)) + Number(x.charAt(1)) + Number(x.charAt(2)));
}
