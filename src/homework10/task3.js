/**
 * Пользователь вводит текстовую строку. Определить с помощью регулярного выражения, является ли введённая строка: Номером телефона.
 *
 * @returns {*}
 */
export function checkPhone() {
  const phone = `${prompt("phone")}`;
  const regexp = /^(\+\d+|8) ?\(?\d{3}\)? ?\d{3}([ -]|)?\d{2}(\2)?\d{2}$/;
  return regexp.test(phone);
}
