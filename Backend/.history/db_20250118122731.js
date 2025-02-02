const mongoose = require('mongoose');
const db_link = process.env.MOG

const connectToMongoose = ()=>{
    mongoose.connect(db_link)
.then(function(){  
    console.log("dbms connected");
})
.catch(function(err){
    console.log(err);
}) 

}

module.exports = connectToMongoose;






// 7UybbBcAEBGNZkBi