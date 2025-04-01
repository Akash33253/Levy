const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const Expense = require('../models/Expense');
const expenseRouter = express.Router();