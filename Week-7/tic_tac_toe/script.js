let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {MORE_MOVES_LEFT: 1,HUMAN_WINS: 2,COMPUTER_WINS: 3,DRAW_GAME: 4};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () { boardButtonClicked(button); });
	}
	newGame();
}

function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
	const buttons = getGameBoardButtons();
	const possibilities = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {
			if (buttons[indices[0]].innerHTML === "X") {
				return gameStatus.HUMAN_WINS;
			} else {
				return gameStatus.COMPUTER_WINS;
			}
		}
	}

	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gameStatus.MORE_MOVES_LEFT;
		}
	}

	return gameStatus.DRAW_GAME;
}

function newGame() {
	clearTimeout(computerMoveTimeout)
	computerMoveTimeout = 0

	for (let button of getGameBoardButtons()) {
		button.innerHTML = ""
		button.disabled = false
		button.className = ""
	}

	playerTurn = true
	document.getElementById("turnInfo").innerHTML = "Your turn"
}

function boardButtonClicked(button) {
	if (playerTurn) {
		button.innerHTML = "X"
		button.className = "x"
		button.disabled = true
		switchTurn()
	}
}

function switchTurn() {
	let gameStatusValue = checkForWinner();

	if (gameStatusValue === 1) {
		if (playerTurn) {
			computerMoveTimeout = setTimeout(makeComputerMove, 1000) 					
		}
		playerTurn = !playerTurn
		document.getElementById("turnInfo").innerHTML = playerTurn ? "Your turn" : "Computer's turn";
	} else {
		playerTurn = false
		switch (gameStatusValue) {
			case 2:
				document.getElementById("turnInfo").innerHTML = "You win!";
				break;
			case 3:
				document.getElementById("turnInfo").innerHTML = "Computer wins!";
				break;
			case 4:
				document.getElementById("turnInfo").innerHTML = "Draw game";
				break;
			default:
				break;
		}
	}
}

function makeComputerMove() {
	let button = getGameBoardButtons();
	let random_button = Math.floor(Math.random() * 9);
	while (button[random_button].innerHTML !== "") {
		random_button = Math.floor(Math.random() * 9);
	}
	if (button[random_button].innerHTML === "") {
		button[random_button].innerHTML = "O";
		button[random_button].className = "o";
		button[random_button].disabled = true;
	}
	switchTurn();
}
