const connectToMongoose = require('./db');
const express = require('express')
const cors = require('cors');



connectToMongoose();

const port = process.env.PORT || 5000