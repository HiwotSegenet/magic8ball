var answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes - definitley", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to  yes", "Don't count on it","My reply is no", "My sources say no", "Outlook not so good", "Very doubtful", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again"];

window.onload = function() {
    var eight = document.getElementById("eight");
    var answer = document.getElementById("answer");
    var magicball = document.getElementById("magic-ball");
    var question = document.getElementById("question");


    magicball.addEventListener("click", function() {
        if (question.value.length < 1) {
            alert("Please enter a question!");
        } else {
            eight.innerText = "";
            var number = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[number];
        }
    });
};
