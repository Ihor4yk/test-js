/*
                                  Задачі з практики
*/
/*
  Напишіть функцію checkKeyInObject(), яка приймає два параметри obj i key.
  Функція буде перебирати об'єкт.
  Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.
*/

// const user = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black'
// }

/*
  За допомогою перебираючого циклу for in. 
  (Метод for in не рекомендується застосовувати тому що, він крім перебирання власних ключів об'єкта, перебирає ще й ключі на обєктах прототипу).
*/

// const checkKeyInObject = (obj, key) => {
//   for (const keyObj in obj) {
//     if (keyObj === key) {
//       return true;
//     }
//   }
//   return false;
// }

/*
  За допомогою методу Object.keys().
*/

// function checkKeyInObject(obj, key) {
//   const keys = Object.keys(obj);
//   for (const value of keys) {
//     if (value === key) {
//       return true;
//     }
//   }
//   return false;
// }

// const checkKeyInObject = (obj, key) => Object.keys(obj).includes(key);

/*
  За допомогою метода hasOwnProperty(). 
  Перевіряє тільки власні ключі об'єкта (не враховує успадковані властивості).
*/

// const checkKeyInObject = (obj, key) => obj.hasOwnProperty(key);

/*
  За допомогою метода key in object.
  Перевіряє наявність ключа в об'єкті (включно з успадкованими властивостями).
*/

// const checkKeyInObject = (obj, key) => key in obj;

// console.log(checkKeyInObject(user, "name"));
// console.log(checkKeyInObject(user, "carColor"));
// console.log(checkKeyInObject(user, "phone"));

// ===========================================================================

/*
  Додати метод getInfo в об'єкт user, 
  який повертатиме інформацію про користувача у форматі:
  `Name: Peter. Surname: Parker. Age: 22. Position: spider-man.`
*/

// const user = {
//   name: "Peter",
//   surname: "Parker",
//   age: 22,
//   position: "spider-man",
// }

// user.getInfo = function() {
//   return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`
// }

// console.log(user.getInfo());

// ===========================================================================

/*
  Є об'єкт, у якому зберігаються обрані товари у кошику.
  Напишіть код для визначення загальної суми замовлення
  і збережіть його результат у змінній totalCost.
  Якщо об'єкт cart порожній, то результат має бути 0.
*/

// const cart = {
//   apple: 50,
//   banana: 30,
//   orange: 40,
// }

// function calcProduct(obj) {
//   if (cart.length === 0) {
//     return 0
//   }

//   // let totalCost = 0;
//   // Object.values(obj).forEach((value) => totalCost += value);

//   const totalCost = Object.values(obj).reduce((acc, value) => acc + value, 0);
//   return totalCost;
// }

// const calcProductPrice = (obj) => {
//   if (cart.length === 0) {
//     return 0;
//   }

//   const totalCost = Object.values(obj).reduce((acc, value) => acc + value, 0);
//   return totalCost;
// }

// console.log(calcProductPrice(cart));

// ===========================================================================

/*
  Напишіть функцію getObjectKeys(), яка приймає об'єкт
  і повертає масив ключів цього об'єкта.
*/

// const myObj = {
//   name: "John",
//   age: 30,
//   gender: "male"
// }

// const getObjectKeys = (obj) => Object.keys(obj);

// console.log(getObjectKeys(myObj));

// ===========================================================================

/*
  Виконайте сортування масиву цін за зростанням та спаданням.
*/

// const prices = [1000, 89, 670, 360, 240, 20];

// const growth = prices.toSorted((a, b) => a - b);
// const decrease = prices.toSorted((a, b) => b - a);

// console.log(growth);
// console.log(decrease);

// ===========================================================================

/*
  Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
  перебирає масив і додає до кожного ім'я привітання.
  Функція повертає новий масив ["Ivan привіт!", "Maria привіт!", "Anna привіт!"].
*/

// const names = ["Ivan", "Maria", "Anna"];

// const sayHi = (namesArr) => namesArr.map((name) => `${name} привіт!`);

// console.log(sayHi(names));

// ===========================================================================

/*
  Перевірити чи всі студенти старші 18 років.
*/

// const students = [
//   { name: "Alex", age: 17 },
//   { name: "Stas", age: 18 },
//   { name: "Mike", age: 22 },
//   { name: "Den", age: 20 },
// ];

// const getStudents = (allStudents) =>
//   allStudents.every((student) => student.age > 18);

// console.log(getStudents(students));

// ===========================================================================

/*
  Зібрати в allTopics масив всіх предметів всіх курсів.
  Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.
*/

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop",],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal",],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: ["VSCode", "Type system", "Loops", "Function", "Git", "Conditions", "Classes", "GitHub", "DOM",],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: ["VSCode", "NPM", "Bundlers", "Transpiling", "Git", "Promises", "AJAX", "GitHub",],
//   },
// ];

