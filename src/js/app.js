import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const burgerBtn = document.querySelector("#burger-btn");
const burgerDrop = document.querySelector("#burger-dropdown");
const dropdownClass = "dropdown";

burgerBtn.addEventListener("click", () => {
  burgerDrop.classList.contains(dropdownClass)
    ? burgerDrop.classList.remove(dropdownClass)
    : burgerDrop.classList.add(dropdownClass);
});
