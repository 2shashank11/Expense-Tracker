const Expense = require('../models/expenseModel')
const Income = require('../models/incomeModel')
const mongoose = require('mongoose')

const createExpense = async (req, res) =>{}

const getExpenses = async (req, res) =>{}

const getExpense = async (req, res) =>{}

const deleteExpense = async (req, res) =>{}

const createIncome = async (req, res) =>{}

const getIncome = async (req, res) =>{}

const deleteIncome = async (req, res) =>{}

module.exports = {
    createExpense,
    getExpenses,
    getExpense,
    deleteExpense,
    createIncome,
    getIncome,
    deleteIncome,
}