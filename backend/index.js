const express = require("express");
const app = express();
const mysql = require("mysql");
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_ENDPOINT,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
     

});


connection.connect(function(err){

    if(!err) {
        console.log("Database is connected ... ");    
    } else {
        console.log(err.stack);    
    }
    });

app.listen(3001, () => {
    console.log("Server running");
})
