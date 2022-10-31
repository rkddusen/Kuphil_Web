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
// server.get("/", (req, res) => {

//     res.sendFile(__dirname + "/public/html/index.html");
// });
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
// server.get("/history", (req, res) => {

//     res.sendFile(__dirname + "/public/html/history.html");
// });

// server.post("/calendar/add_schedule", (req, res) => {
//     let title = req.body.title;
//     let startDate = req.body.year + '-' + req.body.month + '-' + req.body.day;
//     let startTime = req.body.startHour + ':' + req.body.startMin;
//     let endTime = req.body.endHour + ':' + req.body.endMin;
//     let main = (req.body.maincheck == 'on') ? 1 : 0;
//     if (req.body.allDay) {
//         startTime = '00:00';
//         endTime = '23:59';
//     }
//     let sql = 'UPDATE schedule SET main=0 ; INSERT INTO schedule (title, date, startTime, endTime, main) VALUES(?, ?, ?, ?, ?)';
//     let params = [title, startDate, startTime + ":00", endTime + ":00", main];
//     connection.query(sql, params, function (err, result, fields) {
//         if (err) {
//             console.log(err);
//         }
//         return res.redirect('/public/html/calendar');
//     })
// });
// server.post("/calendar/delete_schedule", (req, res) => {
//     let data = req.body.deleteData;
//     let spli = '';
//     let array = [];
//     for (let i = 0; i < 4; i++) {
//         spli = data.split('/');
//         array[i] = spli[i];
//     }
//     let sql = "DELETE FROM schedule WHERE date='" + array[0] + "' and starttime='" + array[1] + "' and endtime='" + array[2] + "' and title='" + array[3] + "'";
//     connection.query(sql, function (err, result) {
//         if (err) {
//             console.log(err);
//         }
//         return res.redirect('/public/html/calendar');
//     })
// });

// const calPage = fs.readFileSync('./public/html/calendar.ejs', 'utf8');
// server.get("/calendar", (req, res) => {
//     let data = '';
//     connection.query('SELECT date,starttime,endtime,title FROM schedule ORDER BY date',
//         function (error, rows, fields) {
//             if (error) {
//                 console.log(error);
//             }
//             else {
//                 for (var i in rows) {
//                     data += rows[i].date + "/" + rows[i].starttime + "/";
//                     data += rows[i].endtime + "/";
//                     data += rows[i].title + "//";
//                 }//데이터 생성
//                 var page = ejs.render(calPage, {
//                     db: data,
//                 });
//                 //응답
//                 res.send(page);
//             }
//         }
//     );
// });

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


// server.get("/board", (req, res) => {
//     res.redirect("/board/1");
// });

// server.get("/board/write", (req, res) => {
//     res.sendFile(__dirname + "/board-write.html");
// });

// const boaPage = fs.readFileSync('./board.ejs', 'utf8');
// server.get("/board/:page", (req, res) => {
//     var paging=req.params.page;
//     let pageStart=(paging-1)*10?(paging-1)*10:0;
//     let sql='SELECT title, writer, date FROM board ORDER BY date DESC LIMIT ?, 10;';
//     let sqll='SELECT COUNT(*) AS number FROM board;';
//     connection.query(sql+sqll,[pageStart],
//         function (error, rows, fields) {
//             if (error) {
//                 console.log(error);
//             }
//             else {
//                 let dataResult=rows[0];
//                 let countResult=rows[1];
//                 let data = [];
//                 let number=countResult[0].number;
//                 for (var i in rows[0]) {
//                     data[i] = dataResult[i].title + "//" + dataResult[i].writer+"//"+ dataResult[i].date;
//                 }
//                 //데이터 생성
//                 page = ejs.render(boaPage, {
//                     page_num:10,
//                     pass:true,
//                     page:paging,
//                     data:data,
//                     number:number,
//                 });
//                 res.send(page);
//             }
//         }
//     );
// });

// server.get("/signup1", (req, res) => {
//     res.sendFile(__dirname + "/signup1.html");
// });

// server.get("/signup2", (req, res) => {
//     res.sendFile(__dirname + "/signup2.html");
// });

// server.post('/signup2/verify', function (req, res) {
//     let id_data = req.body.signup_id;
//     let pwd_data = req.body.signup_pwd;

//     let sql = 'INSERT INTO signupinformation (id_data, pwd_data) VALUES(?, ?)';
//     let params = [id_data, pwd_data];

