/*
  Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
  розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
  кількістю з властивості stones.
*/

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const searchStone = this.stones.find((stone) => stone.name === stoneName);

//     if (searchStone) {
//       return searchStone.quantity * searchStone.price;
//     }

//     return 0;
//   },
// }

// console.log(chopShop.calcTotalPrice("Diamond"));
// console.log(chopShop.calcTotalPrice("Diamondfsdfsd"));

// ==================================================================================

/*
  Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
  - email - пошта, рядок
  - age - вік, число
  - numberOfPosts - кількість постів, число
  - topics - масив тем на яких спеціалізується блогер

  Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

  - Додай метод getInfo(), який, повертає рядок: Blogger ${email} is ${age} years old  and has ${numPosts} posts.
  - Додай метод updatePostCount(value), який у параметрі value приймає кількість  постів, які потрібно додати користувачеві.
*/

// class Blogger {
//   constructor({ email, age, numberOfPosts, topics }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics
//   }

//   getInfo() {
//     return `Blogger ${this.email} is ${this.age} years old  and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   email: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo());

// mango.updatePostCount(5);
// console.log(mango.getInfo());

// console.log(mango);

// ==================================================================================

/*
  Напиши клас User який створює об'єкт із властивостями login та email.
  Оголоси приватні властивості #login та #email, доступ до яких зроби через
  гетер та сетер login та email.
*/

// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// })

// console.log(mango.login);

// mango.login = "Mangodoge"
// console.log(mango.login);

// ==================================================================================

/*
  Напиши клас Storage який створює об'єкти для керування складом товарів.
  При виклику отримуватиме один аргумент - початковий масив товарів і
  записуватиме його властивість items.
 
  Додай методи класу:
  - getItems() - повертає масив товарів.
  - addItem(item) - отримує новий товар і додає його до поточних.
  - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
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
//       console.log("Такого товару не існує!");
//     }
//   }
// }

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem("🍌");
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍋");
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// storage.removeItem("🍋");

// storage.removeItem("🍇");
// console.table(storage.items); // [ '🍎', '🍑', '🍌' ]

// ==================================================================================
/*
                          Домашнє завдання (модуль 6. Класи)
*/
/*
  Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

  Використай цей стартовий код і виконай рефакторинг. Після оголошення об'єкта ми додали виклики методів. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.
*/

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],

//   getBalance() {
//     return this.balance;
//   },

//   getDiscount() {
//     return this.discount;
//   },

//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },

//   // removeItem(item) {
//   //   const deleteIndex = this.orders.indexOf(item);

//   //   if (deleteIndex !== -1) {
//   //     this.orders.splice(deleteIndex, 1);
//   //   } else {
//   //     console.log("Такої страви немає");
//   //   }
//   // }

//   // --------------------------------------------------------------------------------
//   /*
//     Цей варіант кращий, тому що, страва яку ми шукаємо в масиві при порівнянні приводиться до нижнього регістру і прибираются зайві пробіли (тобто виконується додаткова перевірка)
//   */

//   removeItem(item) {
//     const deleteIndex = this.orders.findIndex((order) =>
//       order.toLocaleLowerCase().trim() === item.toLocaleLowerCase().trim());

//     if (deleteIndex !== -1) { //ця перевірка обов'язкова, щоб не видалити останній елемент масиву, якщо при порівнянні не знайдено страву(рядок 222)
//       this.orders.splice(deleteIndex, 1);
//     } else {
//       console.log("Такої страви немає");
//     }
//   }
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// customer.removeItem("Pizza");
// console.log(customer.getOrders());

// ==================================================================================

/*
  Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

  Оголоси наступні методи класу:
  getItems() — повертає масив поточних товарів у приватній властивості items.
  addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
  removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.
*/

// class Storage {
//   #items;
//   constructor(items) {
//     this.#items = items
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     const deleteIndex = this.#items.findIndex((item) =>
//       item.toLowerCase().trim() === itemToRemove.toLowerCase().trim());

//     if (deleteIndex !== -1) {
//       this.#items.splice(deleteIndex, 1)
//     } else {
//       this.#items
//     }
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("       ProlOngeR ");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ==================================================================================

