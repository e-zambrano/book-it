const router = require("express").Router();
const bookController = require("../controllers/books");

router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getBookById);

router.post("/books", bookController.createBook);

router.put("/books/:id", bookController.updateBook);

router.delete("/books/:id", bookController.deleteBook);

module.exports = router;