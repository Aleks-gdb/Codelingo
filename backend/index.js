const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Connecting to port ${PORT}`);
    (err) => {
        console.log('Server failed to connect');
    }
    });

app.get('/', function(req,res){
    res.send('testing');
});


