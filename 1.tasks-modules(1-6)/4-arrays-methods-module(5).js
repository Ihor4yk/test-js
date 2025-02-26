/*
                  Метод forEach(callback) => forEach((value, index, array) => {})
                  - Поелементо перебирає оригінальний масив;
                  - Нічого не повертає;
                  - Замінює класичний for, якщо не потрібно переривати цикл

                  Метод forEach викликається на масиві і приймає в якості єдиного аргументу колбек функцію (value, index, array). 
                  Ця колбек фукнція приймає 3 парметри (поточний елемент (value), індекс (index), масив (array)) і колбек функція викликається на кожному елементі масиву по черзі.
*/

// const numbers = [5, 10, 15, 20, 25];
// let total = 0;

// numbers.forEach((value) => total += value)

// console.log(total);

// ----------------------------------------------------------------------------------
/*
  Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

  function logItems(items) {
    // console.log(items);
    for (let i = 0; i < items.length; i += 1) {
      console.log(`${i + 1} - ${items[i]}`);
    }
  }
*/

// // function logItems(items) {
// //   items.forEach((value, index) => console.log(`${index + 1} - ${value}`))
// // }

// const logItems = (items) =>
//   items.forEach((value, index) => console.log(`${index + 1} - ${value}`));

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// ----------------------------------------------------------------------------------
/*
  Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

  function printContactsInfo({ names, phones }) {
    const nameList = names.split(",");
    const phoneList = phones.split(",");
    console.log(phoneList);
    for (let i = 0; i < nameList.length; i += 1) {
      console.log(`${nameList[i]}: ${phoneList[i]}`);
    }
  }
*/

// const printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   nameList.forEach((value, index) => console.log(`${value}: ${phoneList[index]}`));
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// ==================================================================================
/*
  Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

  function calculateAverage(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total / args.length;
  }
*/

// const calculateAverage = (...args) => {
//   let total = 0;
//   args.forEach((value) => total += value);
//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// ==================================================================================
/*
                            Метод map(callback) => map((value, index, array) => {})
                            
                            Array.prototype.map()
                            - Поелементо перебирає оригінальний масив;
                            - Не змінює оригінальний масив;
                            - Повертає новий масив такої ж довжини;

                            Суть цього методу - повернути новий масив, кожен елемент якого ви зміните за допомогою умови колбек функції.
*/

// const numbers = [1, 2, 3, 4, 5];
// const modNumbers = numbers.map((value) => (value + 10) * 2) // те, що ви повертаєте на кожній ітерації колбек функції - стає новим елементом масиву

// console.log(numbers)
// console.log(modNumbers)

// ----------------------------------------------------------------------------------

// const allCars = [
//   { make: "Honda", model: "CR-V", amount: 14, price: 24045 },
//   { make: "Honda", model: "Accord", amount: 2, price: 22455 },
//   { make: "Mazda", model: "Mazda 6", amount: 8, price: 24195 },
//   { make: "Mazda", model: "CX-9", amount: 7, price: 31520 },
//   { make: "Toyota", model: "4Runner", amount: 19, price: 34210 },
//   { make: "Toyota", model: "Sequoia", amount: 16, price: 45560 },
//   { make: "Toyota", model: "Tacoma", amount: 4, price: 24320 },
//   { make: "Ford", model: "F-150", amount: 11, price: 27110 },
//   { make: "Ford", model: "Fusion", amount: 13, price: 22120 },
//   { make: "Ford", model: "Explorer", amount: 6, price: 31660 },
// ];

/*
  Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
*/

// const getModels = (cars) => cars.map((car) => car.model);

// console.log(getModels(allCars));

/*
  Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
  значенням властивості price залежно від переданої знижки.
*/

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));

// console.log(makeCarsWithDiscount(allCars, 0.2));
// console.log(makeCarsWithDiscount(allCars, 0.4));

// ----------------------------------------------------------------------------------

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];
// console.table(players);

/*
  Збільшуємо кількість годин гравця на 100 за id.
*/

// const playerIdToUpdate = "player-5";

// const updatePlayers = players.map((player) => {
//   if (player.id === playerIdToUpdate) {
//     return { ...player, timePlayed: player.timePlayed + 100 };
//   }
//   return {...player};
// });

// console.log(updatePlayers);

// ==================================================================================
/*
                                  Метод flatMap()
                                  працює так само як метод map(), 
                                  але з двовимірними масивами (матрицями), 
                                  дістаючи вкладеність 
*/

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const tagsArr = tweets.flatMap((tweet) => tweet.tags);

