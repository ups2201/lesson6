/**
 * Пользователь вводит текстовую строку. Определить с помощью регулярного выражения, является ли введённая строка: Адресом электронной почты.
 *
 * @returns {*}
 */
export function checkEmail() {
  const email = `${prompt("Email")}`;
  const regexp = /[a-zA-Z_.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;
  return regexp.test(email);
}
