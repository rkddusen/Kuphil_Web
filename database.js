const mysql = require('mysql');

module.exports = function () {
    return {
        init: function () {
            return mysql.createConnection({
                host: 'uyu7j8yohcwo35j3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
                port: '3306',
                user: 'esl47komgii9v3gq',
                password: 'clm9yqrvpzkxd4in',
                database: 'iu4mzdh4h1qngohz',
                dateStrings: 'date',
                multipleStatements : true//다중쿼리문 보낼수있음
            })
        },

        db_open: function (con) {
            con.connect(function (err) {
                if (err) {
                    console.error('mysql connection error :' + err);
                } else {
                    console.info('mysql is connected successfully.');
                }
            })
        }
    }
};