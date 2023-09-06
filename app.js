const express = require("express");
const cors = require("cors");

const pizzas = require("./pizzas.json");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.json({ data: "Service is running!" });
  } catch (error) {
    res.status(500).json({ error: "An error has occurred running the service" });
  }
});

app.get("/items", (req, res) => {
  try {
    res.json({ data: pizzas });
  } catch (error) {
    res.status(500).json({ error: "An error has occurred trying to get the list of pizzas" });
  }
});

app.get("/items/:id", (req, res) => {
  try {
    const id = req.params.id;
    const found = pizzas.find((pizza) => pizza.id === id);

    if (!found) {
      res.status(404).json({ error: `No pizza with the id: ${id} was found`});
    } else {
      res.json({ data: found });
    }
  } catch (error) {
    res.status(500).json({
      error: `An error has occurred trying to get the pizza with the id: ${id}`,
    });
  }
});

module.exports = app;
