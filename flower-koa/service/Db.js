const mysql = require('nodejs-mysql').default;
const config = {
    host: '192.168.13.2',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'pro-h'
} 
const db = mysql.getInstance(config);
module.exports=db;