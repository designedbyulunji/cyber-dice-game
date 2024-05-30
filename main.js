"use strict";

/*
    Step 1: Get DOM Elements
        - Roll Button
        - Help Button
        - Input Value
        - Die Image
        - Message
        - Amount Won
*/

const rollBtn = document.querySelector(".btn-roll");
const helpBtn = document.querySelector(".btn-help");
const stakeInput = document.querySelector(".stake-input");
const dieA = document.querySelector(".die--a");
const dieB = document.querySelector(".die--b");
const amountWonOutput = document.querySelector(".amount-won");
const gameOutput = document.querySelector(".game__output");
/*
    Step 2: Create 2 functions to generate radon numbers between  1 - 6
        function handleDiceA
        function handleDiceB
*/

let firstRandomNumber;
let secondRandomNumber;
let amountWon;
let amountPlaced;

// Help alert
helpBtn.addEventListener("click", handleHelp);

// Handle Help
function handleHelp() {
	alert(
		"Place any amount over MWK100 and roll the dice. If the numbers on both dice are equal, your stake will be multiplied by both the numbers and the product of the multiplication will be your winnings"
	);
}

function handleRolledDice() {
	// Handle Die A
	function handleDiceA() {
		firstRandomNumber = Math.trunc(Math.random() * 6) + 1;

		// Dynamic image set
		dieA.src = `die-a-${firstRandomNumber}.svg`;
		console.log(firstRandomNumber);
	}

	// Calling handleDiceA function
	handleDiceA();

	// Handle Die B
	function handleDiceB() {
		secondRandomNumber = Math.trunc(Math.random() * 6) + 1;

		// Dynamic image set
		dieB.src = `die-b-${secondRandomNumber}.svg`;
		console.log(secondRandomNumber);
	}

	// Calling handleDiceB function
	handleDiceB();

	// Handle Winnings
	function handleAmountWon() {
		amountPlaced = stakeInput.value;
		amountWon = amountPlaced * firstRandomNumber * secondRandomNumber;

		console.log(amountPlaced);
	}

	// Calling handleAmountWon
	handleAmountWon();

	if (firstRandomNumber === secondRandomNumber) {
		gameOutput.classList.add("won");
		gameOutput.classList.remove("lost");
		gameOutput.textContent = `First die rolled: ${firstRandomNumber}. Second die rolled: ${secondRandomNumber}. Congratulations!! Waiphula!!`;
		amountWonOutput.textContent = `MWK${amountWon}.00`;
		stakeInput.value = "";
		console.log("Waiphula");
	} else {
		gameOutput.classList.add("lost");
		gameOutput.classList.remove("won");
		gameOutput.textContent = `First die rolled: ${firstRandomNumber}. Second die rolled: ${secondRandomNumber}. Sorry, wapha!!`;
		amountWonOutput.textContent = 0;
		stakeInput.value = "";
		console.log("Wapha");
	}
}

// handleRolledDice();
rollBtn.addEventListener("click", handleRolledDice);

function setButtonState() {
	if (stakeInput.value !== "") {
		rollBtn.classList.remove("disabled");
	}
}

// Handle Button State
rollBtn.addEventListener("mouseover", setButtonState);
