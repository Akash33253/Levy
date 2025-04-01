const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  year: { type: Number, required: true },
  month: { type: Number, required: true }, // 0-indexed (Jan = 0, Feb = 1, etc.)
  categories: [
    {
      category: { type: String, required: true },
      amount: { type: Number, required: true }
    }
  ]
}, { timestamps: true });

const Budget = mongoose.model('Budget', BudgetSchema);
module.exports = Budget;
