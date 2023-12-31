const Expense = require("../models/expenseModel");
const Income = require("../models/incomeModel");
const mongoose = require("mongoose");

//Create a new expense
const createExpense = async (req, res) => {
  try {
    const { date, category, desc, total } = req.body;

    // Validate input data
    if (!desc || !category || !date || !total) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newExpense = new Expense({
      date,
      category,
      desc,
      total,
    });

    await newExpense.save();

    res.status(200).json(newExpense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//GET all expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//GET a single expense
const getExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(400).json({ error: "Expense not found" });
    }

    res.status(200).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Delete an expense based on its ID.
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if (!expense) {
      return res.status(400).json({ error: "Expense not found" });
    }

    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Create new Income
const createIncome = async (req, res) => {
  try {
    const { date, total } = req.body;

    // Validate input data, including date format
    const dateFormat = "yyyy-MM-dd";
    if (!date || !total || !isValidDateFormat(date, dateFormat)) {
      return res.status(400).json({ error: "Missing or invalid fields" });
    }

    const newIncome = new Income({
      date,
      total,
    });

    await newIncome.save();

    res.status(200).json(newIncome);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//GET a list of all incomes
const getIncome = async (req, res) => {
  try {
    const incomes = await Income.find();
    res.status(200).json(incomes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Delete income by ID
const deleteIncome = async (req, res) => {
  try {
    const income = await Income.findByIdAndDelete(req.params.id);

    if (!income) {
      return res.status(400).json({ error: "Income not found" });
    }

    res.status(200).json({ message: "Income deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createExpense,
  getExpenses,
  getExpense,
  deleteExpense,
  createIncome,
  getIncome,
  deleteIncome,
};