/*
  Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.

  Оголоси наступні методи класу:
  getValue() — повертає поточне значення приватної властивості value.
  padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
  padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
  padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.
*/

// class StringBuilder {
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value
//   }

//   padBoth(str) {
//     this.#value = str + this.#value + str
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ==================================================================================
/*
                        Задачі згенеровані за допомогою ШІ
*/
/*
  Створи клас BankAccount, який моделює банківський рахунок.
  Потім створи підклас SavingsAccount (ощадний рахунок), який матиме додатковий функціонал.

  🔹 Вимоги до класу BankAccount:
  Має приватні властивості:
  #accountNumber (номер рахунку, унікальний для кожного об'єкта)
  #balance (баланс рахунку, за замовчуванням 0)
  Має методи:
  deposit(amount) – додає гроші на рахунок.
  withdraw(amount) – знімає гроші (але не можна знімати більше, ніж є на рахунку).
  getBalance() – повертає поточний баланс.
  🔹 Вимоги до підкласу SavingsAccount:
  Наслідується від BankAccount.
  Має додаткову властивість #interestRate (відсоткова ставка).
  Має метод addInterest(), який додає відсотки до балансу.
*/

// class BankAccount {
//   #accountNumber;
//   #balance;
//   constructor(accountNumber) {
//     this.#accountNumber = accountNumber;
//     this.#balance = 0;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//       console.log(`Додано ${ amount } грн.Поточний баланс: ${ this.#balance } грн.`);
//     } else {
//       console.log("Сума повинна бути більше 0.");
//     }
//   }

//   withdraw(amount) {
//     if (amount > 0 && amount <= this.#balance) {
//       this.#balance -= amount;
//       console.log(`Знято ${amount} грн.Поточний баланс: ${this.#balance } грн.`);
//     } else {
//       console.log("Недостатньо коштів або неправильна сума.");
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// class SavingsAccount extends BankAccount {
//   #interestRate;
//   constructor(accountNumber, interestRate) {
//     super(accountNumber);
//     this.#interestRate = interestRate;
//   }

//   addInterest() {
//     const interest = this.getBalance() * this.#interestRate; // Розраховуємо відсотки
//     this.deposit(interest); // Додаємо відсотки як депозит
//     console.log(`Додано ${interest} грн. відсотків.`);
//   }
// }

// const myAccount = new SavingsAccount(123456, 0.05); // 5% річних

// myAccount.deposit(1000);
// console.log(myAccount.getBalance()); // 1000

// myAccount.withdraw(200);
// console.log(myAccount.getBalance()); // 800

// myAccount.addInterest();
// console.log(myAccount.getBalance()); // 840 (800 + 5%)

// ==================================================================================
/*
  Створи базовий клас Vehicle, який буде представляти транспортний засіб, а також підкласи Car та Truck, які успадковують властивості від Vehicle.

  🔹 Вимоги до класу Vehicle:
  Має приватні властивості:
  #brand(марка авто)
  #speed(поточна швидкість, за замовчуванням 0)
  Має методи:
  accelerate(amount) – збільшує швидкість на amount км / год.
  brake(amount) – зменшує швидкість(але не може бути менше 0).
  getSpeed() – повертає поточну швидкість.
  🔹 Вимоги до підкласів Car і Truck:
  Car – додатково має властивість #seats(кількість місць) та метод getSeats().
  Truck – додатково має властивість #cargoCapacity(вантажопідйомність) та метод getCargoCapacity().
*/

// class Vehicle {
//   #brand;
//   #speed;
//   constructor(brand) {
//     this.#brand = brand;
//     this.#speed = 0;
//   }

//   accelerate(amount) {
//     if (amount > 0) {
//       this.#speed += amount;
//       console.log(`Швидкість була збільшена на ${amount}км / год.`);
//     } else {
//       console.log("Неможливо збільшити швидкість.");
//     }
//   }

//   brake(amount) {
//     if (amount > 0) {
//       this.#speed -= amount;
//       console.log(`Швидкість була зменшена на ${amount}км / год.`);
//     } else {
//       console.log("Неможе бути менше 0.");
//     }
//   }

