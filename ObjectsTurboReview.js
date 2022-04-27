// *Variables*
// Declare a variable and assign it to a sentence as a string. 
// Alert if the sentence is a question

const variableStr = "Is this the best week ever?"
alert (variableStr.endsWith('?') )


//Declare a variable, assign it a string of multiple words, 
// replace every "jr. dev" with "software engineer", and print it to the console


let stringWords = 'I am looking for jr.dev positions'
console.log( stringWords.replaceAll('jr.dev', 'software engineering'))


let birthDay = "I was born on the 21st of April 1996"
console.log ( birthDay.replaceAll('21st of April', '25th of December') )
console.log ( birthDay.replaceAll('I was born', 'I got married'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function randomRockGame(){
    let result = math.random () 
    if (result < 0.3){
        alert ("ROCK")
    } else if (result < 0.6) {
        alert("PAPER")
    } else {
        alert("SCISSORS")
    }
    
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function winnersOnly(playerChoice){
    let botChoice = randomRockGame()
    if( (playerChoice === "rock" && botChoice === "scissors") || 
        (playerChoice === "paper" && botChoice ==="rock") ||
        (playerChoice === "scissors" && botChoice === "paper")){
        console.log('YOU WIN')
    } else if (playerChoice === botChoice){
        console.log ('YOU TIED')
    } else{
        console.log('YOU LOSE') 
    }
}

winnersOnly('paper')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function letPlayGames(arr){
    arr.forEach ( choice  => winnersOnly(choice) )

}
