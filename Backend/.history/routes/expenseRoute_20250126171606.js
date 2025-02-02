const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const Expense = require('../models/Expense');
const expenseRouter = express.Router();




expenseRouter.post('/addExpense',fetchUser,async (req,res)=>{
    try {
        let newExpense = req.body;
        newExpense.user = req.user.id;
        let expense = await Expense.create(newExpense);
        return res.json({
            success : true,
            expense
        })
    } catch (error) {
        return res.json({
            message : error.message
        })
    }
})



expenseRouter.get('/fetchAllNotes',fetchUser,async (req,res)=>{
    try {
        const notes = await Notes.find({user : req.user.id});
        return res.json(notes)
    } catch (error) {
        return res.json({
            message : error.message
        })
    }
})



module.exports = expenseRouter;