//   getSpeed() {
//     return this.#speed;
//   }
// }

// class Car extends Vehicle {
//   #seats;
//   constructor(brand, seats) {
//     super(brand);
//     this.#seats = seats;
//   }

//   getSeats() {
//     return this.#seats;
//   }
// }

// class Truck extends Vehicle {
//   #cargoCapacity;
//   constructor(brand, cargoCapacity) {
//     super(brand);
//     this.#cargoCapacity = cargoCapacity;
//   }

//   getCargoCapacity() {
//     return this.#cargoCapacity
//   }
// }

// const myCar = new Car("Toyota", 5);
// console.log(myCar.getSpeed()); // 0
// myCar.accelerate(50);
// console.log(myCar.getSpeed()); // 50
// myCar.brake(20);
// console.log(myCar.getSpeed()); // 30
// console.log(myCar.getSeats()); // 5

// const myTruck = new Truck("Volvo", 2000);
// console.log(myTruck.getSpeed()); // 0
// myTruck.accelerate(80);
// console.log(myTruck.getSpeed()); // 80
// console.log(myTruck.getCargoCapacity()); // 2000

// ==================================================================================
/*
  Створити клас Employee та підкласи Manager і Developer, які успадковують властивості та методи від Employee.

  🔹 Вимоги до класу Employee:
  Має приватні властивості:
  #name(ім'я працівника)
  #position(посада)
  #salary(зарплата)
  Має методи:
  getInfo() – повертає інформацію про працівника.
  increaseSalary(amount) – збільшує зарплату на amount.
  🔹 Вимоги до підкласу Manager:
  Додає приватну властивість #teamSize(розмір команди).
  Має метод increaseSalary(amount), який збільшує зарплату, але якщо команда більша за 5 людей, то додає бонус у розмірі 10 % від зарплати.
  🔹 Вимоги до підкласу Developer:
  Додає приватну властивість #programmingLanguage.
  Має метод getProgrammingLanguage(), який повертає, якою мовою програмує розробник.
*/

// class Employee {
//   #name;
//   #position;
//   #salary;
//   constructor(name, position, salary) {
//     this.#name = name;
//     this.#position = position;
//     this.#salary = salary;
//   }

//   getInfo() {
//     return `${this.#name} працює на посаді ${this.#position} із зарплатою ${this.#salary} грн.`
//   }

//   increaseSalary(amount) {
//     if (amount > 0) {
//       this.#salary += amount;
//       console.log(`Зарплата ${this.#name} збільшена на ${amount} грн.`);
//     }
//   }

//   getSalary() {
//     return this.#salary;
//   }

//   setSalary(newSalary) {
//     this.#salary = newSalary;
//   }
// }

// class Manager extends Employee {
//   #teamSize;
//   constructor(name, position, salary, teamSize) {
//     super(name, position, salary);
//     this.#teamSize = teamSize;
//   }

//   increaseSalary(amount) {
//     let bonus = 0;
//     if (this.#teamSize > 5) {
//       bonus = this.getSalary() * 0.1; // 10% бонус
//     }

//     const newSalary = this.getSalary() + amount + bonus;
//     this.setSalary(newSalary);

//     console.log(`Зарплата менеджера ${amount} грн. + бонус ${bonus} грн.`);
//   }
// }

// class Developer extends Employee {
//   #programmingLanguage;
//   constructor(name, position, salary, programmingLanguage) {
//     super(name, position, salary);
//     this.#programmingLanguage = programmingLanguage;
//   }

//   getProgrammingLanguage() {
//     return `${this.getInfo().split(' ')[0]} програмує мовою ${this.#programmingLanguage}.`
//   }
// }

// const manager = new Manager("Alice", "Project Manager", 5000, 6);
// console.log(manager.getInfo()); // "Alice працює на посаді Project Manager із зарплатою 5000 грн."
// manager.increaseSalary(500);
// console.log(manager.getInfo()); // "Alice працює на посаді Project Manager із зарплатою 6000 грн." (бонус за велику команду)

