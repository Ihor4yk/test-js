/*
  Напишіть клас User для створення користувача з наступними властивостями:
  username - імя (рядок)
  age - вік (число)
  numberOfPosts - кількість постів (число)

  Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
  Добавте метод getInfo(), який повертає рядок:
  User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.
*/

// class User {
//   constructor({ username, age, numberOfPosts }) {
//     this.username = username;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//   }

//   getInfo() {
//     return `User ${this.username} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//   }
// }

// const mango = new User({ username: "Mango", age: 25, numberOfPosts: 6})

// console.log(mango);
// console.log(mango.getInfo());

// ==================================================================================
/*
  Напиши клас Storage який створює об'єкти для керування складом товарів.
  При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.

  Добавте методи класу:
  getItems() - повертає масив товарів
  addItem(item) - отримує новий товар та додає його до поточних
  removeItem(item) - отримує товар, і якщо він є, видаляє його з поточних
*/

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     const deleteIndex = this.items.indexOf(item);
//     if (deleteIndex !== -1) {
//       this.items.splice(deleteIndex, 1);
//     } else {
//       // console.log("Такого товару не має!");  //пишемо clg коли хочемо вивести рядок у консоль (виведення у консоль відбудеться якщо функція не знайде індекс елемента)

//       return  // виходимо з функції (функція припине своє виконання якщо не знайде індекс елемента)
//     }
//   }
// }

// const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
// console.log(items.getItems());

// items.addItem("Манго");
// console.log(items.getItems());

// items.removeItem("Ківі");
// items.removeItem("Яблуко");
// console.log(items.getItems());

// ==================================================================================
/*
  Створіть карточки товару з масиву використовуючи createElement.
*/

// import cars from "./date/cars.js"

// const listEl = document.querySelector(".js-goods");

// const elements = cars.map(({ name, img, price, description }) => {
//   const itemCar = document.createElement("li");
//   const titleCar = document.createElement("h2");
//   titleCar.textContent = name;
//   const imageCar = document.createElement("img");
//   imageCar.src = img;
//   imageCar.alt = name;
//   imageCar.width = 300;
//   const priceCar = document.createElement("p");
//   priceCar.textContent = price;
//   const textCar = document.createElement("p");
//   textCar.textContent = description;
//   itemCar.append(titleCar, imageCar, priceCar, textCar);
//   return itemCar;
// });
// console.log(elements);

// listEl.append(...elements)