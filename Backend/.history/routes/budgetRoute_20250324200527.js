const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const Budget = require('../models/Expense');
const expenseRouter = express.Router();