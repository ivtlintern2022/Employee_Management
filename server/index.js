const express = require("express");
const app = express();
const cors = require('cors');    
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const detailsroute = require("./routes/em_details");

app.use(cors());

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  app.use("/api/auth", detailsroute);

//   app.get('/', function (req, res) {
//     res.send('<html><body><h1>Hello World</h1></body></html>');
// });

  app.listen("5000", () => {
    console.log("Backend is running on 5000.");
  });