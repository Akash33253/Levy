const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const Expense = require('../models/Expense');
const expenseRouter = express.Router();




expenseRouter.post('/addExpense', fetchUser, async (req, res) => {
    try {
        let newExpense = req.body;
        newExpense.user = req.user.id;
        let expense = await Expense.create(newExpense);
        return res.json({
            success: true,
            expense
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
})


expenseRouter.get('/fetchRecentExpenses', fetchUser, async (req, res) => {
    try {
        const recentExpenses = await Expense.find({ user: req.user.id })
            .sort({ createdAt: -1 }) // Sort by creation date in descending order
            .limit(5);  // Get only the last 5 expenses

        return res.json({
            success: true,
            recentExpenses
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});



expenseRouter.get('/fetchAllExpenses', fetchUser, async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user.id })
            .sort({ createdAt: -1 });
        return res.json({
            success: true,
            expenses
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
})
expenseRouter.get('/todayExpense', fetchUser, async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user.id })
            .sort({ createdAt: -1 });
        return res.json({
            success: true,
            expenses
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
})



module.exports = expenseRouter;