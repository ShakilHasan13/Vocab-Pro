// Sample words data (replace with your database or API)
const words = [
    {
        word: "Abandon",
        synonyms: ["desert", "forsake", "leave"],
        antonyms: ["continue", "keep"],
        bengaliMeaning: "পরিত্যাগ করা",
    },
    {
        word: "Ability",
        synonyms: ["capability", "capacity", "competence"],
        antonyms: ["inability", "incompetence"],
        bengaliMeaning: "দক্ষতা",
    },
    // Add more words here
];

const wordDisplay = document.getElementById("word");
const synonymsDisplay = document.getElementById("synonyms");
const antonymsDisplay = document.getElementById("antonyms");
const bengaliMeaningDisplay = document.getElementById("bengali-meaning");
const nextButton = document.getElementById("next-button");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const startQuizButton = document.getElementById("start-quiz-button");

let currentWordIndex = 0;

function displayWord(wordObj) {
    wordDisplay.textContent = wordObj.word;
    synonymsDisplay.textContent = "Synonyms: " + wordObj.synonyms.join(", ");
    antonymsDisplay.textContent = "Antonyms: " + wordObj.antonyms.join(", ");
    bengaliMeaningDisplay.textContent = "Bengali Meaning: " + wordObj.bengaliMeaning;
}

function getNextWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    displayWord(words[currentWordIndex]);
}

function searchWord() {
    const searchWord = searchInput.value.toLowerCase();
    const foundWord = words.find(word => word.word.toLowerCase() === searchWord);
    
    if (foundWord) {
        currentWordIndex = words.indexOf(foundWord);
        displayWord(foundWord);
    } else {
        alert("Word not found.");
    }
}

function startQuiz() {
    // Implement quiz logic here
    // Randomly select words for the quiz
    // Keep track of user scores and progress
}

nextButton.addEventListener("click", getNextWord);
searchButton.addEventListener("click", searchWord);
startQuizButton.addEventListener("click", startQuiz);

// Initialize with the first word
displayWord(words[currentWordIndex]);
