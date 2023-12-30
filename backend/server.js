require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const expenseRoute = require('./routes/expenses')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api', expenseRoute)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to Database')
        })
    }).catch((error) => {
        console.log(error)
    })