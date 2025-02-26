/*
  Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів. Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".
*/

// const input = document.querySelector("#name-input");
// const title = document.querySelector("#name-output");

// input.addEventListener("input", handleInput);
// function handleInput(event) {
//   const inputValue = event.currentTarget.value.trim();
//   if (inputValue === "") {
//     title.textContent = "Anonymous";
//   } else {
//     title.textContent = inputValue;
//   }
// }

// ==================================================================================

const userName = document.querySelector("#name-input");
const outName = document.querySelector("#name-output");

userName.addEventListener("input", handleInput);
function handleInput(event) {
  const trimmedValue = event.currentTarget.value.trim();
  outName.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
}