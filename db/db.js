const mongoose =require("mongoose");


// database connection
 function conndectDb (connectStr){
    return mongoose.connect(connectStr);
 }

 module.exports = conndectDb;