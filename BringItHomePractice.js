// *Variables*

/** Declaration; let Age
Assignment; 10
syntax: let Age = 10 
*/

// Create a variable and console log the value
let Age = 10 
console.log(10)

// Create a variable, add 10 to it, and alert the value
Age = Age + 10
alert (20)

// *Functions*
/**
 * Declaration
 * function Yell (parameter) {
 *      value(Word)
 * }
 * call
 * Yell("Argument")
 */

// Create a function that subtracts 4 numbers and alerts the difference

function subtractFourNumbers (y1, y2, y3, y4) {
    console.difference = (y1 - y2 - y3 - y4)
    alert (y1 - y2 - y3 - y4)
}

subtractFourNumbers ("100", "20", "10", "15")

// Create a function that divides one number by another and returns the remainder

function dividesTwoNumbers (x1 , x2) {
   return x1 % x2
}

console.log (dividesTwoNumbers ("100", "6"))

// *Conditionals*
/** || &&
 * if (Age > 18) {
 *      console. log ("You are an adult")
 * }
 */


// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addsTwoNumbers (z1, z2) {
    let product = (z1 + z2)
    alert (z1 + z2)
}

addsTwoNumbers ("95", "10")
if (product > 50) {
    console.log ("Jumanji")

} else{
    console.log ("WE HAVE A WINNER")
}

// Create a function that multiplies three numbers and if the product is divisible by 3 alert ZEBRA
function multipliesThreeNumbers (b1, b2, b3) {
    let product = (b1 * b2 * b3)
    alert (b1 * b2 *b3)
}

multipliesThreeNumbers ("50", "2", "10")

var product = multipliesThreeNumbers((Math.random() * 1000) + 1);
if (product) {
  var output =  "";
  if (product % 3 == 0)
    output += "ZEBRA";
  
  prompt(output || product);
}