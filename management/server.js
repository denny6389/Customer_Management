const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port  = process.env.PORT || 5000;

//body parser is node js module
//클라이언트 POST request data의 body로부터 파라미터를 편리하게 추출
app.use(bodyParser.json());
//bodyParser.urlencoded()를 등록하면, 자동으로 req에 body속성이 추가되고 저장된다
//extended 는 중첩된 객체표현을 허용할지 말지를 정하는 것이다. 객체 안에 객체를 파싱할 수 있게하려면 true
app.use(bodyParser.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');

//JSON.parse() 메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성
const conf = JSON.parse(data);
const mysql = require('mysql');

const multer = require('multer');

const upload = multer({dest: './uploads'})

//createConnection 메소드의 인자로 전달되는 객체에 자신의 데이터베이스 정보(유저명과 패스워드 등)를 입력
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  port: conf.port,
  password: conf.password,
  database: conf.database
});
connection.connect();

app.get('/api/customers', (request, response) => {
  connection.query(
    "SELECT * FROM CUSTOMER",
    (err, rows, fields) => {
      response.send(rows);
    }
  );
});

app.use('http://localhost:5000/profilePic', express.static('./uploads'));
app.post('/api/customers', upload.single('profilePic'), (request,response) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)';
  let profilePic = 'http://localhost:5000/profilePic/' + request.file.filename;
  let name = request.body.name;
  let major = request.body.major;
  let studentId = request.body.studentId;
  let gender = request.body.gender;
  let params = [profilePic, name, major, studentId, gender];
  connection.query(sql, params,
    (err, rows, fields) => {
      response.send(rows);
    }
  )
});

app.listen(port,() => console.log(`listening on port ${port}`));
