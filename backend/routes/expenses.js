const express = require('express')
const {
    createExpense,
    getExpenses,
    getExpense,
    deleteExpense,
    createIncome,
    getIncome,
    deleteIncome,
    
} = require('../controllers/expenseController')


const router = express.Router()

//GET all expenses
router.get('/expense/', getExpenses)

//GET a single expense
router.get('/expense/:id', getExpense)

//POST a new expense
router.post('/expense/', createExpense)

//DELETE an expense
router.delete('/expense/:id', deleteExpense)

//POST new income
router.post('/income/', createIncome)

//GET all income
router.get('/income/', getIncome)

//DELETE an income
router.delete('/income/:id', deleteIncome)


module.exports = router