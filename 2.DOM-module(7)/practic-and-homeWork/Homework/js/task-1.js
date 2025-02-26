/*
  З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

  Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
  Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

  Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
  Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
*/

const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);

const titles = document.querySelectorAll("h2");
titles.forEach((title) => {
  console.log(`Category: ${title.textContent}`);

  const elements = title.parentElement.querySelectorAll("ul > li");
  console.log(`Elements: ${elements.length}`);
})