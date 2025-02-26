/*
Напишіть функцію яка повертає масив у зворотньому напрямку. 
Метод reverse() не використовувати.
*/

// const arrNumber = [11, 9, 2, 1];
// function arrReverse(array) {
//   let newArr = [];
//   for (let i = array.length - 1; i >= 0; i -= 1) {
//     newArr.push(array[i]);
//   }
//   return newArr;
// }

// console.log(arrReverse(arrNumber));

// =============================================================================

/*
Напишіть функцію, яка очистить масив від небажаних значень, 
таких як false, undefined, null, нуль, порожні рядки.

Результат що очікується [0, 1, false, 2, undefined, "", 3, null] => [1, 2, 3]
*/

// function unwantedValues(arr) {
//   let newArr = [];
//   for (const element of arr) {
//     if (element !== false && element !== undefined && element !== null && element !== 0 && element !== "") {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// }

// function unwantedValues(arr) {
//   let newArr = [];
//   for (const element of arr) {
//     if (Boolean(element) === true) {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// }

// function clearArr(arr) {
//   let newArr = [];
//   for (const element of arr) {
//     if (element) {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// }

// console.log(clearArr([0, 1, false, 2, undefined, "", 3, null]));

// =============================================================================

/*
Напишіть функцію, яка порівнює два масиви і повертає true, якщо вони ідентичні.
  Очікується ([1, 2, 3], [1, 2, 3]) => true
  Очікується ([4, 5, 5], [1, 2, 3]) => false
  Очікується ([4, 5, 5, 6, 7], [1, 2, 3]) => false
*/

// function compareArr(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i += 1) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(compareArr([1, 2, 3], [1, 2, 3]));
// console.log(compareArr([4, 5, 5], [1, 2, 3]));
// console.log(compareArr([4, 5, 5, 6, 7], [1, 2, 3]));

// =============================================================================

/*
Напишіть функцію, що прибирає значення, які повторюються.

Очікується ["a", 1, 2, "b", 3, 1, 2, "a"] => ["a", 1, 2, "b", 3]
*/

// function clearValue(arr) {
//   let newArr = [];
//   for (const el of arr) {
//     if (!newArr.includes(el)) {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// }

// function clearValue(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (i === arr.indexOf(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(clearValue(["a", 1, 2, "b", 3, 1, 2, "a"]));

// =============================================================================

/*
При завантаженні сторінки користувачу пропонується у promt ввести число.
Те, що вводить користувач, додається до значення змінної total.
Операція вводу числа триває до тих пір, поки користувач не натисне кнопку Cancel, показувати alert з рядком "Загальна сума введених чисел дорівнює  [число]."

Робити перевірку, що користувач ввів саме число, а не довільні символи, не потрібно.
*/

// let userInput = "";
// let total = 0;

// do {
//   userInput = prompt("Ввести число");
//   if (userInput !== null) {
//     total += Number(userInput);
//   }
// } while (userInput !== null)

// alert(`Загальна сума введених чисел дорівнює ${total}.`);

// =============================================================================

/*
  Напиши цикл, який пропонує ввести число більше 100 через promt.
  Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
  Цикл повинен запитувати число, поки користувач не введе число більше 100,
  або не натисне кнопку "Відміна".
*/

// let userInput = prompt("Ввести число, яке більше за 100");

// while (userInput < 101 && userInput !== null) {
//   userInput = prompt("Введіть ще раз число, яке більше за 100")
// }

// // alert(`Ваше число: ${userInput}`)
// console.log(userInput);


// =============================================================================

/*
Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку 
від start до end, яке ділиться на 5 без остачі.
*/

// const start = 6;
// const end = 17;
// let number = 0;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);

// =============================================================================

/*
Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

Доповни код функції таким чином, щоб вона: повертала перше число у діапазоні 
від start до end включно, яке ділиться на divisor без остачі.
Не використовуй оператор break
*/

// function findNumber(start, end, divisor) {
//   let findNumber = 0;
//   for (let i = start; i <= end; i += 1) {
//     if (i % divisor === 0) {
//       findNumber = i;
//       return findNumber;
//     }
//   }
// }

// console.log(findNumber(2, 15, 5));

// ============================================================================

console.log("123456789");