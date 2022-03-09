const { ApiLinks, DetailsCharacters, booksCollection } = require("../model");
const request = require("request");

class HttpRequest {
  async getApis() {
    try {
      request(
        "https://anapioficeandfire.com/api/books/",
        async (err, response, body) => {
          if (err) {
            console.log(err);
          }
          if (!response) {
            return res.json({ error: "Does not have an answer" });
          }

          let listApiCharacters = [];
          const bodyParse = JSON.parse(body);

          bodyParse.map((item) => {
            item.povCharacters.map((items) => listApiCharacters.push(items));
          });

          await ApiLinks.create({
            apis: listApiCharacters,
          });
        }
      );
    } catch (e) {
      console.log(e);
    }
  }

  async getDetails() {
    const [links] = await ApiLinks.find();
    links.apis.map((item) => {
      request(item, async (err, response, body) => {
        const details = JSON.parse(body);
        await DetailsCharacters.create({
          name: details.name,
          gender: details.gender,
          culture: details.culture,
          titles: details.titles,
          aliases: details.aliases,
          apiBooks: details.books,
        });
      });
    });
  }

  async getBooks() {
    const booksReq = await DetailsCharacters.find().select("apiBooks");

    booksReq.map((item) => {
      item.apiBooks.map((items) => {
        request(items, async (err, response, body) => {
          const books = JSON.parse(body);

          await booksCollection.create({
            id_character: item._id,
            books: books.name,
            isbn: books.isbn,
          });
        });
      });
    });
  }
}

module.exports = HttpRequest;
