const express = require("express");
const expressApp = express();
const port = process.env.PORT || 3000;
const booksRoute = require("./routes/books");

expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(express.json());
expressApp.use(booksRoute);

expressApp.get("/", function (_, response) {
  response.send("Express App running!");
});

expressApp.listen(port, function () {
  console.log(`Express App running on port ${port}`);
});
