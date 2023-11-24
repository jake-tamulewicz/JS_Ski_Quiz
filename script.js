
const Questions = [{
    q: "Which country is considered the birthplace of modern skiing?",
    a: [{ text: "Norway", isCorrect: true },
        { text: "Sweden", isCorrect: false },
        { text: "Switzerland", isCorrect: false },
        { text: "Canada", isCorrect: false }]
},
{
    q: "What is the proper position for a basic skiing stance?",
    a: [{ text: "Knees slightly bent, waist slightly bent, leaning forward with arms forward", isCorrect: true },
        { text: "Knees fully straight, leaning far back, arms at sides", isCorrect: false },
        { text: "Deep squat position, leaning forward, arms extended upwards", isCorrect: false },
        { text: "Slightly bent knees, upright posture, arms behind the body", isCorrect: false }]
},
{
    q: "What is an unusual but true fact about skiing?",
    a: [{ text: "Skis were originally used as diving boards in Norway", isCorrect: false },
        { text: "The word 'ski' comes from the Old Norse word 'skíð', meaning 'split piece of wood'", isCorrect: true },
        { text: "The first ski lifts were operated by trained bears", isCorrect: false },
        { text: "Skiing was initially developed as a method of hunting", isCorrect: false }]
}]

let currQuestion = 0
let score = 0

function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues();

function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}

function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}
