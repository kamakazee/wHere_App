const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(express.json());
app.use(require("../routes/record2.js"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
  

const Db = process.env.ATLAS_URI;


mongoose.connect(
        `mongodb+srv://admin:adminPassword123@cluster0.ztwnv9a.mongodb.net/wHereProject?retryWrites=true&w=majority`, 
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.listen(5001, () => {
  console.log("Server is running at port 5001");
});