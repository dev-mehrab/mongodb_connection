require("dotenv").config();

const express = require("express");

const conndectDb = require('./db/db');

// application 
const app = express();


// secret data

const {port , mongooDb } =process.env;

conndectDb(mongooDb)
.then(()=>{
    console.log("MongooDb connected");

    // server

    app.listen(port || 4000, ()=>{
        console.log("application is running on port " , port || 4000);
    });

}).catch((e)=>{
    console.log(e);
});

