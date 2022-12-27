//모듈을 추출
const express = require("express");
(http = require("http")), (path = require("path"));

//express 미들웨어 불러오기
var static = require("serve-static"),
    bodyParser = require("body-parser");
var session = require("express-session");
const ejs = require("ejs");
const fs = require("fs");
const { rawListeners, title } = require("process");
const { text } = require("express");

//서버를 생성, express 객체 생성
const server = express();
var router = express.Router();

//기본 속성 설정
server.set("port", process.env.PORT || 8080);
server.set("hostname", "127.0.0.1");

//정적(css,일부js,사진)파일을 사용 가능하게끔
server.use(express.static(__dirname + "/public"));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const mysql = require("./database")();

const connection = mysql.init();

mysql.db_open(connection);
//db 데이터를 받을 변수

//request 이벤트 리스너 설정//라우터 설정
server.get("/introduce", (req, res) => {
    res.sendFile(__dirname + "/public/html/introduce.html");
});
server.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/html/login.html");
});
const mainPage = fs.readFileSync("./public/html/index.ejs", "utf8");
server.get("/", (req, res) => {
    let sql = "SELECT * FROM tip ORDER BY RAND() limit 1;";
    let sqll = "SELECT * FROM concert_info ORDER BY id desc limit 2;";
    connection.query(sql + sqll, function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            let tip = rows[0][0].tip;
            let id_one = rows[1][0].id;
            let id_two = rows[1][1].id;
            //데이터 생성
            var page = ejs.render(mainPage, {
                tip: tip,
                id_one: id_one,
                id_two: id_two,
            });
            //응답
            res.send(page);
        }
    });
});

const archivePage = fs.readFileSync("./public/html/archive.ejs", "utf8");
server.get("/archive", (req, res) => {
    connection.query(
        "SELECT id FROM concert_info ORDER BY id desc limit 1;",
        function (error, rows, fields) {
            if(error) {
                console.log(error);
            } else {
                let concertNum = rows[0].id;
                //데이터 생성
                var page = ejs.render(archivePage, {
                    concertNum: concertNum,
                });
                //응답
                res.send(page);
            }
        }
    )
});

const testPage = fs.readFileSync("./public/html/test.ejs", "utf8");
server.get("/test", (req, res) => {
    connection.query(
        "SELECT * FROM test ORDER BY RAND()",
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                let testArray = [];
                for (var i in rows) {
                    testArray[i] = {
                        question: rows[i].question,
                        conductor: rows[i].conductor,
                        firstViolin: rows[i].firstViolin,
                        secondViolin: rows[i].secondViolin,
                        viola: rows[i].viola,
                        cello: rows[i].cello,
                        contra: rows[i].contra,
                        flute: rows[i].flute,
                        oboe: rows[i].oboe,
                        clarinet: rows[i].clarinet,
                        basson: rows[i].basson,
                        trumpet: rows[i].trumpet,
                        trombone: rows[i].trombone,
                        horn: rows[i].horn,
                        tuba: rows[i].tuba,
                        timpani: rows[i].timpani,
                        percussion: rows[i].percussion,
                        piano: rows[i].piano,
                        fanswer: rows[i].answer,
                        sanswer: rows[i].sanswer,
                    };
                } //데이터 생성
                var page = ejs.render(testPage, {
                    testArray: testArray,
                });
                //응답
                res.send(page);
            }
        }
    );
});

server.get("/lab", (req, res) => {
    res.sendFile(__dirname + "/public/html/lab.html");
});

server.get("/restaurant", (req, res) => {
    res.sendFile(__dirname + "/public/html/restaurant.html");
});

server.get("/gamecenter", (req, res) => {
    res.sendFile(__dirname + "/public/html/gamecenter.html");
});
server.get("/cooperation", (req, res) => {
    res.sendFile(__dirname + "/public/html/cooperation.html");
});

