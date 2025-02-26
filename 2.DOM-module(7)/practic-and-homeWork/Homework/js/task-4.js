/*
  Напиши скрипт управління формою логіна.

  - відправлення форми form.login-form повинна відбуватися за подією submit.
  - під час відправлення форми сторінка не повинна перезавантажуватися.
  - якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
  - якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
  - при сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/

const form = document.querySelector(".login-form");
const btn = document.querySelector("button")

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const emailValue = event.currentTarget.elements.email.value.trim();
  const passwordValue = event.currentTarget.elements.password.value.trim();
  
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const obj = { email: emailValue, password: passwordValue };
  console.log(obj);

  event.currentTarget.reset();
} 