/**
 * 3.*Написать программу, которая запрашивает у
 * пользователя ввод трёхзначного числа, а потом
 * выводит в консоль сумму цифр введённого числа.
 *
 * @param x
 * @returns {*}
 */

x = prompt('Input')

function sumNumber(x) {
    if (x.length != 3) {
        return "Некоррктные входные данные"
    }
    return Number(x.charAt(0)) + Number(x.charAt(1)) + Number(x.charAt(2));
}

console.log(sumNumber(x))