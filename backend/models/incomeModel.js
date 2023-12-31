const mongoose = require('mongoose')

const Schema=mongoose.Schema

const incomeSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: false,
    }
}, { timestamps: true })


module.exports = mongoose.model('Income', incomeSchema)