let playerScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.querySelector(".result p");

function computerPlay() {
	let options = ["rock", "paper", "scissors"];
	return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "Empate.";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		playerScore++;
		return "¡Ganaste esta ronda!";
	} else {
		computerScore++;
		return "¡Perdiste esta ronda!";
	}
}

function updateScore() {
	const score = document.querySelector(".score p");
	score.textContent = `Jugador: ${playerScore} - Comput`;
    score.textContent = `Jugador: ${playerScore} - Computadora: ${computerScore}`;
}


    function resetGame() {
        updateScore();
        resultText.textContent = "";
        }
        
        rockBtn.addEventListener("click", function () {
        const result = playRound("rock", computerPlay());
        resultText.textContent = result;
        updateScore();
        });
        
        paperBtn.addEventListener("click", function () {
        const result = playRound("paper", computerPlay());
        resultText.textContent = result;
        updateScore();
        });
        
        scissorsBtn.addEventListener("click", function () {
        const result = playRound("scissors", computerPlay());
        resultText.textContent = result;
        updateScore();
        });
        
        const resetBtn = document.getElementById("reset");
        resetBtn.addEventListener("click", function () {
        resetGame();
        });
        
        updateScore();