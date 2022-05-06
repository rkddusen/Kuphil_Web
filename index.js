//모듈을 추출
const express = require("express"); http = require('http'), path = require('path');

//express 미들웨어 불러오기
var static = require('serve-static'), bodyParser = require('body-parser'); var session = require('express-session');
const ejs = require('ejs');
const fs = require('fs');
const { rawListeners } = require("process");

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
    let main = (req.body.maincheck=='on') ? 1 : 0;
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
const mainPage = fs.readFileSync('./index.ejs', 'utf8');
server.get("/", (req, res) => {
    let data = '';
    connection.query('SELECT date,starttime,endtime,title FROM schedule WHERE main=1',
        function (error, rows, fields) {
            if (error) {
                console.log(error); 
            }
            else {
                if(rows.length==0){
                    data='환영합니다~!';
                }
                else{
                    data += rows[0].date + " " + rows[0].starttime.substring(0,5) + "~";
                    data += rows[0].endtime.substring(0,5) + " / ";
                    data += rows[0].title;
                    console.log(data);
                }
                //데이터 생성
                var page = ejs.render(mainPage, {
                    db: data,
                });
                //응답
                res.send(page);
            }
        }
    );
});
// server.get("/", (req, res) => {

//     res.sendFile(__dirname + "/index.html");
// });
server.get("/archive", (req, res) => {

    res.sendFile(__dirname + "/archive.html");
});

const calPagealbum = fs.readFileSync('./album.ejs', 'utf8');
server.get("/album", (req, res) => {
    
    connection.query('SELECT firstTitle, secondTitle, address FROM album ORDER BY firstTitle, secondTitle',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            }
            else {
                let imagealbum=[];
                let count=0;
                for (var i in rows) {
                    imagealbum[i] = rows[i].firstTitle + "//" + rows[i].secondTitle + "//";
                    imagealbum[i] += rows[i].address;
                    count++;
                }//데이터 생성
                var page = ejs.render(calPagealbum, {
                    db: imagealbum,
                    count:count,
                });
                //응답
                res.send(page);
            }
        }
    );
});


server.get("/signup1", (req, res) => {
    res.sendFile(__dirname + "/signup1.html");
});

server.get("/signup2", (req, res) => {
    res.sendFile(__dirname + "/signup2.html");
});

server.post('/signup2/verify', function (req, res) {
    let id_data = req.body.signup_id;
    let pwd_data = req.body.signup_pwd;

    let sql = 'INSERT INTO signupinformation (id_data, pwd_data) VALUES(?, ?)';
    let params = [id_data, pwd_data];
    
    connection.query(sql, params, function(err, result, fields) {
        if(err) console.log('query is not excuted. insert fail...\n' + err);
        else res.redirect('/signup3');
    });
});

const signup3Page = fs.readFileSync('./signup3.ejs', 'utf8');
server.get('/signup3', function (req, res) {
    let id_data = '';
    let pwd_data = '';
    var sql = 'SELECT id_data, pwd_data FROM signupinformation ORDER BY id_data, pwd_data';    
    connection.query(sql, 
        function (err, rows, fields) {
        if (err) {
            console.log('query is not excuted. select fail...\n' + err);
        }
        else {
            let list = [];
            let count = 0;
            for (var i in rows) {
                list[i] = rows[i].id_data + "/" + rows[i].pwd_data+"//";
                count++;
            }
            console.log(rows);
            var page = ejs.render(signup3Page, {
                db:list,
                count:count, 
            });
            res.send(page);
        }
    });
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
    console.log('Express server running at ' + server.get('hostname') +':'+ server.get('port'));
});
