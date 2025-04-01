const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const Budget = require('../models/Budget');
const budgetRouter = express.Router();




expenseRouter.post('/createCategoryBudget', fetchUser, async (req, res) => {
    try {
      const { year, month, category, amount } = req.body; // Single category and amount
  
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
  