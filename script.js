

const question = document.querySelector('#question');
const choices = document.querySelectorAll('.choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Who won the 2018 FIFA World Cup?",
        choice1: "United Kingdom",
        choice2: "Brazil",
        choice3: "France",
        choice4: "Spain",
        answer: 3,
    },
    {
        question: "In what year was the inaugural tournament?",
        choice1: "1930",
        choice2: "1934",
        choice3: "1940",
        choice4: "1984",
        answer: 1,
    },
    {
        question: "Which nation has won the most World Cups?",
        choice1: "Holland",
        choice2: "Brazil (5 times so far)",
        choice3: "France",
        choice4: "Argentin",
        answer: 2,
    },
    {
        question: "How often is the World Cup held?",
        choice1: "Every 8 years",
        choice2: "Every 3 years",
        choice3: "Every 6 years",
        choice4: "Every 4 years",
        answer: 4,
    },
    {
        question: "Which 2 years did the scheduled tournaments not go ahead due to WWII?",
        choice1: "1940 & 1944",
        choice2: "1942 & 1946",
        choice3: "1946 & 1950",
        choice4: "1944 & 1948",
        answer: 2,
    },
    {
        question: "What was the first World Cup trophy called?",
        choice1: "Jules Rimet Trophy",
        choice2: "Rimet Jules Trophy",
        choice3: "Jules Carlos Trophy",
        choice4: "James Anthony Trophy",
        answer: 1,
    },
    {
        question: "Which 3 countries will host the 2026 tournament?",
        choice1: "United Kingdom, France, Holland",
        choice2: "Brazil, Chili, Urugway",
        choice3: "Uganda, Kenya, Somalia",
        choice4: "USA, Canada & Mexico",
        answer: 4,
    },
    {
        question: "Who scored for England in the 1966 final against West Germany?",
        choice1: "Martin Peters & Geoff Hurst",
        choice2: "Allen Peters & David Hurst",
        choice3: "John Terry & Weyn Rooney",
        choice4: "David Adams & Herry Kean",
        answer: 1,
    },
    {
        question: "How many times have North Korea qualified for the tournament?",
        choice1: "Twice (in 1966 and 2010)",
        choice2: "Never",
        choice3: "One time",
        choice4: "Three times",
        answer: 1,
    },
    {
        question: "Who did Zinedine Zidane headbutt in the 2006 final?",
        choice1: "Marco Materazzi",
        choice2: "Gatusa",
        choice3: "Totti",
        choice4: "Alixandaro Delbiaro",
        answer: 1,
    },
    {
        question: "In what year did Spain win their first World Cup",
        choice1: "Never",
        choice2: "2002",
        choice3: "1998",
        choice4: "2010",
        answer: 4,
    },
    {
        question: "What is the USA's highest finishing position at a World Cup?",
        choice1: "2nd (in 1934)",
        choice2: "3rd (in 2006)",
        choice3: "3rd (in 1930)",
        choice4: "4th (in 1998)",
        answer: 3,
    },
    {
        question: "Who is the all-time leading World Cup goalscorer?",
        choice1: "Allen Sheerer",
        choice2: "Miroslav Klose",
        choice3: "Zinedine Zidane",
        choice4: "Ronaldo",
        answer: 2,
    },
    {
        question: "Which nation is the only one to participate in every tournament?",
        choice1: "Ghana",
        choice2: "Brazil",
        choice3: "France",
        choice4: "South Africa",
        answer: 2,
    },
    {
        question: "How many World Cups did Pele win?",
        choice1: "3 (in 1958, 1962 & 1974)",
        choice2: "3 (in 1954, 1958 & 1970)",
        choice3: "3 (in 1958, 1964 & 1976)",
        choice4: "3 (in 1958, 1962 & 1970)",
        answer: 4,
    },
    {
        question: "In what year was Maradona's Hand of God incident?",
        choice1: "1986",
        choice2: "1990",
        choice3: "1994",
        choice4: "1982",
        answer: 1,
    },
    {
        question: "Which 3 teams were in England's group in 2018?",
        choice1: "Belgium, Panama & Tunisia",
        choice2: "Brazil, Holland, Belguim",
        choice3: "France, Ghana, Somalia",
        choice4: "Spain, Canada, USA",
        answer: 1,
    },
    {
        question: "How many World Cups has Megan Rapinoe won?",
        choice1: "2 (in 2014 & 2018)",
        choice2: "2 (in 2016 & 2020)",
        choice3: "2 (in 2015 & 2019)",
        choice4: "2 (in 2010 & 2014)",
        answer: 3,
    },
    {
        question: "Which host nation is the only one to get knocked out during the group stages?",
        choice1: "United Kingdom",
        choice2: "Brazil",
        choice3: "France",
        choice4: "South Africa",
        answer: 4,
    },
    {
        question: "What animal was the official mascot for the 1998 World Cup in France?",
        choice1: "A cockerel",
        choice2: "A chicken",
        choice3: "A lion",
        choice4: "A bear",
        answer: 1,
    },
    {
        question: "Which African footballer is the oldest person ever to score in a World Cup?",
        choice1: "Roger Weah (he was 42 years old",
        choice2: "Goerge Wheah (he was 42 years old",
        choice3: "Kanu (he was 42 years old",
        choice4: "Roger Milla (he was 42 years old)",
        answer: 4,
    },
    {
        question: "Who was the manager of the German national team when they won in 2014?",
        choice1: "Joachim Löw",
        choice2: "Jurgen Klinsmann",
        choice3: "Otto Nerz",
        choice4: "Hansi Flick",
        answer: 1,
    },
    {
        question: "Which nation hosted the 1994 FIFA World Cup?",
        choice1: "United Kingdom",
        choice2: "United States",
        choice3: "France",
        choice4: "Holland & Belguim",
        answer: 2,
    },
    {
        question: "What was the final score in the 2014 final between Germany and Argentina?",
        choice1: "1-1 Germany",
        choice2: "1-0 to Argentina",
        choice3: "2-0 to Germany",
        choice4: "1-0 to Germany",
        answer: 4,
    },
    {
        question: "Which company have published sticker albums for every World Cup since 1970?",
        choice1: "Adidas",
        choice2: "Coca Cola",
        choice3: "Panini",
        choice4: "Nike",
        answer: 3,
    },
    {
        question: "What musical instrument was banned by FIFA after the 2010 World Cup?",
        choice1: "Vuvuzela",
        choice2: "Piano",
        choice3: "Trumpet",
        choice4: "Drum",
        answer: 1,
    },
    {
        question: "How many times have Italy won the World Cup so far?",
        choice1: "5",
        choice2: "4",
        choice3: "2",
        choice4: "3",
        answer: 2,
    },
    {
        question: "Which British pop star performed at the opening ceremony of the 2018 tournament?",
        choice1: "Adele",
        choice2: "David Bowie",
        choice3: "Ed Sheeran",
        choice4: "Robbie Williams",
        answer: 4,
    },
    {
        question: "Who was the youngest manager to win the World Cup?",
        choice1: "Carlos Anceloti",
        choice2: "César Luis Menotti",
        choice3: "Zagallo",
        choice4: "Alberto Suppici",
        answer: 4,
    },
    {
        question: "Which nation has only ever played a single World Cup game?",
        choice1: "Indonesia",
        choice2: "China",
        choice3: "Somalia",
        choice4: "India",
        answer: 1,
    },
    {
        question: "Who was the only England player to convert a penalty in the quarter final shootout against Portugal in 2006?",
        choice1: "David Beckham",
        choice2: "Owen Hargreaves",
        choice3: "Michel Owen",
        choice4: "Gerry Lineker",
        answer: 2,
    },
    {
        question: "Who performed the 'save of the century' against Pele in 1970?",
        choice1: "Gordon Banks",
        choice2: "Delpiaro",
        choice3: "Ruud van Nesterloy",
        choice4: "Etto",
        answer: 1,
    },
    {
        question: "Which 2 countries made their World Cup debuts in 2018?",
        choice1: "England & Japan",
        choice2: "Chili & Camaroon",
        choice3: "Holland & Belguim",
        choice4: "Iceland & Panama",
        answer: 4,
    },
    {
        question: "Which sports brand has supplied every World Cup since 1970 with balls?",
        choice1: "Nike",
        choice2: "Adidas",
        choice3: "Puma",
        choice4: "Reebok",
        answer: 2,
    },
    {
        question: "Which nation will have its World Cup debut in 2022?",
        choice1: "South Africa",
        choice2: "Greece",
        choice3: "Qatar",
        choice4: "Norway",
        answer: 3,
    },
    {
        question: "What colour was the ball used in the 1966 final?",
        choice1: "Bright orange",
        choice2: "White orange",
        choice3: "Balack white",
        choice4: "Light orange",
        answer: 1,
    },
    {
        question: "In what year was the World Cup first broadcast on TV?",
        choice1: "1974",
        choice2: "1966",
        choice3: "1950",
        choice4: "1954",
        answer: 3,
    },
    {
        question: "Which 2 English players have won the Golden Boot award?",
        choice1: "Gary Lineker & Allen Sheerer",
        choice2: "Gary Lineker & Harry Kane",
        choice3: "Weyn Rooney & Harry Kane",
        choice4: "David Beckham & Michel Owen",
        answer: 2,
    },
    {
        question: "Who managed West Germany when they won in 1990?",
        choice1: "Joachim Löw",
        choice2: "Jurgen Klinsmann",
        choice3: "Otto Nerz",
        choice4: "Franz Beckenbauer",
        answer: 4,
    },
    {
        question: "How many teams qualify from the group stages to the knockout rounds?",
        choice1: "18",
        choice2: "12",
        choice3: "16",
        choice4: "8",
        answer: 3,
    },
    {
        question: "Who was the top scorer in the 2002 FIFA World Cup?",
        choice1: "Ronaldo",
        choice2: "Rooney",
        choice3: "Thierry Henry",
        choice4: "Messi",
        answer: 1,
    },
    {
        question: "Which host nation had an orange as their tournament mascot?",
        choice1: "Holland (in 1982)",
        choice2: "Brazil (in 1982)",
        choice3: "France (in 1982)",
        choice4: "Spain (in 1982)",
        answer: 4,
    },
    {
        question: "Who won the Best Young Player Award in 2018?",
        choice1: "Messi",
        choice2: "Kylian Mbappe",
        choice3: "Neymar",
        choice4: "Ronaldo",
        answer: 2,
    },
    {
        question: "Which player scored a record 13 goals in a single tournament?",
        choice1: "Just Fontaine",
        choice2: "Kylian Mbappe",
        choice3: "Messi",
        choice4: "Kanu",
        answer: 1,
    },
    {
        question: "Before Qatar 2022, how many nations have won the FIFA World Cup?",
        choice1: "12",
        choice2: "10",
        choice3: "8",
        choice4: "9",
        answer: 3,
    },
    {
        question: "Which nation was the first Asian country to reach the World Cup semi-finals?",
        choice1: "South Korea (in 2002)",
        choice2: "China (in 1998)",
        choice3: "Japan (in 1994)",
        choice4: "Qatar (in 2006)",
        answer: 3,
    },
    {
        question: "In what year was the first FIFA Women's World Cup?",
        choice1: "1994",
        choice2: "1991",
        choice3: "2000",
        choice4: "1988",
        answer: 2,
    },
    {
        question: "Which nation is the only one to top the FIFA World Rankings without ever winning a World Cup?",
        choice1: "Holland",
        choice2: "Croatia",
        choice3: "Morocco",
        choice4: "Belgium",
        answer: 4,
    },
    {
        question: "The 1966 final was played at which football stadium?",
        choice1: "Wembley",
        choice2: "San Siro",
        choice3: "Santiago Bernabéu",
        choice4: "Allianz Arena",
        answer: 1,
    }
 
]

const SCORE_POINTS = 10;
const MAX_QUESTIONS = 5;


startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()

};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter ++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
});


incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame();
