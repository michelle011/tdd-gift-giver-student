const app = require("./app");

const giftExchangeRouter = require("./routes/gift-exchange.js");

app.use("/gift-exchange", giftExchangeRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
