function checkAnswer() {
let correctAnswer = "4";

const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;


const correctAnswer="b";
const feedback = document.getElementById("feedback");

if(userAnswer === correctAnswer) {
 feedback.textContent = "Correct1 Well Done";
} else {
 feedback.textContent="That's incorrect. Try again!";
}
const submitButton= document.getElementById("submit-answer");
submitButton.addEventLister("click", checkAnswer);

}