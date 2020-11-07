
//Our question set - stored as an array of objects
var questionData = [
    {
        question:"How do you search for event listeners in JS?",
        choices:['.getElementById()','.addEventListener()','.quertSelector()','.setAttribute()'],
        correctAnswerId:1
    },
    {
        question:'What is one way to convert a string to an int in JS?',
        choices:['turnToInt()','iNowTurnYouIntoAnInt()','parseInt()','None of the above'],
        correctAnswerId:2
    },
    {
        question:'Which of the following loops runs until a specified condition is false',
        choices:['for loop','for while loop','if then loop','while loop'],
        correctAnswerId:3
    },
    {
        question:'What is another name for javascript?',
        choices:['ECCMA Script','java','HTML','CSS'],
        correctAnswerId:0
    }
];

//Declaring our global variables that we will need. 
var quizSection = document.getElementById('quizQuestions')
var welcomeSection = document.getElementById('welcome')
var startButton = document.getElementById('start-quiz')
var question = document.getElementById('question')
var choices = document.getElementById('choices')
var timer = document.getElementById('timer')
var secondsLeft =document.getElementById('secondsLeft')
var afterQuiz = document.getElementById('afterQuiz')
var finalScoreDisplay = document.getElementById('finalScoreDisplay')
var userForm = document.getElementById('User-form')
var userText = document.getElementById('user-text')

var qIndex = 0
var totalTime = 10*questionData.length
var finalScore = 0;
var intervalOne;
var scoreArray = [];


//setting the attributes of elements on welcome screen
quizSection.setAttribute('style','display:none')
afterQuiz.setAttribute('style','display:none')


//Function declarations
function finalScoreCalculator(){
    finalScore+=(100/questionData.length)
}

function startTimer(){
    intervalOne = setInterval(function(){
        secondsLeft.textContent=totalTime;
        totalTime--;
    
        if(totalTime<0){
          clearInterval(intervalOne)
          console.log('Quiz is over')
          endofQuiz();
        }
      },1000)
};

function clearTimer(){
    clearInterval(intervalOne);
}

function timePenalty(){
    totalTime=totalTime-10;
    clearTimer();
    startTimer();
}

function endofQuiz(){
    quizSection.setAttribute('style','display:none')
    afterQuiz.setAttribute('style','display:block')
    finalScoreDisplay.textContent = finalScore;
}

function displayQuestion(){
    quizSection.setAttribute('style','display:block')
    welcomeSection.setAttribute('style','display:none')
    question.textContent = questionData[qIndex].question;
    
    for(var i=0;i<questionData[qIndex].choices.length;i++){
        var id = document.getElementById(`${i}`);
        id.textContent = questionData[qIndex].choices[i]
    }

}

function choiceSubmission(event){
    if (event.target.matches("button")) {
      var currentQuestion = questionData[qIndex];
      var correctResponse = questionData[qIndex].correctAnswerId;
      
      if(parseInt(event.target.id)!==correctResponse){
          console.log('you got the wrong answer')
          timePenalty();
      }else{
        finalScoreCalculator();
      }
    }

    qIndex++;
    if((qIndex<questionData.length)&&(totalTime>0)){
        displayQuestion();
    }else{
        clearTimer();
        secondsLeft.textContent=0
        console.log('Quiz over')
        console.log(finalScore)
        endofQuiz();
    }
}

function onFormSubmit(event){
    event.preventDefault();
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
      scoreArray = storedScores;
    }

    var text = userText.value.trim();
    if (text === "") {
        return;
    }

    
    scoreArray.push({'userName':text,'score':finalScore});
    userText.value = "";

    setupStorage();
    pageRedirect();
}

function pageRedirect(){
    window.location.href = "../html/scoreboard.html";
}   

function setupStorage(){
    localStorage.setItem("scores", JSON.stringify(scoreArray));
}

//Eventhandling
startButton.addEventListener('click',function(){
    startTimer();
    displayQuestion();
})
choices.addEventListener('click',choiceSubmission)

userForm.addEventListener('submit',onFormSubmit)



