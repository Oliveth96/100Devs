//create a function that adds two numbers and alerts the sum
function addTwoNumbers (num1, num2) {
    alert(num1 + num2)
}

addTwoNumbers("5", "10") //output: Alerts 15

//Method 2:
function addTwoNumbers (num1, num2) {
    const sum = num1 + num2
    alert(num1 + num2)
}
//create a function that multiplies three numbers and console logs the product

function multipliesThreeNumbers (x1, x2, x3) {
    const product = x1 * x2 * x3
    console.log(product)
}

multipliesThreeNumbers ("5", "10", "15") // output: Alerts 750

//create a function that divides two numbers and returns the ???

function dividesTwoNumbers (s1, s2) {
    return s1 / s2 // this spits out the value to where the function is called
}

console.log(dividesTwoNumbers ("10", "2")) //output: Alerts 5