const express = require('express');
const authRouter = express.Router();

const User = require('../models/User')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');
const JWT_SECRET = 'akashgtcatopk'


authRouter.post('/createUser', async (req, res) => {
    try {
        let success = false;
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.json({
                success,
                message: "Email is already exist!"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        const newUser = await User.findOne({email : })
        success = true;
        return res.json({
            success, authToken
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
})



authRouter.post('/login', async (req, res) => {
    try {
        let success = false;
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            const passwordCmp = await bcrypt.compare(password, user.password)
            if (passwordCmp) {
                const data = {
                    user: {
                        id: user.id
                    }
                }
                const authToken = jwt.sign(data, JWT_SECRET);
                success = true;
                return res.json({
                    success, authToken ,user
                })
            }
            else {
                return res.json({
                    success,
                    message: "Incorrect credentials"
                })
            }
        }
        else {
            return res.json({
                success,
                message: "User not Found"
            })
        }
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
})



authRouter.get('/getUser',fetchUser,async (req, res)=>{ 
    try {
        let user  = await User.findById(req.user.id);
        if(user){
            return res.json({
                user : user
            })
        }
    } catch (error) {
        return res.json({
            message  :error.message
        })
    }
})










module.exports = authRouter



