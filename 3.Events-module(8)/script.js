// const car1 = {
//   brand: "BMW",
//   model: "700",
//   a: "red",
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     weight: 2000,
//     height: 150,
//     length: 4.2,
//   },
// };

// const car2 = {
//   brand: "BMW",
//   model: "700",
//   a: "red",
//   maxSpeed: 240,
//   isNew: true,
//   dimensions: {
//     height: 150,
//     length: 4.2,
//   },
// };

// function createMessage({ a: color = "No info", maxSpeed = "No info",
//   isNew = "No info", dimensions: { weight = "No info" } }) {
//   const message = `
//   Color: ${color}
//   Max speed: ${maxSpeed}
//   Is new: ${isNew}
//   Weight: ${weight}
//   `;
//   console.log(message);
// }

// createMessage(car1);
// createMessage(car2);

// ==================================== Homework ====================================

/*
  Умова задачі та інструкції в модулі 8.
*/

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const container = document.querySelector(".gallery");

const createMarkup = images.map(({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
`).join("");
container.insertAdjacentHTML("beforeend", createMarkup);

container.addEventListener("click", handleOpenModal);

// function handleOpenModal(event) {
//   event.preventDefault();
//   if (event.target === event.currentTarget) return;
  
//   const cardSource = event.target.dataset.source;
//   const card = images.find(({ original }) => original === cardSource);
//   console.log(cardSource);

//   const instance = basicLightbox.create(`
//     <img
//       class="modal-image"
//       src="${card.original}"
//       alt="${card.description}"
//     >
//   `)
  
//   instance.show();
// }

/*
  ⚡ Додаткові покращення
  📌 Додати закриття модалки по клавіші Escape
*/

function handleOpenModal(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) return;

  const cardSource = event.target.dataset.source;
  const card = images.find(({ original }) => original === cardSource);

  const instance = basicLightbox.create(`
    <img 
      class="modal-image"
      src="${card.original}"
      alt="${card.description}"
    >
  `, {
    onShow: (instance) => {
      document.addEventListener("keydown", onEscPress);
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", onEscPress);
    }
  });

  function onEscPress(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }

  instance.show();
}