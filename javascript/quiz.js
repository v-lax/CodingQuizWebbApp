
//Our question set - stored as an array of objects
var questionData = [
    {
        question:"Question1",
        choices:['1','2','3','4'],
        correctAnswerId:1
    },
    {
        question:'Question2',
        choices:['5','6','7','8'],
        correctAnswerId:2
    },
    {
        question:'Question3',
        choices:['1','2','3','4'],
        correctAnswerId:3
    },
    {
        question:'Question4',
        choices:['1','2','3','4'],
        correctAnswerId:4
    }
];

//Declaring our global variables that we will need. 
var quizSection = document.getElementById('quizQuestions')
var welcomeSection = document.getElementById('welcome')
var startButton = document.getElementById('start-quiz')
var question = document.getElementById('question')
var choices = document.getElementById('choices')

var qIndex = 0


//setting the attributes of elements on welcome screen
quizSection.setAttribute('style','display:none')


//Function declarations
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
      
      if(parseInt(event.target.id)===correctResponse){
          console.log('you got the right answer')
          //increment their score
          //flash "Correct" message below the question
      }else{
          console.log('you got the wrong answer')
          //deduct time from remaining time left on clock
          //flash "Incorrect" message below the questions
      }
    }

    qIndex++;
    if(qIndex<questionData.length){
        displayQuestion();
    }else{
        console.log('Quiz over')
        //displayscore
    }
}

//Eventhandling
startButton.addEventListener('click',displayQuestion)

choices.addEventListener('click',choiceSubmission)


