const mongoose = require('mongoose');
const db_link = "mongodb+srv://akashgtcatopk:<db_password>@cluster0.lbjee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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