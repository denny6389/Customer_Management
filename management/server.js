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

app.get('/api/customers', (request, response) => {
  response.send([
    {'id': 1,
     'profilePic': 'https://placeimg.com/64/64/1',
     'name': 'Sam',
     'major': 'Computer Science',
     'studentId': '260728949',
     'gender': 'Male'},
    {'id': 2,
     'profilePic': 'https://placeimg.com/64/64/2',
     'name': 'Tom',
     'major': 'Progamer',
     'studentId': '2017492093',
     'gender': 'Male'}
  ]);
});

app.listen(port,() => console.log(`listening on port ${port}`));
