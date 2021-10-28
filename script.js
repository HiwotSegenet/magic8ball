var answers = ["Absolutley!", "Try again later", "Yes", "No", "My reply is no", "In your dreams", "It is certain", "May be later"];

window.onload = function() {
    var eight = document.getElementById("eight");
    var answer = document.getElementById("answer");
    var ask = document.getElementById("magic-ball");
    var question = document.getElementById("question");


    ask.addEventListener("click", function() {
        if (question.value.length < 1) {
            alert("Please enter a question!");
        } else {
            eight.innerText = "";
            var number = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[number];
        }
    });
};
