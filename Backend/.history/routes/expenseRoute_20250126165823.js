const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const expenseRouter = express.Router();




expenseRouter.post('/addExpense',fetchUser,async)




module.exports = expenseRouter;