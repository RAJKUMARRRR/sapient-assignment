const express = require("express");
const router = express.Router();
const cardModel = require("../models/card");
const cardValidator = require("../validators/card")

router.get("/", async (req, res) => {
  const cards = await cardModel.find({});
  res.json(cards);
});

router.post("/", cardValidator, async (req, res) => {
  const { name, cardNumber, limit } = req.body;
  const card = {
    name,
    cardNumber,
    limit
  };
  try {
    const newCard = await cardModel.create(card);
    res.status(201).json(newCard);
  } catch (err) {
    res.send(500, err);
  }
});

module.exports = router;
