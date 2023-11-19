const mysql = require('mysql');
require('dotenv').config();

module.exports = function () {
    return {
        init: function () {
            return mysql.createConnection({
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                user: process.env.DB_NAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                dateStrings: 'date',
                multipleStatements : true//다중쿼리문 보낼수있음
            })
        },
        
        db_open: function (con) {
            con.connect(function (err) {
                if (err) {
                    console.log(process.env.DB_HOST)
                    console.error('mysql connection error :' + err);
                } else {
                    console.info('mysql is connected successfully.');
                }
            })
        }
    }
};