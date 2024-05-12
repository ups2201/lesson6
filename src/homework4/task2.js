/**
 * Создать копию объекта user с именем admin. Добавить новому объекту поле role со значением ‘admin’.
 *
 * @returns {*}
 */
export let user = { name: "John" };

export function cloneObject() {
  const clone = Object.assign(user, { name: "admin", role: "admin" });
  return clone;
}