// console.log(tagsArr);

// ----------------------------------------------------------------------------------

// const arr = [
//   ["js", "nodejs"],
//   ["js", "nodejs"],
//   ["js", "nodejs"],
//   ["js", "nodejs", ["js", "nodejs", ["js", "nodejs"]]],
// ];

// console.log(arr)
// console.log(arr.flat(3)) // метод flat() дістає вкладеність масивів!

// ==================================================================================
/*
                        Метод filter
                        - Поелементно перебирає оригінальний массив
                        - Повертає новий масив (з елементами або порожній)
                        - Додає в масив, що повертається, елементи, 
                        які задовольняють умові коллбек-функції
                        - Якщо коллбек повернув true елемент додається в масив, 
                        що повертається
                        - Якщо коллбек повернув false елемент НЕ додається в масив, 
                        що повертається
*/

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter((number) => number <= 10);

// console.log(filteredNumbers);

// ----------------------------------------------------------------------------------

// const allCars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

/*
  Нехай функція filterByPrice повертає масив автомобілів 
  ціна яких менша ніж значення параметра threshold.
*/

// const filterByPrice = (cars, threshold) =>
//   cars.filter((car) => car.price < threshold);

// console.table(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));

/*
  Нехай функція getCarsOnSale повертає масив автомобілів
  властивість onSale яких true.
*/

// const getCarsOnSale = (cars) => cars.filter((car) => car.onSale);

// console.table(getCarsOnSale(allCars));

/*
  Нехай функція getCarsWithType повертає масив автомобілів 
  тип яких збігається зі значенням параметра type.
*/

// const getCarsWithType = (cars, type) => cars.filter((car) => car.type === type);

// console.table(getCarsWithType(allCars, "suv"));
// console.table(getCarsWithType(allCars, "sedan"));

// ==================================================================================
/*
                                          Метод find(() =>)
                                          - Поелементно перебирає оригінальний масив
                                          - Повертає перший елемент, що задовольняє умові або undefined.
*/

// const numbers = [5, 7, 8, 10, 60, 15, 20, 25];

// const number = numbers.find((number) =>
//   number % 2 === 0 && number % 5 === 0);

// console.log(number);

// ----------------------------------------------------------------------------------

// const allCars = [
//   { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//   { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//   { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//   { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//   { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
//   { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
//   { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//   { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//   { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
// ];

/*
  Шукаємо машину за моделлю.
*/

// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(allCars, "F-150"));
// console.log(getCarByModel(allCars, "CX-9"));
// console.log(getCarByModel(allCars, "Cauenne"));

/*
  Шукаємо машину за типом кузова.
*/

// const getCarByType = (cars, type) => cars.find((car) => car.type === type);

// console.log(getCarByType(allCars, "sedan"));
// console.log(getCarByType(allCars, "truck"));
// console.log(getCarByType(allCars, "tank"));

// ==================================================================================
/*
                                Методи every(() =>) та some(() =>).
                                - Поелементно перебирають оригінальний масив
                                - Метод every повертає true якщо всі елементи масиву задовольняють умову.
                                - Метод some повертає true якщо хоча б один елемент масиву задовольняє умову.
*/

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 490, points: 92, online: false },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: false },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

// const isAllOnline = players.every((player) => player.online);
// console.log(isAllOnline);

// const isAnyOnline = players.some((player) => player.online);
// console.log(isAnyOnline);

/*
  Чи є у нас хоча б один гравець котрий грає більше 400 годин.
*/

// const anyHardcorePlayers = players.some((player) => player.timePlayed > 400);
// console.log(anyHardcorePlayers);

// ==================================================================================
/*
      Метод reduce((зовнішня змінна, value, index, array) => {}, початковий acumulator  = 0)
      - Поелементно перебирає оригінальний масив
      - Значення, що повертається, залежить від розробника
      - reduce завжди повертає в якості результату своєї роботи останнє значення  аккумулятору
      - Аккумулятор отримує своє значення в результаті того, що повернула вам колбек фукнція редьюсу на попередній ітерації
      - Аккумулятор - це просто зовнішня змінна, яка існує за межами нашого циклу.  Саме тому вона доступна на кожній ітерації
*/

// const numbers = [5, 10, 15, 20, 25];

//* without reduce
// let total = 0;

// for (const num of numbers) {
//   total += num;
// }

// console.log(total);

//* with reduce

// const totalSum = numbers.reduce((total, num) => total + num, 0);

