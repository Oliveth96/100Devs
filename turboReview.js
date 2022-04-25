// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = ' Chamdor wine '
favDrink = favDrink.trim() //This is a method to remove the whitespace 
console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let fruit = "mango banana pawpaw apple"
if ( fruit.search('apple') !== -1){
    console.log ('yes')
} else{
    console.log('no')
}//if the search word is in the variable, we get a number, if not, we get a negative.

// if (fruit.search('phone') != -1){
    // console.log('yes')
//} else{
    // console.log('No')
//}


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function returnRockPaperScissors(){
    let result = Math.random() //This will return a value between 0 & 1
    if (result < 0.33){
        return 'rock'
    } if (result < 0.66){
        return 'paper'
    } else{
        return 'scissors'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice){
    let botChoice = returnRockPaperScissors()
    if( (playerChoice === "rock" && botChoice === "scissors") || (playerChoice === "paper" && botChoice ==="rock") ||(playerChoice === "scissors" && botChoice === "paper")){
        console.log('YOU WIN')
    } else if (playerChoice === botChoice){
        console.log ('YOU TIED')
    } else{
        console.log('YOU LOSE')
    }
}

checkWin('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameXTimes(arr){
    arr.forEach ( choice  => checkWin(choice) )

}

playGameXTimes ( ['rock', 'paper', 'scissors'] )