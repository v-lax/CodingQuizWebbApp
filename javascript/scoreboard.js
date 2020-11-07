var leaderBoard = document.getElementById('leader-board');
var leaderList = document.getElementById('leaders');

var startoverButton = document.getElementById('start-over');
var clearButton = document.getElementById('clearBoard');


function initScoreBoard(){
    scores = JSON.parse(localStorage.getItem('scores'))
    if (scores === null) {
        scores = [];
        var h2=document.createElement('h2')
        h2.textContent='No high score yet! Click the try again button to take the quiz!'
        leaderBoard.appendChild(h2)
    }
    for(var i =0;i<scores.length;i++){
        var li = document.createElement('li')
        li.textContent = scores[i].userName + " with a score of " + scores[i].score
        leaderList.appendChild(li)
    }
}

function startover(){
    window.location.href = "../html/quiz.html";
}

function clearScoreBoard(){
    localStorage.clear();  
    while (leaderBoard.firstChild) {
        leaderBoard.removeChild(leaderBoard.lastChild);
    }
}

initScoreBoard();

startoverButton.addEventListener('click',startover);
clearButton.addEventListener('click',clearScoreBoard);