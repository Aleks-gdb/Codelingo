const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const config = require("./database");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;

const app = express();

mongoose.connect(config.database, {useNewUrlParser: true}).then(
    () => {console.log('Database is connected') },
    err => {console.log('Can not connect to the database'+err)}
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Connecting to port ${PORT}`);
  err => {
    console.log("Server failed to connect");
  };
});

app.liste

