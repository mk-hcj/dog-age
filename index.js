function answerOutput(){
    let ydogName = req.body.dogName;
    let yDogAge = req.body.dogAge;
    let returnAnswer = answerForm(ydogName, yDogAge);
    res.send(returnAnswer);
};

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