/**
 * Запросить у пользователя ввод числа. Записать введенное значение в поле age объекта user.
 *
 * @returns {*}
 */

export let user = { name: "John" };

export function addPropertyAge() {
  user["age"] = `${prompt("Input age value")}`;
  return user;
}
