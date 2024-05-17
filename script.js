document.addEventListener("DOMContentLoaded", function() {
    startGame();
    const submitBtn = document.getElementById("submit");
    if (submitBtn) {
        submitBtn.addEventListener("click", function() {
            checkAnswer();
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const startGameBtn = document.getElementById("startGameBtn");
    if (startGameBtn) {
        startGameBtn.addEventListener("click", function() {
            NextPageListener('main.html')
        });
    }
});
function startGame() {
    const questionElement = document.getElementById('question');
    if (questionElement) {
        let num1 = Math.floor(Math.random() * 10) + 1;
        let num2 = Math.floor(Math.random() * 10) + 1;
        let correctAnswer = num1 + num2;

        questionElement.dataset.correctAnswer = correctAnswer;
        questionElement.innerText = `What is ${num1} + ${num2}?`;

        document.getElementById('answer').value = '';
        document.getElementById('feedback').innerText = '';
    }
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = parseInt(document.getElementById('question').dataset.correctAnswer);
    const feedbackElement = document.getElementById('feedback');
    
    if (userAnswer === correctAnswer) {
        feedbackElement.innerText = 'Correct!';
    } else {
        feedbackElement.innerText = 'Incorrect. Try again!';
    }
}


function NextPageListener(page){
    window.location.href = `${page}`
}