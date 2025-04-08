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

        user = await User.create({
            name : req.body.name,
            email : req.body.email,
            password : secPass
        })

        const data = {
            user : {
                id  : user.id
            }
        }
        const authToken = jwt.sign(data,JWT_SECRET);
        success=true;
        return res.json({
            success,authToken
        })
    } catch (error) {
            return res.json({
                message : error.message
            })
    }
})



authRouter.post('/login' async (req,res)=>{
    try {
        let success = false;
        const {email, password}
    } catch (error) {
        
    }
})









module.exports = authRouter



