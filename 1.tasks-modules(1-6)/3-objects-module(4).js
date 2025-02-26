/*
  Напиши скрипт, який для об'єкта user, послідовно:
  - додає поле mood зі значенням 'happy'
  - замінює значення hobby на 'skydiving'
  - замінює значення premium на false
  - виводить вміст об'єкта user у форматі ключ:значення використовуючи 
  Object.keys() та for...of
 */

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// }

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`)
// }

// console.log(keys);

// ======================================================================

/*
  У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
  підсумовування всіх зарплат і збережіть результат у змінній sum.
  Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
*/

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: "130",
// };

// let sum = 0;

// const salariesArr = Object.values(salaries);
// for (const value of salariesArr) {
//   sum += Number(value)
// }

// console.log(sum);

// ===========================================================================

//  Отримуємо імена тільки тих друзів, які зараз онлайн

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: false },
//   { name: "Ajax", online: true },
// ];

// function getOnlineFriends(allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       names.push(friend.name)
//     }
//   }
//   return names
// }

// console.log(getOnlineFriends(friends));

// ===========================================================================

/*
  Напишіть функцію calcTotalPrice(stones, stoneName),
  яка приймає масив об'єктів та рядок з назвою каменю.
  Функція рахує і повертає загальну вартість каміння з
  таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stoneName.toLowerCase() === stone.name.toLowerCase()) {
//       return stone.quantity * stone.price;
//     }
//   }
//   return "Такого каменя немає на складі!"
// }

// console.log(calcTotalPrice(stones, "смарагд"));
// console.log(calcTotalPrice(stones, "Діамант"));
// console.log(calcTotalPrice(stones, "Сапфір"));
// console.log(calcTotalPrice(stones, "щебінь"));
// console.log(calcTotalPrice(stones, "Алмаз"));

// ===========================================================================

// const playlist = {
//   name: "My amazing playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],

//   changeName(newName) {
//     this.name = newName;
//   },

//   addTrack(track) {
//     this.tracks.push(track)
//   },

//   updateRating(newRating) {
//     this.rating = newRating
//   },

//   getTrackCount() {
//     // console.log(this.tracks.length); //розкоментувати(закоментувати)
//     return this.tracks.length;          //закоментувати(розкоментувати)
//   },
// };

// playlist.changeName("New playlist name");

// playlist.addTrack("new track 1");
// playlist.addTrack("new track 2");

// playlist.updateRating(4);

// // playlist.getTrackCount();            //розкоментувати(закоментувати)
// console.log(playlist.getTrackCount());  //закоментувати(розкоментувати)

// console.log(playlist);

// ===========================================================================

// const TRANSACTIONS = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   balance: 0,
//   transactions: [],

//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.transactions.length + 1,
//     }
//   },

//   deposit(amount) {
//     amount = Number(amount);

//     if (isNaN(amount)) {
//       console.error("❌Ваша сума не є числовим значенням!");
//       return;
//     }

//     if (amount <= 0) {
//       console.error("❌Неможливо зачислити суму меншу або рівну нулю!");
//       return;
//     }

//     this.balance += amount;
//     console.log(`✔️Баланс успішно поповнено на ${amount} грн. Поточний баланс: ${this.balance} грн.`);

//     const transaction = this.createTransaction(amount, TRANSACTIONS.DEPOSIT);

//     this.transactions.push(transaction);
//   },


//   withdraw(amount) {
//     amount = Number(amount);

//     if (isNaN(amount)) {
//       console.error("❌Ваша сума не є числовим значенням!");
//       return;
//     }

//     if (amount <= 0) {
//       console.error("❌Неможливо зняти суму меншу або рівну нулю!");
//       return;
//     }

//     if (amount > this.balance) {
//       console.error(`❌Недостатньо грошей на рахунку. Поточний баланс: ${this.balance}`);
//       return;
//     }

//     this.balance -= amount;
//     console.log(`✔️Успішно було знято ${amount} грн. Поточний баланс: ${this.balance} грн.`);

//     const transaction = this.createTransaction(amount, TRANSACTIONS.WITHDRAW);

//     this.transactions.push(transaction);
//   },

//   getBalance() {
//     return this.balance
//   },

//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (id === transaction.id) {
//         return transaction;
//       }
//     }
//     return "❌Немає такого об'єкта транзакції по id!"
//   },

//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (type === transaction.type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// account.deposit(200);
// account.deposit(200);
// account.deposit(-20);
// account.deposit("hello");

// account.withdraw(100);
// account.withdraw(-100);
// account.withdraw("world");
// account.withdraw(200);

// console.log(account.getBalance());

// console.log(account.getTransactionDetails(3));
// console.error(account.getTransactionDetails(5));

// console.log(account.getTransactionTotal(TRANSACTIONS.DEPOSIT));
// console.log(account.getTransactionTotal(TRANSACTIONS.WITHDRAW));

// console.log(account);

// ===========================================================================

/*
  Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

  Функція оголошує два параметри:

  products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість   цих товарів. Наприклад, { apples: 2, grapes: 4 }.
  containerSize — число, максимальна кількість одиниць товарів, яку в себе може   вмістити контейнер.
  Функція має повернути результат перевірки, чи помістяться всі товари в контейнер.   Тобто порахувати загальну кількість товарів в об’єкті products і повернути true,  якщо вона менше або дорівнює containerSize, і false, якщо ні.

  Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її  роботи. У консоль будуть виведені результати її викликів.
*/

// function isEnoughCapacity(products, containerSize) {
//   let totalProducts = 0;
//   const values = Object.values(products);

//   for (const value of values) {
//     totalProducts += value;
//   }

//   if (totalProducts <= containerSize) {
//     return true;
//   }
//   return false
// }

// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false

// ===========================================================================

/*
  Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення  кількості калорій, які спортсмен споживав протягом тижня. 
  Функція очікує один  параметр: days — масив об’єктів. Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день. 
  Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. 
  У консоль будуть виведені результати її викликів.
*/

// function calcAverageCalories(days) {
//   if (days.length === 0) {
//     return 0;
//   }

//   let totalCalories = 0;
//   for (const day of days) {
//     totalCalories += day.calories;
//   }
//   return totalCalories / days.length;
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0

// ===========================================================================

/*
  Об’єкт profile описує профіль користувача на ігровій платформі. 
  У його властивостях зберігається ім’я профілю username 
  та кількість активних годин playTime, проведених у грі.

  Доповни об’єкт profile методами для роботи з його властивостями.

  Метод changeUsername(newName) повинен приймати рядок (нове ім’я) в параметр newName та змінювати значення властивості username на нове. Нічого не повертає.
  Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours та збільшити на нього значення властивості playTime. Нічого не повертає.
  Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!, де <Username> — це ім’я профілю, а <amount> — кількість ігрових годин.
  Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
*/

// const profile = {
//   username: "Jacob",
//   playTime: 300,

//   changeUsername(newName) {
//     this.username = newName;
//   },

//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },

//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`
//   },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// console.log(profile);