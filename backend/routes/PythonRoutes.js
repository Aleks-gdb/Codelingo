const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const config = require('../db');
var PythonModuleSchema = mongoose.Schema({
  test_name: String,
  pre_req: String
});


router.get("/modules", (req, res) => {
  mongoose.connect(config.DB1, { userNewUrlParser: true }).then(
    () => {
      console.log("Python Database is connected");
    },
    err => {
      console.log("Cannot not connect to the database" + err);
    }
  );

  mongoose
    .model("python_modules", PythonModuleSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
});

var ConditionalSchema = mongoose.Schema({
  question: String,
  type: String,
  answers: String,
  correct_ans: Array
});

router.get("/conditionals", (req, res) => {
  mongoose.connect(config.DB2, { userNewUrlParser: true }).then(
    () => {
      console.log("Python Database is connected");
    },
    err => {
      console.log("Cannot not connect to the database" + err);
    }
  );

  mongoose
    .model("conditionals", ConditionalSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
});

var ExpressionSchema = mongoose.Schema({
  question: String,
  type: String,
  answers: String,
  correct_ans: Array
});

router.get("/expression", (req, res) => {
  mongoose.connect(config.DB2, { userNewUrlParser: true }).then(
    () => {
      console.log("Python Database is connected");
    },
    err => {
      console.log("Cannot not connect to the database" + err);
    }
  );

  mongoose
    .model("expressions", ExpressionSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
});

var KeywordSchema = mongoose.Schema({
  question: String,
  type: String,
  answers: String,
  correct_ans: Array
});

router.get("/keywords", (req, res) => {
  mongoose.connect(config.DB2, { userNewUrlParser: true }).then(
    () => {
      console.log("Python Database is connected");
    },
    err => {
      console.log("Cannot not connect to the database" + err);
    }
  );

  mongoose
    .model("keywords", KeywordSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
});

var LoopsSchema = mongoose.Schema({
  question: String,
  type: String,
  answers: String,
  correct_ans: Array
});

router.get("/loops", (req, res) => {
  mongoose.connect(config.DB2, { userNewUrlParser: true }).then(
    () => {
      console.log("Python Database is connected");
    },
    err => {
      console.log("Cannot not connect to the database" + err);
    }
  );

  mongoose
    .model("loops", loopsSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
});

var StringsSchema = mongoose.Schema({
  question: String,
  type: String,
  answers: String,
  correct_ans: Array
});


router.get("/strings", (req, res) => {
  mongoose.connect(config.DB2, { userNewUrlParser: true }).then(
    () => {
      console.log("Python Database is connected");
    },
    err => {
      console.log("Cannot not connect to the database" + err);
    }
  );
  
  mongoose
    .model("strings", StringsSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
    
});

var VariablesSchema = mongoose.Schema({
  question: String,
  type: String,
  answers: String,
  correct_ans: Array
});

router.get("/variables", (req, res) => {
  mongoose.connect(config.DB2, { userNewUrlParser: true }).then(
    () => {
      console.log("Python Database is connected");
    },
    err => {
      console.log("Cannot not connect to the database" + err);
    }
  );

  mongoose
    .model("variables", VariablesSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
});

var WhileSchema = mongoose.Schema({
  question: String,
  type: String,
  answers: String,
  correct_ans: Array
});

router.get("/while", (req, res) => {
  mongoose.connect(config.DB2, { userNewUrlParser: true }).then(
    () => {
      console.log("Python Database is connected");
    },
    err => {
      console.log("Cannot not connect to the database" + err);
    }
  );


  mongoose
    .model("while", WhileSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      
    });
    
});


module.exports = router;
