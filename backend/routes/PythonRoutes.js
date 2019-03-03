const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const config = require('../db');

router.get("/modules", (req, res) => {
  mongoose.connect(config.DB1, { userNewUrlParser: true }).then(
    () => {
      console.log("Python Database is connected");
    },
    err => {
      console.log("Cannot not connect to the database" + err);
    }
  );
  var PythonModuleSchema = mongoose.Schema({
    test_name: String,
    pre_req: String
  });

  var python_modules = mongoose
    .model("python_modules", PythonModuleSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
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
  
  var ConditionalSchema = mongoose.Schema({
    question: String,
    type: String,
    answers: String,
    correct_ans: Array
  });

  var conditionals = mongoose
    .model("conditionals", ConditionalSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
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
  
  var ExpressionSchema = mongoose.Schema({
    question: String,
    type: String,
    answers: String,
    correct_ans: Array
  });

  var expressions = mongoose
    .model("expressions", ExpressionSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
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
  
  var KeywordSchema = mongoose.Schema({
    question: String,
    type: String,
    answers: String,
    correct_ans: Array
  });

  var keywords = mongoose
    .model("keywords", KeywordSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
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
  
  var LoopsSchema = mongoose.Schema({
    question: String,
    type: String,
    answers: String,
    correct_ans: Array
  });

  var loops = mongoose
    .model("loops", loopsSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
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
  
  var StringsSchema = mongoose.Schema({
    question: String,
    type: String,
    answers: String,
    correct_ans: Array
  });

  var strings = mongoose
    .model("strings", StringsSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
    
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
  
  var VariablesSchema = mongoose.Schema({
    question: String,
    type: String,
    answers: String,
    correct_ans: Array
  });

  var variables = mongoose
    .model("variables", VariablesSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      res.send(docs);
    });
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
  
  var WhileSchema = mongoose.Schema({
    question: String,
    type: String,
    answers: String,
    correct_ans: Array
  });

  var whiles = mongoose
    .model("while", WhileSchema)
    .find({}, (err, docs) => {
      console.log(docs);
      
    });
    
});


module.exports = router;
