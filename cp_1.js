const form = document.getElementById("feedback-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");
const feedbackDisplay = document.getElementById("feedback-display");

const charCount = document.getElementById("char-count");
commentsInput.addEventListener("input", function() {
    let count = commentsInput.value.length;
    charCount.textContent = count + " characters";
});