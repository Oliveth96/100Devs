//--- Easy
//create a variable and assign it a number

let numb = 100

//minus 10 from that number

numb = numb - 10 //output: 90

//print that number to the console

numb = numb - 10
console.log (numb) //output: 80

//--- Medium
//create a variable that holds a value from the input

let inputValue = document.querySelector ('#danceDanceRevolution') .value

//add 25 to that number

inputValue = inputValue + 25
// inputValue += 25

//alert that number   
alert (inputValue)


//--- Hard
//create a variable that holds the h1

const h1Holder = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
h1Holder .addEventListener ('click', sum)

function sum(){
console.log (numb + Number(inputValue) ) // We use 'Number' to pull the value out of the string and prevent a case of concatenation or "25"
} // Here, we parsed inputValue in Number to ensure we are dealing we numbers not strings.
