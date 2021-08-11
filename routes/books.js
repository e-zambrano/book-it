const router = require("express").Router();
const bookController = require("../controllers/books");

router
  .route("/books")
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

router
  .route("book/:id")
  .get(bookController.getBookById)
  .put(bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = router;
