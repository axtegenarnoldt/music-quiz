const startButton = document.getElementById('start-btn');
const questionBoxElement = document.getElementById('question-box');
const questionElement = document.getElementById('question');

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    questionBoxElement.classList.remove('hide');
}

function displayQuestion(question) {
    questionElement.innerText = question.question;
}

/*
 * Game Questions
 */
const questions = [
    {
        question: 'Who is the lead vocalist of the band U2?',
        answers: [
            { text: 'Dave Grohl', correct: false },
            { text: 'Bono', correct: true },
            { text: 'Paul McCartney', correct: false },
            { text: 'Steve Perry', correct: false }
        ]
    },
    {
        question: 'What year did Elvis die?',
        answers: [
            { text: '1979', correct: false },
            { text: '1980', correct: false },
            { text: '1977', correct: true },
            { text: '1974', correct: false }
        ]
    },
    {
        question: 'Who wan the first season of American Idol?',
        answers: [
            { text: 'Lee Dewyze', correct: false },
            { text: 'Carrie Underwood', correct: false },
            { text: 'Kelly Clarkson', correct: true },
            { text: 'Just Sam', correct: false }
        ]
    },
    {
        question: 'What year did Britney Spears release her hit song "Toxic"?',
        answers: [
            { text: '2003', correct: true },
            { text: '2005', correct: false },
            { text: '2001', correct: false},
            { text: '2009', correct: false }
        ]
    },
    {
        question: '"Dream on" is on of the signature songs of which rock band?',
        answers: [
            { text: 'The Beatles', correct: false },
            { text: 'Kiss', correct: false },
            { text: 'Guns n Roses', correct: false },
            { text: 'Aerosmith', correct: true }
        ]
    },
    {
        question: 'What is the name of The Spice Girls debut album?',
        answers: [
            { text: 'Forever', correct: false },
            { text: 'Spiceworld', correct: false },
            { text: 'Spice', correct: true },
            { text: 'Wannabe 25', correct: false }
        ]
    },
    {
        question: 'Who sang the theme song for titanic?',
        answers: [
            { text: 'Celine Dion', correct: true },
            { text: 'Cher', correct: false },
            { text: 'Whitney Houston', correct: false },
            { text: 'Katy Perry', correct: false }
        ]
    },
    {
        question: 'Which band sings Dancing Queen?',
        answers: [
            { text: 'Queen', correct: false },
            { text: 'Eagles', correct: false },
            { text: 'BeeGees', correct: false },
            { text: 'Abba', correct: true }
        ]
    },
    {
        question: 'Who is the lead singer of The Rolling Stones?',
        answers: [
            { text: 'Liam Gallagher', correct: false },
            { text: 'Joe Strummer', correct: false },
            { text: 'Mick Jagger', correct: true },
            { text: 'David Lee Roth', correct: false }
        ]
    },
    {
        question: 'What guitarist is known for playing with his teeth?',
        answers: [
            { text: 'Jeff Beck', correct: false },
            { text: 'Jimi Hendrix', correct: true },
            { text: 'Eric Clapton', correct: false},
            { text: 'Joe Satriani', correct: false }
        ]
    }
]