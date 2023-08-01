const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    Reps : {
        type: Number,
        required: true,  
    },
    Sets : {
        type: Number,
        required: true,
    },
    status : String
})

const Exercisedb = mongoose.model('exercisedb', schema);

module.exports = Exercisedb;