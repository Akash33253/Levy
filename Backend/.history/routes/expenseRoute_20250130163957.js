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

expenseRouter.get('/todayTotalExpense', fetchUser, async (req, res) => {
    try {
        const today = new Date();
        const startOfDay = new Date(today.setHours(0, 0, 0, 0));
        const endOfDay = new Date(today.setHours(23, 59, 59, 999));

        // Fetch today's expenses for the user
        const expensesToday = await Expense.find({
            user: req.user.id,
            createdAt: { $gte: startOfDay, $lte: endOfDay }
        });

        // Calculate total expense for today
        const totalExpense = expensesToday.reduce((total, expense) => total + expense.amount, 0);

        return res.json({
            success: true,
            totalExpense
        });
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
})


expenseRouter.get('/fetchMonthlyExpenses', fetchUser, async (req, res) => {
    try {
      const { year, month } = req.query;  // Expecting year and month as query params
  
      if (!year || !month) {
        return res.status(400).json({ success: false, message: "Year and month are required" });
      }
  
      // Convert year and month to numbers
      const yearInt = parseInt(year);
      const monthInt = parseInt(month) - 1;  // JavaScript months are 0-indexed
  
      // Get first and last date of the given month
      const startDate = new Date(yearInt, monthInt, 1);
      const endDate = new Date(yearInt, monthInt + 1, 0, 23, 59, 59, 999);  // Last day of month
  
      // Fetch expenses for the user within the month
      const expenses = await Expense.find({
        user: req.user.id,
        createdAt: { $gte: startDate, $lte: endDate }
      }).sort({ createdAt: -1 });  // Sort expenses by creation date in descending order
  
      // Group expenses by date
      const groupedExpenses = {};
  
      expenses.forEach(expense => {
        const dateKey = expense.createdAt.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  
        if (!groupedExpenses[dateKey]) {
          groupedExpenses[dateKey] = [];
        }
  
        groupedExpenses[dateKey].push(expense);
      });
  
      // Sort the grouped expenses by date (in descending order)
      const sortedGroupedExpenses = Object.keys(groupedExpenses)
        .sort((a, b) => new Date(b) - new Date(a))  // Sort dates in descending order
        .reduce((acc, date) => {
          acc[date] = groupedExpenses[date].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));  // Sort expenses by creation date
          return acc;
        }, {});
  
      return res.json({
        success: true,
        expensesByDate: sortedGroupedExpenses
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  });


expenseRouter.get('/fetchTotalMonthlyExpense', fetchUser, async (req, res) => {
    try {
      const { year, month } = req.query;  // Expecting year and month as query params
  
      if (!year || !month) {
        return res.status(400).json({ success: false, message: "Year and month are required" });
      }
  
      // Convert year and month to numbers
      const yearInt = parseInt(year);
      const monthInt = parseInt(month) - 1;  // JavaScript months are 0-indexed
  
      // Get first and last date of the given month
      const startDate = new Date(yearInt, monthInt, 1);
      const endDate = new Date(yearInt, monthInt + 1, 0, 23, 59, 59, 999);  // Last day of month
  
      // Fetch expenses for the user within the month
      const expenses = await Expense.find({
        user: req.user.id,
        createdAt: { $gte: startDate, $lte: endDate }
      });
  
      // Calculate total expense for the month
      const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
  
      return res.json({
        success: true,
        totalExpense: totalExpense
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  });


module.exports = expenseRouter;