server.get("/qna", (req, res) => {
    res.redirect("/qna/1");
});
const qnaPage = fs.readFileSync("./public/html/qna.ejs", "utf8");
server.get("/qna/:page", (req, res) => {
    var paging = req.params.page;
    let pageStart = (paging - 1) * 10 ? (paging - 1) * 10 : 0;
    let sql =
        "SELECT q.id, q.title, q.question, q.date, c.count FROM qna_question q left outer join (select a.id as id, count(*) as count from qna_answer a group by a.id) c on q.id = c.id ORDER BY q.id desc LIMIT ?, 10;";
    let sqll = "SELECT COUNT(*) AS number FROM qna_question;";
    connection.query(sql + sqll, [pageStart], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            let dataResult = rows[0];
            let countResult = rows[1];
            let qna_question = [];
            let qna_answer_num = [];
            let qna_date = [];
            let number = countResult[0].number;
            let qna_title = [];
            let qna_id = [];
            for (var i in rows[0]) {
                qna_id[i] = dataResult[i].id;
                qna_title[i] = dataResult[i].title;
                qna_question[i] = dataResult[i].question;
                qna_answer_num[i] = dataResult[i].count
                    ? dataResult[i].count
                    : 0;
                qna_date[i] = dataResult[i].date;
            } //데이터 생성
            var page = ejs.render(qnaPage, {
                page_num: 10,
                pass: true,
                page: paging,
                number: number,
                qna_id: qna_id,
                qna_title: qna_title,
                qna_question: qna_question,
                qna_answer_num: qna_answer_num,
                qna_date: qna_date,
            });
            //응답
            res.send(page);
        }
    });
});
const qnaReadPage = fs.readFileSync("./public/html/qnaRead.ejs", "utf8");
server.get("/qna/read/:idx", (req, res) => {
    var idx = req.params.idx;
    let sql =
        "SELECT q.id, q.title, q.question, q.date, c.count FROM qna_question q left outer join (select a.id as id, count(*) as count from qna_answer a group by a.id) c on q.id = c.id where q.id = ?;";
    let sqll = "SELECT answer, date FROM qna_answer WHERE id=? ORDER BY date;";
    connection.query(sql + sqll, [idx, idx], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            let question = rows[0];
            let answer = rows[1];
            let qna_id = question[0].id;
            let qna_title = question[0].title;
            let qna_question = question[0].question;
            let qna_question_date = question[0].date;
            let qna_answer_num = question[0].count ? question[0].count : 0;
            let qna_answer = [];
            let qna_answer_date = [];
            if (rows[1]) {
                for (var i in rows[1]) {
                    qna_answer[i] = answer[i].answer;
                    qna_answer_date[i] = answer[i].date;
                }
            } else {
                qna_answer[i] = "null";
                qna_answer_date[i] = "null";
            }
            //데이터 생성
            var page = ejs.render(qnaReadPage, {
                qna_id: qna_id,
                qna_title: qna_title,
                qna_question: qna_question,
                qna_answer_num: qna_answer_num,
                qna_question_date: qna_question_date,
                qna_answer: qna_answer,
                qna_answer_date: qna_answer_date,
            });
            //응답
            res.send(page);
        }
    });
});
server.post("/qna/questionSubmit", (req, res) => {
    let title = req.body.qna_title;
    let question = req.body.qna_question;
    let password = req.body.qna_password;
    let date = req.body.qna_date;
    let sql =
        'INSERT INTO qna_question (title, question, password, date) VALUES(?, ?, password("?"), ?)';
    let params = [title, question, password, date];
    connection.query(sql, params, function (err, result, fields) {
        if (err) {
            console.log(err);
        }
        return res.redirect("/qna");
    });
});
server.post("/qna/answerSubmit", (req, res) => {
    let answer = req.body.qna_answer;
    let id = req.body.qna_id;
    let date = req.body.qna_date;
    let sql = "INSERT INTO qna_answer (id, answer, date) VALUES(?, ?, ?)";
    let params = [id, answer, date];
    connection.query(sql, params, function (err, result, fields) {
        if (err) {
            console.log(err);
        }
        return res.redirect("/qna/read/" + id);
    });
});
server.post("/qna/deleteSubmit", (req, res) => {
    let password = req.body.qna_password;
    let id = req.body.qna_id;
    let sql1 =
        'SELECT count(*) as count FROM qna_question WHERE id=? and password=password("?");';
    let sql = 'DELETE FROM qna_question WHERE id=? and password=password("?");';
    let params = [id, password, id, password];
    connection.query(sql1 + sql, params, function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
        let count = rows[0][0].count;
        //sql1로 부터 해당 테이블에 (id=id && password=password)가 없으면 count가 0이고 해당 게시글에 머무르게 됨
        if (count == 0) {
            res.send("<script>alert('비밀번호가 틀렸습니다.');location.href='/qna/read/" + id+"';</script>");
        } else {//(id=id && password=password)가 있으면 해당 게시글을 지우고 qna첫 페이지로 넘어감
            return res.redirect("/qna");
        }
    });
});

