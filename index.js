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

    res.sendFile(__dirname + "/index.html");
});
server.get("/introduce", (req, res) => {

    res.sendFile(__dirname + "/introduce.html");
});
server.get("/login", (req, res) => {

    res.sendFile(__dirname + "/login.html");
});
server.get("/history", (req, res) => {

    res.sendFile(__dirname + "/history.html");
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
        return res.redirect('/calendar');
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
        return res.redirect('/calendar');
    })
});
const mysql = require('./database')();

const connection = mysql.init();

mysql.db_open(connection);
//db 데이터를 받을 변수

const calPage = fs.readFileSync('./calendar.ejs', 'utf8');
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
// const mainPage = fs.readFileSync('./index.ejs', 'utf8');
// server.get("/", (req, res) => {
//     let data = '';let text='';
//     connection.query('SELECT date,title FROM schedule WHERE main=1',
//         function (error, rows, fields) {
//             if (error) {
//                 console.log(error);
//             }
//             else {
//                 if (rows.length == 0) {
//                     data = '아직 특별한 일정이 없어요!';
//                 }
//                 else {
//                     data += rows[0].title;
//                     console.log(data);
//                     let today=new Date();
//                     let mainDay=new Date(rows[0].date.replace(/-/g,','));
                    
//                     let gap=mainDay.getTime()-today.getTime();
//                     let result=Math.ceil(gap/(1000*60*60*24));
                    
//                     if(result<0){
//                         text='D + '+Math.abs(result);
//                     }
//                     else if(result==0){
//                         text='D-day';
//                     }
//                     else if(result>0){
//                         text='D - '+result;
//                     }
//                 }
//                 //데이터 생성
//                 var page = ejs.render(mainPage, {
//                     db: data,
//                     text:text,
//                 });
//                 //응답
//                 res.send(page);
//             }
//         }
//     );
// });

server.get("/archive", (req, res) => {

    res.sendFile(__dirname + "/archive.html");
});

const albPage = fs.readFileSync('./album.ejs', 'utf8');
server.get("/album", (req, res) => {

    connection.query('SELECT firstTitle, secondTitle, address FROM album ORDER BY firstTitle, secondTitle',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            }
            else {
                let imagealbum = [];
                let count = 0;
                for (var i in rows) {
                    imagealbum[i] = rows[i].firstTitle + "//" + rows[i].secondTitle + "//";
                    imagealbum[i] += rows[i].address;
                    count++;
                }//데이터 생성
                var page = ejs.render(albPage, {
                    db: imagealbum,
                    count: count,
                });
                //응답
                res.send(page);
            }
        }
    );
});
server.get("/board", (req, res) => {
    res.redirect("/board/1");
});

const boaPage = fs.readFileSync('./board.ejs', 'utf8');
server.get("/board/:page", (req, res) => {
    var paging=req.params.page;
    let pageStart=(paging-1)*10?(paging-1)*10:0;
    // let sqlcnt='SELECT SQL_CALC_FOUND_ROWS * FROM board';
    let sql='SELECT title, writer, date FROM board ORDER BY date DESC LIMIT ?, 10;';
    // let sqll='SELECT table_rows FROM information_schema.tables WHERE table_name ="board";';
    let sqll='SELECT COUNT(*) AS number FROM board;';
    connection.query(sql+sqll,[pageStart],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            }
            else {
                let dataResult=rows[0];
                let countResult=rows[1];
                let data = [];
                let number=countResult[0].number;
                for (var i in rows[0]) {
                    data[i] = dataResult[i].title + "//" + dataResult[i].writer+"//"+ dataResult[i].date;
                }
                //데이터 생성
                page = ejs.render(boaPage, {
                    page_num:10,
                    pass:true,
                    page:paging,
                    data:data,
                    number:number,
                });
                res.send(page);
            }
        }
    );
});

const boaReaPage = fs.readFileSync('./board-read.ejs', 'utf8');
server.get("/read/:idx", (req, res) => {
    var idx=req.params.idx;
    connection.query('SELECT id, title, content, writer, date FROM board WHERE id=?;',[idx],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            }
            else {
                //데이터 생성
                page = ejs.render(boaReaPage, {
                    id:rows[0].id,
                    title:rows[0].title,
                    content:rows[0].content,
                    writer:rows[0].writer,
                    date:rows[0].date,
                });
                res.send(page);
            }
        }
    );
});

const gamePage = fs.readFileSync('./test.ejs', 'utf8');
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
                var page = ejs.render(gamePage, {
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

    res.sendFile(__dirname + "/lab.html");
});

server.get("/snakegame", (req, res) => {

    res.sendFile(__dirname + "/snake_game.html");
});

server.use((req, res) => {
    res.sendFile(__dirname + "/404.html");
});

//서버를 실행
// server.listen(3000, (err) => {
//     if (err) return console.log(err);
//     console.log("The server is listening on port 3000");
// });
http.createServer(server).listen(server.get('port'), server.get('host'), () => {
    console.log('Express server running at ' + server.get('hostname') + ':' + server.get('port'));
});
