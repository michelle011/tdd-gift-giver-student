const express = require("express"); // look inside node modules dir and store express in here
const morgan = require("morgan"); // morgan is just a logger, so allows us to log in app

const app = express(); // creates new instance of exp app, and store in app

const router = require("./routes/gift-exchange");
const { NotFoundError } = require("./utils/errors");

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
});

app.use("/gift-exchange", router);

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
