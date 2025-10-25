// === Quiz Questions ===
const quizData = [
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2 },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], answer: 3 },
    { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], answer: 2 },
    { question: "What is the capital of Egypt?", options: ["Cairo", "Alexandria", "Giza", "Luxor"], answer: 0 },
    { question: "What is the capital of India?", options: ["Mumbai", "Kolkata", "New Delhi", "Bangalore"], answer: 2 },
    { question: "What is the capital of Norway?", options: ["Helsinki", "Stockholm", "Oslo", "Copenhagen"], answer: 2 },
    { question: "What is the capital of Kenya?", options: ["Mombasa", "Kisumu", "Nairobi", "Eldoret"], answer: 2 },
    { question: "What is the capital of Turkey?", options: ["Istanbul", "Ankara", "Izmir", "Antalya"], answer: 1 },
    { question: "What is the capital of Argentina?", options: ["Córdoba", "Rosario", "Buenos Aires", "Mendoza"], answer: 2 },
    { question: "What is the capital of South Korea?", options: ["Busan", "Incheon", "Seoul", "Daegu"], answer: 2 }
];

// === DOM Elements ===
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

// === Quiz State Variables ===
let currentQuestion = 0;
let score = 0;

// === Load the Current Question ===
function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;
    optionsEl.innerHTML = "";

    q.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.classList.add("option");
        btn.onclick = () => selectAnswer(index);
        optionsEl.appendChild(btn);
    });
}

// === Handle Answer Selection ===
function selectAnswer(index) {
    const q = quizData[currentQuestion];
    const buttons = document.querySelectorAll(".option");

    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.answer) btn.style.backgroundColor = "#00c853"; // green for correct
        else if (i === index) btn.style.backgroundColor = "#ff5252"; // red for wrong
    });

    if (index === q.answer) score++;
    nextBtn.style.display = "inline-block";
}

// === Next Question Logic ===
nextBtn.addEventListener("click", () => {
    currentQuestion++;
    nextBtn.style.display = "none";

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// === Display Final Score ===
function showResult() {
    questionEl.textContent = "";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `You got ${score} out of ${quizData.length} correct! 🎉`;
}

// === Start the Quiz ===
loadQuestion();
