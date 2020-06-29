var pageContentEl = document.querySelector("#content")
var timerEl = document.getElementById('seconds');
//var mainEl = document.getElementById("main");
var startBtn = document.getElementById('start-btn');
var intro = document.getElementById('intro');
var questionContainer = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerBtnEl = document.getElementById('answer-btn');

let randomQuestion, currentQuestion




// Timer that counts down from 75
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Time's up!";
            clearInterval(timeInterval);
        }
    }, 1000);
};

function beginGame() {
    console.log('started')
    intro.classList.add('hide')
    
    currentQuestion = 0
    questionContainer.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    var questions = [
        {
            question: "Which allows you to store multiple values in a single reference?",
            answers: [
                {text: "1. String", correct: false},
                {text: "2. Number", correct: false},
                {text: "3. Array", correct: true},
                {text: "4. None of the above", correct: false}
            ]
        },
    ];
    questionEl.innerText = questions.question;
}


function answerChosen() {

}



startBtn.addEventListener("click", countdown);

startBtn.addEventListener("click", beginGame);