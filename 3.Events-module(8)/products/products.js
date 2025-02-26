/*
  Створи картки з товарами на основі масиву products,
  приклад картки https://prnt.sc/KmgDlzqOIA3M
 
  Реалізуй делегування подій на колекції карток
  Після кліку на картку повинно з'являтись модальне вікно
  з детальною інформацією про продукт,
  приклад модального вікна https://prnt.sc/vWNoCeZcw7ii

  Для реалізації модального вікна використай
  бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)
*/

const products = [
  {
    id: 1,
    img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
    name: "Monitor",
    price: 3000,
    description: "23-inch monitor with Full HD resolution.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
    name: "Laptop",
    price: 20000,
    description:
      "Lightweight and powerful laptop with a 15-inch display and SSD.",
  },
  {
    id: 3,
    img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
    name: "Smartphone",
    price: 8000,
    description: "Equipped with a triple camera and a multi-core processor.",
  },
  {
    id: 4,
    img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
    name: "Tablet",
    price: 12000,
    description: "10-inch tablet with high performance and a Retina display.",
  },
];

const container = document.querySelector(".products");

function createMarkup(arr) {
  return arr.map(({ id, img, name, price }) => `
    <li class="item" data-id="${id}">
      <img src="${img}" alt="${name}">
      <h2>${name}</h2>
      <p>Ціна: ${price}</p>
    </li>
  `).join("");
} 
container.insertAdjacentHTML("beforeend", createMarkup(products));
// container.innerHTML = createMarkup(products);

container.addEventListener("click", handleModalOpen);
function handleModalOpen(event) {
  if (event.currentTarget === event.target) return; // перевірка на випадок того, якщо ми клікнемо не на карточку (нам не треба обробляти цей варіант).
 
  const currentProduct = event.target.closest(".item");
  const productId = Number(currentProduct.dataset.id);
  const product = products.find(({ id }) => id === productId);

  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${product.img}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>Ціна: ${product.price}</p>
      <p>${product.description}</p>
    </div>
  `)
  instance.show();
}

// * if(!event.target.classList.contains("item")) - це перевірка чи елемент, по якому клікнули (event.target), має клас "item". Подія відбудеться, якщо користувач клікне на li з класом item. Подія не спрацює якщо клікнути на img, h2, p.