require('dotenv').config();
const connectToMongoose = require('./db');
const express = require('express')
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const expenseRouter = require('./routes/expenseRoute');
const budgetRouter = require('./routes/budgetRoute');


connectToMongoose();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth',authRouter);
app.use('/expense',expenseRouter);
app.use('/budget',budgetRouter);


app.listen(port,()=>{
    console.log("Server started at ",port); 
})