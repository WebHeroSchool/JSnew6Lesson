let num = '0';
let score = 0;
const question1 = {
  question: "Our name is Viktorija? -",
  correctAnswer:"Yes",
  wrongAnswer: ", No."
};
const question2 = {
  question: "When was JavaScript programming language created? -",
  correctAnswer:"September 1995",
  wrongAnswer: ", Nocember 2000."
};
const question3 = {
  question: "Who created JavaScript? -",
  correctAnswer: "Brendan Eich",
  wrongAnswer: ", Samanta Black."
};
const question4 = {
  question: "Do you like studie Java Script? -",
  correctAnswer: "Yes",
  wrongAnswer: ", No."
};

let questionArray = [question1, question2, question3, question4] ;

buildQuiz = questionArray => {
  questionArray.forEach((item) => {
    let question = document.getElementById('question');
    question.innerHTML+= ' ' + item.question + ' ' + item.correctAnswer + ' ' + item.wrongAnswer
  })
}

buildQuiz(questionArray);

function showResults(){
  questionArray.forEach((item) =>{
    if(item.correctAnswer === 'Yes'){
      score++;
    }
  }) 
}

showResults();

let result = document.getElementById('result');
result.innerHTML = ('Score of correct answers are -' + score);