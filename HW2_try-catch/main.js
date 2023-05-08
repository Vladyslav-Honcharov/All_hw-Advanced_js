const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70,
  },
  {
    author: "Сюзанна Кларк",
    name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70,
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70,
  },
  {
    author: "Террі Пратчетт",
    name: "Рухомі картинки",
    price: 40,
  },
  {
    author: "Анґус Гайленд",
    name: "Коти в мистецтві",
  },
  {
    price: 1,
  },
];

const root = document.querySelector("#root");
let ul = document.createElement("ul");
root.appendChild(ul);
books.forEach((book) => {
  let li = document.createElement("li");
  ul.appendChild(li);
  try {
    if (book.author) {
      textAuthor = document.createTextNode(`Автор: ${book.author} `);
      li.appendChild(textAuthor);
    }
    if (book.name) {
      textName = document.createTextNode(`Назва: ${book.name} `);
      li.appendChild(textName);
    }
    if (book.price) {
      textPrice = document.createTextNode(`Ціна: ${book.price} `);
      li.appendChild(textPrice);
    }

    if (!book.author) {
      throw new Error(`немає автора`);
    }
    if (!book.name) {
      throw new Error(`немає назви`);
    }
    if (!book.price) {
      throw new Error(`немає ціни`);
    }
  } catch (error) {
    console.error(error.message, book);
  }
});
