const express = require('express');
const authRouter = express.Router();

const User = require('../models/User')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'akashgtcatopk'


authRouter.post('/createUser',async (req,res)=>{
    try {
        let success = false;
        let user = await User.findOne({email : req.body.email});
        if(user){
            return res.json({
                success,
                message : "Email is already exist!"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt);
    } catch (error) {
        
    }
})











module.exports = authRouter



