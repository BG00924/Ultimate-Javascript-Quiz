var pageContentEl = document.querySelector("#content")
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById("main");
var startBtn = document.getElementById('start-btn');
var questions = [
    {
        question: "Which allows you to store multiple values in a single reference?",
        answers: {
            a: "1. String",
            b: "2. Number",
            c: "3. Array",
            d: "4. None of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "What is an operator?",
        answers: {
            a: "1. A mathematical symbol which produces a result based on two values",
            b: "2. Someone who transfers calls",
            c: "3. Containers that store values",
            d: "4. None of the above"
        },
        correctAnswer: "a"
    },
    {
        question: "Which is a type of variable?",
        answers: {
            a: "1. Array",
            b: "2. Boolean",
            c: "3. Object",
            d: "4. All of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the purpose of an event handler?",
        answers: {
            a: "1. Someone who plans an event",
            b: "2. Assigns a value to a variable",
            c: "3. To listen for activity in a browser and running code in response",
            d: "4. None of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "What is a variable?",
        answers: {
            a: "1. An element, feature, or factor that is liable to vary or change",
            b: "2. Containers taht store values",
            c: "3. x",
            d: "4. None of the above"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the common form of conditionals?",
        answers: {
            a: "1. if...else",
            b: "2. either...or",
            c: "3. yes...no",
            d: "4. None of the above"
        },
        correctAnswer: "a"
    },
];

// Timer that counts down from 75
function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "Time's up!";
            clearInterval(timeInterval);
        }
    }, 1000);
};

startBtn.addEventListener("click", countdown);