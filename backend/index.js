const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser')
const passport = require('passport');
const config = require('./db');

const users = require('./routes/user');
const python = require('./routes/PythonRoutes');

mongoose.connect(config.DB, {userNewUrlParser: true}).then(
  () => { console.log('Test Database is connected') },
  err => { console.log('Cannot not connect to the database' + err) }
);


// mongoose.connection.on('open', function (ref) {
//   console.log('Connected to mongo server.');
//   //trying to get collection names
//   mongoose.connection.db.listCollections(function (err, names) {
//       console.log(`Test ${names}`); // [{ name: 'dbname.myCollection' }]
//       module.exports.Collection = names;
//   });
//   console.log("hello")
// })

const app = express();
app.use(passport.initialize());
require('./passport')(passport);

const PORT = process.env.PORT || 4000;

app.use('/api/users', users);
app.use('/api/python', python);
app.get('/', function (req, res) {
  res.send('hello');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    (err) => {
        console.log(`Server failed to connect`);
    }
})


