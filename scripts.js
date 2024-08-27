let computerChoice;
let playerChoice;

const scores = JSON.parse(localStorage.getItem("storedScore"))

const choiceComparisons = {
    rock: {loses: 'paper', wins: 'scissors', draw: 'rock'},
    paper: {loses: 'scissors', wins: 'rock', draw: 'paper'},
    scissors: {loses: 'rock', wins: 'paper', draw: 'scissors'}
}

let outsidePlayerPts = 0;
let outsideComputerPts = 0;
let outsideDrawPts = 0;

const playerDiv = document.getElementById('playerdiv');
const computerDiv = document.getElementById('computerdiv');
const playerScore = document.getElementById('playerscore');
const computerScore = document.getElementById('computerscore');
const drawScore = document.getElementById('drawscore');

playerScore.innerHTML = `<p>Player Score: ${scores.playerPoints}</p>`
computerScore.innerHTML = `<p>Computer Score: ${scores.computerPoints}</p>`
drawScore.innerHTML = `<p>Draw: ${scores.drawPoints}</p>`

function selectRock() {
    resetChoices()
    playerChoice = 'rock';
    playerDiv.innerHTML = '<p>Player Choice: Rock</p> <img src="assets/rock.png">'
    selectComputerChoice();
    gameLogic();
}

function selectPaper() {
    resetChoices()
    playerChoice = 'paper';
    playerDiv.innerHTML = '<p>Player Choice: Paper</p> <img src="assets/paper.png">'
    selectComputerChoice();
    gameLogic();
}

function selectScissors() {
    resetChoices()
    playerChoice = 'scissors';
    playerDiv.innerHTML = '<p>Player Choice: Scissors</p> <img src="assets/scissors.png">'
    selectComputerChoice();
    gameLogic();
}

function selectComputerChoice() {
    let randomPick = Math.floor(Math.random() * 3) + 1;
    if (randomPick == 1){
        computerChoice = 'rock';
        computerDiv.innerHTML = '<p>Computer Choice: Rock</p> <img src="assets/rock.png">'
    } else if (randomPick == 2){
        computerChoice = 'paper';
        computerDiv.innerHTML = '<p>Computer Choice: Paper</p> <img src="assets/paper.png">'
    } else if (randomPick == 3){
        computerChoice = 'scissors';
        computerDiv.innerHTML = '<p>Computer Choice: Scissors</p> <img src="assets/scissors.png">'
    }
}

function gameLogic() {
    if (choiceComparisons[playerChoice].wins === computerChoice){
        scores.playerPoints += 1;
        playerScore.innerHTML = `<p>Player Score: ${scores.playerPoints}</p>`
        // alert('Player wins!');
    }
    
    if (choiceComparisons[playerChoice].loses === computerChoice){
        scores.computerPoints += 1;
        computerScore.innerHTML = `<p>Computer Score: ${scores.computerPoints}</p>`
        // alert('Computer wins!')
    }

    if (choiceComparisons[playerChoice].draw === computerChoice) {
        scores.drawPoints += 1;
        drawScore.innerHTML = `<p>Draw: ${scores.drawPoints}</p>`
        // alert("It's a draw!")
    }

    localStorage.setItem('storedScore', JSON.stringify(scores));
    console.log(scores);
}

function resetChoices() {
    computerChoice == null;
    playerChoice == null;
}

function resetGame() {
    computerChoice == null;
    playerChoice == null;
    scores.computerPoints = 0;
    scores.playerPoints = 0;
    scores.drawPoints = 0;
    playerDiv.innerHTML = '<p>Player Choice: Paper</p> <img src="assets/questionmark.png">'
    computerDiv.innerHTML = '<p>Computer Choice: Paper</p> <img src="assets/questionmark.png">'
    playerScore.innerHTML = `<p>Player Score: 0</p>`
    computerScore.innerHTML = `<p>Computer Score: 0</p>`
    drawScore.innerHTML = `<p>Draw: 0</p>`
}