/**
 * Записать все значения полей объекта admin в отдельные переменные. Имена переменных должны совпадать с названиями полей.
 *
 * @returns {*}
 */
export let user = { name: "admin", role: "admin" };

export function parseObject() {
  let { name, role } = user;
  console.log(name, role);
}
