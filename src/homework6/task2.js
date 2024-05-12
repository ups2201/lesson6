/**
 * Напишите функцию isWord, которая принимает на вход текстовую строку. Функция возвращает true, если строка состоит из одного слова и false, если из нескольких.
 *
 * @param word
 * @returns {*}
 */
export function isWord(word) {
  return word.split(" ").length === 1;
}
