const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true,  
    },
    sets: {
        type: Number,
        required: true,
    },
    status: String
})

const Exercisedb = mongoose.model('Exercisedb', schema);

module.exports = Exercisedb;