//     connection.query(sql, params, function(err, result, fields) {
//         if(err) console.log('query is not excuted. insert fail...\n' + err);
//         else res.redirect('/signup3');
//     });
// });

// const signup3Page = fs.readFileSync('./signup3.ejs', 'utf8');
// server.get('/signup3', function (req, res) {
//     let id_data = '';
//     let pwd_data = '';
//     var sql = 'SELECT id_data, pwd_data FROM signupinformation ORDER BY id_data, pwd_data';
//     connection.query(sql,
//         function (err, rows, fields) {
//         if (err) {
//             console.log('query is not excuted. select fail...\n' + err);
//         }
//         else {
//             let list = [];
//             let count = 0;
//             for (var i in rows) {
//                 list[i] = rows[i].id_data + "/" + rows[i].pwd_data+"//";
//                 count++;
//             }
//             console.log(rows);
//             var page = ejs.render(signup3Page, {
//                 db:list,
//                 count:count,
//             });
//             res.send(page);
//         }
//     });
// });

// const boaReaPage = fs.readFileSync('./board-read.ejs', 'utf8');
// server.get("/read/:idx", (req, res) => {
//     var idx=req.params.idx;
//     connection.query('SELECT id, title, content, writer, date FROM board WHERE id=?;',[idx],
//         function (error, rows, fields) {
//             if (error) {
//                 console.log(error);
//             }
//             else {
//                 //데이터 생성
//                 page = ejs.render(boaReaPage, {
//                     id:rows[0].id,
//                     title:rows[0].title,
//                     content:rows[0].content,
//                     writer:rows[0].writer,
//                     date:rows[0].date,
//                 });
//                 res.send(page);
//             }
//         }
//     );
// });

const testPage = fs.readFileSync("./public/html/test.ejs", "utf8");
server.get("/test", (req, res) => {
    connection.query(
        "SELECT * FROM test ORDER BY RAND()",
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                // let question = []; let conductor = []; let firstViolin = []; let secondViolin = []; let viola = []; let cello = []; let contra = [];
                // let flute = []; let oboe = []; let clarinet = []; let basson = []; let trumpet = []; let trombone = []; let horn = []; let tuba = [];
                // let timpani = []; let percussion = []; let piano = []; let fanswer = []; let sanswer = [];
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

server.get("/etc", (req, res) => {
    res.sendFile(__dirname + "/public/html/etc.html");
});

server.get("/laboratory", (req, res) => {
    res.sendFile(__dirname + "/public/html/laboratory.html");
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
// server.get("/snakegame", (req, res) => {

//     res.sendFile(__dirname + "/public/html/snake_game.html");
// });

const game2048 = fs.readFileSync("./public/html/2048.ejs", "utf8");
server.get("/2048game", (req, res) => {
    connection.query(
        "SELECT name, score FROM 2048game ORDER BY score desc limit 15;",
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                let name = "";
                let score = [];
                for (var i in rows) {
                    name += rows[i].name ? rows[i].name : "정보 없음";
                    name += "//나누는구간//";
                    score[i] = rows[i].score ? rows[i].score : 0;
                } //데이터 생성
                var page = ejs.render(game2048, {
                    name: name,
                    bestscore: score,
                });
                //응답
                res.send(page);
            }
        }
    );
});

server.post("/2048game/record", (req, res) => {
    let name = req.body.name;
    let score = req.body.score;
    let sql = "INSERT INTO 2048game (name, score) VALUES(?, ?)";
    let params = [name, score];
    connection.query(sql, params, function (err, result, fields) {
        if (err) {
            console.log(err);
        }
        return res.redirect("/2048game");
    });
});

server.get("/qna", (req, res) => {
    res.redirect("/qna/1");
});
const qnaPage = fs.readFileSync("./public/html/qna.ejs", "utf8");
server.get("/qna/:page", (req, res) => {
    var paging = req.params.page;
    let pageStart = (paging - 1) * 10 ? (paging - 1) * 10 : 0;
    // let sql = 'SELECT title, question, answer_num, date FROM qna_question ORDER BY id desc LIMIT ?, 10;';
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
            // return res.redirect("/qna/read/" + id);
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

// server.get("/worldcup", (req, res) => {

//     res.sendFile(__dirname + "/public/html/worldcup.html");
// });
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
                // entry = "en: '" + rows[i].composer_en + "', kr: '" + rows[i].composer_kr + "', img: '" + rows[i].img + "'";
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

server.get("/audio", (req, res) => {
    res.sendFile(__dirname + "/public/html/audio.html");
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