// const developer = new Developer("Bob", "Frontend Developer", 4000, "JavaScript");
// console.log(developer.getInfo()); // "Bob працює на посаді Frontend Developer із зарплатою 4000 грн."
// console.log(developer.getProgrammingLanguage()); // "Bob програмує мовою JavaScript"
// developer.increaseSalary(500);
// console.log(developer.getInfo()); // "Bob працює на посаді Frontend Developer із зарплатою 4500 грн."

// ==================================================================================
/*
  Тобі потрібно створити клас User, який буде використовувати статичні та приватні властивості для керування унікальними користувачами.

  🔹 Вимоги до класу User:
  Приватні властивості (#id, #name, #email)

  #id – унікальний ідентифікатор користувача (генерується автоматично).
  #name – ім'я користувача.
  #email – email користувача.
  Статична властивість #users (масив усіх створених користувачів).

  Методи:

  getInfo() – повертає інформацію про користувача.
  getId() – повертає ID користувача.
  static getAllUsers() – повертає всіх зареєстрованих користувачів.
  При створенні нового користувача:

  Автоматично генерується унікальний id.
  Користувач додається в #users.
*/

// class User {
//   static #users = [];
//   static #nextId = 0;

//   #id;
//   #name;
//   #email;

//   constructor(name, email) {
//     this.#id = User.#nextId += 1;
//     this.#name = name;
//     this.#email = email;

//     User.#users.push({ id: this.#id, name: this.#name, email: this.#email });
//   }

//   getInfo() {
//     return `ID: ${this.#id} | Ім'я: ${this.#name} | Email: ${this.#email}`;
//   }

//   getId() {
//     return this.#id;
//   }

//   static getAllUsers() {
//     return User.#users;
//   }

// }

// const user1 = new User("Alice", "alice@example.com");
// console.log(user1.getInfo()); // "ID: 1 | Ім'я: Alice | Email: alice@example.com"

// const user2 = new User("Bob", "bob@example.com");
// console.log(user2.getInfo()); // "ID: 2 | Ім'я: Bob | Email: bob@example.com"

// console.log(User.getAllUsers());
// // [{ id: 1, name: "Alice", email: "alice@example.com" }, { id: 2, name: "Bob", email: "bob@example.com" }]

// ==================================================================================
/*
  Тобі потрібно створити клас HotelRoom, який буде використовувати приватні та статичні властивості для управління бронюванням номерів у готелі.

  🔹 Вимоги до класу HotelRoom:
  Приватні властивості (#roomNumber, #isBooked)
  #roomNumber – унікальний номер кімнати.
  #isBooked – стан кімнати (true, якщо заброньовано, false, якщо вільна).
  Статичні властивості (#rooms)
  #rooms – масив усіх номерів готелю.

  Методи:
  bookRoom() – бронює кімнату, якщо вона вільна.
  cancelBooking() – скасовує бронювання.
  getStatus() – повертає статус кімнати.
  static getAvailableRooms() – повертає список вільних кімнат.
*/

// class HotelRoom {
//   static #rooms = []; // Статичний масив для збереження всіх номерів

//   #roomNumber;
//   #isBooked;

//   constructor(roomNumber) {
//     this.#roomNumber = roomNumber;
//     this.#isBooked = false; // Спочатку кімната вільна

//     // Додаємо кімнату до загального списку
//     HotelRoom.#rooms.push(this);
//   }

//   // Метод для бронювання кімнати
//   bookRoom() {
//     if (!this.#isBooked) {
//       this.#isBooked = true;
//       console.log(`Кімната ${this.#roomNumber} заброньована.`);
//     } else {
//       console.log(`Кімната ${this.#roomNumber} вже заброньована.`);
//     }
//   }

//   // Метод для скасування бронювання
//   cancelBooking() {
//     if (this.#isBooked) {
//       this.#isBooked = false;
//       console.log(`Бронювання кімнати ${this.#roomNumber} скасовано.`);
//     } else {
//       console.log(`Кімната ${this.#roomNumber} не була заброньована.`);
//     }
//   }