// const allTopics = courses
//   .flatMap((cours) => cours.topics)
//   .filter((value, i, arr) => arr.indexOf(value) === i);

// console.log(allTopics);

// ===========================================================================

/*
  Напишіть функцію getAllFriendsNames(), яка повертає масив імен усіх друзів.
*/

// const friends = [
//   {
//     passport: "03005988",
//     name: "Joseph Francis Tribbiani Jr",
//     age: 32,
//     sex: "m",
//   },
//   {
//     passport: "03005989",
//     name: "Chandler Muriel Bing",
//     age: 33,
//     sex: "m",
//   },
//   {
//     passport: "03005990",
//     name: "Ross Eustace Geller",
//     age: 33,
//     sex: "m",
//   },
//   {
//     passport: "03005991",
//     name: "Rachel Karen Green",
//     age: 31,
//     sex: "f",
//   },
//   {
//     passport: "03005992",
//     name: "Monica Geller",
//     age: 31,
//     sex: "f",
//   },
//   {
//     passport: "03005993",
//     name: "Phoebe Buffay",
//     age: 34,
//     sex: "f",
//   },
// ];

// const getAllFriendsNames = (allFriends) => allFriends.map((friend) => friend.name);

// console.log(getAllFriendsNames(friends));

/*
  Загальний вік хлопців.
*/

// const totalAgeBoys = (allFriends) => allFriends
//   .filter((friend) => friend.sex === "m")
//   .reduce((total, boy) => total + boy.age, 0)

// console.log(totalAgeBoys(friends));

// ===========================================================================

/*
  Маємо масив об'єктів, який представляє список замовлень.
  - Перевірте чи всі замовлення виконані.
  - Поверніть список товарів з усіх виконаних замовлень.
*/

// const orders = [
//   { id: 1, products: ["Milk", "Bread"], status: "completed" },
//   { id: 2, products: ["Eggs", "Juice"], status: "processing" },
//   { id: 3, products: ["Pasta", "Spices"], status: "completed" },
// ]

// const ordersFulfilled = (allOrders) =>
//   allOrders.every((order) => order.status === "completed");

// const productsList = (allOrders) => allOrders
//   .filter((order) => order.status === "completed")
//   .flatMap((order) => order.products);

// console.log(ordersFulfilled(orders));

// console.log(productsList(orders));

// ===========================================================================

/*
  Порахуйте загальну кількість лайків в категорії Fashion.
*/

// const posts = [
//   { title: "Post 1", likes: 20, category: "Tech" },
//   { title: "Post 2", likes: 45, category: "Fashion" },
//   { title: "Post 3", likes: 12, category: "Tech" },
//   { title: "Post 4", likes: 30, category: "Fitness" },
//   { title: "Post 5", likes: 15, category: "Fashion" },
//   { title: "Post 6", likes: 50, category: "Tech" }
// ];

// const totalLikesFashion = (arr) => arr
//   .filter((post) => post.category === "Fashion")
//   .reduce((total, post) => total + post.likes, 0);

// console.table(totalLikesFashion(posts));

// ===========================================================================
/*
                            Домашнє завдвння (4 задачі)
*/

/*                                  
  Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів. Функція має повертати масив імен усіх користувачів (властивість name) із масиву users.
*/

// const getUserNames = (users) => users.map((user) => user.name);

// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// ===========================================================================
/*
  Напиши стрілочну функцію getUsersWithFriend(users, friendName), яка прийматиме два параметра:

  перший параметр users — масив об’єктів користувачів
  другий параметр friendName — ім’я друга для пошуку.
  Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName.Друзі кожного користувача зберігаються у властивості friends.Якщо користувачів, у яких є такий друг немає, то функція має повернути порожній масив.
*/

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"]
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"]
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"]
//   },
//  {
//     n ame: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ];


// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName));

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

// ===========================================================================

/*
  Напиши стрілочну функцію sortByDescendingFriendCount(users) , яка прийматиме один параметр users — масив об’єктів користувачів.

  Функція має повертати масив усіх користувачів, відсортованих за спаданням кількості їх друзів (властивість friends).
*/

// const sortByDescendingFriendCount = (users) =>
//   users.toSorted((aUser, bUser) => bUser.friends.length - aUser.friends.length);

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female"
//     }
//   ])
// );

// ===========================================================================

/*
  Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:
  - перший параметр users — масив об’єктів користувачів,
  - другий параметр gender — рядок, що зберігає стать.
  Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.
*/

// const clients = [
//   {
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter((user) => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863