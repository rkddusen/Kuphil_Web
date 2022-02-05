const mysql = require('mysql');

module.exports = function () {
    return {
        init: function () {
            return mysql.createConnection({
                host: '172.30.1.51',
                port: '3306',
                user: 'kuphil',
                password: 'kuphil031103',
                database: 'schedule',
                dateStrings: 'date'
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