//   // Метод для отримання статусу кімнати
//   getStatus() {
//     return this.#isBooked
//       ? `Кімната ${this.#roomNumber} заброньована.`
//       : `Кімната ${this.#roomNumber} вільна.`;
//   }

//   // Статичний метод для отримання всіх вільних кімнат
//   static getAvailableRooms() {
//     return HotelRoom.#rooms
//       .filter(room => !room.#isBooked)
//       .map(room => room.#roomNumber);
//   }
// }

// const room1 = new HotelRoom(101);
// console.log(room1.getStatus()); // "Кімната 101 вільна."

// room1.bookRoom();
// console.log(room1.getStatus()); // "Кімната 101 заброньована."

// room1.cancelBooking();
// console.log(room1.getStatus()); // "Кімната 101 вільна."

// const room2 = new HotelRoom(102);
// room2.bookRoom();

// console.log(HotelRoom.getAvailableRooms()); // [101] (тільки 101 вільна)

// ==================================================================================
/*
  Тобі потрібно створити клас BankAccount, який моделює банківський рахунок.
  Цей клас буде мати приватні та статичні властивості, а також статичні та звичайні методи.

  🔹 Вимоги до класу BankAccount:
  🔸 Приватні властивості (#accountNumber, #balance)
  #accountNumber – унікальний номер рахунку (автоматично генерується).
  #balance – баланс рахунку.
  🔸 Статичні властивості (#accounts)
  #accounts – масив усіх створених рахунків.
  #nextAccountNumber – використовується для генерації унікальних номерів рахунків.
  🔸 Методи
  Звичайні методи (для роботи з рахунком):
  deposit(amount) – поповнює рахунок на amount.
  withdraw(amount) – знімає amount із рахунку (якщо достатньо коштів).
  getBalance() – повертає поточний баланс.
  getAccountInfo() – повертає інформацію про рахунок.
  Статичні методи (для роботи з усіма рахунками):
  static getTotalBalance() – повертає сумарний баланс всіх рахунків.
  static getAllAccounts() – повертає список всіх рахунків.
*/

// class BankAccount {
//   static #accounts = [];
//   static #nextAccountNumber = 0;

//   #accountNumber;
//   #balance;
//   constructor() {
//     this.#accountNumber = BankAccount.#nextAccountNumber += 1;
//     this.#balance = 0;
//     BankAccount.#accounts.push(this);
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//       console.log(`Було поповнено рахунок #${this.#accountNumber} на ${amount} грн.`);
//     } else {
//       console.log("Сума поповнення має бути більше 0.");
//     }
//   }

//   withdraw(amount) {
//     if (amount > 0 && amount <= this.#balance) {
//       this.#balance -= amount;
//       console.log(`Було знято ${amount} грн. з рахунку #${this.#accountNumber}`);
//     } else {
//       console.log("Недостатньо коштів або некоректна сума.");
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }

//   getAccountInfo() {
//     return `Рахунок #${this.#accountNumber} | Баланс: ${this.#balance} грн.`;
//   }

//   static getTotalBalance() {
//     const totalBalance =
//       BankAccount.#accounts.reduce((total, account) => total + account.#balance, 0);
//     return `Загальний баланс банку: ${totalBalance} грн.`;
//   }

//   static getAllAccounts() {
//     return BankAccount.#accounts.map((account) => ({
//       accountNumber: account.#accountNumber,
//       balance: account.#balance
//     }));
//   }
// }

// const acc1 = new BankAccount();
// acc1.deposit(5000);
// acc1.withdraw(2000);
// console.log(acc1.getAccountInfo()); // "Рахунок #1 | Баланс: 3000 грн."

// const acc2 = new BankAccount();
// acc2.deposit(7000);
// console.log(acc2.getAccountInfo()); // "Рахунок #2 | Баланс: 7000 грн."

// console.log(BankAccount.getTotalBalance()); // "Загальний баланс банку: 10000 грн."
// console.log(BankAccount.getAllAccounts());
// // [{ accountNumber: 1, balance: 3000 }, { accountNumber: 2, balance: 7000 }]
