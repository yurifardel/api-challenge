const HttpRequestApis = require("../infra/refactor/http-request-apis");
const { Router } = require("express");

const route = Router();

const makeSut = () => {
  const sut = new HttpRequestApis();

  return {
    sut,
  };
};

route.get("/auth/api", async (req, res) => {
  const { sut } = makeSut();
  await sut.getApis();

  return res.json({ statusCode: 200 });
});

route.get("/auth/api/details", async (req, res) => {
  const { sut } = makeSut();
  await sut.getDetails();

  return res.json({ statusCode: 200 });
});

route.get("/auth/api/books", async (req, res) => {
  const { sut } = makeSut();
  await sut.getBooks();

  return res.json({ statusCode: 200 });
});

module.exports = route;
