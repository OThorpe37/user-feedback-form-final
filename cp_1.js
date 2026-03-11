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

form.addEventListener("mouseover", function(event){
    if(event.target.id === "name"){
        document.getElementById("name-tip").style.display = "block";
    }
    if(event.target.id === "email"){
        document.getElementById("email-tip").style.display = "block";
    }
    if(event.target.id === "comments"){
        document.getElementById("comment-tip").style.display = "block";
    }
});

form.addEventListener("mouseout", function(event){
    if(event.target.id === "name"){
        document.getElementById("name-tip").style.display = "none";
    }
    if(event.target.id === "email"){
        document.getElementById("email-tip").style.display = "none";
    }
    if(event.target.id === "comments"){
        document.getElementById("comment-tip").style.display = "none";
    }
});

form.addEventListener("submit", function(event){
    event.preventDefault();
    if(nameInput.value === "" || emailInput.value === "" || commentsInput.value === ""){
        alert("Please fill out all fields before submitting.");
        return;
    }
    const feedbackEntry = document.createElement("p");
    feedbackEntry.textContent = `Name: ${nameInput.value}, Email: ${emailInput.value}, Comments: ${commentsInput.value}`;
    feedbackDisplay.appendChild(feedbackEntry);

    form.reset();
    charCount.textContent = "0 characters";
});

form.addEventListener("click",function(event){
    event.stopPropagation();
});

document.body.addEventListener("click", function(){
    console.log("Background clicked");
});