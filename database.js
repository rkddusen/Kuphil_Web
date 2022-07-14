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

// CREATE TABLE `2048game` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `name` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//     `score` int(11) NOT NULL,
//     PRIMARY KEY (`id`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

// CREATE TABLE `test` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `question` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
//     `conductor` int(11) DEFAULT 0,
//     `firstViolin` int(11) DEFAULT 0,
//     `secondViolin` int(11) DEFAULT 0,
//     `viola` int(11) DEFAULT 0,
//     `cello` int(11) DEFAULT 0,
//     `contra` int(11) DEFAULT 0,
//     `flute` int(11) DEFAULT 0,
//     `oboe` int(11) DEFAULT 0,
//     `clarinet` int(11) DEFAULT 0,
//     `basson` int(11) DEFAULT 0,
//     `trumpet` int(11) DEFAULT 0,
//     `trombone` int(11) DEFAULT 0,
//     `horn` int(11) DEFAULT 0,
//     `tuba` int(11) DEFAULT 0,
//     `timpani` int(11) DEFAULT 0,
//     `percussion` int(11) DEFAULT 0,
//     `piano` int(11) DEFAULT 0,
//     `audience` int(11) DEFAULT 0,
//     `answer` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
//     `sanswer` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
//     PRIMARY KEY (`id`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

// CREATE TABLE `qna_answer` (
//     `id` int(11) DEFAULT NULL,
//     `answer` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
//     KEY `id` (`id`),
//     CONSTRAINT `qna_answer_ibfk_1` FOREIGN KEY (`id`) REFERENCES `qna_question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

// CREATE TABLE `qna_question` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `question` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
//     PRIMARY KEY (`id`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

// CREATE TABLE `schedule` (
//     `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//     `date` date DEFAULT NULL,
//     `starttime` time DEFAULT NULL,
//     `endtime` time DEFAULT NULL,
//     `main` tinyint(1) NOT NULL DEFAULT 0
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;