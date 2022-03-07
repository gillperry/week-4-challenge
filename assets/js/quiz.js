const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
{
    question: "Commonly used data types do NOT include:",
    choice1: "<strings>",
    choice2:  "<booleans>",
    choice3: "<alerts>",
    choice4: "<numbers>",
    answer: 3
},

{
    question: "The condition in an if / else statement is enclosed with:",
    choice1: "<quotes>",
    choice2: "<curly brackets>",
    choice3: "<parenthesis>",
    choice4: "<square brackets",
    answer: 2
},
{
    question: "Arrays in JavaScript can be used to store _____.",
    choice1: "<numbers and strings>",
    choice2: "<other arrays>",
    choice3: "<booleans>",
    choice4: "<all of the above>",
    answer: 4
},

{
    question: "String values must be enclosed within _____ when being assigned to variables.",
    choice1: "<commas>",
    choice2: "<curly brackets>",
    choice3: "<quotes>",
    choice4: "<parenthesis>",
    answer: 3
}
],

//CONSTANTS



startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset ["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
})

startGame();