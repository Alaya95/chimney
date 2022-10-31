/*
  1 В приложенном архиве есть скрипт поиска информации по имени пользователя GitHub и ее отрисовка.
    - Исправить ошибку, что страница перезагружается и данные не отрисовываются. 
    - решить проблему, что вместо данных выводится undefined.
  2. Написать скрипт с помощью axios  для получения данных о пользователях. https://jsonplaceholde.typicode.com/posts
  3. Архив с домашним заданием https://disk.yandex.ru/d/AnDH_sRjZGMlNA
*/

const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`)
    .then((response) => response.json())
    .then(
      (data) =>
        (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`)
    );
});

const getUsers = async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  users.data.forEach((user) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <p>${user.name}</p>
        <p>${user.phone}</p>
        <p>${user.email}</p>
      `;
    resultsContainer.append(div);
  });
};

getUsers();
