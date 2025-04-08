const mongoose = require('mongoose')


const expenseSchema = mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    amount : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    
})