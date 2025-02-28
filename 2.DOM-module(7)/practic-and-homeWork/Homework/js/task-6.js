/*
  Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

  Є input, у який користувач вводить бажану кількість елементів. 
  Після натискання на кнопку Create має рендеритися (додаватися в DOM)
  колекція з відповідною кількістю елементів і очищатися значення в інпуті. 
  При повторному натисканні на кнопку Create поверх старої колекції 
  має рендеритись нова. 
  Після натискання на кнопку Destroy колекція елементів має очищатися.

  Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

  Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

  Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount. Усі ці <div> мають додаватися за одну операцію у DOM дочірніми елементами для div#boxes.

  Розміри першого <div> елемента мають бути 30px на 30px.
  Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
  Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

  Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const input = document.querySelector('input');
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  const numberOfDivs = parseInt(input.value);
  if (!isNaN(numberOfDivs) && numberOfDivs >= 1 && numberOfDivs <= 100) {
    destroyBoxes();
    createBoxes(numberOfDivs);
    input.value = "";
  }
});

function createBoxes(amount) {
  boxes.innerHTML = "";
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", newDiv);
    boxSize += 10;
  }
}

buttonDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
}