// variables
let currentQuestion;
var intro = document.getElementById('intro');
var timerEl = document.getElementById('seconds');
var startBtn = document.getElementById('start-btn');
var container = document.getElementById('container')
var questionContainer = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerBtnEl = document.getElementById('answer-btn');
var rightOrWrong = document.getElementById('answer');
var currentScore = document.getElementById('currentScore')
var quizDone = document.getElementById('done');
var finalScore = document.getElementById('score');
var AA = document.getElementById('initials');
var initials = document.getElementById('newInitials');
var initialBtn = document.getElementById('initial-btn');
var viewScore = document.getElementById('viewScore');
var showScore = document.getElementById('savedScore');
var showingScore = document.getElementById('saved-score');
var goBack = document.getElementById('go-back-btn');
var clearBtn = document.getElementById('clear-btn');
var timer = document.getElementById('countdown');
var timeLeft = 75;
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
    {
        question: "What is an operator?",
        answers: [
            {text: "1. A mathematical symbol which produces a result based on two values", correct: true},
            {text: "2. Someone who transfers calls", correct: false},
            {text: "3. Containers that store values", correct: false},
            {text: "4. None of the above", correct: false}
        ]
    },
    {
        question: "Which is a type of variable?",
        answers: [
            {text: "1. Array", correct: false},
            {text: "2. Boolean", correct: false},
            {text: "3. Object", correct: false},
            {text: "4. All of the above", correct: true}
        ]
    },
    {
        question: "What is the purpose of an event handler?",
        answers: [
            {text: "1. Someone who plans an event", correct: false},
            {text: "2. Assigns a value to a variable", correct: false},
            {text: "3. To listen for activity in a browser and running code in response", correct: true},
            {text: "4. None of the above", correct: false}
        ]
    },
    {
        question: "What is a variable?",
        answers: [
            {text: "1. An element, feature, or factor that is liable to vary or change", correct: false},
            {text: "2. Containers that store values", correct: true},
            {text: "3. x", correct: false},
            {text: "4. None of the above", correct: false}
        ]
    },
    {
        question: "What is the common form of conditionals?",
        answers: [
            {text: "1. if...else", correct: true},
            {text: "2. either...or", correct: false},
            {text: "3. if...then", correct: false},
            {text: "4. None of the above", correct: false}
        ]
    }
];

//function that begins the game
function beginGame() {
    //console.log('started')
    intro.classList.add('hide')
    currentQuestion = 0
    questionContainer.classList.remove('hide')
    countdown();
    nextQuestion();
}

//function that generates the questions
function nextQuestion() {
    questionEl.innerHTML = ''
    answerBtnEl.innerHTML = ''
    showQuestion();
    
}

//function that populates the questsions and answers
function showQuestion() {
    if(currentQuestion === questions.length) {
        score();
    }
    else {
        questionEl.innerText = questions[currentQuestion].question;
        questionEl.classList.add('qText')
        questions[currentQuestion].answers.forEach((answer, i) => {
            var id = i + 1
            var button = document.createElement('button')
            button.innerText = answer.text;
            button.classList.add('btn', 'aText');
            button.setAttribute("id", id);
            button.addEventListener('click', answerChosen);
            answerBtnEl.appendChild(button);
        })
    }  
}

//function to tell the user if they got the last question right and subtract time if wrong
function answerChosen() {
    var selectedBtn = event.target.id
    var correct = questions[currentQuestion].answers.find(answers => answers.correct === true)
    if(selectedBtn == correct.text[0]) {
        //console.log('correct')
        rightOrWrong.innerHTML = ''
        var para = document.createElement('p')
        para.innerText = "Correct! Good Job!"
        para.classList.add('rightOrWrong')
        rightOrWrong.appendChild(para);
    }

    else {
        rightOrWrong.innerHTML = ''
        var para = document.createElement('p')
        para.innerText = "Wrong!"
        para.classList.add('rightOrWrong')
        rightOrWrong.appendChild(para);
        timeLeft = Math.max(0, timeLeft - 10);
    }
    currentQuestion++
    nextQuestion();
}

// function that provides the timer
function countdown() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 0 && currentQuestion < questions.length) {
            timeLeft--;
            timerEl.textContent = timeLeft;
        }  else {
            clearInterval(timeInterval);
            score();
        }
    }, 1000);
};

//function that generates the users score at the end of the quiz
function score() {
    container.classList.add('flex-c')
    intro.classList.add('hide')
    questionContainer.classList.add('hide')
    timer.classList.add('hide')
    currentScore.classList.remove('hide')
    quizDone.innerText = "All done!"
    finalScore.innerText = "Your final score is " + timeLeft + "."
};

//function that saves the score
function saveScore() {
    localStorage.setItem('timeLeft', timeLeft);
    localStorage.setItem('initials', initials.value);
    back();
};

//function that displays the saved score from previous quiz
function displayScore() {
    intro.classList.add('hide')
    questionContainer.classList.add('hide')
    currentScore.classList.add('hide')
    showScore.classList.remove('hide')
    var savedScore = localStorage.getItem('timeLeft');
    var savedInitials = localStorage.getItem('initials')
    if (savedScore === null || savedInitials === null) {
        showingScore.innerHTML = "No saved score"
    }
    else {
        showingScore.innerHTML = savedInitials + "-" + savedScore
    }
    
}

//function that takes the users back from the saved scores to beginning of the quiz
function back() {
    window.location.reload();
}

//function that delets saved score
function deleteScore() {
    localStorage.clear(); 
    displayScore();
}

//event listeners that initiate the appropriate functions to the buttons and score link 
initialBtn.addEventListener("click", saveScore);
viewScore.addEventListener("click", displayScore);
goBack.addEventListener("click", back);
clearBtn.addEventListener("click", deleteScore);
startBtn.addEventListener("click", beginGame);