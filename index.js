let displayEl = document.getElementById("display-el")
let resultEl =  document.getElementById("result-el")
let playerScoreEl = document.getElementById("player-score-el")
let playerScore = 0
let computerScoreEl = document.getElementById("computer-score-el")
let computerScore = 0

let playerCreditsEl = document.getElementById("player-credits-el")
let playerCredits = 0


let hands = ["🪨", "📄", "✂"]
let firstHand = Math.floor( Math.random() * 3 ) 
let secondHand = Math.floor( Math.random() * 3 ) 


// Rules
function rules() {
    if (   firstHand === 0 && secondHand === 2          // rock vs scissors
        || firstHand === 1 && secondHand === 0          // paper vs rock
        || firstHand === 2 && secondHand === 1) {       // scissors vs paper
         
        resultEl.textContent = "Win"
        playerScore += 1
        
    } else if (firstHand === secondHand) {
        resultEl.textContent = "Tie"

    } else {
        resultEl.textContent = "Loss"
        computerScore += 1
    }

}

// Render: score and emoji stage
function render() {
    displayEl.textContent = hands[firstHand] + " vs " + hands[secondHand]
    playerScoreEl.textContent = "Player Score: " + playerScore
    computerScoreEl.textContent = "Computer Score: " + computerScore
    playerCreditsEl.textContent = "Player Credits: " + playerCredits + " 🪙"

    // Game end
    if (playerScore === 3) {
        displayEl.textContent = "The Player has Won!"
        playerCredits += 50
        
        playerScore = 0
        computerScore = 0

    } else if (computerScore === 3) {
        displayEl.textContent = "The Computer has Won!"
        playerCredits -= 50
        playerScore = 0
        computerScore = 0

    }
}



// Rock
function rock() {
    firstHand = 0
    secondHand = Math.floor( Math.random() * 3 ) 

    rules()
    render()
}

// Paper
function paper() {
    firstHand = 1
    secondHand = Math.floor( Math.random() * 3 ) 

    rules()
    render()
}

// Scissors
function scissors() {
    firstHand = 2
    secondHand = Math.floor( Math.random() * 3 ) 

    rules()
    render()
}