const arcReadPage = fs.readFileSync("./public/html/arcConcert.ejs", "utf8");
server.get("/archive/concert/:idx", (req, res) => {
    var idx = req.params.idx;
    let sql_info = "SELECT * FROM concert_info WHERE id=?;"; //첫번째 sql -> rows[0]
    let sql_program = "SELECT * FROM concert_program WHERE id=?;"; //두번째 sql -> rows[1]
    connection.query(
        sql_info + sql_program,
        [idx, idx],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                let concert_id = rows[0][0].id;
                let concert_title = rows[0][0].title;
                let concert_place = rows[0][0].place;
                let concert_date = rows[0][0].date;
                let concert_conductor = rows[0][0].conductor;
                let concert_composer = [];
                let concert_program = [];
                for (var i in rows[1]) {
                    concert_composer[i] = rows[1][i].composer;
                    concert_program[i] = rows[1][i].program;
                }

                //데이터 생성
                var page = ejs.render(arcReadPage, {
                    concert_id: concert_id,
                    concert_title: concert_title,
                    concert_place: concert_place,
                    concert_date: concert_date,
                    concert_conductor: concert_conductor,
                    concert_program: concert_program,
                    concert_composer: concert_composer,
                });
                //응답
                res.send(page);
            }
        }
    );
});

const worldcupPage = fs.readFileSync("./public/html/worldcup.ejs", "utf8");
server.get("/worldcup", (req, res) => {
    connection.query("SELECT * FROM worldcup", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            let composer = [];
            for (var i in rows) {
                composer[i] = {
                    en: rows[i].composer_en,
                    kr: rows[i].composer_kr,
                    img: rows[i].img,
                };
            } //데이터 생성
            var page = ejs.render(worldcupPage, {
                composer: composer,
            });
            //응답
            res.send(page);
        }
    });
});

const historyPage = fs.readFileSync("./public/html/history.ejs", "utf8");
server.get("/history", (req, res) => {
    connection.query(
        "SELECT year, month, day, context FROM history ORDER BY year, month, day",
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                let activity = [];
                for (var i in rows) {
                    activity[i] = {
                        year: rows[i].year,
                        month: rows[i].month + "월",
                        day: rows[i].day ? rows[i].day + "일" : "",
                        context: rows[i].context,
                    };
                } //데이터 생성
                var page = ejs.render(historyPage, {
                    activity: activity,
                });
                //응답
                res.send(page);
            }
        }
    );
});

server.get("/policy", (req, res) => {
    res.sendFile(__dirname + "/public/html/policy.html");
});

server.get("/recruitment", (req, res) => {
    res.sendFile(__dirname + "/public/html/recruitment.html");
});

server.get("/tuner", (req, res) => {
    res.sendFile(__dirname + "/public/html/tuner.html");
});

const examPage = fs.readFileSync("./public/html/exam.ejs", "utf8");
server.get("/exam", (req, res) => {
    connection.query(
        "SELECT * FROM exam ORDER BY RAND() LIMIT 10;",
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                let examArray = [];
                for (var i in rows) {
                    examArray[i] = {
                        exam_question: rows[i].exam_question,
                        exam_answer1: rows[i].exam_answer1,
                        exam_answer2: rows[i].exam_answer2,
                        exam_answer3: rows[i].exam_answer3,
                        exam_answer4: rows[i].exam_answer4,
                    };
                } //데이터 생성
                var page = ejs.render(examPage, {
                    examArray: examArray,
                });
                //응답
                res.send(page);
            }
        }
    );
});

server.use((req, res) => {
    res.sendFile(__dirname + "/public/html/404.html");
});

//서버를 실행
http.createServer(server).listen(server.get("port"), server.get("host"), () => {
    console.log(
        "Express server running at " +
            server.get("hostname") +
            ":" +
            server.get("port")
    );
});