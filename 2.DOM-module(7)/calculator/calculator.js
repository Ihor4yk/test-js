/*
                Задачі, які задають на співбесідах

  1.Напишіть калькулятор, який буде рахувати ціну шашлика, в залежності від ціни за кілограм і кількості купленого продукту, і буде виводити результат на екран.

  2.Перепишіть код, щоб значення ми отримували по кліці на кнопку, при натисканні якого, буде вам рахувати та виводити результат на екран.

  3.Напишіть рандомний колір для нашої форми калькулятора 
  за допомогою інлайнового стилю.
*/

// -------------------1.2.----------------------------

// const formEl = document.querySelector(".form");
// const price = document.querySelector("#price");
// const amount = document.querySelector(".amount");
// const quantity = document.querySelector("#quantity");
// const total = document.querySelector(".total")

// formEl.addEventListener("submit", calculator);
// function calculator(event) {
//   event.preventDefault();
//   const priceValue = price.value;
//   const quantityValue = quantity.value;
//   const totalPrice = priceValue * quantityValue;
//   amount.textContent = quantityValue;
//   total.textContent = totalPrice;
// }

// formEl.addEventListener("input", handleInput);
// function handleInput() {
//   const quantityValue = quantity.value;
//   amount.textContent = quantityValue;
// }

// // ----------------------3.----------------------------

// const container = document.querySelector(".container")

// const randomRgbColor = () => {
//   const r = Math.floor(Math.random() * 256); // 0-255
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// };

// const color = randomRgbColor();
// container.style.backgroundColor = color;

// ==================================================================================
/*
  1. Масив, потрібно створити розмітку із тих карток (використайте шаблонний рядок).
  2. Добавте кнопку, через яку ми куплятимемо товар.
*/
// const instruments = [
//   {
//     id: 1,
//     img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
//     name: "Молоток",
//     price: 150
//   },
//   {
//     id: 2,
//     img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
//     name: "Перфоратор",
//     price: 3000
//   }, {
//     id: 3,
//     img: "https://content2.rozetka.com.ua/goods/images/big_title/232653359.jpg",
//     name: "Рівень",
//     price: 2000
//   },
// ]

// const list = document.querySelector(".js-list");

// const createMarkup = instruments.map(({ id, img, name, price }) => `
//   <li>
//     <img src="${img}" data-id="${id}" alt="${name}" width="300">
//     <h2>${name}</h2>
//     <p>${price}</p>
//     <button type="button" data-id="${id}">Купити товар</button>
//   </li>
// `).join("");
// list.insertAdjacentHTML("beforeend", createMarkup);

// ==================================================================================
/*
  Потрібно створити функцію, яка буде шукати Нарциса. 
  Головна умова, Нарциса знають усі, Нарцис не знає нікого.
  - є елемент масиву, який незнає нікого.
  - якщо не одна така людина, то повертаємо not found.
  - якщо один, то перевірити, чи його знають усі люди. 
  Якщо так то повертаємо found.
*/

const people1 = [
  {
    name: 'Alex',
    know: ["Eva", "Jhon"],
  },
  {
    name: 'Ivan',
    know: ["Eva", "Jhon"],
  },
  {
    name: 'Alex',
    know: ["Eva", "Jhon"],
  },
  {
    name: 'Alex',
    know: ["Eva", "Jhon"],
  },
]

const people2 = [
  {
    name: 'Alex',
    know: ["Eva", "Jhon"],
  },
  {
    name: 'Ivan',
    know: ["Jhon", "Alex"],
  },
  {
    name: 'Eva',
    know: ["Alex", "Jhon"],
  },
  {
    name: 'Jhon',
    know: [],
  },
]

const people3 = [
  {
    name: 'Alex',
    know: ["Eva", "Jhon"],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ["Alex", "Jhon"],
  },
  {
    name: 'Ivan',
    know: ["Jhon", "Alex"],
  },
]