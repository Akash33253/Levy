const express = require('express');
const authRouter = express.Router();

const User = require('../models/User')

const bcrypt = require('bcryptjs')