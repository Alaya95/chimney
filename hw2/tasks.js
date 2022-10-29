/*Задание 1. Удалите из массива дубликаты */
let arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7];

arr = Array.from(new Set(arr));

/* Задание 2. Объедините 2 объекта в один*/
const obj1 = { id: 1, name: "userName" };
const obj2 = { id: 1, password: "qwerty" };
const obj3 = { ...obj1, ...obj2 };

/* Задание 3. Сократите объявление функции в одну строку с помощью ES6 */

const add = function (x, y) {
  return x + y;
};
const shortAdd = (x, y) => x + y;

/* Задание 4. Напишите функцию с помощью которой можно будет выполнить различные действия с задержкой */
const sleep = (ms) => {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
};

sleep(5000).then(() => {
  console.log("Выполнилось через 5 секунд");
});
