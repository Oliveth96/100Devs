//---Easy
//create a function that subtracts two numbers and alerts the difference

function substractTwoNumbers(num1, num2) {
    alert (num1 - num2)
}
substractTwoNumbers("200", "50")


//create a function that divides three numbers and console logs the quotient

function divideThreeNumbers(x1, x2, x3) {
    console.log (x1 / x2 /x3)
    alert (x1 / x2 / x3)
}

divideThreeNumbers ("1000", "5", "30")

//create a function that multiplies three numbers and returns the product

function multiplyThreeNumbers (neo1, neo2, neo3) {
    return neo1 * neo2 * neo3 // return doesn't print to the console, neither does it alert
}

let product = multiplyThreeNumbers("5", "10", "20")

alert(product)
// console.log(())

//create a function that multiplies two numbers and alerts the product in $currency.

function multiplyTwoNumbers (aka1, aka2) {
    return aka1 * aka2 //return helps us parse other values around
}
function turnIntoMoney() {
    let product = multiplyTwoNumbers("500", "10")
    alert ('$' + product)
}
turnIntoMoney()

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function addTwoAndDivide(n1, n2, n3) {
    return (n1 + n2) % n3
}
  
console.log (addTwoAndDivide("20", "5", "3")) //output: 1


//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. 
// If the product is greater than 100 add the sum of the last two numbers and console log the value. 
// If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
// If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function takeFourMultiply (zee1, zee2, me3, me4) {
    let product = (zee1 * zee2)
    
    if (product > 100) {
        console.log (me3 + me4)
    
    } else if (product < 100) {
        console.log (me3 - me4)
    } else if (product == 100) {
        return (zee1 * zee2 * me3) % me4
    }
}


takeFourMultiply ("2", "5", "10", "8")
alert(product)