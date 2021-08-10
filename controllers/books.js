const { assign, find, remove } = require("lodash");
const books = require("../db/books");

function getAllBooks(_, response) {
  response.json(books);
}

function getBookById(request, response) {
  const { id } = request.params;
  const book = find(books, { id: +id });

  if (!book) {
    response.send(`No book found. Book Id: ${id}`);
  }

  response.json(book);
}

function createBook(request, response) {
  const bookFromRequest = request.body;
  bookFromRequest.id = books.length + 1;

  books.push(bookFromRequest);

  response.json(books);
}

function updateBook(request, response) {
  const bookFromRequest = request.body;
  const { id } = request.params;
  const book = find(books, { id: +id });

  if (!book) {
    response.send(`No book found. Book Id: ${id}`);
  }

  //prevent id to be updated
  delete bookFromRequest.id;

  assign(book, bookFromRequest);

  response.json(book);
}

function deleteBook(request, response) {
  const { id } = request.params;
  let book = find(books, { id: +id });

  if (!book) {
    response.send(`No book found. Book Id: ${id}`);
  }

  remove(books, (book) => book.id === +id);

  //check if book got deleted
  book = find(books, { id: +id });

  if (!book) {
    response.status(204).send("Book deleted");
  }
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
