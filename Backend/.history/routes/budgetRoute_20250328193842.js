const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const Budget = require('../models/Budget');
const Expense = require('../models/Expense');
const budgetRouter = express.Router();


budgetRouter.post('/createCategoryBudget', fetchUser, async (req, res) => {
    try {
      const { year, category, amount } = req.body; // Single category and amount
      const month = 
      if (!year || !month || !category || !amount) {
        return res.status(400).json({ success: false, message: "Year, month, category, and amount are required" });
      }

      let budget = await Budget.findOne({ user: req.user.id, year, month });
  
      if (budget) {
        // Check if category already exists
        const categoryIndex = budget.categories.findIndex(cat => cat.category === category);
  
        if (categoryIndex !== -1) {
          // Update existing category budget
          budget.categories[categoryIndex].amount = amount;
        } else {
          // Add new category budget
          budget.categories.push({ category, amount });
        }
      } else {
        // Create a new budget document with the single category
        budget = new Budget({ user: req.user.id, year, month, categories: [{ category, amount }] });
      }
  
      await budget.save();
  
      return res.json({ success: true, message: "Category budget saved successfully", budget });
  
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  });
  


  budgetRouter.get('/fetchBudgetWithExpenses', fetchUser, async (req, res) => {
    try {
      const { year, month } = req.query;
  
      if (!year || !month) {
        return res.status(400).json({ success: false, message: "Year and month are required" });
      }
  
      const yearInt = parseInt(year);
      const monthInt = parseInt(month) - 1;
  
      const startDate = new Date(yearInt, monthInt, 1);
      const endDate = new Date(yearInt, monthInt + 1, 0, 23, 59, 59, 999);
  
      // Fetch budget for the given month
      const budget = await Budget.findOne({ user: req.user.id, year: yearInt, month: monthInt });
  
      // Fetch expenses for the given month
      const expenses = await Expense.find({
        user: req.user.id,
        createdAt: { $gte: startDate, $lte: endDate }
      });
  
      // Process category-wise totals for expenses
      const categoryExpenses = {};
      expenses.forEach(expense => {
        const category = expense.category || "Uncategorized";
        const amount = expense.amount || 0;
  
        if (!categoryExpenses[category]) {
          categoryExpenses[category] = 0;
        }
        categoryExpenses[category] += amount;
      });
  
      // Convert to array format
      const formattedExpenses = Object.entries(categoryExpenses).map(([category, totalAmount]) => ({
        category,
        totalAmount
      }));
  
      return res.json({
        success: true,
        budget: budget ? budget.categories : [],
        expenses: formattedExpenses // Now follows the same structure as `/fetchMonthlyCategoryExpense`
      });
  
    } catch (error) {
      console.error("Error fetching budget with expenses:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  });
  


  
module.exports = budgetRouter;