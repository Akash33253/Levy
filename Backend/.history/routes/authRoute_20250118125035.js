const express = require('express');
const authRouter = express.Router();

const User = require('../models/User')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'akashgtcatopk'


authRouter.post('/createUser',async (req,res)=>{
    
})











module.exports = authRouter



