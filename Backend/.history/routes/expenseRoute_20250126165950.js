const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const expenseRouter = express.Router();




expenseRouter.post('/addExpense',fetchUser,async (req,res)=>{
    try {
        let newExpense = req.body;
        newExpense.user = req.user.id;
        let expense = await Exp
    } catch (error) {
        
    }
})




module.exports = expenseRouter;