function checkAnswer() {
    const correctAnswer = "4"; // This matches the value of the correct radio button

    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    const feedback = document.getElementById("feedback");

    if (!userAnswer) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
        return;
    }

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Run after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);
});
