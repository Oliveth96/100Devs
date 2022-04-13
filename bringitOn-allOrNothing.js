// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let mineForever = true
alert(mineForever)

// Declare a variable, reassign it to your favorite color, and console log the value
let color = "red"
color = "purple"
console.log(color)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. 
// Return the result. Call the function.

function takeAndReturn(a1, a2, a3, a4){
    return (a1 + a2 + a3) / a4
}

takeAndReturn (10, 10, 10, 10)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function takeInTwo (c1, c2) {
    console.log (Math.pow(c1, c2));

}
takeAndReturn(2, 5)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function takeANumber (b, str) {
    if (b){
        alert(str)
    } else {
        console. log(str)
    }
}
// b ? alert(str) : console.log(str) 
// const alertOrLog = (b,str) => b ? alert(str) : console.log(str) 

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, 
// but if the number is divisible by 3 log "fizz" instead of that number,
// if the number is divisible by 5 log "buzz" instead of the number, and 
// if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function takeANumber (numb) {
    for (let i = 1; i < numb; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log('FIZZBUZZ')
        } else if (i % 5 === 0){
            console.log('BUZZ')
        } else if (i % 3 === 0){
            console.log ('FIZZ')
        } else {
            console.log(i)
        }
    } 
    
}
// takeANumber(10)