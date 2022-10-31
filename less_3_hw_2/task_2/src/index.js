/*
  1. Напишите с помощью изученной конструкции try/catch простую валидацию инпута для числового значения. Если поле пустое,текстовое содержимое не является числом, или значение меньше 5 или больше 10 - пробросьте ошибку с соответствующим текстом, чтобы пользователю был понятен текст ошибки, вывподите текст ошибки в абзац под инпутом.
*/

let form = document.getElementById("form");
let resultMessage = document.getElementById("message");
let inputField = document.getElementById("field");

form.onsubmit = (e) => {
  e.preventDefault();

  let data = inputField.value;

  try {
    if (!data) throw new Error("Пожалуйста введите значение");
    if (+data < 5) throw new Error("Число меньше 5");
    if (+data > 10) throw new Error("Число больше 10");
    if (isNaN(+data)) throw new Error("не является числом");

    resultMessage.innerHTML = data;
  } catch (error) {
    resultMessage.innerHTML = data + " " + error.message;
  }
};
