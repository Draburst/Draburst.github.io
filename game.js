
function startGame() {
    
    alert("Гра почалася!");
    let num1, num2, correctAnswer;
    window.onload = generateQuestion;
    function generateQuestion() {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        correctAnswer = num1 + num2;
        document.getElementById('question').innerText = `What is ${num1} + ${num2}?`;
        document.getElementById('answer').value = '';
        document.getElementById('feedback').innerText = '';
    }

    function checkAnswer() {
        const userAnswer = parseInt(document.getElementById('answer').value);
        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').innerText = 'Correct!';
        } else {
            document.getElementById('feedback').innerText = 'Incorrect. Try again!';
        }
    }

}
