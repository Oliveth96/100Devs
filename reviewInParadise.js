// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let dogAge = "fried rice and chicken"
dogAge = 'Beans'
alert(dogAge) // Output: Beans

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let varString = "power"
alert( varString.charAt(1) ) //output e
// alert ( str[1] )
 
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function takesInThreeNumbers(x1, x2, x3){
    alert (x1 / x2) * x3 // let product = (x1 / x2) * x3
                         // alert(product)
}

takesInThreeNumbers (300, 45, 2)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function oneNumber (A){
    console.log(Math.cbrt(A).toFixed(4) )// toFixed: to the fourth decimal place
}

oneNumber(65)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function takeInAMonth (x){
    let x = month.toLowerCase()
    if (month.toLowerCase === 'june' || month.toLowerCase === 'july' || month.toLowerCase === 'august') {
        "YAY"
    } else {
        "BOO"
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
 
 function takeInANumber (love){
     for (let i = 1; i <= love; i++)
     if (i % 5 !== 0){
         console.log[i]
     }
}