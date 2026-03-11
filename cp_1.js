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
nameInput.addEventListener("mouseout", function(){
    document.getElementById("name-tip").style.display = "none";
})
emailInput.addEventListener("mouseover", function(){
    document.getElementById("email-tip").style.display = "block";
})
emailInput.addEventListener("mouseout", function(){
    document.getElementById("email-tip").style.display = "none";
})
commentsInput.addEventListener("mouseover", function(){
    document.getElementById("comment-tip").style.display = "block";
})
commentsInput.addEventListener("mouseout", function(){
    document.getElementById("comment-tip").style.display = "none";
})

form.addEventListener("submit", function(event){
    if(nameInput.value === "" || emailInput.value === "" || commentsInput.value === ""){
        event.preventDefault();
        alert("Please fill out all fields before submitting.");
        return;
    }
    const feedbackEntry = document.createElement("p");
    feedbackEntry.textContent = `Name: ${nameInput.value}, Email: ${emailInput.value}, Comments: ${commentsInput.value}`;
    feedbackDisplay.appendChild(feedbackEntry);

    form.reset();
});

form.addEventListener("mouseover",function(event){
    if(event.target.id === "name"){
        console.log("Mouseover on name input");
    }
    if(event.target.id === "email"){
        console.log("Mouseover on email input");
    }
    if(event.target.id === "comments"){
        console.log("Mouseover on comments textarea");
    }
})

form.addEventListener("click", function(event){
    event.stopPropagation();
});

document.body.addEventListener("click", function(){
    console.log("Background clicked");
});