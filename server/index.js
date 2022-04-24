const app = (require('express')())
const config = require('./config')
const mysql = require('mysql');

var con = mysql.createConnection({
    host: config.db.HOST,
    user: config.db.USER,
    password: config.db.PASSWORD
  });
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.listen(config.env.PORT, () => {


    console.log("Server is running!");
})



