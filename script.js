const options = document.querySelectorAll(".btn")
const reseBtn = document.querySelector(".reset")
const results = document.querySelector(".results")
const board = document.querySelector(".w-or-l")
const playerScoreBoard = document.querySelector(".player-score")
const computerScoreBoard = document.querySelector(".computer-score")


const array = ["✊", "🤚", "✌"]

function getRRandomChoice() {
    return array[Math.floor(Math.random() * array.length)]
}



function play() {
    options.forEach((btn) => {
        btn.addEventListener("click", () => {
            let playerChoice = btn.value
            let computerChoice = getRRandomChoice()
            results.textContent = `You choose ${playerChoice} and computer choose ${computerChoice}`

            if (playerChoice === computerChoice) {
                board.textContent = `Draw`
                board.style.color = ""

            }
            else if (playerChoice === '✊' && computerChoice === '✌') {
                board.textContent = `You win`
                board.style.color = "green"

            }
            else if (playerChoice === "🤚" && computerChoice === "✊") {
                board.textContent = `You win`
                board.style.color = "green"


            } else if (playerChoice === "✌" && computerChoice === "🤚") {
                board.textContent = `You win`
                board.style.color = "green"

            }
            else {
                board.textContent = `You lose`
                board.style.color = "red"
            }
        })
    })
}
play()

function reset() {
    board.textContent = ""
    results.textContent = ""
}