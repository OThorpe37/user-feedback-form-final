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

nameInput.addEventListener("mouseover", function(){
    document.getElementById("name-tip").style.display = "block";
})
nameInput.addEventListener("mouseout"), function(){
    document.getElementById("name-tip").style.display = "none";
}

form.addEventListener("submit", function(event){
    if(nameInput.value === "" || emailInput.value === "" || commentsInput.value === ""){
        event.preventDefault();
        alert("Please fill out all fields before submitting.");
    }
});