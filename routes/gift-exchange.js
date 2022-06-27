const GiftExchange = require("../models/gift-exchange");

const express = require("express");
const { BadRequestError } = require("../utils/errors");

const router = express.Router();

router.post("/pairs", async (req, res, next) => {
  try {
    const tmpGift = req.body.names;
    if (!tmpGift || tmpGift.length < 2) {
      return next(new BadRequestError("Invalid input"));
    }
    const gift = await GiftExchange.pairs(tmpGift);
    res.status(200).json(gift);
  } catch (err) {
    next(err);
  }
});

router.post("/traditional", async (req, res, next) => {
  try {
    const tmpGift = req.body.names;

    if (!tmpGift || tmpGift.length < 2) {
      return next(new BadRequestError("Invalid input"));
    }

    const gift = await GiftExchange.traditional(tmpGift);
    res.status(200).json(gift);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
