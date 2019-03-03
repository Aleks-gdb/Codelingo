const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

var PythonModuleSchema = mongoose.Schema({
    test_name: String,
    pre_req: String
});

var py = mongoose.model('python_modules',PythonModuleSchema);


router.get('/module', (req,res) =>{
    
})

module.exports = router;

