const mongoose = require('mongoose')

const Schema=mongoose.Schema

const expenseSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false,
    },
    total: {
        type: Number,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('Expense', expenseSchema)