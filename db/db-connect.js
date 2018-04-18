const mysql_connect = require('mysql');

let mysql = mysql_connect.createConnection( 
    {
        host:     process.env.DB_HOST,
        user:     process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
);

mysql.connect();

module.exports = mysql; 