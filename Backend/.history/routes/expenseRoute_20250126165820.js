const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const expenseRouter = express.Router();




expenseRouter.post('/addExpense',fetchUser,ay)




module.exports = expenseRouter;