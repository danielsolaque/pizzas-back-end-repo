const express = require("express");
const cors = require("cors");

const pizzas = require("./pizzas.json");

const app = express();

app.use(cors());


app.use(express.json());

app.get("/", (req, res) => {
  res.json({ data: "Service is running!" });
});

app.get("/items", (req, res) => {
  res.json({ data: pizzas });
});

app.get("/items/:id", (req, res) => {
  const id = req.params.id;

  const found = pizzas.find((pizza) => pizza.id === id);

  if (!found) {
    res.status(404).json({ error: "Id not found" });
  } else {
    res.json({ data: found });
  }
});

module.exports = app;