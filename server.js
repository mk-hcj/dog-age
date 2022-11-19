const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, function(){
    console.log(`Server has started at port ${port}`);
});
app.use(express.static(__dirname));
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html', __dirname  + "/style.css");
// });

app.post('/', function(req, res){
    let ydogName = req.body.dogName;
    let yDogAge = req.body.dogAge;
    let returnAnswer = answerForm(ydogName, yDogAge);
    res.send(returnAnswer);
});

function answerForm(dogName, dogAge){
    let name = dogName;
    let age = Number(dogAge);
    let answer = ageConverter(age);
    return `${name} くんは犬としては ${dogAge} 歳、人間っで言うと${answer}歳です。`;
};

function ageConverter(age){
    if(age === 1){
        return 15;
    } else if(age === 2){
        return 15+9;
    } else {
        return (15+9) + ((age-2)*5);
    }
};