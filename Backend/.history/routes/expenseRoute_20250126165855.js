const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const expenseRouter = express.Router();




expenseRouter.post('/addExpense',fetchUser,async (req,res)=>{
    try {
        let newExpense = 
    } catch (error) {
        
    }
})




module.exports = expenseRouter;