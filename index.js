const express = require("express");
const { books, characters, auth } = require("./src/domain/");

const app = express();

const PORT = process.env.PORT || 8080

app.use(express.json());

app.use(auth);
app.use(characters);
app.use(books);

app.get("/", (req, res) => {
  res.send("hello world!!");
});

app.listen(PORT, () => console.log("express listening with stability"));