/*
  1. numbers.reduce((total = 0, num = 5) => total + num, 0) // 0 + 5
  2. numbers.reduce((total = 5, num = 10) => total + num, 0) // 5 + 10 = 15
  3. numbers.reduce((total = 15, num = 15) => total + num, 0) // 15 + 15 = 30
  4. numbers.reduce((total = 30, num = 20) => total + num, 0) // 30 + 20 = 50
  5. numbers.reduce((total = 50, num = 25) => total + num, 0) // 50 + 25 = 75
*/

// console.log(totalSum);

// ----------------------------------------------------------------------------------
/*
  Рахуємо загальну зарплату.
*/

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary =
//   Object.values(salary).reduce((total, salary) => total + salary, 0);

// console.log(totalSalary);

// ----------------------------------------------------------------------------------
/*
  Рахуємо загальну кількість годин.
*/

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const totalTimePlayed =
//   players.reduce((total, player) => total + player.timePlayed, 0);

// console.log(totalTimePlayed);

// ----------------------------------------------------------------------------------
/*
  Рахуємо загальну суму товарів кошика.
*/

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount =
//   cart.reduce((total, product) => total + product.quantity * product.price, 0);

// console.log(totalAmount);

// ----------------------------------------------------------------------------------
/*
  Ця вункція повинна повернути масив з обєктами [{}, {}, {}, {}].
  Використовуй метод reduce(() => , [])

  const printContactsInfo = ({ names, phones }) => {
  const nameList = names.split(",");
  const phoneList = phones.split(",");
  nameList.forEach((value, index) => console.log(`${value}: ${phoneList[index]}`));
}
*/

// const printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");

//   const contactsDataArr = nameList.reduce((contactsData, name, i) => {
//     contactsData.push({ name, phone: phoneList[i] });
//     return contactsData;
//   }, []);
//   return contactsDataArr;
// };

// console.log(
//   printContactsInfo({
//     names: "Jacob,William,Solomon,Artemis",
//     phones: "89001234567,89001112233,890055566377,890055566300",
// }));

// ==================================================================================
/*
                                          Метод toSorted
                                          - Свій порядок сортування чисел
                                          - Свій порядок сортування рядків
                                          - Сортування об'єктів
                                          За замовчуванням:
                                          - сортує за зростанням
                                          - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
*/

// const numbers = [1, 9, 6, 2, 3, 11];

// // const sorted = numbers.toSorted((a, b) => a - b); // за зростанням
// const sorted = numbers.toSorted((a, b) => b - a); // за спаданням
// console.log("sorted ", sorted);

// const letters = ["b", "B", "a", "A"].toSorted((a, b) => a.localeCompare(b)); // за зростанням
// const letters = ["b", "B", "a", "A"].toSorted((a, b) => b.localeCompare(a)); // за спаданням

// console.log("letters", letters);

// ----------------------------------------------------------------------------------

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

/*
  Сортування масиву об'єктів за ігровим часом.
*/

// const sortedByBestPlayers =
//   players.toSorted((aPlayer, bPlayer) => bPlayer.timePlayed - aPlayer.timePlayed);
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers =
//   players.toSorted((aPlayer, bPlayer) =>
//     aPlayer.timePlayed - bPlayer.timePlayed);
// console.table(sortedByWorstPlayers);

/*
  Сортування масиву об'єктів за іменем першої букви.
*/

// const byName =
//   players.toSorted((aPlayer, bPlayer) =>
//     aPlayer.name[0].localeCompare(bPlayer.name[0]));

// console.table(byName);

// ==================================================================================
/*
                                        Ланцюжки методів (сhaining).
*/

// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter((num) => num > 2);
// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map((num) => num * 3);
// console.log(multByThree);

// const sorted = multByThree.toSorted((a, b) => b - a);
// console.log(sorted);

// const sortedbyChaining = numbers
//   .filter((num) => num > 2)
//   .map((num) => num * 3)
//   .toSorted((a, b) => b - a);

// console.log(sortedbyChaining);

// ----------------------------------------------------------------------------------

// const allCars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

/*
  Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
  але тільки тих, які зараз на розпродажі.
*/

// const getAvailableCarNames = (cars) =>
//   cars.filter((car) => car.onSale).map((car) => car.model);

// console.table(getAvailableCarNames(allCars));

/*
  Нехай функція getSortedCarsOnSale повертає масив автомобілів
  на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
*/

// const getSortedCarsOnSale = (cars) => cars
//   .filter((car) => car.onSale)
//   .toSorted((aCar, bCar) => aCar.price - bCar.price)

// console.table(getSortedCarsOnSale(allCars));

// ==================================================================================

