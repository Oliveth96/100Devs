// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = 'Easter'
favHoliday = favHoliday.toUpperCase()
console.log(favHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let cream = 'Jergens'
alert(cream.charAt(4) + cream.charAt(5) + cream.charAt(6))
//alert(cream.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function subNumbers(n1, n2, n3, n4, n5){
    let difference = 100 - n1 - n2 - n3- n4- n5 
    alert(math.abs(difference)) // Absolute value prevents us from getting negative floats
}

subNumbers(650, 56, 88, 160, 313)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function lowAndHighVal(x1, x2, x3){
    let min = Math.min(x1, x2, x3)
    let max = Math.max(x1, x2, x3)
    console.log (`The Lowest number is ${min} and the highest number is ${max}`)
}

lowAndHighVal(100, 50, 25 )

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headsAndTails(){
    let result = Math.random() //This will return a value between 0 & 1
    if (result < 0.5){
        return 'heads'
    } else{
        return 'tails'
    }
}

headsAndTails

//*Loops*
//Create a function that takes in a number. 
// Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
