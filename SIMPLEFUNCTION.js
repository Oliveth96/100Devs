//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwoNumbers (a1, a2) {
    alert (a1 - a2)
    //let difference = a1 - a2
    // alert(difference)
}
subTwoNumbers(50, 20)

//create a function that divides three numbers and console logs the quotient

function divideThreeNumbers (x1, x2, x3) {
    console.log ( x1 / x2 / x3)
}

divideThreeNumbers (100, 20, 2)

//create a function that multiplies three numbers and returns the product

function multiThreeNumbers (n1, n2, n3) {
    return n1 * n2 * n3
}

let returnedNumber = multiThreeNumbers(3, 5, 10)
console.log(returnedNumber)

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function takesThreeNumbers (zebra, icon, music){
    return  (zebra + icon) % music
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. 
// If the product is greater than 100 add the sum of the last two numbers and console log the value. 
// If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function takesFourNumbers (b1, b2, b3, b4) {
    const product = (b1 * b2)
    if (product > 100){
        let value = (b3 + b4)
        console.log(value)
    } else if (product < 100){
        let value = (b3 - b4)
        console.log(value)
    } else if (product == 100) {
        let value = (b1 * b2 * b3)
        alert (value % b4)
    }
}
takesFourNumbers (100, 15, 36, 8) 