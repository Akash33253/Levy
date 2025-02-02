require('dotenv').config();
const connectToMongoose = require('./db');
const express = require('express')
const cors = require('cors');
const authRouter = requi


connectToMongoose();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());


app.listen(port,()=>{
    console.log("Server started at ",port); 
})