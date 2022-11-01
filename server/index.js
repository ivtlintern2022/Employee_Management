const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const detailsroute = require("./routes/em_details");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  app.use("/api", detailsroute);

//   app.get('/', function (req, res) {
//     res.send('<html><body><h1>Hello World</h1></body></html>');
// });

  app.listen("5000", () => {
    console.log("Backend is running.");
  });