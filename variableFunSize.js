//--- Easy
//create a variable and assign it a number
let alx = 58

//minus 10 from that number
alx = alx - 10

//print that number to the console
console.log (alx)

//--- Medium
//create a variable that holds a value from the input

let holdVariable = Number(document.querySelector ('#danceDanceRevolution').value)

//add 25 to that number
holdVariable += 25
//holdVariable = holdVariable + 25


//alert that number 
alert (holdVariable)

//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

h1. addEventListener('click', addTwoNumbers)

function addTwoNumbers () {
    console.log(alx + holdVariable)
}