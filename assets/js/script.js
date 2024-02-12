const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ('question-box')

const questionElement = document.getElementById ('question')
const questionButtonsElement = document.getElementById ('answer-btn')
startButton.addEventListener('click', startGame)

function startGame() {
console.log('started')
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
}

function nextQuestion() {

}

/*
 * Game Questions
 */
const question = [
    {
        question: 'Who is the lead vocalist of the band U2?',
        answers: [
            { text: 'Dave Grohl', correct: false },
            { text: 'Bono', correct: ture },
            { text: 'Paul McCartney', correct: false },
            { text: 'Steve Perry', correct: false }
        ]
    }
]