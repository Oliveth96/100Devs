// *Variables*
// Create a variable and console log the value

let Age = 65
console.log (Age)

// Create a variable, add 10 to it, and alert the value

let dogAge = 25
dogAge = dogAge + 10
alert(dogAge)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function SubNumAlert(n1, n2, n3, n4){
    alert(n1 - n2 - n3 - n4)
}

SubNumAlert(1000, 200, 10, 64)

// Create a function that divides one number by another and returns the remainder

function divideNumberModulus(x1, x2){
    return x1 % x2
}

console.log(divideNumberModulus(10, 3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoAlert (zee1, zee2) {
    if (zee1 + zee2 > 50) {
        alert('JUMANJI')
    }
}

addTwoAlert(60, 10)

// Create a function that multiplies three numbers and if the product is divisible by 3 alert ZEBRA

function mulThree (k1, k2, k3){
    let product = (k1 * k2 * k3)
    if (product % 3 === 0) {
        alert ('ZEBRA')
    }
}


mulThree (5,9,4)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function logWordXTimes (word, num) {
    for(i = 1; i <= num; i++) {
        console.log(word)
    }
}

logWordXTimes('wonderful', 21)