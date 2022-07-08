//모듈을 추출
const express = require("express"); http = require('http'), path = require('path');

//express 미들웨어 불러오기
var static = require('serve-static'), bodyParser = require('body-parser'); var session = require('express-session');
const ejs = require('ejs');
const fs = require('fs');
const { rawListeners } = require("process");
const { text } = require("express");

//서버를 생성, express 객체 생성
const server = express();
var router = express.Router();

//기본 속성 설정
server.set('port', process.env.PORT || 8080);
server.set('hostname', '127.0.0.1');

//정적(css,일부js,사진)파일을 사용 가능하게끔
server.use(express.static(__dirname + "/public"));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

//request 이벤트 리스너 설정//라우터 설정
server.get("/", (req, res) => {

    res.sendFile(__dirname + "/public/html/index.html");
});
server.get("/introduce", (req, res) => {

    res.sendFile(__dirname + "/public/html/introduce.html");
});
server.get("/login", (req, res) => {

    res.sendFile(__dirname + "/public/html/login.html");
});
server.get("/history", (req, res) => {

    res.sendFile(__dirname + "/public/html/history.html");
});

server.post("/calendar/add_schedule", (req, res) => {
    let title = req.body.title;
    let startDate = req.body.year + '-' + req.body.month + '-' + req.body.day;
    let startTime = req.body.startHour + ':' + req.body.startMin;
    let endTime = req.body.endHour + ':' + req.body.endMin;
    let main = (req.body.maincheck == 'on') ? 1 : 0;
    if (req.body.allDay) {
        startTime = '00:00';
        endTime = '23:59';
    }
    let sql = 'UPDATE schedule SET main=0 ; INSERT INTO schedule (title, date, startTime, endTime, main) VALUES(?, ?, ?, ?, ?)';
    let params = [title, startDate, startTime + ":00", endTime + ":00", main];
    connection.query(sql, params, function (err, result, fields) {
        if (err) {
            console.log(err);
        }
        return res.redirect('/public/html/calendar');
    })
});
server.post("/calendar/delete_schedule", (req, res) => {
    let data = req.body.deleteData;
    let spli = '';
    let array = [];
    for (let i = 0; i < 4; i++) {
        spli = data.split('/');
        array[i] = spli[i];
    }
    let sql = "DELETE FROM schedule WHERE date='" + array[0] + "' and starttime='" + array[1] + "' and endtime='" + array[2] + "' and title='" + array[3] + "'";
    connection.query(sql, function (err, result) {
        if (err) {
            console.log(err);
        }
        return res.redirect('/public/html/calendar');
    })
});
const mysql = require('./database')();

const connection = mysql.init();

mysql.db_open(connection);
//db 데이터를 받을 변수

const calPage = fs.readFileSync('./public/html/calendar.ejs', 'utf8');
server.get("/calendar", (req, res) => {
    let data = '';
    connection.query('SELECT date,starttime,endtime,title FROM schedule ORDER BY date',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            }
            else {
                for (var i in rows) {
                    data += rows[i].date + "/" + rows[i].starttime + "/";
                    data += rows[i].endtime + "/";
                    data += rows[i].title + "//";
                }//데이터 생성
                var page = ejs.render(calPage, {
                    db: data,
                });
                //응답
                res.send(page);
            }
        }
    );
});

server.get("/archive", (req, res) => {

    res.sendFile(__dirname + "/public/html/archive.html");
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

const testPage = fs.readFileSync('./public/html/test.ejs', 'utf8');
server.get("/test", (req, res) => {

    connection.query('SELECT question, conductor, firstViolin,secondViolin,viola,cello,contra,flute,oboe,clarinet,basson,trumpet,trombone,horn,tuba,timpani,percussion ,piano ,answer,sanswer FROM game ORDER BY RAND()',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            }
            else {
                let question = []; let conductor = []; let firstViolin = []; let secondViolin = []; let viola = []; let cello = []; let contra = [];
                let flute = []; let oboe = []; let clarinet = []; let basson = []; let trumpet = []; let trombone = []; let horn = []; let tuba = [];
                let timpani = []; let percussion = []; let piano = []; let fanswer = []; let sanswer = [];
                for (var i in rows) {
                    question[i] = rows[i].question; conductor[i] = rows[i].conductor; firstViolin[i] = rows[i].firstViolin;
                    secondViolin[i] = rows[i].secondViolin; viola[i] = rows[i].viola; cello[i] = rows[i].cello; contra[i] = rows[i].contra;
                    flute[i] = rows[i].flute; oboe[i] = rows[i].oboe; clarinet[i] = rows[i].clarinet;
                    basson[i] = rows[i].basson; trumpet[i] = rows[i].trumpet; trombone[i] = rows[i].trombone; horn[i] = rows[i].horn;
                    tuba[i] = rows[i].tuba; timpani[i] = rows[i].timpani; percussion[i] = rows[i].percussion;
                    piano[i] = rows[i].piano; fanswer[i] = rows[i].answer; sanswer[i] = rows[i].sanswer;
                }//데이터 생성
                var page = ejs.render(testPage, {
                    question: question, conductor: conductor, firstViolin: firstViolin, secondViolin: secondViolin, viola: viola,
                    cello: cello, contra: contra, flute: flute, oboe: oboe,
                    clarinet: clarinet, basson: basson, trumpet: trumpet, trombone: trombone, horn: horn,
                    tuba: tuba, timpani: timpani, percussion: percussion, piano: piano,
                    fanswer: fanswer,sanswer: sanswer,
                });
                //응답
                console.log(question[0]);
                res.send(page);
            }
        }
    );
});

server.get("/lab", (req, res) => {

    res.sendFile(__dirname + "/public/html/lab.html");
});
server.get("/gamecenter", (req, res) => {

    res.sendFile(__dirname + "/public/html/gamecenter.html");
});

server.get("/snakegame", (req, res) => {

    res.sendFile(__dirname + "/public/html/snake_game.html");
});

const game2048 = fs.readFileSync('./public/html/2048.ejs', 'utf8');
server.get("/2048game", (req, res) => {
    connection.query('SELECT name, score FROM 2048game ORDER BY score desc limit 15;',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            }
            else {
                let name = [];
                let score = [];
                for (var i in rows) {
                    name[i] = rows[i].name ? rows[i].name : "정보 없음";
                    score[i] = rows[i].score ? rows[i].score : 0;
                }//데이터 생성
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
    let sql = 'INSERT INTO 2048game (name, score) VALUES(?, ?)';
    let params = [name, score];
    connection.query(sql, params, function (err, result, fields) {
        if (err) {
            console.log(err);
        }
        return res.redirect('/public/html/2048game');
    })
});

server.use((req, res) => {
    res.sendFile(__dirname + "/public/html/404.html");
});

//서버를 실행
http.createServer(server).listen(server.get('port'), server.get('host'), () => {
    console.log('Express server running at ' + server.get('hostname') + ':' + server.get('port'));
});